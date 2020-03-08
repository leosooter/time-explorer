import creatureDirectory from "../../components/creatures/creature-directory";
import plantDirectory from "../../components/plants/plant-directory";
import {generateWeightedArray} from "../../helpers/array-helpers";
import {terrainColors} from "../colors";
import structureDirectory from "../../components/structures/structure-directory";

const {
    house1,
    house2,
    house3,
    house4
} = structureDirectory;

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
    orangeDimetrodon,
    yellowDarter,
    greenDarter
} = creatureDirectory;

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
    goldenHorsetail,
    giantHorsetail,
    horsetail,
    yellowMoss,
    greenMoss,
    redFern,
    yellowFern,
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
    defualtTerrainType: "desert",
    seaPoints: [2, 3],
    seaPower: 15,
    lakePoints: [20, 30],
    lakePower: 15,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 25,
    possTerrain: generateWeightedArray([
            {type: "savannah", occurance: 30}, 
            {type: "forest", occurance: 5}, 
            {type: "grassland", occurance: 10},
            {type: "marsh", occurance: 1}
        ], 0),
    terrainTypes: {
        desert: {
            key: "desert",
            type: "desert",
            color: terrainColors.desert,
            isWater: false,
            creatures: generateWeightedArray([
                {type: scorpion, occurance: 6},
                {type: orangeDimetrodon, occurance: 1}
            ], 150),
            plants: generateWeightedArray([
                {type: barrelFern, occurance: 1},
                {type: yellowRoundleaf, occurance: 1}
            ], 50)
        },
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 1},
                {type: scorpion, occurance: 3},
            ], 50),
            plants: generateWeightedArray([
                {type: fern, occurance: 5},
                {type: yellowFern, occurance: 5},
                {type: greenFern, occurance: 5},
                {type: redFern, occurance: 5},
                {type: yellowMoss, occurance: 5},
                {type: orangeRoundleaf, occurance: 1}, 
            ], 50)
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 1},
                {type: lesserMisophilae, occurance: 3},
            ], 100),
            plants: generateWeightedArray([
                {type: greenFern, occurance: 3},
                {type: greenMoss, occurance: 2},  
                {type: polycarpus, occurance: 4},
            // {type: marshPine, occurance: 1},
                {type: darkMarshPine, occurance: 8},
                {type: greenRoundleaf, occurance: 6}
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
                {type: orangeDimetrodon, occurance: 3}
            ], 500),
            plants: generateWeightedArray([
                {type: redFern, occurance: 5},
                {type: yellowFern, occurance: 5},
                {type: darkMarshPine, occurance: 3},
                {type: greenRoundleaf, occurance: 4},
                {type: orangeRoundleaf, occurance: 1},
                {type: yellowRoundleaf, occurance: 1}
            ], 50)
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: yellowCrocodile, occurance: 2},
                {type: yellowDarter, occurance: 2},
                {type: greenDarter, occurance: 2}
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
                {type: yellowDarter, occurance: 2},
                {type: greenDarter, occurance: 2}
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
                {type: yellowDarter, occurance: 2},
                {type: greenDarter, occurance: 2}
            ], 25),
            plants: []
        },
    }
}