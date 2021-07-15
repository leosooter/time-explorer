import plantDirectory from "../../components/plants/plant-directory";
import resourceDirectory from "../../components/resources/resource-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {generateCreatureArray} from "../../new-helpers/creature-helpers";
import {terrainColors as colors} from "../colors";
import structureDirectory from "../../components/structures/structure-directory";
import tribeDirectory from "../../components/units/tribeDirectory";

const terrainColors = colors.permian;

const {
    house1,
    house2,
    house3,
    house4
} = structureDirectory;

const {
    permianNomads,
    permianAdobe,
    permianFarmers
} = tribeDirectory;

const {
    horsetail,
    goldenHorsetail,
    giantHorsetail,
    /////////////////////////////////// Trees
    polycarpus,
    marshPine,
    darkMarshPine,
    buttressRoot,
    goldenButtressRoot,
    /////////////////////////////////// Conifers
    pine,
    darkPine,
    silverFir,
    umbrellaPine,
    greyUmbrellaPine,
    //tree-fern
    /////////////////////////////////// Ferns
    barrelFern,
    tallFern,
    tallDarkFern,
    greenFern,
    yellowFern,
    redFern,
    blueFern,
    yellowFernClump,
    greenFernClump,
    redFernClump,
    lightGreenFernClump,
    greenBrownFernClump,
    darkGreenFernClump,
    youngBlueTreeFern,
    youngLightGreenTreeFern,
    scalyTreeFern,
    blueTreeFern,
    ////////////////////////////////// Reeds
    reed,
    //////////////////////////////// Moss
    greenMoss,
    yellowMoss,
    orangeMoss,
    //////////////////////////////// Misc
    yellowGlobe,
    purpleGlobe,
    //////////////////////////////// Shrubs
    yellowRoundleaf,
    orangeRoundleaf,
    greenRoundleaf
} = plantDirectory;

const {
  largeBlackRock,
  largeDarkRedRock,
  largeGreyRock,
  largeRedRock,
  largeYellowRock,
  xLargeGreyRock
} = resourceDirectory;

/*
Terrain Types define plant density and animal habitat and player movement types
example: 
    Player can move farther over plains or savannah than through forest or marsh, 
    shallow/deep water may require different types of boats

deep water
shallow water
plain
savannah
forest
desert
marsh - wet version of plains
swamp forest - wet version of forest
*/

export default {
    defualtTerrainType: "desert",
    seaPoints: [2, 3],
    seaPower: 15,
    lakePoints: [20, 30],
    lakePower: 15,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 25,
    tribes: [permianAdobe, permianFarmers, permianNomads],
    possTerrain: generateWeightedArray([
            {type: "savannah", occurance: 10}, 
            {type: "forest", occurance: 2}, 
            {type: "grassland", occurance: 5},
            {type: "marsh", occurance: 1}
        ], 0),
    terrainTypes: {
        desert: {
            key: "desert",
            type: "desert",
            color: terrainColors.desert,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: barrelFern, occurance: 1},
                {type: yellowRoundleaf, occurance: 1},
                {type: plantDirectory.yellowPebbles, occurance: 10}
            ], 100),
            resources: [
              // {type: largeYellowRock, occurance: 1},
              // {type: largeRedRock, occurance: 1},
              // {type: largeDarkRedRock, occurance: 1},
              // {type: largeGreyRock, occurance: 1},
            ]
        },
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            creatureDensity: 10,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                // {type: fern, occurance: 5},
                {type: yellowFern, occurance: 5},
                {type: greenFern, occurance: 5},
                {type: redFern, occurance: 5},
                {type: yellowMoss, occurance: 5},
                {type: orangeRoundleaf, occurance: 1}
            ], 50),
            resources: [
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1},
            ]
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            creatureDensity: 10,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: greenFern, occurance: 3},
                {type: greenMoss, occurance: 2},  
                {type: polycarpus, occurance: 4},
            // {type: marshPine, occurance: 1},
                {type: darkMarshPine, occurance: 8},
                {type: greenRoundleaf, occurance: 6}
            ], 20),
            resources: [
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1},
            ]
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            creatureDensity: 20,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: redFern, occurance: 5},
                {type: yellowFern, occurance: 5},
                {type: darkMarshPine, occurance: 3},
                {type: greenRoundleaf, occurance: 4},
                {type: orangeRoundleaf, occurance: 1},
                {type: yellowRoundleaf, occurance: 1}
            ], 50),
            resources: [
              // {type: largeYellowRock, occurance: 1},
            ]
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            creatureDensity: 20,
            isWater: true,
            isSwim: true,
            creatures: [],
            plants: generateWeightedArray([
                {type: horsetail, occurance: 3},
                {type: goldenHorsetail, occurance: 1},
            ], 10),
            resources: []
        },
        shallowWater: {
            key: "shallowWater",
            type: "shallow water",
            color: terrainColors.shallowWater,
            isWater: true,
            isSwim: true,
            creatures: [],
            plants: [],
            resources: []
        },
        deepWater: {
            key: "deepWater",
            type: "deep water",
            color: terrainColors.deepWater,
            isWater: true,
            isSwim: true,
            creatures: [],
            plants: [],
            resources: []
        },
    }
}