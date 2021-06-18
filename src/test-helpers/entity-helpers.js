import {cloneDeep, filter} from "lodash";
import {tribesById} from "../App";
import {getTribe, evaluateEntityIsEnemy, evaluateCity} from "./tribe-helpers";
import {spreadSquareFromPoint, getDistance} from "./grid-helpers";
import {removeFromArray, pullFromArray, findClosest} from "./utilities";
import {getCityOwner, enterCity, leaveCity, findNearestOpenCity, findNearestOpenEnemyCity} from "./city-helpers";
import {
  updateVisibilityForEntity,
  isEntityInRange
} from "./entity-actions.js";

import {attackEntity} from "./combat-helpers";

export function loopGrid(grid, params) {
    const {innerCallback, outerCallback, innerParams, outerParams} = params;
    for (let heightIndex = 0; heightIndex < grid.length; heightIndex++) {
        typeof outerCallback === "function" && outerCallback(grid[heightIndex], outerParams);

        for (let widthIndex = 0; widthIndex < grid[heightIndex].length; widthIndex++) {
            const square = grid[heightIndex][widthIndex];
            innerCallback(square, innerParams);
        }
    }
}

const possDirs = ["n","s","e","w","ne","nw","se","sw"];

const dirMap = {
    "n" : ["n"],
    "s" : ["s"],
    "e" : ["e"],
    "w" : ["w"],
    "ne" : ["n", "ne", "e"],
    "nw" : ["n", "nw", "w"],
    "se" : ["s", "se", "e"],
    "sw" : ["s", "sw", "w"]
}

// export function spreadFromPoint(start, depth, params, dirs) {
//     depth --;
//     const {callback, innerParams} = params;

//     typeof callback === "function" && callback(start, innerParams);

//     if(depth > 0) {
//         if(!dirs) {
//             dirs = possDirs;
//         }
    
//         for (let index = 0; index < dirs.length; index++) {
//             if(start[dirs[index]]) {
//                 spreadFromPoint(start[dirs[index]], depth, params, dirMap[dirs[index]]);
//             }
//         }
//     }
// }

export function getEntityPosition(square) {
    return {
        top: `${(square.heightIndex * 90) + 40}px`,
        left: `${(square.widthIndex * 90) + 40}px`
    }
}

let npcEntityIdCount = 0;
let playerEntityIdCount = 0;

const defaultEntity = {
  kills: 0,
  sightRange: 10,
  canAttackAfterMove: true,
  canMoveAfterAttack: false,
  canAttackAfterKill: false,
  canRecieveDefenceBonus: true,
  canMove: false,
  canAttack: false,
  canHeal: false,
  canTakeCity: false,
  currentCity: null, // City the entity is currently in
  knownCities: [], // Grid of cities in range by range
  target: null,
  targetScore: 0
}

function setCanTakeCity(entity, tribe) {
  entity.canTakeCity = entity.currentCity && entity.currentCity.tribeId !== entity.tribeId || false;
}

export function resetEntityTurn(entity, tribe) {
  entity.knownCities = [];
  entity.canMove = true;
  entity.canAttack = true;
  entity.canHeal = true;
  entity.target = null;
  entity.targetScore = 0;
  setCanTakeCity(entity, tribe);
}

export const entityTypes = {
  "warrior": {
    ...defaultEntity,
    type: "warrior",
    imgUrl: "warrior1.png",
    health: 10,
    hp: 10,
    attack: 5,
    attackRange: 1,
    defence: 5,
    defenceRange: 1,
    movementRange: 1
  },
  "archer": {
    ...defaultEntity,
    type: "archer",
    imgUrl: "archer1.png",
    health: 10,
    hp: 10,
    attack: 5,
    attackRange: 2,
    defence: 3,
    defenceRange: 2,
    movementRange: 1
  },
  "rider": {
    ...defaultEntity,
    type: "rider",
    imgUrl: "rider2.jpg",
    health: 10,
    hp: 10,
    attack: 5,
    attackRange: 1,
    defence: 3,
    defenceRange: 1,
    movementRange: 2,
    canMoveAfterAttack: false
  },
  "swordsman": {
    ...defaultEntity,
    type: "swordsman",
    imgUrl: "swordsman1.png",
    health: 15,
    hp: 15,
    attack: 8,
    attackRange: 1,
    defence: 8,
    defenceRange: 1,
    movementRange: 1
  },
  "knight": {
    ...defaultEntity,
    type: "knight",
    imgUrl: "rider1.png",
    health: 15,
    hp: 15,
    attack: 10,
    attackRange: 1,
    defence: 2,
    defenceRange: 1,
    movementRange: 3,
    canAttackAfterKill: true
  },
  "defender": {
    ...defaultEntity,
    type: "defender",
    imgUrl: "warrior4.png",
    health: 15,
    hp: 15,
    attack: 2,
    attackRange: 1,
    defence: 8,
    defenceRange: 1,
    movementRange: 1,
    canAttackAfterMove: false
  }
}

export function createNewTribeEntity(type, city) {
    const square = city.currentSquare;
    const tribeId = city.tribeId;
    const newEntity = cloneDeep(entityTypes[type]);
    newEntity.id = `${tribeId}-${type}-${npcEntityIdCount}`;
    newEntity.startCity = city;
    newEntity.currentCity = city;
    city.population ++;
    newEntity.currentSquare = square;
    square.currentEntity = newEntity;
    newEntity.tribeId = tribeId;
    tribesById[tribeId].ownUnits.push(newEntity);
    npcEntityIdCount ++;
}

function evaluateEntityPriority(entity, other) {
    const tribe = getTribe(entity);
    let cityPriority = 0;

  if(!evaluateEntityIsEnemy(entity, other)) {
      return 0;
  }

  if(other.city) {
    const cityOwner = getCityOwner(other.city, tribe);
    cityPriority = tribe.enemyPriorities.city[cityOwner];
  }

  const enemyTypePriority = tribe.enemyPriorities.enemyType[other.type];

  return cityPriority > enemyTypePriority ? cityPriority : enemyTypePriority;
}

function evaluateSquareForPriority(square, level, entity) {
    if(square.city && square.city.tribeId !== entity.tribeId) {
        console.log("found city", square.city);
        evaluateCity(entity, square.city);
        entity.knownCities.push(square.city);
    }

    if(square.currentEntity && square.currentEntity.tribeId !== entity.tribeId) {
        const entityScore = evaluateEntityPriority(entity, square.currentEntity);
        console.log("found entity", square.currentEntity);

        if(entityScore > entity.targetScore) {
            entity.target = square.currentEntity;
            entity.targetScore = entityScore;
        }
    }
}

/*
    Checks entities surroundings at the beggining of each turn to check for enemies, cities and unknown tribes
    returns the priority target based on the entity's tribe's priorities
*/
export function evaluateSurroundings(entity, tribe, grid) {
    spreadSquareFromPoint(entity.currentSquare, grid, entity.movementRange + entity.attackRange, evaluateSquareForPriority, entity);
  return;
}

export function findClosestMatch(entity, collection, evaluator) { // Filters an array with an evaluator function and returns th match that is closest to the entity
    const matches = filter(collection, (element) => evaluator(entity, element));

    if(!matches.length) {
        return null;
    }

    return findClosest(entity, matches);
}

export function removeEntity(entity) {
  const entityTribe = getTribe(entity);

    removeFromArray(entityTribe.units, (arrayEntity) => arrayEntity.id === entity.id);

    for (const tribeId in tribesById) {
        const knownEntitiesById = tribesById[tribeId].knownEntitiesById;

        if(knownEntitiesById[entity.tribeId]) {
            delete knownEntitiesById[entity.tribeId];
        }
    }
}