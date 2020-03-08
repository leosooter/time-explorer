import {random, sample, clone} from "lodash";
import {worldParams} from "../constants/world";
import {getNewCreature} from "../helpers/creature-helpers";
import {loopGrid, spreadFromPoint} from "../helpers/grid-helpers";
import structureDirectory from "../components/structures/structure-directory";
import tribeDirectory from "../components/units/tribeDirectory";
// import terrainTypes from "../constants/terrainTypes";
import worldTypes from "../constants/world-types";

const {house1, house2, house3, house4} = structureDirectory;
const {green, greenYellow, blue, red, orange, yellowOrange} = tribeDirectory;
const tribes = [green, greenYellow, blue, red, orange, yellowOrange];
console.log("TRIBE ARRAY", tribes);


const shortDirs = ["n","s","e","w"];

// const facingDirs = ["n","s","e","w","ne","nw","se","sw"];

// const dirFind = {
//     "ne": ["n", "e"],
//     "se": ["s", "e"],
//     "nw": ["n", "w"],
//     "sw": ["s", "w"],
// }

const creatures = [];
const plants = [];
const structures = [];
const units = [];
const tribesById = {};
const tribesIdsArray = [];
const landCoastSquares = [];
const waterCoastSquares = [];
const landSquares = [];
const waterSquares = [];
const squaresById = {};

const creatureStats = {

}

let plantId = 0;
let tribeId = 0

export const world = {
    grid: [],
    creatures,
    plants,
    structures,
    units,
    waterSquares,
    landCoastSquares,
    waterCoastSquares,
    landSquares,
    squaresById
}

// import {spreadTerrainFromStart} from "./terrain-helpers";

const worldType = worldTypes["carboniferous"];
const {terrainTypes} = worldType;

const defaultTerrainType = worldType.defualtTerrainType;

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

function addToCoastArray(square) {
    for (let index = 0; index < square.dirSides.length; index++) {
        const sideSquare = square.dirSides[index];
        if(!sideSquare.terrainType.isWater) {
            waterCoastSquares.push(square);
            square.terrainType = terrainTypes.shallowWater;

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

function newSquare(heightIndex, widthIndex, id) {
    const defaultTerrain = clone(terrainTypes[defaultTerrainType]);
    defaultTerrain.color = morphColor(defaultTerrain.color, 5);
    const hasTree = !defaultTerrain.isWater && random(1,10) < defaultTerrain.treeChance;
    const entities = [];

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
        plant: null
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
    const {heightIndex, widthIndex} = square;
    if(!type) {
        type = sample([house1, house2, house3, house4])
    }

    const structure = {
        ...type,
        heightIndex,
        widthIndex,
        currentSquare: square
    }

    structure.dir = sample(shortDirs);
    
    structures.push(structure);

    return structure;
}

const defaultUnit = {
    name: "Warrior",
    heightToSquare: .7,
    widthToHeight: .7,
    preyType: "dangerous-large",
    isPredator: true,
    prey: ["regular-large", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
    possTerrain: ["grassland", "desert", "savannah", "forest"],
    activityLevel: 5,
    hp: 15,
    hunger: 100,
    speed: 1.5,
    range: 1,
    aggression: 3,
    attack: 5,
    defence: 5,
    escape: 3
}

function newUnit(square, tribe) {
    const unit = {
        ...defaultUnit,
        heightIndex: square.heightIndex,
        widthIndex: square.widthIndex,
        currentSquare: square,
        tribeId: tribe.id,
        imgDir: tribe.imgDir,
        dir: sample(shortDirs)
    }

    units.push(unit);

    return unit;
}

function addStructuresAndUnits(square, tribe) {
    const {color, structures, imgDir} = tribe;
    
    if(!square.terrainType.isWater) {
        square.borderColor = color;
        square.territory = true;

        if(random(1,3) === 1) {
            square.structure = newStructure(square, sample(structures));
        } else if(random(1,3) === 1) {
            square.currentEntity = newUnit(square, tribe);
            tribe.units.push(square.unit);
        }
    }
}

function startVillage(startSquare, power) {
    const tribe = {...sample(tribes)};
    
    tribe.id = `tribe-${tribeId ++}`;
    tribesIdsArray.push(tribe.id);
    tribesById[tribe.id] = tribe;

    spreadFromPoint(startSquare, power, {callback: addStructuresAndUnits, innerParams: tribe});
}

function assignTribes(grid, number, power) {
    let assignedTribes = number;
    let safety = 100;

    while(assignedTribes > 0 && safety > 0) {
        safety --;

        const startSquare = sample(landSquares);
        
        if(!startSquare.territory) {
            startVillage(startSquare, power);
            assignedTribes --;
            console.log("Assigning village", startSquare.heightIndex, startSquare.widthIndex);
            
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
    if(square.currentEntity || square.territory) {
        return;
    }

    if(square.terrainType.creatures.length > 0) {
        let selection = sample(square.terrainType.creatures);
        // let selection = scorpion;
        if(selection) {
            const creature = getNewCreature(selection, square);
            creatures.push(creature);
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

function loadLandSquares(grid) {
    const params = {
        grid,
        innerCallback: (square) => {if(!square.terrainType.isWater){landSquares.push(square)}},
        // innerParams: [density],
    }
    loopGrid(grid, params)
}

export default function createNewWorld(height, width) {
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

    assignSides(world.grid);
    assignWater(world.grid, seaPoints, worldType.seaPower);
    assignWater(world.grid, lakePoints, worldType.lakePower);
    mapCoast(world.grid);
    assignTerrain(world.grid, worldType.landPower);
    loadLandSquares(world.grid);
    assignTribes(world.grid, 5, 3);
    assignPlants(world.grid, 20);
    assignCreatures(world.grid, 30);
    console.log("Creatures length", creatures.length);
        
    return world;
}