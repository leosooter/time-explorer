import {round, clamp, forEach, cloneDeep, fill} from "lodash";
import {getDiffFromIdeal, addXToArray} from "./utilities";
import creatureDirectory from "../components/creatures/creature-directory";
import worldTypes, {timePeriods, worldNames} from "../constants/world-types";
import {worldParams} from "../constants/world";

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

    entity.idealPreySize = entity.hp * .6;
    entity.preySizeRange = entity.idealPreySize * .75;

    entity.isPredator = true;
}

export function adjustForHerdAnimal(entity, size) {
    entity.isGroup = true;
    entity.groupMaxSize = size;
    entity.groupCohesion = 3;
    entity.groupDensity = 10;
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
    forEach(entity.terrainPreference, (value, keyName) => {
        if(keyName !== "ocean") {
            entity.terrainPreference[keyName] = 0;
        }
    });
}

// export function adjustSpeed(entity, multiplier) {
//     entity.speed = (entity.speed * multiplier, {clampMin: 0, clampMax: 3});
// }

export function adjustSpeed(entity, speed) {
    entity.speed = speed;
}

export function adjust(entity, keyName, multiplier) {
    entity[keyName] = normalize(entity[keyName] * multiplier);
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
        adjust(entity, "preySizeRange", .75);
    }, // Narrow prey range
    generalistPredator: (entity) => {
        adjustPredator(entity);
        adjust(entity, "preySizeRange", 1.5);
    }, // Wide prey range -- Default
    
    // Predator strategy
    ambushPredator: (entity) => {
        adjustSpeed(entity, 2);
        adjust(entity, "endurance", .75);
        adjustPredator(entity);
    }, // high speed but lacks endurance, good camoflage
    persuitPredator: (entity) => {
        adjust(entity, "hp", .8);
        adjust(entity, "endurance", 1.5);
        adjustPredator(entity);
        // adjust(entity, "heightToSquare", 1.5);
    }, // high endurance but moderate speed
    omnivore: (entity) => {
        adjust(entity, "endurance", 1.2);
        adjust(entity, "hp", 1.2);
        adjust(entity, "attack", .75);
        adjust(entity, "defence", 1.5);
        adjustPredator(entity);
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

const terrainTags = {
    "desert": {moistureLevel: 0, foliageDensity: 0},
    "desertScrub": {moistureLevel: 0, foliageDensity: 5},
    "desertForest": {moistureLevel: 0, foliageDensity: 10},
    "savannah": {moistureLevel: 5, foliageDensity: 0},
    "savannahScrub": {moistureLevel: 5, foliageDensity: 5},
    "savannahForest": {moistureLevel: 5, foliageDensity: 10},
    "plain": {moistureLevel: 10, foliageDensity: 0},
    "grassland": {moistureLevel: 10, foliageDensity: 5},
    "forest": {moistureLevel: 10, foliageDensity: 10},
    "tundra": {moistureLevel: 10, foliageDensity: 0, coldLevel: 10},
    "taiga": {moistureLevel: 10, foliageDensity: 5, coldLevel: 10},
    "snowForest": {moistureLevel: 10, foliageDensity: 10, coldLevel: 10},
    "shallowWater": {moistureLevel: 15, foliageDensity: 0},
    "marsh": {moistureLevel: 15, foliageDensity: 5},
    "swampForest": {moistureLevel: 15, foliageDensity: 10},
    "deepWater": {moistureLevel: 20, foliageDensity: 0},
    "ocean": {moistureLevel: 25, foliageDensity: 0}
}

function getLevelForTerrain(keyName, moistureLevel, foliageDensity, coldLevel, range = 10, entity) {
    if(!entity.terrainScores) {
        entity.terrainScores = {};
    }

    const moistureScore = getDiffFromIdeal(moistureLevel, terrainTags[keyName].moistureLevel, 10);
    if(keyName === "ocean" || keyName === "deepWater") {
        entity.terrainScores[keyName] = {
            moistureScore,
            total: round(moistureScore)
        }
        return round(moistureScore);
    }

    const densityScore = getDiffFromIdeal(foliageDensity, terrainTags[keyName].foliageDensity, 10);
    let coldScore = 0;
    let numLevels = coldLevel ? 3 : 2;

    if(coldLevel) {
        coldScore = getDiffFromIdeal(coldLevel, terrainTags[keyName].coldLevel || 0, 10);
    }

    entity.terrainScores[keyName] = {
        moistureScore,
        densityScore,
        coldScore,
        total: round((moistureScore + densityScore + coldScore) / numLevels)
    }

    return round((moistureScore + densityScore + coldScore) / numLevels);
}

export function getTerrainPreference(entity) {
    const {moistureLevel, foliageDensity, coldLevel} = entity;
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
        "tundra": 0,
        "taiga": 0,
        "snowForest": 0,
        "shallowWater": 0,
        "marsh": 0,
        "swampForest": 0,
        "deepWater": 0,
        "ocean": 0
    }

    forEach(preferences, (value, keyName) => {
        preferences[keyName] = getLevelForTerrain(keyName, moistureLevel, foliageDensity, coldLevel, entity.terrainRange, entity);
    });

    return preferences;
}

const commonalityBySizeRange = {
    "small": 80,
    "medium": 60,
    "large": 40,
    "xLarge": 20,
    "xxLarge": 10
}

function getCommonality(entity) {
    // Returns a score of 1 - 100 for how common a creature is
    let baseCommonality = commonalityBySizeRange[entity.sizeRange];
    if(entity.isGroup) {
        baseCommonality = baseCommonality / entity.groupMaxSize;
    }
    const modifier = entity.isPredator ? .75 : 1.5;
    
    return baseCommonality * modifier;
}

function generateNameFromKey(keyName) {
    return keyName;
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


function assignOffsets(entity) {
    const {modifier} = worldParams;
    const sizeModifier = modifier * .5;
    const {size} = entity;
    if(size * sizeModifier < 30 * sizeModifier) {
        return;
    }

    const offSetsByType = {
        "default": {
            n: {
                top: -2,
                left: 1
            },
            s: {
                top: -1.5,
                left: -2
            },
            e: {
                top: -3,
                left: -1
            },
            w: {
                top: -2,
                left: 1
            }
        },
        "largeQuadraped": {
            n: {
                top: -3,
                left: -.5
            },
            s: {
                top: -1.5,
                left: -2
            },
            e: {
                top: -3,
                left: -1
            },
            w: {
                top: -2,
                left: 2
            }
        },
        "megaQuadraped": {
            n: {
                top: -1,
                left: -.5
            },
            s: {
                top: -2.5,
                left: -1.5
            },
            e: {
                top: -1,
                left: 0
            },
            w: {
                top: -2.5,
                left: .5
            }
        },
        "largeBipedal": {
            n: {
                top: -2,
                left: 1
            },
            s: {
                top: -1.5,
                left: -2
            },
            e: {
                top: -3,
                left: -1
            },
            w: {
                top: -2,
                left: 1
            }
        },
        "longWater": {
            n: {
                top: 2.5,
                left: 2
            },
            s: {
                top:0,
                left: -3
            },
            e: {
                top: 2,
                left: -2
            },
            w: {
                top: 0,
                left: 2
            }
        }
    }

    forEach(entity.offSets, (offSets, key) => {
        const typeOffSets = offSetsByType[entity.offSetType] || offSetsByType["default"];
        offSets.topOffset = size * sizeModifier * typeOffSets[key].top * sizeModifier;
        offSets.leftOffset = size * sizeModifier * typeOffSets[key].left * sizeModifier;
    })

    // if(entity.isPredator) {
    //     entity.offSets.n.topOffset = size * -2 * 400 / worldParams.squareSize;
    //     entity.offSets.n.leftOffset = size * 1 * 400 / worldParams.squareSize;
    //     entity.offSets.s.topOffset = size * -1.5 * 400 / worldParams.squareSize;
    //     entity.offSets.s.leftOffset = size * -2 * 400 / worldParams.squareSize;
    //     entity.offSets.e.topOffset = size * -3 * 400 / worldParams.squareSize;
    //     entity.offSets.e.leftOffset = size * -1 * 400 / worldParams.squareSize;
    //     entity.offSets.w.topOffset = size * -2 * 400 / worldParams.squareSize;
    //     entity.offSets.w.leftOffset = size * 1 * 400 / worldParams.squareSize;
    // } else {
    //     entity.offSets.n.topOffset = size * -2 * 400 / worldParams.squareSize;
    //     entity.offSets.n.leftOffset = size * 1 * 400 / worldParams.squareSize;
    //     entity.offSets.s.topOffset = size * -1.5 * 400 / worldParams.squareSize;
    //     entity.offSets.s.leftOffset = size * -2 * 400 / worldParams.squareSize;
    //     entity.offSets.e.topOffset = size * -3 * 400 / worldParams.squareSize;
    //     entity.offSets.e.leftOffset = size * 1 * 400 / worldParams.squareSize;
    //     entity.offSets.w.topOffset = size * -2 * 400 / worldParams.squareSize;
    //     entity.offSets.w.leftOffset = size * 1 * 400 / worldParams.squareSize;
    // }
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

offSets: {
    n: {
        topOffset: -50, size * -.75
        leftOffset: 200, size * 2
    },
    s: {
        topOffset: -180, size * -2
        leftOffset: 120, size * 1.4
    },
    e: {
        topOffset: -90, size * -1
        leftOffset: 150, size * 2
    },
    w: {
        topOffset: -150, size * -2
        leftOffset: 220, size * 2
    }
}
*/

const NULL_DENSITY = 100;

function loadCreatureIntoTerrain(entityKey, terrain, terrainKey) {
    if(!terrain.creatureDensity) {
        terrain.creatureDensity = NULL_DENSITY;
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
    const {keyName, sizeRange, isPredator} = entity;

    timePeriod.allCreatures.push(keyName);
    if(isPredator) {
        timePeriod.predators[sizeRange].push(keyName);
        timePeriod.predatorCount ++;
    } else {
        timePeriod.prey[sizeRange].push(keyName);
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
        require(`../components/creatures/images/${entity.keyName}/e-swim.png`);
        entity.hasSwim = true;
    } catch (error) {
        console.log(entity.name, "has water terrain but no swim", entity.moistureLevel);
        entity.hasSwim = false;
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
    forEach(creatureDirectory, (entityType, keyName) => {
        const entity = cloneDeep(entityType);
        const sizeModifier = entity.sizeModifier || 1;
        entity.keyName = keyName;
        entity.imgDir = keyName;
        entity.name = entity.name || generateNameFromKey(keyName);
        entity.heightToSquare = clamp(round((entity.size / 8) * sizeModifier), .5, 50);
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
            // if(entity.isMega) {
            //     adjustForOceanOnly(entity);
            // }
        }

        entity.health = entity.hp;        
        entity.endurancePoints = entity.endurance;
        entity.sizeRange = getSizeRangeForEntity(entity);
        entity.type = `${entity.sizeRange}${entity.isPredator ? "Predator" : "Herbivore"}`
        entity.commonality = getCommonality(entity);

        assignOffsets(entity);

        addCreatureToPeriods(entity);

        creatureDirectory[keyName] = entity;
    });

    console.log("TEST DIRECTORY", creatureDirectory);
    console.log("creaturesByTimePeriod", creaturesByTimePeriod);
}
