import pd from "../../components/plants/plant-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {terrainColors as colors} from "../colors";

const terrainColors = colors.generic;

export default {
    defualtTerrainType: "desert",
    seaPoints: [1, 3],
    seaPower: 50,
    lakePoints: [1, 3],
    lakePower: 50,
    landPower: 50,
    possTerrain: ["desert"],
    terrainTypes: {
        desert: {
          key: "desert",
          type: "desert",
          color: terrainColors.desert,
          isWater: false,
          creatures: [],
          plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
          resources: []
        },
        desertScrub: {
          key: "desertScrub",
          type: "desertScrub",
          color: terrainColors.desertScrub,
          isWater: false,
          creatures: [],
          plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
          resources: []
        },
        desertForest: {
          key: "desertForest",
          type: "desertForest",
          color: terrainColors.desertForest,
          isWater: false,
          creatures: [],
          plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
          resources: []
        },

        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
            resources: []
        },
        savannahScrub: {
            key: "savannahScrub",
            type: "savannahScrub",
            color: terrainColors.savannahScrub,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
            resources: []
        },
        savannahForest: {
            key: "savannahForest",
            type: "savannahForest",
            color: terrainColors.savannahForest,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
            resources: []
        },

        plain: {
            key: "plain",
            type: "plain",
            color: terrainColors.plain,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
            resources: []            
        },
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
            resources: []            
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
            resources: [
            ]
        },
        swampForest: {
            key: "swampForest",
            type: "swamp forest",
            color: terrainColors.swampForest,
            isWater: true,
            isSwim: true,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
            ], 10),
            resources: []
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            isWater: true,
            isSwim: true,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.horsetail, occurance: 1}
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