import {pull, clone, sample} from "lodash";
import {tribesById} from "../App";
import {spreadSquareFromPoint, searchSquareFromPoint, getDistance} from "./grid-helpers";
import {removeFromArray, pullFromArray} from "./utilities";
import {
  isEnemy,
  removeEntity,
  evaluateEntity,
  findNearestTribeEnemyEntity
} from "./tribe-helpers";
import {
  entityTypes,
  createNewTribeEntity,
  evaluateSurroundings,
  resetEntityTurn,
  findClosestMatch
} from "./entity-helpers.js";

import {
    moveToward,
    moveTowardToAttack,
    moveEntityToSquare
} from "./movement-helpers.js";

import {
  isUnclaimedCity,
  isOpenCity,
  getCityOwner,
  enterCity,
  leaveCity,
  takeCity,
  findNearestUnclaimedCity,
  findNearestOpenUnclaimedCity,
  findNearestOpenEnemyCity,
  findNearestEnemyCity,
  canAddUnitToCity
} from "./city-helpers";

import {getHealAmount} from "./combat-helpers";


export function runTribeActions(grid, update) {
    for (const key in tribesById) {
        if(key !== "player") {
        runActionsForTribe(tribesById[key], grid, update);
        }
    }
}

function runActionsForTribe(tribe, grid, update) {
    console.log("-----RUNNING ACTIONS FOR UNIT", tribe);
    tribe.ownUnits.map((unit) => {
        console.log("-----RUNNING ACTIONS FOR UNIT", unit);
        takeNpcEntityTurn(unit, tribe, grid, update);
        update();
    });

    addUnitsToCities(tribe, update);
}

function addUnitsToCities(tribe, update) {
    tribe.ownCities.map((city) => {
        if(canAddUnitToCity(city)) {
            //createNewTribeEntity(sample(tribe.availableUnits), city);
            createNewTribeEntity(tribe.availableUnits[tribe.ownUnits.length], city);
        }
    })
}

function canContinueTurn(entity) {
  return entity.canMove || entity.canAttack || entity.canTakeCity;
}

export function endTurn(entity) {
  entity.canMove = false;
  entity.canAttack = false;
  entity.canTakeCity = false;
}

////////////////////////////// Prioritized actions
export function takeNewCity(entity, tribe) { //Set entity canTakeCity at the beginning of every turn if entity is in city not belonging to their tribe
  // console.log("takeCity", entity);
  if(!entity.canTakeCity) {
    return canContinueTurn(entity);
  }
  // console.log("--------- Taking Action -------");

  const city = entity.currentSquare.city;
  const cityOwner = getCityOwner(city, tribe);

  if(cityOwner === "Open_City" || cityOwner === "Enemy_City") {
    takeCity(entity, tribe, city);
    return false;
  }
  
  return canContinueTurn(entity);
}

export function enterOpenCity(entity, tribe, grid, update) {
  // console.log("enterOpenCity", entity);
  const nearestOpenCity = findNearestUnclaimedCity(entity);
  
  if(nearestOpenCity) {
    // console.log("--------- Taking Action -------");
    moveToward(entity, nearestOpenCity.currentSquare, grid, update)
    // moveEntityToSquare(entity, nearestOpenCity.currentSquare);
  }

  return canContinueTurn(entity);
}

export function enterEnemyCity(entity, tribe, grid, update) {
  // console.log("enterEnemyCity", entity);
  const nearestOpenEnemyCity = findNearestOpenEnemyCity(entity);
  
  if(nearestOpenEnemyCity) {
    // console.log("--------- Taking Action -------");
    moveToward(entity, nearestOpenEnemyCity.currentSquare, grid, update);
  }

  // console.log("canContinueTurn(entity)", canContinueTurn(entity));

  return canContinueTurn(entity);
}

export function attackByPriority(entity, tribe, grid) {
  // console.log("attackByPriority", entity);
  const target = entity.target;

  if(target && entity.canAttack) {
    console.log("ENTITY HAS TARGET", entity.id, target);
      // console.log("--------- Taking Action -------");
      let survived = moveTowardToAttack(entity, target, grid);
      // let survived = attackEntity(entity, target, tribe);

      if(!survived) {
        return false;
      }
    }

  return canContinueTurn(entity);
}

export function moveTowardTribesNearestUnclaimedCity(entity, tribe, grid, update) {
  let city = findClosestMatch(entity, tribe.knownCities, isUnclaimedCity);
  if(city) {
    moveToward(entity, city.currentSquare, grid, update);
  }

  return canContinueTurn(entity);
}

export function moveTowardTribesNearestEnemyCity(entity, tribe, grid, update) {
  let city = findClosestMatch(entity, tribe.knownCities, isEnemy);
  if(city) {
    moveToward(entity, city.currentSquare, grid, update);
  }

  return canContinueTurn(entity);
}

export function moveTowardTribesEnemiesByPriority(entity, tribe, grid, update) {
  console.log("entity, tribe", entity, tribe);
  console.log("tribe.knownEntitiesById", tribe.knownEntitiesById);
  let enemy = findClosestMatch(entity, tribe.knownEntitiesById, isEnemy);

  if(enemy) {
    moveTowardToAttack(entity, enemy, grid, update);
  }

  return canContinueTurn(entity);
}

export function heal(entity, tribe) {
  // console.log("heal", entity);
  if(entity.health === entity.hp) {
    return canContinueTurn(entity);
  }

  // console.log("--------- Taking Action -------");

  let healAmount = getHealAmount(entity);
  entity.health += healAmount;

  return false;
}

export function explore(entity, tribe, grid, update) {
  // console.log("explore", entity);
  if(!entity.canMove) {
    return canContinueTurn(entity);
  }
  // console.log("--------- Taking Action -------");
  const target = findNearestUnexploredSquare(entity, tribe, grid);

  if(target) {
    moveToward(entity, target, grid, update)
  } else {
    randomMove(entity, grid, update);
  }

  entity.canMove = false;

  if(!entity.canAttackAfterMove) {
    entity.canAttack = false;
  }
  return canContinueTurn(entity);
}
