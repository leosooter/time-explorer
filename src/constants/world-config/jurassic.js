import plantDirectory from "../../components/plants/plant-directory";
import resourceDirectory from "../../components/resources/resource-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {generateCreatureArray} from "../../new-helpers/creature-helpers";
import {terrainColors as colors} from "../colors";
import structureDirectory from "../../components/structures/structure-directory";
import tribeDirectory from "../../components/units/tribeDirectory";

const terrainColors = colors.jurassic;

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
    fallenPolycarpus,
    marshPine,
    darkMarshPine,
    lightMarshPine,
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
    darkFern,
    redFern,
    lowFern,
    fern,
    blueFern,
    yellowFernClump,
    greenFernClump,
    redFernClump,
    lightGreenFernClump,
    greenBrownFernClump,
    darkGreenFernClump,
    youngBlueTreeFern,
    youngLightGreenTreeFern,
    LightGreenTreeFern,
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
    greenRoundleaf,
    redwood
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
    defualtTerrainType: "savannah",
    seaPoints: [2, 4],
    seaPower: 30,
    lakePoints: [3, 6],
    lakePower: 5,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 0,
    tribes: [triassicRiver, triassicLake],
    possTerrain: generateWeightedArray([
            {type: "forest", occurance: 1}, 
            {type: "grassland", occurance: 1},
            {type: "marsh", occurance: 1},
            {type: "swampForest", occurance: 1}
        ], 0),
    terrainTypes: {
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            terrainPower: 120,
            creatures: [],
            plants: generateWeightedArray([
              {type: greenBrownFernClump, occurance: 10},
              {type: greenFernClump, occurance: 5},             
              {type: lightGreenFernClump, occurance: 12},
              {type: darkGreenFernClump, occurance: 2},
              {type: greenFern, occurance: 5},              
              {type: blueFern, occurance: 3},
              {type: lowFern, occurance: 2},
              {type: fern, occurance: 4},
              {type: darkFern, occurance: 1}
            ], 50),
            resources: [
              // {type: largeYellowRock, occurance: 1},
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1}
            ]
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            terrainPower: 70,
            creatures: [],
            plants: generateWeightedArray([
              {type: greenFern, occurance: 3},
              {type: lowFern, occurance: 3},
              {type: blueFern, occurance: 5},
              {type: darkFern, occurance: 3},
              {type: darkGreenFernClump, occurance: 3},
              {type: fern, occurance: 3},
              {type: tallFern, occurance: 10}, 
              {type: blueTreeFern, occurance: 10},
              {type: scalyTreeFern, occurance: 8},
              {type: youngBlueTreeFern, occurance: 6}, 
              {type: youngLightGreenTreeFern, occurance: 8},
              {type: polycarpus, occurance: 10},
              {type: fallenPolycarpus, occurance: 8},
              {type: LightGreenTreeFern, occurance: 10},
              {type: lightMarshPine, occurance: 1},
              {type: buttressRoot, occurance: 5},
              {type: goldenButtressRoot, occurance: 2},
              {type: greenRoundleaf, occurance: 6},
              {type: darkPine, occurance: 1},
              {type: umbrellaPine, occurance: 5},
              {type: greyUmbrellaPine, occurance: 1},
              {type: silverFir, occurance: 1}
            ], 20),
            resources: [
              // {type: largeBlackRock, occurance: 1},
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1},
            ]
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            creatures: [],
            plants: [],
            resources: [
              {type: largeYellowRock, occurance: 1},
            ]
        },
        swampForest: {
            key: "swampForest",
            type: "swamp forest",
            color: terrainColors.swampForest,
            isWater: true,
            isSwim: true,
            terrainPower: 30,
            creatures: [],
            plants: generateWeightedArray([
                {type: horsetail, occurance: 3},
                {type: buttressRoot, occurance: 10},
            ], 10),
            resources: []
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            isWater: true,
            isSwim: true,
            terrainPower: 40,
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