import plantDirectory from "../../components/plants/plant-directory";
import resourceDirectory from "../../components/resources/resource-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {generateCreatureArray} from "../../new-helpers/creature-helpers";
import {terrainColors as colors} from "../colors";
import structureDirectory from "../../components/structures/structure-directory";
import tribeDirectory from "../../components/units/tribeDirectory";

const terrainColors = colors.triassic;

const {
    triassicRiver,
    triassicLake
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
    seaPoints: [5, 10],
    seaPower: 20,
    lakePoints: [5, 10],
    lakePower: 5,
    riverPoints: [10, 20],
    riverPower: 20,
    landPower: 30,
    tribes: [triassicRiver, triassicLake],
    possTerrain: generateWeightedArray([
            {type: "savannah", occurance: 10}, 
            {type: "forest", occurance: 15}, 
            {type: "grassland", occurance: 10},
            {type: "marsh", occurance: 10}
        ], 0),
    terrainTypes: {
        desert: {
            key: "desert",
            type: "desert",
            color: terrainColors.desert,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: yellowRoundleaf, occurance: 1}
            ], 100),
            resources: generateWeightedArray([
                // {type: largeRedRock, occurance: 1},
                // {type: largeYellowRock, occurance: 1},
                // {type: largeDarkRedRock, occurance: 1}
            ], 100)
        },
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: yellowFern, occurance: 5},
                {type: lightGreenFernClump, occurance: 5},
                {type: redFern, occurance: 5},
                {type: orangeRoundleaf, occurance: 1}
            ], 50),
            resources: generateWeightedArray([
                // {type: xLargeGreyRock, occurance: 1},
                // {type: largeYellowRock, occurance: 1},
                // {type: largeGreyRock, occurance: 1},
            ], 200)
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: greenFern, occurance: 3},
                {type: pine, occurance: 10},  
                {type: umbrellaPine, occurance: 8},
                {type: scalyTreeFern, occurance: 5}
            ], 20),
            resources: generateWeightedArray([
                // {type: largeGreyRock, occurance: 1},
                // {type: largeBlackRock, occurance: 1},
            ], 200)
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: redFern, occurance: 5},
                {type: yellowFernClump, occurance: 5},
                {type: pine, occurance: 1},  
                {type: umbrellaPine, occurance: 3},
                {type: yellowRoundleaf, occurance: 1}
            ], 50),
            resources: generateWeightedArray([
                // {type: largeYellowRock, occurance: 1},
            ], 100)
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
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