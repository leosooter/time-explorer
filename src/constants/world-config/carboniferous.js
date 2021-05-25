import creatureDirectory from "../../components/creatures/creature-directory";
import plantDirectory from "../../components/plants/plant-directory";
import {generateWeightedArray} from "../../helpers/utility-helpers";
import {terrainColors as colors} from "../colors";

const terrainColors = colors.carboniferous;

const {
    greaterArthropluera,
    lesserArthropluera,
    kingPulmonoscorpius,
    pulmonoscorpius,
    scorpion,
    greaterMisophilae,
    lesserMisophilae,
    greaterProterogyrinus,
    orangeMeganuera,
    blueMeganuera,
    ultraPulmonoscorpius,
    silverBarb
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
    horsetail,
    giantHorsetail,
    yellowMoss,
    greenMoss,
    redFern
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
    defualtTerrainType: "forest",
    seaPoints: [3, 5],
    seaPower: 60,
    lakePoints: [20, 30],
    lakePower: 20,
    riverPoints: [20, 30],
    riverPower: 20,
    landPower: 30,
    possTerrain: generateWeightedArray([
            {type: "grassland", occurance: 8}, 
            {type: "swampForest", occurance: 30}, 
            {type: "marsh", occurance: 5}
        ], 0),
    terrainTypes: {
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            isSwim: false,
            creatures: generateWeightedArray([
                {type: lesserArthropluera, occurance: 2}, 
                {type: kingPulmonoscorpius, occurance: 1},
                {type: scorpion, occurance: 3},
                {type: lesserMisophilae, occurance: 2},
                {type: greaterMisophilae, occurance: 1},
                {type: greaterProterogyrinus, occurance: 2}
            ], 50),
            plants: generateWeightedArray([
                {type: horsetail, occurance: 1},
                {type: fern, occurance: 5},
                {type: greenFern, occurance: 5},
                {type: yellowGlobe, occurance: 3},  
                {type: polycarpus, occurance: 1}
            ], 50),
            resources: []
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            isSwim: false,
            creatures: generateWeightedArray([
                {type: greaterArthropluera, occurance: 2}, 
                {type: lesserArthropluera, occurance: 4},
                {type: pulmonoscorpius, occurance: 1},
                {type: lesserMisophilae, occurance: 3},
                {type: greaterMisophilae, occurance: 2},
                // {type: ultraPulmonoscorpius, occurance: 1}
            ], 100),
            plants: generateWeightedArray([
                {type: giantHorsetail, occurance: 5}, 
                {type: greenFern, occurance: 3},
                {type: greenMoss, occurance: 2},  
                {type: horsetail, occurance: 3}, 
                {type: polycarpus, occurance: 12},
                {type: marshPine, occurance: 1},
                {type: darkMarshPine, occurance: 7},
                {type: buttressRoot, occurance: 1},
            ], 20),
            resources: []
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            isSwim: false,
            creatures: generateWeightedArray([
                {type: lesserArthropluera, occurance: 1}, 
                {type: kingPulmonoscorpius, occurance: 3},
                {type: pulmonoscorpius, occurance: 3},
                {type: scorpion, occurance: 3}
            ], 500),
            plants: generateWeightedArray([
                {type: yellowMoss, occurance: 5}, 
                {type: redFern, occurance: 5},
                {type: polycarpus, occurance: 1}
            ], 50),
            resources: []
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                // {type: lesserArthropluera, occurance: 2},
                // {type: greaterArthropluera, occurance: 2},
                {type: greaterProterogyrinus, occurance: 4},
                {type: orangeMeganuera, occurance: 4},
                {type: blueMeganuera, occurance: 1},
            ], 25),
            plants: generateWeightedArray([
                {type: horsetail, occurance: 10},
                {type: giantHorsetail, occurance: 5},
                {type: yellowGlobe, occurance: 4} 
            ], 20),
            resources: []
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
                {type: greaterProterogyrinus, occurance: 4},
                {type: orangeMeganuera, occurance: 4},
                {type: blueMeganuera, occurance: 1},
            ], 50),
            plants: generateWeightedArray([
                {type: buttressRoot, occurance: 15},
                {type: goldenButtressRoot, occurance: 1}, 
            ], 20),
            resources: []
        },
        shallowWater: {
            key: "shallowWater",
            type: "shallow water",
            color: terrainColors.shallowWater,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                {type: greaterProterogyrinus, occurance: 4},
                {type: orangeMeganuera, occurance: 4},
                {type: blueMeganuera, occurance: 1},
                // {type: silverBarb, occurance: 1}
            ], 140),
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
                {type: greaterProterogyrinus, occurance: 1},
                {type: orangeMeganuera, occurance: 2},
                {type: blueMeganuera, occurance: 1},
                // {type: silverBarb, occurance: 1}
            ], 500),
            plants: [],
            resources: []
        },
    }
}