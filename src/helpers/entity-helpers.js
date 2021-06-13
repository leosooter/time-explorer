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
import {addToObject} from "./utility-helpers";
import tribeDirectory from "../components/units/tribeDirectory";

const facingDirs = ["n","s","e","w","ne","nw","se","sw"];

const dirFind = {
    "ne": ["n", "e"],
    "se": ["s", "e"],
    "nw": ["n", "w"],
    "sw": ["s", "w"],
}

const flightDirections = {
    "n": ["s","se","sw","e","w","ne","nw"],
    "ne": ["sw","s","se","e","w","nw","n"],
    "nw": ["se","s","sw","e","w","ne","n"],
    "sw": ["ne","n","nw","e","w","se","s"],
    "se": ["nw","n","ne","e","w","sw","s"],
    "s": ["n","ne","nw","e","w","se","sw"],
    "w": ["e","se","ne","s","n","sw","nw"],
    "e": ["w","sw","nw","s","n","se","ne"]
};

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

function canEntityMoveToSquare(entity, square) {
    console.log("canEntityMoveToSquare", entity, square);
    if(!square) {
        console.log("Returning immediate false");
        return false;
    }

    const moveTerrain = square && square.terrainType;

    if(square && !square.structure && !square.currentEntity && entity.possTerrain.indexOf(moveTerrain.key) !== -1) {
        console.log("First level true");
        if(!entity.isTerritoryRestricted || (entity.isTerritoryRestricted && square.outerTerritory)) {
            console.log("Second level true");
            if(entity.coveredSquares && entity.coveredSquares.length && square === entity.currentSquare) {
                console.log("Checking covered squares");
                for (let index = 0; index < entity.coveredSquares.length; index++) {
                    console.log("Recursive");
                    if(!canEntityMoveToSquare(entity, entity.coveredSquares[index])) {
                        console.log("recursive returned false");
                        return false;
                    }
                }
            }
            return true
        }
    }

    return false;
}

function moveEntity(entity) {
    const moveSquare = entity.currentSquare[entity.facing];
    const moveTerrain = moveSquare && moveSquare.terrainType;
    if(canEntityMoveToSquare(entity, moveSquare)) {
        moveEntityToSquare(entity, moveSquare);
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

export function moveEntityToGroup(entity, moveSquare, speed) {

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


function canMoveToSquare(entity, targetSquare) {
    return entity.possTerrain.indexOf(targetSquare.terrainType.key) !== -1;
}

function getDiffFromTarget(current, target) {
    return Math.abs(current.heightIndex - target.heightIndex) + Math.abs(current.widthIndex - target.widthIndex);
}

export function moveEntityTowardTarget(entity, target) {
    let bestSquare = entity.currentSquare;
    let bestSquareDiff = getDiffFromTarget(bestSquare, target);

    for (let index = 0; index < entity.currentSquare.allSides.length; index++) {
        const side = entity.currentSquare.allSides[index];
        if(canMoveToSquare(entity, side)) {
            let diff = getDiffFromTarget(side, target);
            if(diff < bestSquareDiff) {
                bestSquareDiff = diff;
                bestSquare = side;
            }
        } 
    }

    if(bestSquare !== entity.currentSquare) {
        moveEntityToSquare(entity, bestSquare);
    } else {
        console.log("NO BEST SQUARE FOUND");
    }
}

export function moveEntityAwayFromTarget(entity, target) {
    let bestSquare = entity.currentSquare;
    let bestSquareDiff = getDiffFromTarget(bestSquare, target);

    for (let index = 0; index < entity.currentSquare.allSides.length; index++) {
        const side = entity.currentSquare.allSides[index];
        if(canMoveToSquare(entity, side)) {
            let diff = getDiffFromTarget(side, target);
            if(diff > bestSquareDiff) {
                bestSquareDiff = diff;
                bestSquare = side;
            }
        } 
    }

    if(bestSquare !== entity.currentSquare) {
        moveEntityToSquare(entity, bestSquare);
    } else {
        console.log("NO BEST SQUARE FOUND");
    }
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
    entity.attacking = other;
    other.attacker = entity;
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

export function canDefeat(entity, other) {
    if(entity.attack > other.health) {
        return true;
    }

    const survivalTurns = entity.health / (other.attack + other.defence);
    const otherSurvivalTurns = other.health / (entity.attack + entity.defence);

    return survivalTurns > otherSurvivalTurns;
}

function findEntityDirection(entity, other) {
    for (let index = 0; index < facingDirs.length; index++) {
        const dir = facingDirs[index];
        if(entity.currentSquare[dir] && entity.currentSquare[dir].currentEntity === other) {
            return dir;
        }
    }
    console.log("ERROR Entity direction not found");
    
}

function moveAwayFromEntity(entity, other) {
    const attackerDirection = findEntityDirection(entity, other);
    console.log("attackerDirection", attackerDirection);
    
    const possFlightDirections = flightDirections[attackerDirection];
    if(!possFlightDirections) {
        attackEntity(entity, other);
        return;
    }
    console.log("possFlightDirections", possFlightDirections);
    
    for (let index = 0; index < possFlightDirections.length; index++) {
        if(entity.currentSquare[possFlightDirections[index]]) {
            moveEntityToSquare(entity, entity.currentSquare[possFlightDirections[index]]);
            return;
        }
    }
    console.log("cannot escape");
    
}

function fightOrFlightEntity(entity, other) {
    console.log("fightOrFlightEntity");
    if(canDefeat(entity, other)) {
        console.log(entity.name, "Can Defeat", other.name);
        console.log("Fight");
        
        persueEntity(entity, other);
    } else {
        console.log("Flight");
        
        moveAwayFromEntity(entity, other);
    }
}

function fightOrFlight(entity, surroundingPredators) {
    console.log("------- Fight or Flight", surroundingPredators);
    // console.log("Entity", entity);
    // console.log("Predators", surroundingPredators);
}

function attackOrIgnore(entity, surroundingPrey) {
    console.log("--------- Attack or Ignore");
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

function persueEntity(entity, other) {
    if(isInRange(entity, other)) {
        attackEntity(entity, other);
    } else {
        moveEntityTowardTarget(entity, other.currentSquare)
    };
}

export function isInRange(entity, other, range) {    
    let yDist = Math.abs(entity.heightIndex - other.heightIndex);
    let xDist = Math.abs(entity.widthIndex - other.widthIndex);

    let targetRange = range ? range : entity.range;
    
    return yDist <= targetRange && xDist <= targetRange;
}

export function entityAction(entity) {
    console.log("Action tree for ", entity.name, entity);
    
    entity.tempSpeed = null;

    if(entity.attacker) {
        fightOrFlightEntity(entity, entity.attacker);
    }

    if(entity.attacking) {
        persueEntity(entity, entity.attacking)
    }

    const {surroundingPredators, surroundingPrey} = getSurroundings(entity);

    if(surroundingPredators.length) {
        fightOrFlightEntity(entity, surroundingPredators[0]);
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

function huntAndGather(entity) {
    console.log("Hunt and Gather");
    
}

// function buildStructure(entity) {
//     console.log("build structure");
    
// }

export function unitAction(entity) {
    if(random(1,10) >= 7) {
        return;
    }

    let rand = random(1,5);

    if(rand === 1) {
        turnEntity(entity);
    } else {
        moveEntity(entity);
    }
    // if(entity.attacker) {
    //     if(!canDefeat(entity, entity.attacker)) {
    //         entity.needsHelp = true;
    //     } else {
    //         attackEntity(entity, entity.attacker);
    //     }
    // } else if(tribeDirectory.food < 30) {
    //     huntAndGather(entity);
    // } else {
    //     buildStructure(entity);
    // }

    // if(entity.tribe.wood > 40 && entity.tribe.structures.length < 10) {

    // }
}

/*
Unit action logic
    - If under attack
    - If Tribe Member under attack
    - If Ally under attack

    - If threat detected

    - If food low
    - If wood low
    - If Housing low








    Creature action logic

    Every turn, creature can do one of:
    Nothing
    Turn
    Attack
    Travel
    Travel + Attack

    helperFunctions
        checkOutwardsFromPoint
        findPathToPoint

    evaluateSurroundings-
        logThreats
        logTargets

    faceSquare
    movetToSquare

    moveAwayFromThreats
    moveTowardTarget
    isTargetInRange
    attackTarget





    Single

    Group

*/


