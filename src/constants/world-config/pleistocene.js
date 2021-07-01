import plantDirectory from "../../components/plants/plant-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {generateCreatureArray} from "../../new-helpers/creature-helpers";
import {terrainColors as colors} from "../colors";
import structureDirectory from "../../components/structures/structure-directory";
import tribeDirectory from "../../components/units/tribeDirectory";

const terrainColors = colors.pleistocene;

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
    snowPine,
    snowFir,
    snowSpruce,
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
    greenRoundleaf,
    redwood
} = plantDirectory;

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
    defualtTerrainType: "grassland",
    seaPoints: [2, 4],
    seaPower: 30,
    lakePoints: [3, 6],
    lakePower: 5,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 0,
    tribes: [triassicRiver, triassicLake],
    possTerrain: generateWeightedArray([
            {type: "snowForest", occurance: 3},
            {type: "forest", occurance: 5}, 
            {type: "tundra", occurance: 5},
            {type: "marsh", occurance: 1},
            {type: "swampForest", occurance: 1}
            
        ], 0),
    terrainTypes: {
        tundra: {
            key: "tundra",
            type: "grassland",
            color: terrainColors.tundra,
            isWater: false,
            terrainPower: 120,
            creatures: [],
            plants: generateWeightedArray([
                {type: snowPine, occurance: 1},
                {type: greenFern, occurance: 3}
            ], 50),
            resources: []
        },
        snowForest: {
            key: "snowForest",
            type: "forest",
            color: terrainColors.snowForest,
            isWater: false,
            terrainPower: 70,
            creatures: [],
            plants: generateWeightedArray([
                {type: greenFern, occurance: 3},
                {type: snowPine, occurance: 10},
                {type: snowSpruce, occurance: 10},
                {type: snowFir, occurance: 10}
            ], 20),
            resources: []
        },
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: redFern, occurance: 5},
                {type: yellowFernClump, occurance: 5},
                {type: pine, occurance: 1},  
                {type: umbrellaPine, occurance: 1},
            ], 50),
            resources: []
        },
      forest: {
          key: "forest",
          type: "forest",
          color: terrainColors.forest,
          isWater: false,
          terrainPower: 120,
          creatures: [],
          plants: generateWeightedArray([
            {type: greenRoundleaf, occurance: 1},
            {type: umbrellaPine, occurance: 2},
            {type: greyUmbrellaPine, occurance: 4},
            {type: darkPine, occurance: 2},
            {type: silverFir, occurance: 2},
            {type: snowFir, occurance: 1},  
            {type: snowPine, occurance: 1},  
            {type: snowSpruce, occurance: 1},  
          ], 50),
          resources: []
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