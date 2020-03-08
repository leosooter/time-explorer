/*
    Animal action logic
    I If under attack
        - flee : low aggression and path available OR low health and path available
        - fight : high aggression or no path available
    
    II Check Surroundings
        - If predators detected
            - flee : low aggression and path available
            - freeze : - flee : low aggression and no path available
            - fight : high aggression
        
        - If prey detected
            - move towards : if hungry and prey is distant
            - fight : if hungry and prey is adjacent
    
    III Otherwise if random = movement
        - Turn or
        - Move or
        - Turn and Move
*/

import {random, sample, clone, remove} from "lodash";
import {world} from "./world-creator";

let creatureId = 1;
const facingDirs = ["n","s","e","w","ne","nw","se","sw"];

const dirFind = {
    "ne": ["n", "e"],
    "se": ["s", "e"],
    "nw": ["n", "w"],
    "sw": ["s", "w"],
}

function getDirFromFacing(facing) {
    if(facing.length === 1) {
        return facing;
    }

    return sample(dirFind[facing]);
}

function turnCreatureToSquare(creature, square) {
    const creatureSquare = creature.currentSquare;
    
    for (let index = 0; index < facingDirs.length; index++) {
        if(creatureSquare[facingDirs[index]] && creatureSquare[facingDirs[index]].id === square.id) {
            turnCreature(creature, facingDirs[index])
        }
    }
}

function turnCreature(creature, facing) {
    if(facing) {
        creature.facing = facing
    } else {
        creature.facing = sample(facingDirs);
    }
    
    creature.dir = getDirFromFacing(creature.facing);
}

function moveCreature(creature) {
    const moveSquare = creature.currentSquare[creature.facing];
    const moveTerrain = moveSquare && moveSquare.terrainType;
    if(moveSquare && !moveSquare.structure && !moveSquare.currentEntity && creature.possTerrain.indexOf(moveTerrain.key) !== -1) {
        moveCreatureToSquare(creature, moveSquare);
    } else {
        turnCreature(creature);
    }
}

function moveCreatureToSquare(creature, moveSquare, speed) {
    const moveTerrain = moveSquare && moveSquare.terrainType;

    creature.currentSquare.currentEntity = null;
    creature.currentSquare = moveSquare;
    moveSquare.currentEntity = creature;
    creature.heightIndex = moveSquare.heightIndex;
    creature.widthIndex = moveSquare.widthIndex;
    creature.isSwim = moveTerrain.isSwim;
    if(speed) {
        creature.tempSpeed = speed;
    }
}

function getSurroundings(creature) {
    const {currentSquare} = creature;
    const surroundingCreatures = [];
    const surroundingPrey = [];
    const surroundingPredators = [];

    for (let index = 0; index < currentSquare.allSides.length; index++) {
        const side = currentSquare.allSides[index];
        const sideCreature = side.currentEntity;
        
        if(sideCreature) {
            surroundingCreatures.push(sideCreature);
            if(sideCreature.isPredator && sideCreature.prey.indexOf(creature.preyType) != -1) {
                surroundingPredators.push(sideCreature);
            }

            if(creature.isPredator && creature.prey.indexOf(sideCreature.preyType) !== -1) {
                surroundingPrey.push(sideCreature);
            }
        }
    }

    return {
        surroundingCreatures,
        surroundingPrey,
        surroundingPredators
    }
}

function attackCreature(creature, other) {
    console.log(`\n\n\n${creature.name} Attacking ${other.name}`);
    turnCreatureToSquare(creature, other.currentSquare)
    
    other.health -= creature.attack;
    if(other.health <= 0) {
        killCreature(creature, other)
    } else {
        creature.health -= other.defence;
        if(creature.health <= 0) {
            removeCreature(creature);
        }
    }
}

function killCreature(creature, other) {
    if(creature.possTerrain && creature.possTerrain.indexOf(other.currentSquare.terrainType.key) !== -1) {
        // console.log("moving to square");
        
        moveCreatureToSquare(creature, other.currentSquare, .25);
    }
    
    removeCreature(other);
}

export function removeCreature(removeCreature) {
    const removed = remove(world.creatures, (creature) => creature.id === removeCreature.id);
    return removed;
}

export function removePlant(removePlant) {
    const removed = remove(world.plants, (plant) => plant.id === removePlant.id);
    return removed;
}

function fightOrFlightCreature(creature, other) {
    // console.log("fightOrFlightCreature");
    
}

function fightOrFlight(creature, surroundingPredators) {
    // console.log("------- Fight or Flight", surroundingPredators);
    // console.log("Creature", creature);
    // console.log("Predators", surroundingPredators);
}

function attackOrIgnore(creature, surroundingPrey) {
    // console.log("--------- Attack or Ignore");
    // console.log("Creature", creature);
    // console.log("Prey", surroundingPrey);
    attackCreature(creature, sample(surroundingPrey));
    // if(creature.hunger < 50) {
        
    // }
}

function turnAndMoveCreature(creature) {
    turnCreature(creature);
    moveCreature(creature);
}

function creatureAction(creature) {
    creature.tempSpeed = null;

    if(creature.attacker) {
        fightOrFlightCreature(creature, creature.attacking);
    }

    if(creature.attacking) {
        attackCreature(creature, creature.attacking)
    }

    const {surroundingPredators, surroundingPrey} = getSurroundings(creature);

    if(surroundingPredators.length) {
        fightOrFlight(creature, surroundingPredators);
    }

    if(surroundingPrey.length) {
        attackOrIgnore(creature, surroundingPrey)
    }

    if(random(1,10) >= creature.activityLevel) {
        return;
    }

    let rand = random(1,5);

    if(rand === 1) {
        turnCreature(creature);
    } else {
        moveCreature(creature);
    }
}

export function getNewCreature(creatureType, square) {
    const creature = clone(creatureType);
    creature.id = `creature-${creatureId}`;
    creature.currentSquare = square;
    creature.heightIndex = square.heightIndex;
    creature.widthIndex = square.widthIndex;
    creature.facing = sample(facingDirs);
    creature.dir = getDirFromFacing(creature.facing);
    creature.isSwim = square.terrainType.isSwim;
    creatureId ++;
    creature.attacking = null;
    creature.attacker = null;
    creature.health = creature.hp;


    creature.action = () => creatureAction(creature);

    return creature;
}