import plantDirectory from "../../components/plants/plant-directory";
import resourceDirectory from "../../components/resources/resource-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {generateCreatureArray} from "../../new-helpers/creature-helpers";
import {terrainColors as colors} from "../colors";

const terrainColors = colors.devonian;

const {
    horsetail,
    goldenHorsetail,
    giantHorsetail,
    /////////////////////////////////// Trees
    tallCalamite,
    yellowLycopsid,
    shrubLycopsid,
    greenCalamite,
    orangeCalamite,
    purpleWaterCalamite,
    orangeWaterCalamite,
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
    defualtTerrainType: "desert",
    seaPoints: [1, 3],
    seaPower: 100,
    lakePoints: [20, 30],
    lakePower: 20,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 30,
    possTerrain: generateWeightedArray([
            {type: "grassland", occurance: 1}, 
            {type: "savannah", occurance: 1}, 
            {type: "marsh", occurance: 3}
        ], 0),
    terrainTypes: {
        desert: {
            key: "desert",
            type: "desert",
            color: terrainColors.desert,
            isWater: false,
            creatures: [],
            plants: generateWeightedArray([
            ], 100),
            resources: [
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1},
            ]
        },
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            isSwim: false,
            creatures: [],
            plants: generateWeightedArray([
                {type: yellowMoss, occurance: 3},
                {type: yellowGlobe, occurance: 3},
                {type: orangeCalamite, occurance: 1},
                {type: greenCalamite, occurance: 2}, 
                {type: tallCalamite, occurance: 1}, 
            ], 50),
            resources: [
              // {type: largeYellowRock, occurance: 1},
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
                {type: yellowMoss, occurance: 3},
                {type: orangeMoss, occurance: 5},
                {type: orangeCalamite, occurance: 5},
            ], 10),
            resources: [
              // {type: largeYellowRock, occurance: 1},
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
                {type: yellowGlobe, occurance: 6},
                {type: purpleGlobe, occurance: 10},
                {type: orangeWaterCalamite, occurance: 10},
                {type: purpleWaterCalamite, occurance: 10},  
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