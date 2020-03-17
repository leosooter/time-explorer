import creatureDirectory from "../../components/creatures/creature-directory";
import plantDirectory from "../../components/plants/plant-directory";
import {generateWeightedArray} from "../../helpers/array-helpers";
import {terrainColors as colors} from "../colors";
import structureDirectory from "../../components/structures/structure-directory";
import tribeDirectory from "../../components/units/tribeDirectory";

const terrainColors = colors.jurassic;

const {
        triassicRiver,
        triassicLake
    } = tribeDirectory;

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
    purpleLystosaurus,
    greenHerreresaurus,
    yellowHerreresaurus,
    brownPostosuchus,
    greenPostosuchus
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
    greenRoundleaf
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
    defualtTerrainType: "savannah",
    seaPoints: [3, 5],
    seaPower: 50,
    lakePoints: [3, 6],
    lakePower: 5,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 50,
    tribes: [triassicRiver, triassicLake],
    possTerrain: generateWeightedArray([
            {type: "forest", occurance: 20}, 
            {type: "grassland", occurance: 15},
            {type: "marsh", occurance: 15},
            {type: "swampForest", occurance: 15}
        ], 0),
    terrainTypes: {
        desert: {
            key: "desert",
            type: "desert",
            color: terrainColors.desert,
            isWater: false,
            creatures: generateWeightedArray([
                {type: scorpion, occurance: 6},
                {type: yellowHerreresaurus, occurance: 3},
                {type: brownPostosuchus, occurance: 1},
                {type: redLystosaurus, occurance: 6},
            ], 500),
            plants: generateWeightedArray([
                {type: yellowRoundleaf, occurance: 1}
            ], 100)
        },
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 1},
                {type: scorpion, occurance: 3},
                {type: purpleLystosaurus, occurance: 3},
                {type: greenPostosuchus, occurance: 1},
                {type: greenHerreresaurus, occurance: 1} 
            ], 50),
            plants: generateWeightedArray([
                {type: yellowFern, occurance: 5},
                {type: lightGreenFernClump, occurance: 5},
                {type: redFern, occurance: 5},
                {type: orangeRoundleaf, occurance: 1}
            ], 50)
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 1},
                {type: purpleLystosaurus, occurance: 3},
                {type: greenPostosuchus, occurance: 1},
                {type: greenHerreresaurus, occurance: 1} 
            ], 100),
            plants: generateWeightedArray([
                {type: greenFern, occurance: 3},
                {type: pine, occurance: 10},  
                {type: umbrellaPine, occurance: 8},
                {type: scalyTreeFern, occurance: 5}
            ], 20)
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 3},
                {type: scorpion, occurance: 3},
                {type: yellowHerreresaurus, occurance: 3},
                {type: greenPostosuchus, occurance: 1},
                {type: redLystosaurus, occurance: 3}
            ], 500),
            plants: generateWeightedArray([
                {type: redFern, occurance: 5},
                {type: yellowFernClump, occurance: 5},
                {type: pine, occurance: 1},  
                {type: umbrellaPine, occurance: 3},
                {type: yellowRoundleaf, occurance: 1}
            ], 50)
        },
        swampForest: {
            key: "swampForest",
            type: "swamp forest",
            color: terrainColors.swampForest,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: yellowCrocodile, occurance: 2},
                {type: purpleDarter, occurance: 2},
                {type: redDarter, occurance: 2}
            ], 25),
            plants: generateWeightedArray([
                {type: horsetail, occurance: 3},
                {type: buttressRoot, occurance: 10},
            ], 10)
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: yellowCrocodile, occurance: 2},
                {type: purpleDarter, occurance: 2},
                {type: redDarter, occurance: 2}
            ], 25),
            plants: generateWeightedArray([
                {type: horsetail, occurance: 3},
                {type: goldenHorsetail, occurance: 1},
            ], 10)
        },
        shallowWater: {
            key: "shallowWater",
            type: "shallow water",
            color: terrainColors.shallowWater,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: yellowCrocodile, occurance: 2},
                {type: purpleDarter, occurance: 2},
                {type: redDarter, occurance: 2}
            ], 25),
            plants: []
        },
        deepWater: {
            key: "deepWater",
            type: "deep water",
            color: terrainColors.deepWater,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: yellowCrocodile, occurance: 2},
                {type: purpleDarter, occurance: 2},
                {type: redDarter, occurance: 2}
            ], 25),
            plants: []
        },
    }
}