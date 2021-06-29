// import cd from "../../components/creatures/creature-directory";
import pd from "../../components/plants/plant-directory";
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
    house1,
    house2,
    house3,
    house4
} = structureDirectory;

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
    Player can move farther over grassland or savannah than through forest or marsh, 
    shallow/deep water may require different types of boats

deep water
shallow water
grassland
savannah 
forest
desert
marsh - wet version of grassland
swamp forest - wet version of forest

Land - 
    large predators
        tarborosaurus grassland savannah
        tyrannosaurus savannah desert
        spinosaurus - marsh shallow water

    smaller predators
        utahraptor grassland forest
        dienonycus - forest swampForest grassland
        velociraptor desert savannah


    large Herbivore
        apatasauros savanah

        greyTriceratops savanah grassland
        brownTriceratops desert savanah
        greenStyracosaurus grassland forest
        blueStyracosaurus swampForest grassland

        greyParasaurolophus marsh forest
        blueParasaurolophus swampForest marsh
        yellowOuranosaurus desert
        orangeOuranosaurus savanah
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
    tribes: [triassicRiver, triassicLake],
    possTerrain: generateWeightedArray([
            {type: "grassland", occurance: 30}, 
            {type: "forest", occurance: 15}, 
            {type: "swampForest", occurance: 10},
            {type: "marsh", occurance: 5},
            {type: "desert", occurance: 5},
        ], 0),
    terrainTypes: {
        desert: {
          key: "desert",
          type: "desert",
          color: terrainColors.desert,
          isWater: false,
          creatures: [],
          plants: generateWeightedArray([
              {type: pd.orangeRoundleaf, occurance: 6},
              {type: pd.barrelFern, occurance: 6},
              {type: pd.redFernClump, occurance: 6},
              {type: pd.redFern, occurance: 6}
          ], 200),
          resources: [
            // {type: largeRedRock, occurance: 2},
            // {type: largeDarkRedRock, occurance: 1}
          ]
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.redFern, occurance: 5},
                {type: pd.yellowFern, occurance: 5},
                {type: pd.yellowFernClump, occurance: 8},
                {type: pd.redFernClump, occurance: 4},
                {type: pd.yellowRoundleaf, occurance: 3},
                {type: pd.orangeRoundleaf, occurance: 1}
            ], 50),
            resources: [
              // {type: largeYellowRock, occurance: 1}
            ]
        },
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.greenBrownFernClump, occurance: 10},
                {type: pd.greenFernClump, occurance: 5},
                {type: pd.redFernClump, occurance: 1},
                {type: pd.yellowFernClump, occurance: 8},
                {type: pd.lightGreenFernClump, occurance: 12},
                {type: pd.darkGreenFernClump, occurance: 2},
                {type: pd.yellowFern, occurance: 8},
                {type: pd.greenFern, occurance: 5},
                {type: pd.redFern, occurance: 1},
                {type: pd.blueFern, occurance: 3},
                {type: pd.lowFern, occurance: 2},
                {type: pd.fern, occurance: 4},
                {type: pd.darkFern, occurance: 1}
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
            creatures: [],
            plants: generateWeightedArray([
                {type: pd.greenFern, occurance: 3},
                {type: pd.lowFern, occurance: 3},
                {type: pd.blueFern, occurance: 3},
                {type: pd.darkFern, occurance: 3},
                {type: pd.darkGreenFernClump, occurance: 3},
                {type: pd.fern, occurance: 3},
                {type: pd.tallFern, occurance: 10}, 
                {type: pd.blueTreeFern, occurance: 10},
                {type: pd.scalyTreeFern, occurance: 8},
                {type: pd.youngBlueTreeFern, occurance: 6}, 
                {type: pd.youngLightGreenTreeFern, occurance: 8},
                {type: pd.polycarpus, occurance: 10},
                {type: pd.fallenPolycarpus, occurance: 18},
                {type: pd.LightGreenTreeFern, occurance: 10},
                {type: pd.lightMarshPine, occurance: 1},
                {type: pd.buttressRoot, occurance: 5},
                {type: pd.goldenButtressRoot, occurance: 5},
                {type: pd.greenRoundleaf, occurance: 6},
                {type: pd.darkPine, occurance: 2},
                {type: pd.umbrellaPine, occurance: 2},
                {type: pd.greyUmbrellaPine, occurance: 1},
                {type: pd.silverFir, occurance: 1}
            ], 20),
            resources: [
              // {type: largeBlackRock, occurance: 1},
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1}
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
                {type: pd.buttressRoot, occurance: 15},
                {type: pd.goldenButtressRoot, occurance: 5},
                {type: pd.darkMarshPine, occurance: 8},
                {type: pd.lightMarshPine, occurance: 4}
            ], 20),
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
                {type: pd.horsetail, occurance: 3},
                {type: pd.gianthorsetail, occurance: 3},
                {type: pd.goldenhorsetail, occurance: 3},
                {type: pd.reed, occurance: 1},
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