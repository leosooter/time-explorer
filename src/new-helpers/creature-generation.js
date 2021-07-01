import {round, clamp, forEach, cloneDeep, fill} from "lodash";
import {getDiffFromIdeal, addXToArray} from "./utilities";
import creatureDirectory from "../components/creatures/creature-directory";
import worldTypes, {timePeriods, worldNames} from "../constants/world-types";

console.log("WorldTypes", worldTypes);
const SMALL_TERRITORY = 3;
const MEDIUM_TERRITORY = 6;
const LARGE_TERRITORY = 12;

const SMALL_HERD = 2;
const MEDIUM_HERD = 5;
const LARGE_HERD = 8;

export function addTerritory(entity, size) {
    entity.isTerritoryRestricted = true;
    entity.territorySize = size;
}

export function normalize(value) {
    return round(clamp(value, 0, 100));
}

export function adjustPredator(entity) {
    if(entity.isPredator) {
        return
    }

    entity.isPredator = true;
    adjust(entity, "hp", .6);
    adjust(entity, "attack", 1.5);
}

export function adjustForHerdAnimal(entity, size) {
    entity.isGroup = true;
    entity.groupMaxSize = size;
    entity.groupCohesion = 3;
    entity.groupDensity = 3;
}

export function adjustForNoSwim(entity) {
    entity.terrainPreference = {
        ...entity.terrainPreference,
        ocean: 0,
        deepWater: 0,
        shallowWater: 0,
        marsh: 0,
        swampForest: 0
    }
}

export function adjustForNoLand(entity) {
    entity.terrainPreference = {
        ...entity.terrainPreference,
        desert: 0,
        desertScrub: 0,
        desertForest: 0,
        savannah: 0,
        savannahScrub: 0,
        savannahForest: 0,
        plain: 0,
        grassland: 0,
        forest: 0
    }
}

export function adjustForOceanOnly(entity) {
    forEach(entity.terrainPreference, (value, key) => {
        if(key !== "ocean") {
            entity.terrainPreference[key] = 0;
        }
    });
}

// export function adjustSpeed(entity, multiplier) {
//     entity.speed = (entity.speed * multiplier, {clampMin: 0, clampMax: 3});
// }

export function adjustSpeed(entity, speed) {
    entity.speed = speed;
}

export function adjust(entity, key, multiplier) {
    entity[key] = normalize(entity[key] * multiplier);
}

const timePeriodDetails = {
    allCreatures: [],
    predatorCount: 0,
    preyCount: 0,
    predators: {
        small: [],
        medium: [],
        large: [],
        xLarge: [],
        xxLarge: [],
    },
    prey: {
        small: [],
        medium: [],
        large: [],
        xLarge: [],
        xxLarge: [],
    }
}

export const creaturesByTimePeriod = {}
forEach(worldNames, (name) => creaturesByTimePeriod[name] = cloneDeep(timePeriodDetails));


const creatureTags = {
    // teritory size - 
    // defualt none
    smallTerritory: (entity) => addTerritory(entity, SMALL_TERRITORY),
    mediumTerritory: (entity) => addTerritory(entity, MEDIUM_TERRITORY),
    largeTerritory: (entity) => addTerritory(entity, LARGE_TERRITORY),

    migratory: (entity) => {
        if(!entity.isTerritoryRestricted) {
            addTerritory(entity, MEDIUM_TERRITORY);
        }

        entity.isMigratory = true;
    },

    // Predator type
    specialistPredator: (entity) => {
        adjustPredator(entity);
        adjust(entity, "preyRange", .75);
    }, // Narrow prey range
    generalistPredator: (entity) => {
        adjustPredator(entity);
        adjust(entity, "preyRange", 1.5);
    }, // Wide prey range -- Default
    
    // Predator strategy
    ambushPredator: (entity) => {
        adjustPredator(entity);
        adjustSpeed(entity, 2);
        adjust(entity, "endurance", .75);
    }, // high speed but lacks endurance, good camoflage
    persuitPredator: (entity) => {
        adjustPredator(entity);
        adjust(entity, "hp", .8);
        adjust(entity, "endurance", 1.5);
        // adjust(entity, "heightToSquare", 1.5);
    }, // high endurance but moderate speed
    omnivore: (entity) => {
        adjustPredator(entity);
        adjust(entity, "endurance", 1.2);
        adjust(entity, "hp", 1.2);
        adjust(entity, "attack", .75);
        adjust(entity, "defence", 1.5);
        // adjust(entity, "heightToSquare", .5);
    }, // moderate endurance and speed -- Default

    // Escape type
    // default running
    //terrainEscape, // moderate speed, low endurance - will head for nearest escape terrain
    //burrowEscape, // terrainEscape + smallTerritory - gets a burrow at territory center 
    //waterEscape, // terrainEscape + mediumTerritory - never stray far from water - escape to water - defaults to runningEscape for water predators
    runningEscape: (entity) => {
        adjustSpeed(entity, 2);
        adjust(entity, "hp", .8);
        adjust(entity, "threatReaction", 1.5);
        adjust(entity, "endurance", 1.5);
        adjust(entity, "defence", .75);
        adjust(entity, "attack", .75);
        adjust(entity, "aggression", .5);
    }, //moderate speed, high endurance, low defence, low attack, low aggression -- Default
    passiveDefence: (entity) => {
        adjust(entity, "defence", 2);
        adjust(entity, "threatReaction", .5);
        adjust(entity, "attack", .5);
        adjust(entity, "aggression", .5);
    },  //low speed, high defence, low attack, low aggression
    activeDefence: (entity) => {
        adjust(entity, "aggression", 1.5);
        adjust(entity, "attack", 1.5);
        adjust(entity, "defence", .5);
        adjust(entity, "threatReaction", 1.5);
    }, // moderate speed, low defence, high attack, high aggression

    packHunter: (entity) => () => {}, //herdAnimal + shared target hunting
    groupDefence: (entity) => () => {}, // herdAnimal + shared defence

    smallHerdAnimal: (entity) => {
        adjustForHerdAnimal(entity, SMALL_HERD);
    },
    mediumHerdAnimal: (entity) => {
        adjustForHerdAnimal(entity, MEDIUM_HERD);
    },
    largeHerdAnimal: (entity) => {
        adjustForHerdAnimal(entity, LARGE_HERD);
    },
    // Default none

    flying: (entity) => {
        entity.isFlying = true;
        adjustSpeed(entity, 3);
        adjust(entity, "hp", .5);
        adjust(entity, "attack", 1.5);
        adjust(entity, "defence", .5);
    }, // air only

    highSpeed: (entity) => {
        adjust(entity, "hp", .8);
        adjustSpeed(entity, 3);
    },
    aggressive: (entity) => {
        adjust(entity, "aggression", 1.2);
    },
    wideRange: (entity) => {
        adjust(entity, "terrainRange", 1.5);
    },
    narrowRange: (entity) => {
        adjust(entity, "terrainRange", .75);
    },
    noSwim: (entity) => {
        adjustForNoSwim(entity);
    },
    noLand: (entity) => {
        adjustForNoLand(entity);
    },
    oceanOnly: (entity) => {
        adjustForOceanOnly(entity);
    }
}

const terraintags = {
    "desert": {moistureLevel: 0, foliageDensity: 0},
    "desertScrub": {moistureLevel: 0, foliageDensity: 5},
    "desertForest": {moistureLevel: 0, foliageDensity: 10},
    "savannah": {moistureLevel: 5, foliageDensity: 0},
    "savannahScrub": {moistureLevel: 5, foliageDensity: 5},
    "savannahForest": {moistureLevel: 5, foliageDensity: 10},
    "plain": {moistureLevel: 10, foliageDensity: 0},
    "grassland": {moistureLevel: 10, foliageDensity: 5},
    "forest": {moistureLevel: 10, foliageDensity: 10},
    "shallowWater": {moistureLevel: 15, foliageDensity: 0},
    "marsh": {moistureLevel: 15, foliageDensity: 5},
    "swampForest": {moistureLevel: 15, foliageDensity: 10},
    "deepWater": {moistureLevel: 20, foliageDensity: 0},
    "ocean": {moistureLevel: 25, foliageDensity: 0}
}

function getLevelForTerrain(key, moistureLevel, foliageDensity, range = 10) {
    const moistureScore = getDiffFromIdeal(moistureLevel, terraintags[key].moistureLevel, 10);
    if(key === "ocean" || key === "deepWater") {
        return round(moistureScore);
    }

    const densityScore = getDiffFromIdeal(foliageDensity, terraintags[key].foliageDensity, 10);

    return round((moistureScore + densityScore) / 2);
}

export function getTerrainPreference(entity) {
    const {moistureLevel, foliageDensity} = entity;
    const preferences = {
        "desert": 0,
        "desertScrub": 0,
        "desertForest": 0,
        "savannah": 0,
        "savannahScrub": 0,
        "savannahForest": 0,
        "plain": 0,
        "grassland": 0,
        "forest": 0,
        "shallowWater": 0,
        "marsh": 0,
        "swampForest": 0,
        "deepWater": 0,
        "ocean": 0
    }

    forEach(preferences, (value, key) => {
        preferences[key] = getLevelForTerrain(key, moistureLevel, foliageDensity, entity.terrainRange);
    });

    return preferences;
}

function getCommonality(entity) {
    // Returns a score of 1 - 100 for how common a creature is
    return entity.isPredatore ? 50 : 100;
}

function generateNameFromKey(key) {
    return key;
}

function generateHpFromSize (size) {
    return size * 2;
}

function generateAttackFromSize(size) {
    return clamp(round(size / 2), 1, 100);
}

function generateDefenceFromSize(size) {
    return clamp(round(size / 2.2), 1, 100);
}

function getSizeRangeForEntity(entity) {
    const {size} = entity;
    if(size >= 90) {
        return "xxLarge";
    }
    if(size >= 60) {
        return "xLarge";
    }
    if(size >= 30) {
        return "large";
    }
    if(size >= 10) {
        return "medium";
    }
    return "small"
}

/*
const timePeriodDetails = {
    allCreatures: [],
    predatorCount: 0,
    preyCount: 0,
    predators: {
        small: [],
        medium: [],
        large: [],
        xLarge: [],
        xxLarge: [],
    },
    prey: {
        small: [],
        medium: [],
        large: [],
        xLarge: [],
        xxLarge: [],
    }
}
*/

const NULL_DENSITY = 1000;

function loadCreatureIntoTerrain(entityKey, terrain, terrainKey) {
    if(!terrain.creatureDensity) {
        terrain.creatureDensity = 1000;
    }

    if(!terrain.creatureDetails) {
        terrain.creatureDetails = {};
    }
    
    const entity = creatureDirectory[entityKey];

    let creatureTerrainPref = entity.terrainPreference[terrainKey];

    if(!creatureTerrainPref || creatureTerrainPref < 60) {
        return;
    }

    let density = round(entity.commonality * (creatureTerrainPref / 100));

    terrain.creatureDetails[entityKey] = {name: entityKey, density}

    addXToArray(entityKey, terrain.creatures, density);
}

function loadCreatureIntoWorld(entityKey, world) {
    forEach(world.terrainTypes, (terrain, terrainKey) => loadCreatureIntoTerrain(entityKey, terrain, terrainKey))
}

function loadCreaturesIntoWorld(period, periodKey) {
    if(!period.allCreatures.length) {
        return;
    }

    const world = worldTypes[periodKey];

    if(!world) {
        return;
    }
    world.creatureDetails = period;
    
    for (let index = 0; index < period.allCreatures.length; index++) {
        loadCreatureIntoWorld(period.allCreatures[index], world);
    }
}

export function loadCreaturesIntoWorlds() {
    forEach(creaturesByTimePeriod, loadCreaturesIntoWorld);
    console.log("WORLDS", worldTypes);
}

function addCreatureToPeriod(periodKey, entity) {
    const timePeriod = creaturesByTimePeriod[periodKey];
    const {key, sizeRange, isPredator} = entity;

    timePeriod.allCreatures.push(key);
    if(isPredator) {
        timePeriod.predators[sizeRange].push(key);
        timePeriod.predatorCount ++;
    } else {
        timePeriod.prey[sizeRange].push(key);
        timePeriod.preyCount ++;
    }
}

function addCreatureToPeriods(entity) {
    if(Array.isArray(entity.timePeriod)) {
        forEach(entity.timePeriod, (period) => addCreatureToPeriod(period, entity))
    } else {
        addCreatureToPeriod(entity.timePeriod, entity);
    }
}

function checkForSwim(entity) {
    try {
        require(`../components/creatures/images/${entity.key}/e-swim.png`);
        entity.isSwim = true;
    } catch (error) {
        console.log(entity.name, "has water terrain but no swim", entity.moistureLevel);
        entity.isSwim = false;
        adjustForNoSwim(entity);
    }
}

function applyTags(entity) {
    for (let index = 0; index < entity.tags.length; index++) {
        try {
            creatureTags[entity.tags[index]](entity);
        } catch (error) {
            console.log("Creature Tag Error", entity.tags, index);
        }
        
    }
}

export function generateCreatureStats() {
    forEach(creatureDirectory, (entity, key) => {
        const sizeModifier = entity.sizeModifier || 1;
        entity.key = key;
        entity.imgDir = key;
        entity.name = entity.name || generateNameFromKey(key);
        entity.heightToSquare = clamp(round((entity.size / 5) * sizeModifier), .5, 50);
        entity.widthToHeight= entity.widthToHeight || 1.5;
        entity.hp = entity.hp || generateHpFromSize(entity.size);
        entity.attack = entity.attack || generateAttackFromSize(entity.size);
        entity.defence = entity.defence || generateDefenceFromSize(entity.size);
        entity.isMega = entity.isMega || entity.size > 50;
        entity.terrainPreference = getTerrainPreference(entity);

        applyTags(entity);
        
        if(!entity.isUnderWater && !entity.isFlying) {
            checkForSwim(entity);
        } else if(entity.isUnderWater) {
            adjustForNoLand(entity);
            if(entity.isMega) {
                adjustForOceanOnly(entity);
            }
        }

        entity.health = entity.hp;        
        entity.endurancePoints = entity.endurance;
        entity.sizeRange = getSizeRangeForEntity(entity);
        entity.type = `${entity.sizeRange} ${entity.isPredator ? "perdator" : "herbivore"}`
        entity.commonality = getCommonality(entity);

        addCreatureToPeriods(entity);
    });

    console.log("TEST DIRECTORY", creatureDirectory);
    console.log("creaturesByTimePeriod", creaturesByTimePeriod);
}
