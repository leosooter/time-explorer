import creatureDirectory from "../../components/creatures/creature-directory";
import plantDirectory from "../../components/plants/plant-directory";
import resourceDirectory from "../../components/resources/resource-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {terrainColors as colors} from "../colors";
import structureDirectory from "../../components/structures/structure-directory";
import tribeDirectory from "../../components/units/tribeDirectory";

const terrainColors = colors.ultraRealm;

const {
    } = tribeDirectory;

const {
} = structureDirectory;

const {
  megaGorgonopsid,
  megaPostosuchus,
  megaMisophilae,
  megaPulmonoscorpius
} = creatureDirectory;

const {
  greenCalamite,
  orangeCalamite,
  purpleWaterCalamite
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
    seaPoints: [1, 2],
    seaPower: 100,
    lakePoints: [2, 3],
    lakePower: 20,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 50,
    tribes: [],
    possTerrain: generateWeightedArray([
            {type: "forest", occurance: 15}, 
            {type: "marsh", occurance: 15},
        ], 0),
    terrainTypes: {
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            creatures: generateWeightedArray([
              {type: megaMisophilae, occurance: 2},
              {type: megaPostosuchus, occurance: 1},
              {type: megaPulmonoscorpius, occurance: 2}
            ], 100),
            plants: generateWeightedArray([
                {type: orangeCalamite, occurance: 5},
                {type: greenCalamite, occurance: 5},
            ], 20),
            resources: [
              // {type: largeBlackRock, occurance: 1},
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1}
            ]
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            creatures: generateWeightedArray([
              {type: megaGorgonopsid, occurance: 3},
              {type: megaPostosuchus, occurance: 1},
              {type: megaPulmonoscorpius, occurance: 2}
            ], 500),
            plants: generateWeightedArray([
              {type: orangeCalamite, occurance: 1},
            ], 100),
            resources: [
              // {type: largeYellowRock, occurance: 1}
            ]
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
              {type: megaMisophilae, occurance: 2},
            ], 250),
            plants: generateWeightedArray([
              {type: orangeCalamite, occurance: 5},
              {type: greenCalamite, occurance: 5},
              {type: purpleWaterCalamite, occurance: 10},
            ], 100),
            resources: []
        },
        shallowWater: {
            key: "shallowWater",
            type: "shallow water",
            color: terrainColors.shallowWater,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
            ], 250),
            plants: generateWeightedArray([
              {type: purpleWaterCalamite, occurance: 5},
            ], 10),
            resources: []
        },
        deepWater: {
            key: "deepWater",
            type: "deep water",
            color: terrainColors.deepWater,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
            ], 2500),
            plants: generateWeightedArray([
              {type: orangeCalamite, occurance: 50},
            ], 1000),
            resources: []
        },
    }
}