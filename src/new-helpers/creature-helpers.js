/*
Animal rules
  Hebivores -
  Deal with threat -- checkSurroundings -> dealWithThreat
  Move randomly through possible terrain -- checkSurroundings -> randomMove

  Predators -
  Deal with threat -- checkSurroundings -> dealWithThreat
  Select prey and persue prey if hungry -- checkSurroundings -> findPrey
  Move randomly through possible terrain -- checkSurroundings -> randomMove


  Tribe has- 
  Inner territory - build houses,  defend more strictly - most animals avoid
  Outer territory - limit of tribe member hunting or gathering - human predators don't spawn - shy animals avoid
*/


/*
    returns object - {
        highestThreat: {position, threatLevel},
        highestTarget: {position, targetLevel}
    }
*/

import {round, clamp, random} from "lodash";
import {spreadSquareFromPoint, getDistance} from "./grid-helpers";
import {moveEntityAwayFromTarget, moveEntityTowardTarget, idleMove} from "./movement-helpers";
import {getDiffFromIdeal, generateWeightedArray} from "./utilities";
import {
    attackEntity,
    IDLE,
    ESCAPING_PREDATOR,
    ESCAPING_PLAYER,
    CHASING_PREY,
    CHASING_PLAYER,
    FIGHTING
} from "./entity-helpers.js";

const MAX_SIGHT_RANGE = 6;
const HUNGER_PER_TURN = 5;
let highestTarget = {level: 0};
let highestThreat = {level: 0};


export function generateCreatureArray(creatureArray, weight) {
    for (let index = 0; index < creatureArray.length; index++) {
        const creature = creatureArray[index];

        if(creature.type.isGroup) {
            creature.occurance = round(creature.occurance / ((creature.groupMaxSize || 5) * .75));
        }
    }

    return generateWeightedArray(creatureArray, weight);
}


export function getPreyPreferenceLevel({prey, predator, data}) {
    let predToPreyAttack = prey.attack / predator.attack;
    let attackIdeal = round((predToPreyAttack > 1 ? 0 : (1 - predToPreyAttack) * 100) * 2, 2);

    let hpIdeal = round(getDiffFromIdeal(prey.hp, predator.idealPreySize, predator.preySizeRange) * .5);

    let level = round(hpIdeal > 0 && (hpIdeal + attackIdeal) / 2 || 0);

    if(data) {
        return {level, hpIdeal, attackIdeal};
    }

    return level;
}


// How likely is predation on 0-99 scale given prey/predator
function getPredationIndex({prey, predator}) {
    if(!predator.isPredator) {
        return 0;
    }

    if(predator.isOpenOceanOnly && !prey.currentSquare.isOpenOcean) {
        return 0;
    }

    let preyPreferenceLevel = getPreyPreferenceLevel({prey, predator});

    if(!preyPreferenceLevel) {
        return 0;
    }

    let proximityWeight = 1;
    let preferenceWeight = 1;
    let predatorProximity = ((MAX_SIGHT_RANGE - getDistance(prey.currentSquare, predator)) * 20) * proximityWeight; // 10 - 100 proximity score

    return (preyPreferenceLevel + predatorProximity) / 2;
}

export function evaluateSquare(square, level, {entity}) {
    if(level === 0 || !square.currentEntity) {
        return;
    }

    if(!entity.isApexPredator) {
        let squareThreatLevel = getPredationIndex({prey: entity, predator: square.currentEntity});
        if(squareThreatLevel > highestThreat.level) {
            highestThreat = {
                entity: square.currentEntity,
                level: squareThreatLevel
            }
        }
    }

    if(entity.isPredator) {
        let squareTargetLevel = getPredationIndex({predator: entity, prey: square.currentEntity});
        if(squareTargetLevel > highestTarget.level) {
            highestTarget = {
                entity: square.currentEntity,
                level: squareTargetLevel
            }
        }
    }
}


export function evaluateSurroundings(entity, grid) {
    highestTarget = {level: 0};
    highestThreat = {level: 0};
    spreadSquareFromPoint(entity.currentSquare, grid, entity.sightRange, evaluateSquare, {entity});

    return {highestTarget, highestThreat};
}

export function takeEntityTurn(entity, grid) {
    entity.hunger = clamp(entity.hunger + HUNGER_PER_TURN, 0, 100);
    evaluateSurroundings(entity, grid);
    let isTurnOver = false;

    if(highestThreat.level) {
        isTurnOver = reactToThreat({entity, grid, highestThreat});
    } 

    if(!isTurnOver && highestTarget.level) {
        isTurnOver = reactToTarget({entity, grid, highestTarget});
    }

    if(!isTurnOver) {
        entity.mode = IDLE;
        entity.status = "Idle";
        idleAction({entity, grid});
    }
}

function reactToThreat({entity, grid, highestThreat}) {
    if(highestThreat.level + entity.threatReaction < 100) {
        return false;
    }

    entity.mode = ESCAPING_PREDATOR;
    entity.status = `Escaping from ${highestThreat.entity.name}`;
    return moveToEscape(entity, highestThreat.entity, highestThreat.level);
}

function reactToTarget({entity, grid, highestTarget}) {
    if(highestTarget.level + entity.hunger < 100) {
        return false; // Do nothing and move to next action
    }

    entity.mode = CHASING_PREY;
    entity.status = `Chasing ${highestTarget.entity.name}`;
    return moveToAttack(entity, highestTarget.entity, highestTarget.level);
}

function moveToEscape(entity, other, motivationLevel) {
    return moveEntityAwayFromTarget(entity, other.currentSquare, motivationLevel);
}

function moveToAttack(entity, other, motivationLevel) {
    moveEntityTowardTarget(entity, other.currentSquare, motivationLevel);

    let attackRange = entity.isMega ? 2 : 1;

    if(getDistance(entity.currentSquare, other.currentSquare) <= attackRange) {
        attackEntity(entity, other);
    }

    return true;
}

function idleAction({entity, grid}) {
    idleMove(entity);
}