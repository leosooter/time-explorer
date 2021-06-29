// import creatureDirectory from "../../components/creatures/creature-directory";
// import plantDirectory from "../../components/plants/plant-directory";
// import {generateWeightedArray} from "../../helpers/utility-helpers";
// import {generateCreatureArray} from "../../new-helpers/creature-helpers";
// import {terrainColors as colors} from "../colors";

// const terrainColors = colors.devonian;

// const {
//   purpleDarter,
//   redDarter,
//   silverBarb,
//   blueFish,
//   yellowFish,
//   greenFish,
//   scorpion,
//   kingPulmonoscorpius,
//   pulmonoscorpius,
//   hyneria,
//   hynerpeton,
//   dunkleosteus
// } = creatureDirectory;

// const {
//     /////////////////////////////////// Trees
//     /////////////////////////////////// Conifers
//     /////////////////////////////////// Ferns
//     ////////////////////////////////// Reeds
//     //////////////////////////////// Moss
//     //////////////////////////////// Misc
//     yellowGlobe,
//     purpleGlobe,
//     //////////////////////////////// Shrubs
// } = plantDirectory;

// /*
// Terrain Types define plant density and animal habitat and player movement types
// example: 
//     Player can move farther over plains or savannah than through forest or marsh, 
//     shallow/deep water may require different types of boats

// deep water
// shallow water
// plain
// savannah
// forest
// desert
// marsh - wet version of plains
// swamp forest - wet version of forest
// */

// export default {
//     defualtTerrainType: "desert",
//     seaPoints: [1, 3],
//     seaPower: 100,
//     lakePoints: [20, 30],
//     lakePower: 20,
//     riverPoints: [20, 30],
//     riverPower: 20,
//     landPower: 30,
//     possTerrain: generateWeightedArray([
//             {type: "grassland", occurance: 1}, 
//             {type: "savannah", occurance: 1}, 
//             {type: "marsh", occurance: 3}
//         ], 0),
//     terrainTypes: {
//         desert: {
//             key: "desert",
//             type: "desert",
//             color: terrainColors.desert,
//             isWater: false,
//             creatures: generateCreatureArray([
//               {type: kingPulmonoscorpius, occurance: 3}
//             ], 500),
//             plants: generateWeightedArray([
//             ], 100),
//             resources: [
//             ]
//         },
//         savannah: {
//             key: "savannah",
//             type: "savannah",
//             color: terrainColors.savannah,
//             isWater: false,
//             isSwim: false,
//             creatures: generateCreatureArray([
//                 {type: pulmonoscorpius, occurance: 1},
//                 {type: scorpion, occurance: 3}
//             ], 500),
//             plants: generateWeightedArray([
//                 {type: purpleGlobe, occurance: 3},
//                 {type: yellowGlobe, occurance: 5},
//             ], 10),
//             resources: [
//             ]
//         },
//         shallowWater: {
//             key: "shallowWater",
//             type: "shallow water",
//             color: terrainColors.shallowWater,
//             isWater: true,
//             isSwim: true,
//             creatures: generateCreatureArray([
//               {type: kingPulmonoscorpius, occurance: 1},
//               {type: pulmonoscorpius, occurance: 3}
//             ], 100),
//             plants: [],
//             resources: []
//         },
//         deepWater: {
//             key: "deepWater",
//             type: "deep water",
//             color: terrainColors.deepWater,
//             isWater: true,
//             isSwim: true,
//             creatures: generateCreatureArray([
//               {type: kingPulmonoscorpius, occurance: 2},
//               {type: pulmonoscorpius, occurance: 1}
//             ], 100),
//             plants: [],
//             resources: []
//         },
//     }
// }