/*

Tribe is a randomly generated mix of attributes:
    
    - Tech level - determines where they start technologically

    - Environment - The type of terrain a tribe perfers determines many attributes.
        Within environment 
            - Building style
            - farming/hunting/fishing ratios
            - Types of domesticated animals
            - Tribe color
    
    - Weapon prefrences

    - Characteristics - randomly generated for each tribe
        friendliness - willingness to help others and give aid
        territoriality - openess to having others inside territory 
        travelLevel - distance willing to travel
        tradeLevel - willingness to intiate trading
        expansionLevel - likelyhood of attempting to take over new territory
        imperialismLevel - likelyhood of attempting to take over other's territory
        aggression - likelyhood of unprovoked attacks
*/

import structureDirectory from "../structures/structure-directory";
import {generateWeightedArray} from "../../helpers/array-helpers";

const {house1, house2, house3, house4} = structureDirectory;

export default {
    blue: {
        name: "Blue Tribe",
        color: "blue",
        imgDir: "blue",
        territoriality: 1,
        
        structures: generateWeightedArray([
            {type: house1, occurance: 1},
            {type: house2, occurance: 1},
            {type: house3, occurance: 4},
            {type: house4, occurance: 2},
        ], 0),
        units: []
    },
    green: {
        name: "Green Tribe",
        color: "green",
        imgDir: "green",
        territoriality: 1,
        
        structures: generateWeightedArray([
            {type: house1, occurance: 0},
            {type: house2, occurance: 1},
            {type: house3, occurance: 2},
            {type: house4, occurance: 4},
        ], 0),
        units: []
    },
    greenYellow: {
        name: "Green-Yellow Tribe",
        color: "lightgreen",
        imgDir: "green-yellow",
        territoriality: 1,
        
        structures: generateWeightedArray([
            {type: house1, occurance: 1},
            {type: house2, occurance: 3},
            {type: house3, occurance: 2},
            {type: house4, occurance: 1},
        ], 0),
        units:[]
    },
    orange: {
        name: "Orange Tribe",
        color: "orange",
        imgDir: "orange",
        territoriality: 1,
        
        structures: generateWeightedArray([
            {type: house1, occurance: 4},
            {type: house2, occurance: 3},
            {type: house3, occurance: 1},
            {type: house4, occurance: 0},
        ], 0),
        units:[]
    },
    yellowOrange: {
        name: "Yellow-Orange Tribe",
        color: "brown",
        imgDir: "yellow-orange",
        territoriality: 1,
        
        structures: generateWeightedArray([
            {type: house1, occurance: 0},
            {type: house2, occurance: 1},
            {type: house3, occurance: 2},
            {type: house4, occurance: 4},
        ], 0),
        units:[]
    },
    red: {
        name: "Red Tribe",
        color: "red",
        imgDir: "red",
        territoriality: 1,
        
        structures: generateWeightedArray([
            {type: house1, occurance: 1},
            {type: house2, occurance: 5},
            {type: house3, occurance: 3},
            {type: house4, occurance: 0},
        ], 0),
        units:[]
    }
}