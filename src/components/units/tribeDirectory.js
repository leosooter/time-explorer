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

const {
        permianNomad1, 
        permianNomad2, 
        permianNomad3, 
        permianNomad4,
        permianAdobe1, 
        permianAdobe2, 
        permianAdobe3, 
        permianAdobe4,
        permianFarmers1, 
        permianFarmers2, 
        permianFarmers3, 
        permianFarmers4,
        triassicRiver1, 
        triassicRiver2, 
        triassicRiver3, 
        triassicRiver4,
        triassicLake1, 
        triassicLake2, 
        triassicLake3, 
        triassicLake4
    } = structureDirectory;

export default {
    // blue: {
    //     name: "Blue Tribe",
    //     color: "blue",
    //     imgDir: "blue",
    //     territoriality: 1,
        
    //     structures: generateWeightedArray([
    //         {type: house1, occurance: 1},
    //         {type: house2, occurance: 1},
    //         {type: house3, occurance: 4},
    //         {type: house4, occurance: 2},
    //     ], 0),
    //     units: []
    // },
    // green: {
    //     name: "Green Tribe",
    //     color: "green",
    //     imgDir: "green",
    //     territoriality: 1,
        
    //     structures: generateWeightedArray([
    //         {type: house1, occurance: 0},
    //         {type: house2, occurance: 1},
    //         {type: house3, occurance: 2},
    //         {type: house4, occurance: 4},
    //     ], 0),
    //     units: []
    // },
    // greenYellow: {
    //     name: "Green-Yellow Tribe",
    //     color: "lightgreen",
    //     imgDir: "green-yellow",
    //     territoriality: 1,
        
    //     structures: generateWeightedArray([
    //         {type: house1, occurance: 1},
    //         {type: house2, occurance: 3},
    //         {type: house3, occurance: 2},
    //         {type: house4, occurance: 1},
    //     ], 0),
    //     units:[]
    // },
    // orange: {
    //     name: "Orange Tribe",
    //     color: "orange",
    //     imgDir: "orange",
    //     territoriality: 1,
        
    //     structures: generateWeightedArray([
    //         {type: house1, occurance: 4},
    //         {type: house2, occurance: 3},
    //         {type: house3, occurance: 1},
    //         {type: house4, occurance: 0},
    //     ], 0),
    //     units:[]
    // },
    // yellowOrange: {
    //     name: "Yellow-Orange Tribe",
    //     color: "brown",
    //     imgDir: "yellow-orange",
    //     territoriality: 1,
        
    //     structures: generateWeightedArray([
    //         {type: house1, occurance: 0},
    //         {type: house2, occurance: 1},
    //         {type: house3, occurance: 2},
    //         {type: house4, occurance: 4},
    //     ], 0),
    //     units:[]
    // },
    // red: {
    //     name: "Red Tribe",
    //     color: "red",
    //     imgDir: "red",
    //     territoriality: 1,
        
    //     structures: generateWeightedArray([
    //         {type: house1, occurance: 1},
    //         {type: house2, occurance: 5},
    //         {type: house3, occurance: 3},
    //         {type: house4, occurance: 0},
    //     ], 0),
    //     units:[]
    // },
    permianNomads: {
        key: "permianNomads",
        name: "Nizbius",
        color: "purple",
        unitImgDir: "yellow-orange",
        territoriality: 1,
        possTerrain: ["desert"],
        isWater: false,
        structures: generateWeightedArray([
            {type: permianNomad1, occurance: 2},
            {type: permianNomad2, occurance: 2},
            {type: permianNomad3, occurance: 3},
            {type: permianNomad4, occurance: 3},
        ], 0),
        units:[]
    },
    permianAdobe: {
        key: "permianAdobe",
        name: "Holsup",
        color: "brown",
        unitImgDir: "orange",
        territoriality: 1,
        possTerrain: ["savannah", "desert"],
        isWater: false,
        structures: generateWeightedArray([
            {type: permianAdobe1, occurance: 2},
            {type: permianAdobe2, occurance: 2},
            {type: permianAdobe3, occurance: 3},
            {type: permianAdobe4, occurance: 3},
        ], 0),
        units:[]
    },
    permianFarmers: {
        key: "permianFarmers",
        name: "Quel-tok",
        color: "blue",
        unitImgDir: "blue",
        territoriality: 1,
        possTerrain: ["grassland"],
        isWater: false,
        structures: generateWeightedArray([
            {type: permianFarmers1, occurance: 2},
            {type: permianFarmers2, occurance: 2},
            {type: permianFarmers3, occurance: 3},
            {type: permianFarmers4, occurance: 3},
        ], 0),
        units:[]
    },
    triassicRiver: {
        key: "triassicRiver",
        name: "Olom",
        color: "yellow",
        unitImgDir: "green-yellow",
        territoriality: 1,
        possTerrain: ["grassland"],
        isWater: false,
        structures: generateWeightedArray([
            {type: triassicRiver1, occurance: 2},
            {type: triassicRiver2, occurance: 2},
            {type: triassicRiver3, occurance: 3},
            {type: triassicRiver4, occurance: 3},
        ], 0),
        units:[]
    },
    triassicLake: {
        key: "triassicLake",
        name: "Silm-Sun",
        color: "blue",
        unitImgDir: "blue",
        territoriality: 1,
        possTerrain: ["marsh", "shallowWater"],
        isWater: true,
        
        structures: generateWeightedArray([
            {type: triassicLake1, occurance: 2},
            {type: triassicLake2, occurance: 2},
            {type: triassicLake3, occurance: 3},
            {type: triassicLake4, occurance: 3},
        ], 0),
        units:[]
    }
}