import creatureDirectory from "../components/creatures/creature-directory";
import plantDirectory from "../components/plants/plant-directory";
import {generateWeightedArray} from "../helpers/utility-helpers";
import {terrainColors} from "./colors";

const {greaterArthropluera, lesserArthropluera, kingPulmonoscorpius, pulmonoscorpius, scorpion} = creatureDirectory;
const {barrelFern, fern, reed, horsetail, polycarpus} = plantDirectory;

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
    grassland: {
        key: "grassland",
        type: "grassland",
        color: terrainColors.grassland,
        isWater: false,
        treeChance: 3,
        creatures: generateWeightedArray([
            {type: lesserArthropluera, occurance: 3}, 
            {type: kingPulmonoscorpius, occurance: 2},
            {type: scorpion, occurance: 5}
        ], 20),
        plants: generateWeightedArray([
            {type: reed, occurance: 5},
            {type: fern, occurance: 5}, 
            {type: barrelFern, occurance: 5},
            {type: horsetail, occurance: 1},
            {type: polycarpus, occurance: 3}
        ], 50)
    },
    forest: {
        key: "forest",
        type: "forest",
        color: terrainColors.forest,
        isWater: false,
        treeChance: 8,
        creatures: generateWeightedArray([
            {type: greaterArthropluera, occurance: 6}, 
            {type: lesserArthropluera, occurance: 16},
            {type: pulmonoscorpius, occurance: 6},
        ], 500),
        plants: generateWeightedArray([
            {type: reed, occurance: 5}, 
            {type: horsetail, occurance: 5},
            {type: polycarpus, occurance: 10}
        ], 20)
    },
    savannah: {
        key: "savannah",
        type: "savannah",
        color: terrainColors.savannah,
        isWater: false,
        treeChance: 2,
        creatures: generateWeightedArray([
            {type: lesserArthropluera, occurance: 1}, 
            {type: kingPulmonoscorpius, occurance: 3},
            {type: pulmonoscorpius, occurance: 3},
            {type: scorpion, occurance: 3}
        ], 500),
        plants: generateWeightedArray([
            {type: reed, occurance: 5}, 
            {type: barrelFern, occurance: 5},
            {type: polycarpus, occurance: 1}
        ], 50)
    },
    desert: {
        key: "desert",
        type: "desert",
        color: terrainColors.desert,
        isWater: false,
        treeChance: 2,
        creatures: generateWeightedArray([
            {type: kingPulmonoscorpius, occurance: 1},
            {type: pulmonoscorpius, occurance: 5},
            {type: scorpion, occurance: 10}
        ], 500),
        plants: generateWeightedArray([
            {type: barrelFern, occurance: 1}
        ], 30)
    },
    tundra: {
        key: "tundra",
        type: "tundra",
        color: terrainColors.tundra,
        isWater: false,
        treeChance: 2,
        creatures: generateWeightedArray([
            {type: kingPulmonoscorpius, occurance: 1},
            {type: pulmonoscorpius, occurance: 5},
            {type: scorpion, occurance: 10}
        ], 500),
        plants: generateWeightedArray([
            {type: barrelFern, occurance: 1}
        ], 30)
    },
    shallowWater: {
        key: "shallowWater",
        type: "shallow water",
        color: terrainColors.shallowWater,
        isWater: true,
        treeChance: 0,
        creatures: [],
        plants: generateWeightedArray([
            {type: reed, occurance: 5}
        ], 20)
    },
    deepWater: {
        key: "deepWater",
        type: "deep water",
        color: terrainColors.deepWater,
        isWater: true,
        treeChance: 0,
        creatures: [],
        plants: []
    },
};