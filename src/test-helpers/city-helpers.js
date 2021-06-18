import {removeFromArray, removeFromArrayById, pullFromArray} from "./utilities";
import {tribesById, cities} from "../App";
import {endTurn} from "./npc-actions";
import {updateVisibilityForEntity} from "./movement-helpers";

import {isTribeEnemy, isTribeAlly, getTribe} from "./tribe-helpers";

let cityCount = 1;

export function enterCity(entity, city) {
  console.log("entering city");
  entity.currentCity = city;
  city.currentEntity = entity;
}

export function leaveCity(entity, city) {
  console.log("leaving city");
  entity.currentCity = null;
  city.currentEntity = null;
}

export function getCityOwner(city, tribe) {
  const cityId = city.tribeId;

  if(!cityId) {
    return "Open_City";
  }

  if(cityId === tribe.tribeId) {
    return "Own_City";
  }

  if(isTribeEnemy(tribe, city)) {
    return "Enemy_City";
  }

  if(isTribeAlly(tribe, city)) {
    return "Ally_City";
  }

  return "Neutral_City"
}

function removeKnownCity(city, tribe) {
    removeFromArrayById(tribe.knownCities, city);
}

function removeOwnCity(city, tribe) {
  removeFromArrayById(tribe.ownCities, city);
}

function addKnownCity(city, tribe) {
  tribe.knownCities.push(city);
}

function addOwnCity(city, tribe) {
  tribe.ownCities.push(city);
  city.tribeId = tribe.tribeId;
  city.color = tribe.tribeColor;
}

export function takeCity(entity, tribe, city) {
    if(city.tribeId) {
      const otherTribe = getTribe(city);
      removeOwnCity(city, otherTribe);
      addKnownCity(city, otherTribe);
    }

    addOwnCity(city, tribe);
    removeKnownCity(city, tribe);
    endTurn(entity);
}

function removeKnowCity(tribeObj, city) {
  removeFromArrayById(tribeObj.knownCities, city);
}

export function isUnclaimedCity(tribeObj, city) {
  return !city.tribeId;
}

export function isOpenCity(tribeObj, city) {
  return !city.currentEntity;
}

function findOpenCities(tribeObj) {
    return tribeObj.knownCities.filter((city) => !city.currentEntity);
}

export function findNearestUnclaimedCity(tribeObj) {
  const cities = tribeObj.knownCities.filter((city) => !city.tribeId);

  return cities[0];
}

export function findNearestOpenUnclaimedCity(tribeObj) {
  const cities = findNearestUnclaimedCity(tribeObj).filter((city) => !city.currentEntity);

  return cities[0];
}

export function findNearestOpenEnemyCity(tribeObj) {
    const cities = findOpenCities(tribeObj).filter((city) => isTribeEnemy(tribeObj, city));

    return cities[0];
}

export function findNearestEnemyCity(tribeObj) {
    const cities = tribeObj.knownCities.filter((city) => isTribeEnemy(tribeObj, city));

    return cities[0];
}

export function canAddUnitToCity(city) {
  return !city.currentEntity && city.population < city.maxPopulation;
}

export function createNewCity(square, tribeId, grid, maxPopulation = 1) {
  const tribe = tribesById[tribeId];

  const city = {
    id: cityCount,
    imgUrl: "city1.png",
    size: 1,
    color: tribesById[tribeId].tribeColor,
    currentEntity: null,
    maxPopulation: maxPopulation,
    population: 0,
    tribeId: null,
    currentSquare: square,
    defenceBonus: 1.5,
    canAddUnit: true
  }

  if(tribe) {
    city.tribeId = tribeId;
    tribe.ownCities.push(city);
  }

  updateVisibilityForEntity(city, grid, 1);

  square.city = city;
  cities.push(city);
  cityCount ++;

  return city;
}

