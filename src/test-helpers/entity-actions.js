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
  findClosestMatch,
  moveToward,
  moveTowardToAttack,
  moveEntityToSquare
} from "./entity-helpers.js";

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
  findNearestEnemyCity
} from "./city-helpers";

  // function canAttack(entity) {
  //   return entity.attacks === 0;
  // }

  


  



///////////////////////////////////////////////////////////////////////

/*

actionPriorities: {
      takeCity: {priority: 8, action: takeCity},
      enterOpenCity: {priority: 7, action: enterOpenCity},
      enterEnemyCity: {priority: 6, action: enterEnemyCity},
      attackByPriority: {priority: 5, action: attackByPriority},
      moveTowardOpenCity: {priority: 4, action: moveTowardOpenCity},
      moveTowardEnemyCity: {priority: 3, action: moveTowardEnemyCity},
      moveTowardTribesEnemiesByPriority: {priority: 2, action: moveTowardTribesEnemiesByPriority},
      explore: {priority: 1, action: explore}
    }

  entityObj = {
    canAttackAfterMove: false,
    canMoveAfterAttack: false,
    canAttackAfterKill: false,
    canRecieveDefenceBonus: false,
    canMove: false,
    canAttack: false,
    canTakeCity: false,
    hasEnemies: false,
    adjacentEnemies: [],
    inRangeEnemies: [],
    currentCity: null, // City the entity is currently in
    cities: [], // Grid of cities in range by range
  }

  tribeObj = {
    enemies: [],
    allies: [],
    knownTribesStandingById: [],
    enemyUnits: [],
    actionPriorities: [
      takeCity,
      enterOpenCity,
      enterEnemyCity,
      attackByPriority,
      heal,
      moveTowardOpenCity,
      moveTowardEnemyCity,
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

  abilities-------

  dash - canAttackAfterMove
  escape - canMoveAfterAttack
  persist - canAttackAfterKill

  fortify - canRecieveDefenceBonus


  canMove
  canAttack
  canTakeCity
*/

// Each function tests whether action is possible, takes action if possible, and then returns a boolean - canContinueTurn
// function checkDash(entity) {
//   return entity.canAttackAfterMove && entity.turnActions.attacks === 0;
// }

// function checkEscape(entity) {
//   return entity.canMoveAfterAttack && entity.turnActions.attack === 1 && entity.turnActions.moveAfterAttack === 0;
// }

// function checkPersist(entity) {
//   return entity.canAttackAfterKill && entity.turnActions.justKilled;
// }

/*
hasEnemies: false,
adjacentEnemies: [],
inRangeEnemies: [],
currentCity: null, // City the entity is currently in
cities: [], // Grid of cities in range by range

*/

// function addNewKnownTribe(entityTribe, other) {
//   entityTribe.knownTribesStandingById[other.tribeId] = 0;
//   tribesById[other.tribeId].knownTribesStandingById[entitytribe.tribeId] = 0;
// };

// function isEnemyKnowToEntity(entity, other) {
//   return entity.adjacentEnemies.indexOf(other.tribeId) !== -1 || entity.inRangeEnemies.indexOf(other.tribeId) !== -1
// }

// function evaluateTribeEntity(entity, other, level, isExploring = false) {
//   console.log("EVALUATING ENTITY", entity);
//   const entityTribe = tribesById[entity.tribeId];
//   if(!entityTribe.knownTribesStandingById[other.tribeId]) {
//     addNewKnownTribe(entityTribe, other);
//   }

//   if(isEnemy(entity, other)) {

//     if(isExploring && isEnemyKnowToEntity(entity, other)) {
//       return;
//     }

//     entity.hasEnemy = true;

//     if(level === 1) {
//       entity.adjacentEnemies.push(other);
//     } else {
//       entity.inRangeEnemies.push(other);
//     }
//   }
// }





// function evaluateEnemyPriority(enemy, tribe) {
//   const cityPriority = 0;

//   if(enemy.city) {
//     const cityOwner = getCityOwner(enemy.city, tribe);
//     cityPriority = tribe.enemyPriorities.city[cityOwner];
//   }

//   const enemyTypePriority = tribe.enemyPriorities.enemyType[enemy.type];

//   return cityPriority > enemyTypePriority ? cityPriority : enemyTypePriority;
// }

// function removeEntity(entity) {
//   let tribeId = entity.tribeId;
//   if(tribeId) {
//     let entityArray = tribesById[tribeId].units;
//     removeFromArray(entityArray, (arrayEntity) => arrayEntity.id === entity.id);
//   }
// }

// function evaluateSurroundingSquare(square, level, entity) {
//   if(square.city) {
//     console.log("FOUND CITY", square.city);
//     console.log("Level", level, "entity.movementRange", entity.movementRange);
//   }
//   if(square.city && level <= entity.movementRange) {
//     entity.cities.push(square.city);
//   }

//   const squareEntity = square.currentEntity;

//   if(!squareEntity) {
//     return;
//   }

//   evaluateTribeEntity(entity, squareEntity, level);
// }

// function getSurroundings(entity, tribe, grid) {
//   spreadSquareFromPoint(entity.currentSquare, grid, entity.movementRange + 1, evaluateSurroundingSquare, entity);
// }




  
//////////////////////////////////////////////////////////////////////
/*
Player movement
    move to square
    attack

Npc Movement
    move to square
    attack


enemy priority level

adjacent
any unit invading city
any unit in enemy city
knight
archer
rider
warrior
swordsman
defender



tribePriorities - 
object that holds the possible actions for tribe members and their priority level
example - early in the game, finding and taking unoccupied cities is top priority
Also supports different tribe characteristics

tribePriorities = {
  attackByPriority
  enterOpenCity
  moveTowardOpenCity
  moveTowardEnemyCity
  moveTowardTribesEnemiesByPriority
  explore
}

tribeSurroundings -
Object that holds information about all of the squares, cities and units on any square explored by the tribe

tribeSurroundings = {
  exploredSquares: []
  unclaimedCities: []
  enemyUnits: []
  enemyCities: []
  alliedUnits: []
  alliedCities: []
  neutralUnits: []
  neautralCities: []
}


NPC - functions
Evaluate moves
-check possible 

    attack adjacent enemies
    attack priority enemies in range

    move toward open city
    move toward enemy towns

    
    move toward enemy units in tribe surroundings
    
    move toward unexplored squares


  enterCity
  leaveCity
  invadeCity
  takeCity
  takeOverCity
  

  moveToSquare
  followPath
  followPathToAttack








  Time- Explorer rules ---------------------------------------------------------------------

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

