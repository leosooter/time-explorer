import creatureDirectory from "../../components/creatures/creature-directory";
import plantDirectory from "../../components/plants/plant-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
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
    allosaurus,
    sarcophaganax,
    ceratosaurus,
    yellowOrnitholestes,
    blueOrnitholestes,
    yellowKentrosaurus,
    greenKentrosaurus,
    blueStegosaurus,
    redStegosaurus
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
    defualtTerrainType: "savannah",
    seaPoints: [2, 4],
    seaPower: 30,
    lakePoints: [3, 6],
    lakePower: 5,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 0,
    tribes: [triassicRiver, triassicLake],
    possTerrain: generateWeightedArray([
            {type: "forest", occurance: 1}, 
            {type: "grassland", occurance: 1},
            {type: "marsh", occurance: 1},
            {type: "swampForest", occurance: 1}
        ], 0),
    terrainTypes: {
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            terrainPower: 120,
            creatures: generateWeightedArray([
                {type: scorpion, occurance: 3},
                {type: yellowOrnitholestes, occurance: 3},
                {type: greenKentrosaurus, occurance: 3},
                {type: redStegosaurus, occurance: 2},
                {type: apatosaurus, occurance: 1},
                // {type: apatosaurusHouse1, occurance: 1},
                // {type: apatosaurusHouse2, occurance: 1},
                // {type: apatosaurusHouse3, occurance: 1},
                // {type: apatosaurusHouse4, occurance: 1},
                {type: ceratosaurus, occurance: 2},
                {type: allosaurus, occurance: 1} 
            ], 500),
            plants: generateWeightedArray([
                {type: yellowFern, occurance: 5},
                {type: lightGreenFernClump, occurance: 5},
                {type: redFern, occurance: 5},
                {type: orangeRoundleaf, occurance: 1}
            ], 50),
            resources: []
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            terrainPower: 70,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 1},
                {type: greenKentrosaurus, occurance: 3},
                {type: blueStegosaurus, occurance: 1},
                {type: allosaurus, occurance: 1},
                {type: blueOrnitholestes, occurance: 1} 
            ], 100),
            plants: generateWeightedArray([
                {type: greenFern, occurance: 3},
                {type: pine, occurance: 10},  
                {type: umbrellaPine, occurance: 8},
                {type: redwood, occurance: 8},
                {type: scalyTreeFern, occurance: 5}
            ], 20),
            resources: []
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 3},
                {type: scorpion, occurance: 3},
                {type: yellowOrnitholestes, occurance: 2},
                {type: yellowKentrosaurus, occurance: 3},
                {type: redStegosaurus, occurance: 1},
                {type: ceratosaurus, occurance: 1},
                {type: sarcophaganax, occurance: 1},
                {type: apatosaurus, occurance: 1},
                // {type: apatosaurusHouse1, occurance: 1},
                // {type: apatosaurusHouse2, occurance: 1},
                // {type: apatosaurusHouse3, occurance: 1},
                // {type: apatosaurusHouse4, occurance: 1},
            ], 500),
            plants: generateWeightedArray([
                {type: redFern, occurance: 5},
                {type: yellowFernClump, occurance: 5},
                {type: pine, occurance: 1},  
                {type: umbrellaPine, occurance: 3},
                {type: yellowRoundleaf, occurance: 1}
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
            creatures: generateWeightedArray([
                {type: blueOrnitholestes, occurance: 1},
                {type: blueStegosaurus, occurance: 1}, 
                {type: yellowCrocodile, occurance: 1},
                {type: silverBarb, occurance: 3},
                {type: yellowFish, occurance: 3},
                {type: purpleDarter, occurance: 2},
                {type: redDarter, occurance: 2}
            ], 25),
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
            creatures: generateWeightedArray([
                {type: blueOrnitholestes, occurance: 1} ,
                {type: blueStegosaurus, occurance: 1},
                {type: greenKentrosaurus, occurance: 2},
                {type: yellowCrocodile, occurance: 1},
                {type: silverBarb, occurance: 3},
                {type: blueFish, occurance: 3},
                {type: yellowFish, occurance: 3},
                {type: purpleDarter, occurance: 2},
                {type: redDarter, occurance: 2}
            ], 25),
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
            creatures: generateWeightedArray([
                {type: yellowCrocodile, occurance: 1},
                {type: silverBarb, occurance: 4},
                {type: blueFish, occurance: 2},
                {type: purpleDarter, occurance: 2},
                {type: redDarter, occurance: 2}
            ], 25),
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
                {type: silverBarb, occurance: 3},
                {type: blueFish, occurance: 4},
                {type: purpleDarter, occurance: 1},
                {type: redDarter, occurance: 1}
            ], 25),
            plants: [],
            resources: []
        },
    }
}