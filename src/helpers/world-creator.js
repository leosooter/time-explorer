import {random, sample, clone} from "lodash";
import {worldParams} from "../constants/world";
import {getNewCreature, creatureAction} from "../helpers/creature-helpers";
import {loopGrid, spreadFromPoint} from "../helpers/grid-helpers";
import structureDirectory from "../components/structures/structure-directory";
import plantDirectory from "../components/plants/plant-directory";
import tribeDirectory from "../components/units/tribeDirectory";
// import terrainTypes from "../constants/terrainTypes";
import worldTypes from "../constants/world-types";
import {entityAction} from "./entity-helpers";

const shortDirs = ["n","s","e","w"];
const explorationMode = false;

const wadeDepths = {
    "desert": 0,
    "savannah": 0,
    "grassland": 0,
    "forest": 0,
    "marsh": 30,
    "swampForest": 40,
    "shallowWater": 80,
    "deepWater": 120
}

// const facingDirs = ["n","s","e","w","ne","nw","se","sw"];

// const dirFind = {
//     "ne": ["n", "e"],
//     "se": ["s", "e"],
//     "nw": ["n", "w"],
//     "sw": ["s", "w"],
// }

let terrainArrays = {};
let creatureArrays = {};
let creaturesByTerrain = {};

let creatures = [];
let plants = [];
let structures = [];
let units = [];
let playerUnits = [];
let playerResources = {};
let tribesById = {};
let tribesIdsArray = [];
let landCoastSquares = [];
let waterCoastSquares = [];
let landSquares = [];
let waterSquares = [];
let squaresById = {};

let creatureStats = {

}

let plantId = 0;
let tribeId = 0
let unitId = 0;
let playerUnitId = 0;

export let world = {}

// import {spreadTerrainFromStart} from "./terrain-helpers";

let worldType;
let terrainTypes;

let defaultTerrainType;

// function loopGrid(params) {
//     const {grid, innerCallback, outerCallback, innerParams, outerParams} = params;
//     for (let heightIndex = 0; heightIndex < grid.length; heightIndex++) {
//         typeof outerCallback === "function" && outerCallback(grid[heightIndex], outerParams);

//         for (let widthIndex = 0; widthIndex < grid[heightIndex].length; widthIndex++) {
//             const square = grid[heightIndex][widthIndex];
//             innerCallback(square, innerParams);
//         }
//     }
// }

function resetWorld(worldTypeSet) {
    worldType = worldTypes[worldTypeSet];

    terrainArrays = {};
    creatureArrays = {};
    creaturesByTerrain = {};
    creatures = [];
    plants = [];
    structures = [];
    units = [];
    playerUnits = [];
    tribesById = {};
    tribesIdsArray = [];
    landCoastSquares = [];
    waterCoastSquares = [];
    landSquares = [];
    waterSquares = [];
    squaresById = {};
    creatureStats = {}
    playerResources = {
        food: 0,
        wood: 0
    }

    terrainTypes = worldType.terrainTypes;
    defaultTerrainType = worldType.defualtTerrainType


    world = {
        grid: [],
        creatures,
        plants,
        structures,
        units,
        playerUnits,
        playerResources,
        waterSquares,
        landCoastSquares,
        waterCoastSquares,
        landSquares,
        squaresById,
        terrainArrays
    }
}

function addToCoastArray(square) {
    for (let index = 0; index < square.dirSides.length; index++) {
        const sideSquare = square.dirSides[index];
        if(!sideSquare.terrainType.isWater) {
            waterCoastSquares.push(square);
            square.terrainType = terrainTypes.shallowWater;
            square.wadeDepth = wadeDepths["shallowWater"];

            landCoastSquares.push(sideSquare);

            sideSquare.isLandCoast = true;
            sideSquare.isCoastMapped = true;
            square.isWaterCoast = true;
            square.isCoastMapped = true;
        }
    }
}

function mapCoast(grid) {    
    for (let index = 0; index < waterSquares.length; index++) {
        const square = waterSquares[index];
        addToCoastArray(square);
    }
}

function spreadTerrainFromStart(baseTerrainType, start, power, endTerrain) {    
    const terrainType = clone(terrainTypes[baseTerrainType]);
    if(!terrainTypes[baseTerrainType]) {
        console.log("Terrain Error !!!!!!!!!!!!!!!!!!!!!!!!!!");
        
        console.log("terrainTypes", terrainTypes);
        console.log("baseTerrainType", baseTerrainType);
        
        return;
    }
    terrainType.color = morphColor(terrainTypes[baseTerrainType].color, 5);
    start.terrainType = terrainType;
    start.isWaterMapped = true;
    // console.log("wadeDepths[baseTerrainType.key]", baseTerrainType);
    
    start.wadeDepth = wadeDepths[baseTerrainType] || 0;

    if(terrainType.isWater) {
        waterSquares.push(start);
        start.isSwim = true;
    }

    function spreadInDirection(dir) {        
        const rand = random(1, power);

        if(start[dir] && !start[dir].isWaterMapped) {
            if(rand >= 10) {
                spreadTerrainFromStart(terrainType.key, start[dir], power - 1, endTerrain);
            }
        }
    }

    spreadInDirection("n");
    spreadInDirection("s");
    spreadInDirection("e");
    spreadInDirection("w");
}

function morphHue(hue, power) {
    let plusMinus = random(1,2) === 2 ? 1 : -1;
    let newHue = hue + (random(0, power) * plusMinus);
    return newHue;
}

function morphColor(baseColor, power) {
    let color = clone(baseColor);

    color.r = morphHue(color.r, power);
    color.g = morphHue(color.g, power);
    color.b = morphHue(color.b, power);

    return color;
}

function setSquareVisibility(square) {
    square.isVisible = true;
    if (square.currentEntity) {
        square.currentEntity.isVisible = true;
    } 
    if (square.plant) {
        square.plant.isVisible = true;
    }
    if (square.structure) {
        square.structure.isVisible = true;
    }
}

export function setVisibility(startSquare, power) {
    setSquareVisibility(startSquare)
    spreadFromPoint(startSquare, power, {callback: (square) => setSquareVisibility(square)});
}

function newSquare(heightIndex, widthIndex, id) {
    const defaultTerrain = clone(terrainTypes[defaultTerrainType]);
    defaultTerrain.color = morphColor(defaultTerrain.color, 5);
    const hasTree = !defaultTerrain.isWater && random(1,10) < defaultTerrain.treeChance;
    const entities = [];
    const isVisible = !explorationMode;

    return {
        heightIndex,
        widthIndex,
        id,
        entities,
        hasUnit: false,
        hasTree,
        terrainType: defaultTerrain,
        isWater: defaultTerrain.isWater,
        isSwim: defaultTerrain.isSwim,
        dirSides: [],
        allSides: [],
        currentEntity: null,
        plant: null,
        isVisible,
        wadeDepth: wadeDepths[defaultTerrainType] || 0
    }
}

function assignSides(grid) {
    for (let heightIndex = 0; heightIndex < grid.length; heightIndex++) {
        for (let widthIndex = 0; widthIndex < grid[0].length; widthIndex++) {
            const square = grid[heightIndex][widthIndex];
            const westSquare = grid[heightIndex][widthIndex - 1];
            const northSquare = grid[heightIndex - 1] && grid[heightIndex - 1][widthIndex];

            if(westSquare) {
                square.w = westSquare;
                westSquare.e = square;
                square.dirSides.push(westSquare);
                square.allSides.push(westSquare);

                westSquare.dirSides.push(square);
                westSquare.allSides.push(square);
            }

            if(northSquare) {
                square.n = northSquare;
                northSquare.s = square;
                square.dirSides.push(northSquare);
                square.allSides.push(northSquare);

                northSquare.dirSides.push(square);
                northSquare.allSides.push(square);

                if(westSquare) {
                    square.nw = northSquare.w
                    square.allSides.push(northSquare.w);
                    northSquare.w.se = square;
                    northSquare.w.allSides.push(square);
                }

                if(northSquare.e) {
                    square.ne = northSquare.e
                    square.allSides.push(northSquare.e);
                    northSquare.e.sw = square;
                    northSquare.e.allSides.push(square);
                }
            }
        }
        
    }
}

function getRandomSquare(grid) {
    const heightIndex = random(0, grid.length - 1);
    const widthIndex = random(0, grid[0].length - 1);
    return grid[heightIndex][widthIndex];
}

function assignWater(grid, points, power=10) {
    for (let index = 0; index < points; index++) {
        spreadTerrainFromStart(terrainTypes.deepWater.key, getRandomSquare(grid), power);
    }
}

function assignTerrain(grid, power=10) {
    const possibleTerrain = worldType.possTerrain;
    for (let index = 0; index < landCoastSquares.length; index++) {
        if(random(1,3) === 3) {
            spreadTerrainFromStart(sample(possibleTerrain), landCoastSquares[index], power);
        }
    }
}

function newStructure(square, type) {
    const {heightIndex, widthIndex, isVisible} = square;

    const structure = {
        ...type,
        heightIndex,
        widthIndex,
        isVisible,
        currentSquare: square
    }

    structure.dir = sample(shortDirs);
    
    structures.push(structure);

    return structure;
}

const defaultUnit = {
    name: "Warrior",
    isUnit: true,
    heightToSquare: .7,
    widthToHeight: .5,
    preyType: "human",
    isPredator: true,
    prey: ["dangerous-large", "regular-large", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
    activityLevel: 10,
    hp: 15,
    hunger: 100,
    speed: 1.5,
    range: 1,
    aggression: 3,
    attack: 6,
    defence: 5,
    escape: 3,
    isTerritoryRestricted: true,
    arrayType: "units"
}

function newUnit(square, tribe) {
    const unit = {
        ...defaultUnit,
        possTerrain: tribe.possTerrain,
        isVisible: square.isVisible,
        id: `unit-${unitId ++}`,
        heightIndex: square.heightIndex,
        widthIndex: square.widthIndex,
        currentSquare: square,
        tribeId: tribe.id,
        imgDir: tribe.unitImgDir,
        dir: sample(shortDirs)
    }

    unit.health = unit.hp
    unit.action = () => entityAction(unit, "units")

    units.push(unit);

    return unit;
}

function newPlayerUnit(square) {
    const unit = {
        ...defaultUnit,
        isPlayerUnit: true,
        resources: playerResources,
        heightToSquare: .18,
        possTerrain: ["grassland", "desert", "savannah", "forest", "marsh"],
        isTerritoryRestricted: false,
        isVisible: square.isVisible,
        id: `player-unit-${playerUnitId ++}`,
        heightIndex: square.heightIndex,
        widthIndex: square.widthIndex,
        currentSquare: square,
        imgDir: "red-black",
        dir: "s",
        arrayType: "playerUnits"
    }

    unit.health = unit.hp
    return unit;
}

function addStructuresAndUnits(square, tribe) {
    const {color, structures, imgDir} = tribe;
    square.innerTerritory = true;
    // square.borderColor = "red";
    
    if(tribe.possTerrain.indexOf(square.terrainType.key) > 0) {
        // square.village = true;

        if(random(1,3) === 1) {
           addStructure(square, sample(structures));
        } else if(random(1,3) === 1) {
            square.currentEntity = newUnit(square, tribe);
            tribe.units.push(square.unit);
        }
    }
}

export function addStructure(square, structure) {
    if(!square.structure && !square.plant) {
        square.structure = newStructure(square, structure);
    }
}

function markOuterTerritory(square, tribe) {
    square.outerTerritory = true;
    if(!square.innerTerritory && tribe.possTerrain.indexOf(square.terrainType.key) > 0) {
        square.borderColor = tribe.color;
    }
}

function startVillage(startSquare, tribe, power) {
    tribe.id = `tribe-${tribeId ++}`;
    tribesIdsArray.push(tribe.id);
    tribesById[tribe.id] = tribe;
    addStructure(startSquare, tribe.structures[0]);
    startSquare.currentEntity = newUnit(startSquare, tribe);
    tribe.units.push(startSquare.unit);

    // spreadFromPoint(startSquare, power, {callback: addStructuresAndUnits, innerParams: tribe});
    spreadFromPoint(startSquare, (power * 3), {callback: markOuterTerritory, innerParams: tribe});
}

function assignTribes(grid, number, power) {
    let assignedTribes = number;
    let safety = 100;

    while(assignedTribes > 0 && safety > 0) {
        safety --;
        const tribe = {...sample(worldType.tribes)};
        console.log("Asigning Tribe", tribe.key);
        
        const terrainKey = sample(tribe.startTerrain);
        const startSquare = world.terrainArrays[terrainKey] && sample(world.terrainArrays[terrainKey])

        // const startSquare = sample(landSquares);
        
        if(startSquare && !startSquare.outerTerritory) {
            startVillage(startSquare, tribe, power);
            assignedTribes --;
            
        }
    }
    
}

function assignPlayerUnit(grid, heightIndex, widthIndex) {
    const startSquare = grid[heightIndex][widthIndex];

    const player = newPlayerUnit(startSquare);
    startSquare.currentEntity = player;
    spreadFromPoint(startSquare, 3, {callback: (square) => {square.playerStartZone = true}});
    playerUnits.push(player);
}

function renderAllPlants() {
    let widthIndex = 0;
    // plants = [];

    for (const key in plantDirectory) {
        if (plantDirectory.hasOwnProperty(key)) {
            const plantDir = plantDirectory[key];
            const square = world.grid[0][widthIndex];

            const plant = newPlant(plantDir, square);
            plants.push(plant);
            // square.plants.push(plant);
            square.plant = plant;

            widthIndex ++;
        }
    }
}

// function getDirFromFacing(facing) {
//     if(facing.length === 1) {
//         return facing;
//     }

//     return sample(dirFind[facing]);
// }

// function turnCreature(creature) {
//     creature.facing = sample(facingDirs);
//     creature.dir = getDirFromFacing(creature.facing);
// }

// function moveCreature(creature) {
//     const moveSquare = creature.currentSquare[creature.facing];
//     const moveTerrain = moveSquare && moveSquare.terrainType;
//     if(moveSquare && !moveSquare.currentEntity && creature.possTerrain.indexOf(moveTerrain.key) !== -1) {
//         creature.currentSquare.currentEntity = false;
//         creature.currentSquare = moveSquare;
//         moveSquare.currentEntity = true;
//         creature.heightIndex = moveSquare.heightIndex;
//         creature.widthIndex = moveSquare.widthIndex;
//         creature.isSwim = moveTerrain.isSwim;
//     } else {
//         turnCreature(creature);
//     }
// }

// function turnAndMoveCreature(creature) {
//     turnCreature(creature);
//     moveCreature(creature);
// }

// function newCreature(creatureType, square) {
//     const creature = clone(creatureType);
//     creature.id = `creature-${creatureId}`;
//     creature.currentSquare = square;
//     creature.heightIndex = square.heightIndex;
//     creature.widthIndex = square.widthIndex;
//     creature.facing = sample(facingDirs);
//     creature.dir = getDirFromFacing(creature.facing);
//     creature.isSwim = square.terrainType.isSwim;
//     creatureId ++;


//     /*
//         Animal actions
//         - Turn
//         - Move
//         - Turn and Move
//     */

//     creature.action = function() {
//         if(random(1,10) >= creature.activityLevel) {
//             return;
//         }

//         let rand = random(1,5);

//         if(rand === 1) {
//             turnCreature(creature);
//         } else {
//             moveCreature(creature);
//         }

//         // if(rand < 3) {
//         //     console.log("Turn and Move");
            
//         //     turnAndMoveCreature(creature);
//         // }

//         // if(rand > 3 && rand < 5) {
//         //     console.log("Move");
//         //     moveCreature(creature);
//         // }

//         // if(rand === 6) {
//         //     turnCreature(creature);
//         // }
//     }

//     return creature;
// }

function assignCreatureToSquare(square, density) {
    if(square.currentEntity || square.innerTerritory) {
        return;
    }

    if(square.terrainType.creatures.length > 0) {
        let selection = sample(square.terrainType.creatures);
        // let selection = scorpion;
        if(selection) {
            if(selection.isHumanPredator && square.outerTerritory || selection.isHumanPredator && square.playerStartZone) {
                return;
            }
            const creature = getNewCreature(selection, square);
            creatures.push(creature);

            if(!creaturesByTerrain[square.terrainType.key]) {
                creaturesByTerrain[square.terrainType.key] = {}
                creaturesByTerrain[square.terrainType.key][creature.name] = 1;
            } else if(!creaturesByTerrain[square.terrainType.key][creature.name]) {
                creaturesByTerrain[square.terrainType.key][creature.name] = 1;
            } else {
                creaturesByTerrain[square.terrainType.key][creature.name] ++;
            }
            // square.creatures.push(creature);
            square.currentEntity = creature;
        }
    }
    // if(random(1, density) === 1) {
    //     const creature = newCreature(sample(square.terrainType.creatures), square);
    //     creatures.push(creature);
    //     square.creatures.push(creature)
    // }
}

function assignCreatures(grid, density) {
    const params = {
        grid,
        innerCallback: assignCreatureToSquare,
        innerParams: [density],
    }

    loopGrid(grid, params);
    // const square = grid[99][0];
    // assignCreatureToSquare(square, density);
}

function newPlant(plantType, square) {
    const plusMinus = random(1,2) === 2 ? 1 : -1;
    const plant = clone(plantType);
    const height = plant.heightToSquare * worldParams.squareHeight * worldParams.plantRelativeSize;

    plant.image = sample(plant.imageArray);
    plant.id = `plant-${plantId ++}`;
    plant.currentSquare = square;
    plant.heightIndex = square.heightIndex;
    plant.widthIndex = square.widthIndex;
    plant.height = height + (random(0, plant.sizeRange) * plusMinus);
    plant.isVisible = square.isVisible;
    plant.arrayType = "plants";

    return plant;
}

function assignPlantsToSquare(square, density) {
    if(square.plant || square.structure || square.currentEntity) {
        return;
    }

    if(square.terrainType.plants.length > 0) {
        let selection = sample(square.terrainType.plants);
        // let selection = scorpion;
        if(selection) {
            const plant = newPlant(selection, square);
            plants.push(plant);
            // square.plants.push(plant);
            square.plant = plant;
        }
    }
    // if(random(1, density) === 1) {
    //     const creature = newCreature(sample(square.terrainType.creatures), square);
    //     creatures.push(creature);
    //     square.creatures.push(creature)
    // }
}

function assignPlants(grid, density) {
    const params = {
        grid,
        innerCallback: assignPlantsToSquare,
        innerParams: [density],
    }

    loopGrid(grid, params); 
}

function loadTerrainArrays(grid) {
    const params = {
        grid,
        innerCallback: (square) => {
            if(!terrainArrays[square.terrainType.key]) {
                terrainArrays[square.terrainType.key] = [];
            }

            terrainArrays[square.terrainType.key].push(square);

            if(!square.terrainType.isWater){
                landSquares.push(square)
            }
        },
        // innerParams: [density],
    }
    loopGrid(grid, params);
    console.log("terrainArrays", terrainArrays);
    
}

function addTestStructure(square, structure) {

    structures.push(newStructure(square, structure));
}

export default function createNewWorld(height, width, worldTypeSet) {
    resetWorld(worldTypeSet);

    for (let heightIndex = 0; heightIndex < height; heightIndex++) {
        let row = [];
        for (let widthIndex = 0; widthIndex < width; widthIndex++) {
            const id= `square-${heightIndex}-${widthIndex}`;
            const square = newSquare(heightIndex, widthIndex, id);
            row.push(square);

            squaresById[id] = square;
        }
        world.grid.push(row);
    }

    

    const seaPoints = random(worldType.seaPoints[0], worldType.seaPoints[1]);
    const lakePoints = random(worldType.lakePoints[0], worldType.lakePoints[1]);

    const {
        permianNomad1, 
        permianNomad2, 
        permianNomad3, 
        permianNomad4,
        permianAdobe1, 
        permianAdobe2, 
        permianAdobe3, 
        permianAdobe4,
        permianFarmers1, 
        permianFarmers2, 
        permianFarmers3, 
        permianFarmers4,
        triassicRiver1,
        triassicRiver2,
        triassicRiver3,
        triassicRiver4,
        triassicLake1,
        triassicLake2,
        triassicLake3,
        triassicLake4
    } = structureDirectory;    

    assignSides(world.grid);
    assignWater(world.grid, seaPoints, worldType.seaPower);
    assignWater(world.grid, lakePoints, worldType.lakePower);
    mapCoast(world.grid);
    assignTerrain(world.grid, worldType.landPower);
    loadTerrainArrays(world.grid);
    // const startSquare = sample(landSquares);
    // const startSquare = world.grid[random(2,97)][random(2,97)];
    const startSquare = world.grid[50][50];
    console.log("START SQUARE", startSquare);
    
    setVisibility(startSquare, 3);
    assignPlayerUnit(world.grid, startSquare.heightIndex, startSquare.widthIndex);
    assignTribes(world.grid, 10, 3);
    // addTestStructure(world.grid[2][1], triassicLake1);
    // addTestStructure(world.grid[2][2], triassicLake2);
    // addTestStructure(world.grid[2][3], triassicLake3);
    // addTestStructure(world.grid[2][4], triassicLake4);
    // addTestStructure(world.grid[5][1], permianFarmers1);
    // addTestStructure(world.grid[5][2], permianFarmers2);
    // addTestStructure(world.grid[5][3], permianFarmers3);
    // addTestStructure(world.grid[5][4], permianFarmers4);

    // addTestStructure(world.grid[7][1], permianNomad1);
    // addTestStructure(world.grid[7][2], permianNomad2);
    // addTestStructure(world.grid[7][3], permianNomad3);
    // addTestStructure(world.grid[7][6], permianNomad4);
    assignPlants(world.grid, 20);
    // renderAllPlants();
    assignCreatures(world.grid, 30);
    console.log("Creatures length", creatures.length);
    console.log("CREATURES ___", creaturesByTerrain);
    
        
    return world;
}


/*
    steps:
    harvest plants
    choose tribe
    add population cap
    build structures
    upgrade structure
    produce new player unit




    // Perf improvement
    plants creatures ect loops through object renders memoized entity with update flag
*/