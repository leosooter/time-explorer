import creatureDirectory from "../../components/creatures/creature-directory";
import plantDirectory from "../../components/plants/plant-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {terrainColors as colors} from "../colors";

const terrainColors = colors.devonian;

const {
    greaterArthropluera,
    lesserArthropluera,
    kingPulmonoscorpius,
    pulmonoscorpius,
    scorpion,
    greaterMisophilae,
    lesserMisophilae,
    greaterProterogyrinus,
    yellowCrocodile,
    purpleDarter,
    redDarter,
    redLystosaurus,
    yellowHerreresaurus,
    brownPostosuchus,
    greenPostosuchus,
    apatosaurus,
    apatosaurusHouse1,
    apatosaurusHouse2,
    apatosaurusHouse3,
    apatosaurusHouse4,
    silverBarb,
    blueFish,
    yellowFish,
    greenFish,
    allosaurus,
    sarcophaganax,
    ceratosaurus,
    yellowOrnitholestes,
    blueOrnitholestes,
    yellowKentrosaurus,
    greenKentrosaurus,
    blueStegosaurus,
    redStegosaurus,
    hyneria,
    hynerpeton,
    dunkleosteus
} = creatureDirectory;

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
            creatures: generateWeightedArray([
                {type: scorpion, occurance: 1},
            ], 500),
            plants: generateWeightedArray([
            ], 100),
            resources: []
        },
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            isSwim: false,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 1},
                {type: scorpion, occurance: 3},
                {type: hynerpeton, occurance: 2}
            ], 50),
            plants: generateWeightedArray([
                {type: yellowMoss, occurance: 3},
                {type: greenMoss, occurance: 5},
                {type: yellowGlobe, occurance: 10},  
            ], 50),
            resources: []
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            isSwim: false,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 3},
                {type: scorpion, occurance: 3}
            ], 500),
            plants: generateWeightedArray([
                {type: yellowMoss, occurance: 3},
                {type: orangeMoss, occurance: 5},
            ], 10),
            resources: []
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: hyneria, occurance: .4},
                {type: hynerpeton, occurance: 4},
            ], 25),
            plants: generateWeightedArray([
                {type: yellowGlobe, occurance: 6},
                {type: purpleGlobe, occurance: 10}, 
            ], 10),
            resources: []
        },
        shallowWater: {
            key: "shallowWater",
            type: "shallow water",
            color: terrainColors.shallowWater,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: hyneria, occurance: 1},
                {type: hynerpeton, occurance: 3},
                {type: silverBarb, occurance: 1},
                {type: greenFish, occurance: 1},
                {type: yellowFish, occurance: 1},
            ], 70),
            plants: [],
            resources: []
        },
        deepWater: {
            key: "deepWater",
            type: "deep water",
            color: terrainColors.deepWater,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: dunkleosteus, occurance: 1},
                {type: silverBarb, occurance: 2},
                {type: greenFish, occurance: 300},
            ], 100),
            plants: [],
            resources: []
        },
    }
}