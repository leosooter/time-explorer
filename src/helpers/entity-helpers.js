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

import {random, sample, find, remove} from "lodash";
import {world} from "./world-creator";
import { logDOM } from "@testing-library/react";
import { addToObject } from "./utility-helpers";

const facingDirs = ["n","s","e","w","ne","nw","se","sw"];

const dirFind = {
    "ne": ["n", "e"],
    "se": ["s", "e"],
    "nw": ["n", "w"],
    "sw": ["s", "w"],
}

export function collectResources(entity, other) {
    if(other.resources && other.resources.length) {
        console.log("Collecting resources from ", other.name);
        for (let index = 0; index < other.resources.length; index++) {
            const resource = other.resources[index];
            console.log(">>>>>>>>>>>>>>>>>>>>     resource", resource);
            
            let amount;
            if(Array.isArray(resource.quantity)) {
                amount = random(resource.quantity[0], resource.quantity[1]);
            } else {
                amount = resource.quantity;
            }
            console.log("adding", amount, ":", resource.type);
            

            addToObject(entity.resources, resource.type, amount);
        }
    }
}

export function harvestResource(entity, other) {
    console.log("Harvest resource", entity, other);
    
    other.health -= entity.attack;
    if(other.health <= 0) {
        if(entity.isPlayerUnit) {
            collectResources(entity, other);
        }
        other.currentSquare.plant = null;

        removeEntity(other);
    }
}

export function getDirFromFacing(facing) {
    if(facing.length === 1) {
        return facing;
    }

    return sample(dirFind[facing]);
}

export function turnEntityToSquare(entity, square) {
    const entitySquare = entity.currentSquare;
    
    for (let index = 0; index < facingDirs.length; index++) {
        if(entitySquare[facingDirs[index]] && entitySquare[facingDirs[index]].id === square.id) {
            turnEntity(entity, facingDirs[index])
        }
    }
}

function turnEntity(entity, facing) {
    if(facing) {
        entity.facing = facing
    } else {
        entity.facing = sample(facingDirs);
    }
    
    entity.dir = getDirFromFacing(entity.facing);
}

function moveEntity(entity) {
    const moveSquare = entity.currentSquare[entity.facing];
    const moveTerrain = moveSquare && moveSquare.terrainType;
    if(moveSquare && !moveSquare.structure && !moveSquare.currentEntity && entity.possTerrain.indexOf(moveTerrain.key) !== -1) {
        if(!entity.isTerritoryRestricted || (entity.isTerritoryRestricted && moveSquare.outerTerritory)) {
            moveEntityToSquare(entity, moveSquare);
        }
        
    } else {
        turnEntity(entity);
    }
}

export function moveEntityToSquare(entity, moveSquare, speed) {
    const moveTerrain = moveSquare && moveSquare.terrainType;

    entity.currentSquare.currentEntity = null;
    entity.currentSquare = moveSquare;
    moveSquare.currentEntity = entity;
    entity.heightIndex = moveSquare.heightIndex;
    entity.widthIndex = moveSquare.widthIndex;
    entity.isSwim = moveTerrain.isSwim;
    entity.isVisible = moveSquare.isVisible;
    if(speed) {
        entity.tempSpeed = speed;
    }
}

export function moveEntityTowardTargetSquare(entity, targetSqaure) {
    const targetHeightIndex = targetSqaure.heightIndex;
    const targetwidthIndex = targetSqaure.widthIndex;
}

function getSurroundings(entity) {
    const {currentSquare} = entity;
    const surroundingEntitys = [];
    const surroundingPrey = [];
    const surroundingPredators = [];

    for (let index = 0; index < currentSquare.allSides.length; index++) {
        const side = currentSquare.allSides[index];
        const sideEntity = side.currentEntity;
        
        if(sideEntity) {
            surroundingEntitys.push(sideEntity);
            if(sideEntity.isPredator && sideEntity.prey.indexOf(entity.preyType) != -1) {
                surroundingPredators.push(sideEntity);
            }

            if(entity.isPredator && entity.prey.indexOf(sideEntity.preyType) !== -1) {
                surroundingPrey.push(sideEntity);
            }
        }
    }

    return {
        surroundingEntitys,
        surroundingPrey,
        surroundingPredators
    }
}

export function healEntityFromFood(entity, resources) {
    const foodAmount = resources.food;
    let diffToFullHealth = entity.hp - entity.health;
    let healAmount = foodAmount < diffToFullHealth ? foodAmount : diffToFullHealth;

    entity.health += healAmount;
    resources.food -= healAmount;
}

export function healEntityFromPrey(entity, other) {
    let diffToFullHealth = entity.hp - entity.health;
    let healAmount = other.hp < diffToFullHealth ? other.hp : diffToFullHealth;

    entity.health += healAmount;
}

function addResources(entity, other) {
    if(!other.isUnit) {
        entity.resources.food += other.hp;
    }
}

export function attackEntity(entity, other) {
    // console.log(`\n\n\n${entity.name} Attacking ${other.name}`);
    // turnEntityToSquare(entity, other.currentSquare)
    
    other.health -= entity.attack;
    if(other.health <= 0) {
        killEntity(entity, other);
        if(entity.isPlayerUnit) {
            addResources(entity, other);
        } else if(entity.health < entity.hp) {
            healEntityFromPrey(entity, other);
        }
    } else {
        entity.health -= other.defence;
        if(entity.health <= 0) {
            removeEntity(entity);
        }
    }
}

export function getEntityById(type, id) {
    const typeArray = world[type] || [];
    return find(typeArray, (entity) => entity.id === id);
}

function killEntity(entity, other) {
    other.currentSquare.currentSquare = null;
    if(entity.possTerrain && entity.possTerrain.indexOf(other.currentSquare.terrainType.key) !== -1) {
        // console.log("moving to square");
        
        moveEntityToSquare(entity, other.currentSquare, .25);
    }

    
    removeEntity(other);
}

export function removeEntity(removeEntity) {
    // console.log("world[type].length before", world[type].length);
    
    // if(type === "units") {
    //     console.log("Removing unit", removeEntity.id, world[type]);
        
    // }
    // if(!world[type]) {
    //     console.log("Type is not valid - removeEntity()");
        
    // }
    const removed = remove(world[removeEntity.arrayType], (entity) => entity.id === removeEntity.id);
    // if(type === "units") {
    //     console.log("\n\n\n\n\n REMOVED", removed);
        
    // }

    // console.log("world[type].length after", world[type].length);
    return removed;
}

export function removePlant(removePlant) {
    const removed = remove(world.plants, (plant) => plant.id === removePlant.id);
    return removed;
}

function fightOrFlightEntity(entity, other) {
    // console.log("fightOrFlightEntity");
    
}

function fightOrFlight(entity, surroundingPredators) {
    // console.log("------- Fight or Flight", surroundingPredators);
    // console.log("Entity", entity);
    // console.log("Predators", surroundingPredators);
}

function attackOrIgnore(entity, surroundingPrey) {
    // console.log("--------- Attack or Ignore");
    // console.log("Entity", entity);
    // console.log("Prey", surroundingPrey);
    attackEntity(entity, sample(surroundingPrey));
    // if(entity.hunger < 50) {
        
    // }
}

function turnAndMoveEntity(entity) {
    turnEntity(entity);
    moveEntity(entity);
}

export function entityAction(entity) {
    entity.tempSpeed = null;

    if(entity.attacker) {
        fightOrFlightEntity(entity, entity.attacking);
    }

    if(entity.attacking) {
        attackEntity(entity, entity.attacking)
    }

    const {surroundingPredators, surroundingPrey} = getSurroundings(entity);

    if(surroundingPredators.length) {
        fightOrFlight(entity, surroundingPredators);
    }

    if(surroundingPrey.length) {
        attackOrIgnore(entity, surroundingPrey)
    }

    if(random(1,10) >= entity.activityLevel) {
        return;
    }

    let rand = random(1,5);

    if(rand === 1) {
        turnEntity(entity);
    } else {
        moveEntity(entity);
    }
}
