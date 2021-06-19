import creatureDirectory from "../../components/creatures/creature-directory";
import plantDirectory from "../../components/plants/plant-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
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
    possTerrain: [],
    tribes: [permianAdobe, permianFarmers, permianNomads],
    terrainTypes: {
      savannah: {
        key: "savannah",
        type: "savannah",
        color: terrainColors.savannah,
        isWater: false,
        creatures: [],
        plants: [],
        resources: []
    },
  }
}