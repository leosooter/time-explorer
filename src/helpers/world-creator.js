import {random, sample, clone} from "lodash";
import {worldParams} from "../constants/world";
// import terrainTypes from "../constants/terrainTypes";
import worldTypes from "../constants/world-types";

const dirs = ["ne","nw","se","sw"];

const creatures = [];
const plants = [];
const landCoastSquares = [];
const waterCoastSquares = [];
const landSquares = [];
const waterSquares = [];
const squaresById = {};

let creatureId = 1;
let plantId = 1;

export const world = {
    grid: [],
    creatures,
    plants,
    waterSquares,
    landCoastSquares,
    waterCoastSquares,
    landSquares,
    squaresById
}

// import {spreadTerrainFromStart} from "./terrain-helpers";

const worldType = worldTypes["carboniferous"];
const {terrainTypes} = worldType;

let isFirst = true;

const defaultTerrainType = worldType.defualtTerrainType;

function loopGrid(params) {
    const {grid, innerCallback, outerCallback, innerParams, outerParams} = params;
    for (let heightIndex = 0; heightIndex < grid.length; heightIndex++) {
        typeof outerCallback === "function" && outerCallback(grid[heightIndex], outerParams);

        for (let widthIndex = 0; widthIndex < grid[heightIndex].length; widthIndex++) {
            const square = grid[heightIndex][widthIndex];
            innerCallback(square, innerParams);
        }
    }
}

function addToCoastArray(square) {
    for (let index = 0; index < square.dirSides.length; index++) {
        const sideSquare = square.dirSides[index];
        if(!sideSquare.terrainType.isSea) {
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

    if(terrainType.isSea) {
        waterSquares.push(start);
    }

    function spreadInDirection(dir) {        
        const rand = random(1, power);

        if(start[dir] && !start[dir].isWaterMapped) {
            if(rand >= 10) {
                spreadTerrainFromStart(terrainType.key, start[dir], power - 1, endTerrain);
            }
        }
    }

    spreadInDirection("north");
    spreadInDirection("south");
    spreadInDirection("east");
    spreadInDirection("west");
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
    const hasTree = !defaultTerrain.isSea && random(1,10) < defaultTerrain.treeChance;
    const entities = [];
    const hasCreature = isFirst;
    isFirst = false;
    
    if(hasTree) {
        entities.push({type: "tree"});
    }

    return {
        heightIndex,
        widthIndex,
        id,
        entities,
        hasUnit: false,
        hasTree,
        terrainType: defaultTerrain,
        isSea: defaultTerrain.isSea,
        dirSides: [],
        allSides: [],
        hasCreature,
        unit: null
    }
}

function assignSides(grid) {
    for (let heightIndex = 0; heightIndex < grid.length; heightIndex++) {
        for (let widthIndex = 0; widthIndex < grid[0].length; widthIndex++) {
            const square = grid[heightIndex][widthIndex];
            const westSquare = grid[heightIndex][widthIndex - 1];
            const northSquare = grid[heightIndex - 1] && grid[heightIndex - 1][widthIndex];
            if(northSquare) {
                square.n = northSquare;
                northSquare.s = square;
                square.dirSides.push(northSquare);
                northSquare.dirSides.push(square);

                // if(westSquare) {
                //     square.nw = northSquare.w
                //     square.allSides.push(northSquare.w);
                //     northSquare.w.se = square;
                //     northSquare.w.allSides.push(square);
                // }

                // if(northSquare.e) {

                // }
            }

            if(westSquare) {
                square.w = westSquare;
                westSquare.e = square;
                square.dirSides.push(westSquare);
                westSquare.dirSides.push(square);
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

function newCreature(creatureType, square) {
    const creature = clone(creatureType);
    creature.id = `creature-${creatureId}`;
    creature.currentSquare = square;
    creature.heightIndex = square.heightIndex;
    creature.widthIndex = square.widthIndex;
    creature.dir = sample(dirs);
    creature.isSwim = square.terrainType.isSwim;
    creatureId ++;

    // creature.action = function() {
    //     let plusMinus = sample([1, -1]);
    //     if(random(1,2) === 2) {
    //         if(this.heightIndex + plusMinus < 99 && this.heightIndex + plusMinus >= 0) {
    //             this.heightIndex += plusMinus;
    //             plusMinus = sample([1, -1]);
    //         }
    //     }
        
    //     if(random(1,2) === 2) {
    //         this.widthIndex += plusMinus;
    //     }
    //     this.currentSquare = world.grid[this.heightIndex][this.widthIndex];
    // }

    return creature;
}

function assignCreatureToSquare(square, density) {
    if(square.unit) {
        return;
    }

    if(square.terrainType.creatures.length > 0) {
        let selection = sample(square.terrainType.creatures);
        // let selection = scorpion;
        if(selection) {
            const creature = newCreature(selection, square);
            creatures.push(creature);
            // square.creatures.push(creature);
            square.unit = creature;
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

    loopGrid(params);
    // const square = grid[99][0];
    // assignCreatureToSquare(square, density);
}

function newPlant(plantType, square) {
    const plusMinus = random(1,2) === 2 ? 1 : -1;
    const plant = clone(plantType);
    const height = plant.heightToSquare * worldParams.squareHeight * worldParams.plantRelativeSize;

    plant.image = sample(plant.imageArray);
    plant.id = `plant-${plantId}`;
    plant.currentSquare = square;
    plant.heightIndex = square.heightIndex;
    plant.widthIndex = square.widthIndex;
    plant.height = height + (random(0, plant.sizeRange) * plusMinus);
    plant.id = plantId;

    plantId ++;

    return plant;
}

function assignPlantsToSquare(square, density) {
    if(square.unit) {
        return;
    }

    if(square.terrainType.plants.length > 0) {
        let selection = sample(square.terrainType.plants);
        // let selection = scorpion;
        if(selection) {
            const plant = newPlant(selection, square);
            plants.push(plant);
            // square.plants.push(plant);
            square.unit = plant;
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

    loopGrid(params); 
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
    assignPlants(world.grid, 20);
    assignCreatures(world.grid, 30);
    console.log("Creatures length", creatures.length);
        
    return world;
}