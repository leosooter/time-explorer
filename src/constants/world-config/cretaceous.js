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
    apatosaurus,
    diplodocus,
    purpleDarter,
    redDarter
} = creatureDirectory;

const {
    tallFern,
    yellowFernClump,
    yellowFern,
    greenBrownFernClump,
    scalyTreeFern,
    yellowRoundleaf,
    greenRoundleaf,
    horsetail,
    buttressRoot
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
    seaPoints: [1, 2],
    seaPower: 100,
    lakePoints: [2, 3],
    lakePower: 20,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 50,
    possTerrain: generateWeightedArray([
            {type: "grassland", occurance: 30}, 
            {type: "forest", occurance: 15}, 
            {type: "swampForest", occurance: 10},
            {type: "marsh", occurance: 5}
        ], 0),
    terrainTypes: {
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            creatures: generateWeightedArray([
                {type: pulmonoscorpius, occurance: 1},
                {type: scorpion, occurance: 3},
                {type: apatosaurus, occurance: 2},
            ], 50),
            plants: generateWeightedArray([
                {type: greenBrownFernClump, occurance: 5},
                // {type: yellowFern, occurance: 5},
                // {type: greenFern, occurance: 5},
                // {type: redFern, occurance: 5},
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
                // {type: greenFern, occurance: 3},
                {type: tallFern, occurance: 2},  
                {type: scalyTreeFern, occurance: 8},
            // {type: marshPine, occurance: 1},
                {type: buttressRoot, occurance: 5},
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
                {type: apatosaurus, occurance: 1},
                {type: diplodocus, occurance: 3},
            ], 500),
            plants: generateWeightedArray([
                // {type: redFern, occurance: 5},
                // {type: yellowFern, occurance: 5},
                {type: yellowFernClump, occurance: 8},
                {type: yellowFern, occurance: 4},
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
                {type: redDarter, occurance: 2},
                {type: purpleDarter, occurance: 2}
            ], 25),
            plants: generateWeightedArray([
                {type: horsetail, occurance: 3},
            ], 10)
        },
        swampForest: {
            key: "swampForest",
            type: "swamp forest",
            color: terrainColors.swampForest,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                // {type: lesserArthropluera, occurance: 2},
                // {type: greaterArthropluera, occurance: 2},
                {type: greaterProterogyrinus, occurance: 2},
                {type: redDarter, occurance: 2},
                {type: purpleDarter, occurance: 2}
                // {type: orangeMeganuera, occurance: 1},
                // {type: blueMeganuera, occurance: 1},
            ], 25),
            plants: generateWeightedArray([
                {type: buttressRoot, occurance: 15},
                {type: tallFern, occurance: 2}
            ], 20)
        },
        shallowWater: {
            key: "shallowWater",
            type: "shallow water",
            color: terrainColors.shallowWater,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: yellowCrocodile, occurance: 2},
                {type: redDarter, occurance: 2},
                {type: purpleDarter, occurance: 2}
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
                {type: redDarter, occurance: 2},
                {type: purpleDarter, occurance: 2}
            ], 25),
            plants: []
        },
    }
}