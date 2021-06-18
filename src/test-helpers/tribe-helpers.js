import {cloneDeep, findIndex} from "lodash";
import {tribesById} from "../App";
import {removeFromArray} from "./utilities";

import {removeEntity} from "./entity-helpers";

import {
    takeNewCity,
    enterOpenCity,
    enterEnemyCity,
    attackByPriority,
    heal,
    moveTowardTribesNearestUnclaimedCity,
    moveTowardTribesNearestEnemyCity,
    moveTowardTribesEnemiesByPriority,
    explore
} from "../helpers/npc-actions.js";

const tribeColors = ["blue", "red", "green", "orange", "purple", "cyan"];

let npcTribeCount = 1;

export const testTribe = {
  availableUnits: ["warrior", "archer", "rider", "knight", "swordsman", "defender"],
  knownTribesStandingById: {
    "player": {standing: -2}
  }
}

const genericTribe = {
    ownUnits: [],
    ownCities: [],
    availableUnits: ["warrior", "rider"],
    knownCities: [],
    knownEntitiesById: {},
    knownTribesStandingById: {},
    enemyThreshold: 0,
    allyThreshold: 1,
    actionPriorities: [
        takeNewCity,
        enterOpenCity,
        enterEnemyCity,
        attackByPriority,
        heal,
        moveTowardTribesNearestUnclaimedCity,
        moveTowardTribesNearestEnemyCity,
        moveTowardTribesEnemiesByPriority,
        explore
    ],
    enemyPriorities: {
        occupiedCity: {
            Own_City: 11,
            Open_City: 10,
            Enemy_City: 9,
            Ally_City: 8,
            Neutral_City: 0
        },
        enemyType: {
            knight: 6,
            archer: 5,
            rider: 4,
            swordsman: 3,
            warrior: 2,
            defender: 1,
        }
    }
}

/*
tribePriorities = {
  attackAdjacent
  attackByPriority
  enterOpenCity
  moveTowardOpenCity
  moveTowardTribesNearestEnemyCity
  moveTowardTribesEnemiesByPriority
  explore
}
*/


export function createNewTribe(isPlayer, enemy) {
    let baseTribe = genericTribe;

    const newTribe = cloneDeep(genericTribe);
    newTribe.tribeId = isPlayer ? "player" : `npc-${npcTribeCount}`;
    if(!isPlayer) {
        npcTribeCount ++;
    }
    newTribe.tribeColor = tribeColors[npcTribeCount - 1];
    tribesById[newTribe.tribeId] = newTribe;
    return newTribe;
}


// All helper functions are desinged to accept either entities or tribes as arguments
export function getTribe(entity) {
    return tribesById[entity.tribeId];
}

export function getStanding(entity, other) {
    const entityTribe = getTribe(entity);
    const otherTribe = getTribe(other);

    return entityTribe.knownTribesStandingById[otherTribe.tribeId];
}

export function isKnownTribe(entity, other) {
    return getStanding(entity, other) !== undefined;
}

export function isKnownEntity(entity, other) {
    const entityTribe = getTribe(entity);

    return !!entityTribe.knownEntitiesById[other.id];
}

export function isTribeEnemy(entity, other) {
    const entityTribe = getTribe(entity);
    console.log("entityTribe ", entityTribe);

    return getStanding(entity, other) <= entityTribe.enemyThreshold;
}

export function isTribeAlly(entity, other) {
    const entityTribe = getTribe(entity);

    return getStanding(entity, other) >= entityTribe.allyThreshold;
}

export function isTribeNeutral(entity, other) {
    const entityTribe = getTribe(entity);
    const standing = getStanding(entity, other)

    return standing > entityTribe.enemyThreshold && standing < entityTribe.allyThreshold;
}

export function isEnemy(entity, other) {
    console.log("IS Enemy", entity, other);
    const entityTribe = getTribe(entity);

    return getStanding(entity, other) <= entityTribe.enemyThreshold;
}

export function isEntityAlly(entity, other) {
    const entityTribe = getTribe(entity);

    return getStanding(entity, other) >= entityTribe.allyThreshold;
}

export function isEntityNeutral(entity, other) {
    const entityTribe = getTribe(entity);
    const standing = getStanding(entity, other)

    return standing > entityTribe.enemyThreshold && standing < entityTribe.allyThreshold;
}

export function addNewKnownTribe(entity, other) {
    const entityTribe = getTribe(entity);
    const otherTribe = getTribe(other);

    entityTribe.knownTribesStandingById[otherTribe.tribeId] = 0;
    // addNewKnownEntity(entity, other);

    if(!isKnownTribe(other, entity)) {
        otherTribe.knownTribesStandingById[entityTribe.tribeId] = 0;
    }
}

export function addNewKnownEntity(entity, other) {
    const entityTribe = getTribe(entity);
    entityTribe.knownEntitiesById[other.id] = other;

    if(!isKnownEntity(other, entity)) {
        const otherTribe = getTribe(other);
        otherTribe.knownEntitiesById[entity.id] = entity;
    }
}

export function evaluateEntityIsEnemy(entity, other) {
    const entityTribe = getTribe(entity);

    return evaluateEntity(entity, other) <= entityTribe.enemyThreshold;
}

export function evaluateEntity(entity, other) { // Master function to evaluate any entity encountered
    const entityTribe = getTribe(entity);
    if(!isKnownTribe(entity, other)) {
        addNewKnownTribe(entity, other);
    }
    
    if(!isKnownEntity(entity, other)) {
        addNewKnownEntity(entity, other);
    }

    return getStanding(entity, other);
}

export function evaluateCity(entity, city) {
    const entityTribe = getTribe(entity);

    if(!isKnownTribe(entity, city)) {
        console.log("adding tribe");
        addNewKnownTribe(entity, city);
    }

    if(findIndex(entityTribe.knownCities, ['id', city.id] === -1)) {
        entityTribe.knownCities.push(city);
    }
}


/*

Tracking other units and tribes ---
In order to simplify the logic, 
at the expense of performance, 
each tribe has a single knownUnits object, 
a single knownCities object and a single knownTribesStandingById object

Each unit, tribe or city is stores with the id as the key, and the standing as the value.



*/