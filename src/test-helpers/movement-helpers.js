import {sample} from "lodash";
import {attackEntity} from "./combat-helpers";
import {spreadSquareFromPoint, searchSquareFromPoint, getDistance, isInRange} from "./grid-helpers";
import {removeFromArray, pullFromArray} from "./utilities";
import {leaveCity, enterCity} from "./city-helpers";
import {evaluateEntity} from "./tribe-helpers";
import {isEntityInRange} from "./combat-helpers";

export function canMove(entity, square) {
    const {movementRange, currentSquare} = entity;
    return entity.moves === 0 && isInRange(currentSquare, square, movementRange)
}

function updateSquareVisibility(square, level, entity) {
  square.isVisible = true;

  if(square.currentEntity && square.currentEntity.tribeId !== entity.tribeId) {
    evaluateEntity(entity, square.currentEntity);
  }
}

export function updateVisibilityForEntity(entity, grid, range) {
  spreadSquareFromPoint(entity.currentSquare, grid, range || entity.sightRange, updateSquareVisibility, entity);
}

function evaluateSquareUnexplored(square, layer, tribe) {
  return !square.isVisible;
}

export function findNearestUnexploredSquare(entity, tribe, grid) {
  return searchSquareFromPoint(entity.currentSquare, grid, 100, evaluateSquareUnexplored, tribe);
}

function findEntityPathToSquare(start, end, grid, limit = 4) {
    let path = [];
    let count = 0;
    let current = start;
    let lastDist;
    let bestDist = getDistance(start, end);

    while(count < limit && current !== end && lastDist !== bestDist) {
        function findBestDist(square) {
        if(square.currentEntity) {
            return;
        }

        let dist = getDistance(square, end);

        if(dist < bestDist) {
            lastDist = bestDist;
            bestDist = dist;
            current = square;
            if(!path[count]) {
                path.push(current);
            } else {
                path.splice(count, 1, current);
            }
        }
        }

        spreadSquareFromPoint(current, grid, 1, findBestDist);

        count ++;
    }

    return path;
}


export function moveToward(entity, targetSquare, grid, update) {
  let path = findEntityPathToSquare(entity.currentSquare, targetSquare, grid, entity.movementRange);
  // console.log("path", path);

  for (let index = 0; index < path.length; index++) {
      let pathSquare = path[index];
      if(!pathSquare.currentEntity) {
        moveEntityToSquare(entity, pathSquare, "moveToward");
        updateVisibilityForEntity(entity, grid);
      }
  }

  entity.canMove = false;
}

export function moveTowardToAttack(entity, other, grid) {
  let path = findEntityPathToSquare(entity.currentSquare, other.currentSquare, grid, entity.movementRange);
  console.log("MOVE_TO_ATTACK path", path);
  console.log("Other Square", other.currentSquare.id);

  for (let index = 0; index < path.length; index++) {
      if(isEntityInRange(entity, other)) {
        console.log("******************* Breaking out of path");
        break;
      }

      let pathSquare = path[index];

      if(!pathSquare.currentEntity) {
        // update();
        moveEntityToSquare(entity, pathSquare, "moveToward");
        updateVisibilityForEntity(entity, grid);
      }
  }

  if(isEntityInRange(entity, other)) {
    attackEntity(entity, other);
  }

  entity.canMove = false; 
}

export function moveEntityToSquare(entity, square) {
  if(entity.currentCity) {
    leaveCity(entity, entity.currentCity);
  }

  if(square.city) {
    enterCity(entity, square.city);
  }

  if(!entity.canAttackAfterMove) {
    entity.canAttack = false;
  }

  entity.currentSquare.currentEntity = null;
  entity.currentSquare = square;
  square.currentEntity = entity;
}

export function randomMove(entity, grid, update) {
    const possSquares = spreadSquareFromPoint(entity.currentSquare, grid, entity.movementRange, () => {});
    const target = sample(possSquares);

    moveToward(entity, target, grid, update);
}