import plantDirectory from "../../components/plants/plant-directory";
import resourceDirectory from "../../components/resources/resource-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {generateCreatureArray} from "../../new-helpers/creature-helpers";
import {terrainColors as colors} from "../colors";

const terrainColors = colors.carboniferous;

const {
    barrelFern,
    fern,
    reed,
    marshPine,
    darkMarshPine,
    polycarpus,
    buttressRoot,
    goldenButtressRoot,
    greenFern,
    yellowGlobe,
    horsetail,
    giantHorsetail,
    yellowMoss,
    greenMoss,
    redFern
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
    defualtTerrainType: "forest",
    seaPoints: [3, 5],
    seaPower: 60,
    lakePoints: [20, 30],
    lakePower: 20,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 30,
    possTerrain: generateWeightedArray([
            {type: "grassland", occurance: 8}, 
            {type: "swampForest", occurance: 30}, 
            {type: "marsh", occurance: 5}
        ], 0),
    terrainTypes: {
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            isSwim: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: horsetail, occurance: 1},
                {type: fern, occurance: 5},
                {type: greenFern, occurance: 5},
                {type: yellowGlobe, occurance: 3},  
                {type: polycarpus, occurance: 1}
            ], 50),
            resources: [
              // {type: largeBlackRock, occurance: 1},
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1},
            ]
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            isSwim: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: giantHorsetail, occurance: 5}, 
                {type: greenFern, occurance: 3},
                {type: greenMoss, occurance: 2},  
                {type: horsetail, occurance: 3}, 
                {type: polycarpus, occurance: 12},
                {type: marshPine, occurance: 1},
                {type: darkMarshPine, occurance: 7},
                {type: buttressRoot, occurance: 1},
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
            isSwim: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: yellowMoss, occurance: 5}, 
                {type: redFern, occurance: 5},
                {type: polycarpus, occurance: 1}
            ], 50),
            resources: [
              // {type: largeYellowRock, occurance: 1},
              // {type: largeBlackRock, occurance: 1},
            ]
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            isWater: true,
            isSwim: true,
            creatures: [],
            plants: generateWeightedArray([
                {type: horsetail, occurance: 10},
                {type: giantHorsetail, occurance: 5},
                {type: yellowGlobe, occurance: 4} 
            ], 20),
            resources: []
        },
        swampForest: {
            key: "swampForest",
            type: "swamp forest",
            color: terrainColors.swampForest,
            isWater: true,
            isSwim: true,
            creatures: [],
            plants: generateWeightedArray([
                {type: buttressRoot, occurance: 15},
                {type: goldenButtressRoot, occurance: 1}, 
            ], 20),
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