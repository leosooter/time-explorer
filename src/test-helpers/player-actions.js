import {pull, clone, sample} from "lodash";
import {tribesById} from "../App";
import {spreadSquareFromPoint, searchSquareFromPoint, getDistance, isInRange} from "./grid-helpers";
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
} from "./entity-helpers.js";

import {
    moveToward,
    moveTowardToAttack,
    moveEntityToSquare,
    canMove
} from "./movement-helpers.js";

import {attackEntity} from "./combat-helpers";

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

function displayEntityInfo(entity) {
    console.log("displayEntityInfo");
    console.log("selectedEntity", entity);
  }

  function endEntityTurn(entity) {
    entity.hasTurn = false;
  }

  function selectEntity(entity, setSelectedEntity, selectedEntity) {
    if(selectedEntity) {
      selectedEntity.isSelected = false;
    }
    entity.isSelected = true;
    setSelectedEntity(entity);
  }

  function unSelectEntity(entity, setSelectedEntity) {
    entity.isSelected = false;
    setSelectedEntity(null);
  }

  function selectCity(city, setSelectedCity, selectedCity) {
    if(selectedCity) {
      selectedCity.isSelected = false;
    }
    city.isSelected = true;
    setSelectedCity(city);
  }


  function unSelectCity(city, setSelectedCity) {
    city.isSelected = false;
    setSelectedCity(null);
  }

  function showActions(entity) {
    // spreadFromPoint({point: entity.currentSquare, depth: entity.range, callback: checkForAction, innerParams: {entity}});
  }

  export function onSquareClick(square, grid, update, setSelectedEntity, selectedEntity, setSelectedCity, selectedCity) {
    // console.log("onSquareClick", square, selectedEntity);

    // If Square has an entity
    if(square.currentEntity) {
      console.log("ENITY", square.currentEntity);
      console.log("TRIBE", tribesById[square.currentEntity.tribeId]);
      if(square.currentEntity.isPlayerEntity) { // Select or deselect player unit
        let entityToSelect = square.currentEntity;

        if(entityToSelect === selectedEntity) {  // If player unit is already selected - unselect
          unSelectEntity(entityToSelect, setSelectedEntity);
          if(square.city) {
            selectCity(square.city, setSelectedCity, selectedCity);
          }
        } else {
          selectEntity(entityToSelect, setSelectedEntity, selectedEntity); // else - select
          showActions(entityToSelect);
        }

        return;
      } 

      // console.log("testing for attack", isInRange(selectedEntity.currentSquare, square, selectedEntity.attackRange), selectedEntity.hasTurn);

      if(selectedEntity && selectedEntity.hasTurn && isInRange(selectedEntity.currentSquare, square, selectedEntity.attackRange)) { // Meet tribe and attack

        let entityTribe = tribesById[square.currentEntity.tribeId];

        if(entityTribe.knownTribesStandingById[selectedEntity.tribeId]) {
          entityTribe.knownTribesStandingById[selectedEntity.tribeId] = {
            standing: -1
          }
        } else {
          entityTribe.knownTribesStandingById[selectedEntity.tribeId] --;
        }

        console.log("Attacking");

        attackEntity(selectedEntity, square.currentEntity, "playerPrimary", setSelectedEntity);

        update();
        return;
      }

      displayEntityInfo(square.currentEntity);
      return;
    }

    if(selectedEntity && selectedEntity.hasTurn && canMove(selectedEntity, square)) { // Move player to square
      selectedEntity.moves ++;
      moveEntityToSquare(selectedEntity, square, "onSquareClick");
      update();
      return;
    }

    if(square.city) { // Select or deselect city
      console.log("Square with City");
      if(selectedCity) {
        unSelectCity(selectedCity, setSelectedCity);
      } else {
        selectCity(square.city, setSelectedCity, selectedCity);
      }

      console.log("SelectedCity", selectedCity);
    }

    if(selectedEntity) { // unselect player
      unSelectEntity(selectedEntity, setSelectedEntity);
    }

    console.log("No Action");
  }