// import creatureDirectory from "../../components/creatures/creature-directory";
import plantDirectory from "../../components/plants/plant-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {generateCreatureArray} from "../../new-helpers/creature-helpers";
import {terrainColors as colors} from "../colors";
import tribeDirectory from "../../components/units/tribeDirectory";

const terrainColors = colors.permian;
const {
    permianNomads,
    permianAdobe,
    permianFarmers
} = tribeDirectory;

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
  seaPoints: [0, 0],
  seaPower: 60,
  lakePoints: [0, 0],
  lakePower: 20,
  riverPoints: [0, 0],
  riverPower: 20,
  landPower: 0,
  possTerrain: ["savannah"],
  tribes: [permianAdobe, permianFarmers, permianNomads],
  terrainTypes: {
    desert: {
      key: "desert",
      type: "desert",
      color: terrainColors.desert,
      isWater: false,
      creatures: [],
      plants: [],
      resources: []
    },
    savannah: {
      key: "savannah",
      type: "savannah",
      color: terrainColors.savannah,
      isWater: false,
      creatures: [],
      plants: [],
      resources: []
    },
    grassland: {
      key: "grassland",
      type: "grassland",
      color: terrainColors.grassland,
      isWater: false,
      creatures: [],
      plants: [],
      resources: []
    },
    forest: {
      key: "forest",
      type: "forest",
      color: terrainColors.forest,
      isWater: false,
      creatures: [],
      plants: [],
      resources: []
    },
    swampForest: {
      key: "swampForest",
      type: "swampForest",
      color: terrainColors.swampForest,
      isWater: true,
      creatures: [],
      plants: [],
      resources: []
    },
    marsh: {
      key: "marsh",
      type: "marsh",
      color: terrainColors.marsh,
      isWater: true,
      creatures: [],
      plants: [],
      resources: []
    },
    shallowWater: {
      key: "shallowWater",
      type: "shallowWater",
      color: terrainColors.shallowWater,
      isWater: true,
      creatures: [],
      plants: [],
      resources: []
    },
    deepWater: {
      key: "deepWater",
      type: "deepWater",
      color: terrainColors.deepWater,
      isWater: true,
      creatures: [],
      plants: [],
      resources: []
    }
  }
}