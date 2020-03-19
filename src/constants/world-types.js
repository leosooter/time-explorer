import terrainTypes from "./terrainTypes";

import ordovician from "./world-config/ordovician";
import devonian from "./world-config/devonian";
import carboniferous from "./world-config/carboniferous";
import permian from "./world-config/permian";
import triassic from "./world-config/triassic";
import jurassic from "./world-config/jurassic";
import cretaceous from "./world-config/cretaceous";

export const desert = {
    key: "desert",
    
}

export default {
    ordovician,
    devonian,
    carboniferous,
    permian,
    triassic,
    jurassic,
    cretaceous
    // ordovician: {
    //     defualtTerrainType: "desert",
    //     waterPoints: [10, 20],
    //     waterPower: 70,
    //     landPower: 1,
    //     terrainTypes: [
    //         {
    //             key: "grassland",
    //             type: "grassland",
    //             color: terrainColors.grassland,
    //             isWater: false,
    //             treeChance: 3,
    //             creatures: generateWeightedArray([
    //                 {type: lesserArthropluera, occurance: 3}, 
    //                 {type: kingPulmonoscorpius, occurance: 2},
    //                 {type: scorpion, occurance: 5}
    //             ], 20),
    //             plants: generateWeightedArray([
    //                 {type: reed, occurance: 5},
    //                 {type: fern, occurance: 5}, 
    //                 {type: barrelFern, occurance: 5},
    //                 {type: horsetail, occurance: 1},
    //                 {type: polycarpus, occurance: 3}
    //             ], 50)
    //         }
    //     ]
    // },
    // devonian: {
    //     defualtTerrainType: "desert",
    //     waterPoints: [10, 20],
    //     waterPower: 60,
    //     landPower: 40,
    //     possTerrain: ["grassland", "grassland", "grassland", "grassland", "forest"]
    // },
    // carboniferous: {
    //     defualtTerrainType: "forest",
    //     seaPoints: [30, 50],
    //     seaPower: 20,
    //     lakePoints: [20, 30],
    //     lakePower: 20,
    //     riverPoints: [20, 30],
    //     riverPower: 20,
    //     landPower: 20,
    //     possTerrain: ["savannah", "grassland", "grassland", "grassland", "grassland"]
    // },
    // permian: {
    //     defualtTerrainType: "desert",
    //     seaPoints: [2, 3],
    //     seaPower: 15,
    //     lakePoints: [20, 30],
    //     lakePower: 15,
    //     riverPoints: [20, 30],
    //     riverPower: 20,
    //     landPower: 25,
    //     possTerrain: ["savannah", "savannah", "savannah", "savannah", "grassland"]
    // },
    // triassic: {
    //     defualtTerrainType: "desert",
    //     seaPoints: [5, 10],
    //     seaPower: 30,
    //     lakePoints: [5, 10],
    //     lakePower: 5,
    //     riverPoints: [20, 30],
    //     riverPower: 20,
    //     landPower: 40,
    //     possTerrain: ["savannah", "savannah","savannah","savannah", "savannah", "savannah", "grassland","grassland","forest","forest"]
    // },
    // jurassic: {
    //     defualtTerrainType: "savannah",
    //     seaPoints: [3, 5],
    //     seaPower: 80,
    //     lakePoints: [3, 6],
    //     lakePower: 5,
    //     riverPoints: [20, 30],
    //     riverPower: 20,
    //     landPower: 150,
    //     possTerrain: ["grassland", "grassland", "grassland","forest","forest"]
    // },
    // cretaceous: {
    //     defualtTerrainType: "savannah",
    //     seaPoints: [1, 2],
    //     seaPower: 100,
    //     lakePoints: [2, 3],
    //     lakePower: 20,
    //     riverPoints: [20, 30],
    //     riverPower: 20,
    //     landPower: 30,
    //     possTerrain: [,"grassland","grassland","forest","forest"]
    // }
}







/*
Ordovician
- Deep Water - plants: none
- Shallow Water - plants: purple-globe-reed, stolomite
- Marsh - plants: orange-globe-reed, purple-globe-reed, smooth-horsetail
- Plains - plants: yellow-moss, green-creeper
- Desert - plants: none

Devonian
- Deep Water - plants: none
- Shallow Water - plants: stolomite, green-reed
- Marsh - plants: green-reed, smooth-horsetail, yellow-horsetail
- Plains - plants: green-creeper, low-fern, yellow-horsetail, moss
- Forest - plants: polycarpus*, low-fern, green-creeper, moss
- Desert - plants: barrel-fern

Carboniferous
- Deep Water - plants: none
- Shallow Water - plants: green-reed
- Marsh - plants: green-reed, smooth-horsetail
- Swamp Forest - plants: butress-root-tree*, spike-tree*
- Plains - plants: low-fern, moss
- Forest - plants: polycarpus*, tree-fern*, scaly-palm*, low-fern, moss

Permian
- Deep Water - plants: none
- Shallow Water - plants: green-reed
- Plains - plants: high-fern, low-fern, moss
- Forest - plants: scrub-tree*, tree-fern*, scaly-palm*, high-fern, low-fern, moss
- Savannah - plants: scaly-palm*, antler-tree*, low-fern
- Desert - plants: antler-shrub, antler-tree*, 

Triassic
- Deep Water - plants: none
- Shallow Water - plants: tuft-reed
- Plains - plants: low-fern, moss
- Forest - plants: monkey-puzzle*, scrub-tree*, tree-fern*, scaly-palm*, high-fern, low-fern, moss
- Savannah - plants: monkey-puzzle*, scaly-palm*, high-fern, low-fern
- Desert - plants: euphorbia-tree*, euphorbia*, jade-plant, yuca

Jurassic ----------------------------------
- Deep Water - plants: none
- Shallow Water - plants: tuft-reed
- Plains - plants: low-fern, moss
- Forest - plants: monkey-puzzle*, scrub-tree*, tree-fern*, scaly-palm*, high-fern, low-fern, moss
- Savannah - plants: monkey-puzzle*, scaly-palm*, high-fern, low-fern
- Desert - plants: euphorbia-tree*, euphorbia*, jade-plant, yuca

Cretaceous

Paleogene

Neogene

Pliestocene

*/