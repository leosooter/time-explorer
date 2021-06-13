import creatureDirectory from "../../components/creatures/creature-directory";
import plantDirectory from "../../components/plants/plant-directory";
import resourceDirectory from "../../components/resources/resource-directory";
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
    redDarter,
    yellowOraungosaurus,
    orangeOrangosaurus,
    blueParasaurolophus,
    greyParasaurolophus,
    spinosaurus,
    tyrannosaurus,
    tarbosaurus,
    baryonyx,
    greyTriceratops,
    brownTriceratops,
    greenStyracosaurus,
    blueStyracosaurus,
    utahRaptor,
    deinonychus,
    velociraptor,
    greenMosasaurus,
    blueMosasaurus
} = creatureDirectory;

const {
    barrelFern,
    blueFern,
    blueTreeFern,
    buttressRoot,
    conifGreenBrown,
    darkFern,
    darkGreenFernClump,
    darkMarshPine,
    darkPine,
    fallenPolycarpus,
    fern,
    gianthorsetail,
    goldenButtressRoot,
    goldenhorsetail,
    greenBrownFernClump,
    greenFern,
    greenFernClump,
    greenRoundleaf,
    horsetail,
    lightMarshPine,
    LightGreenTreeFern,
    lightGreenFernClump,
    lowFern,
    orangeRoundleaf,
    polycarpus,
    redFernClump,
    redFern,
    reed,
    scalyTreeFern,
    silverFir,
    tallFern,
    umbrellaPine,
    greyUmbrellaPine,
    yellowFern,
    yellowFernClump,
    yellowRoundleaf,
    youngBlueTreeFern,
    youngLightGreenTreeFern,
} = plantDirectory;


const {
  largeBlackRock,
  largeDarkRedRock,
  largeGreyRock,
  largeRedRock,
  largeYellowRock,
  xLargeGreyRock
} = resourceDirectory;



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
    tribes: [triassicRiver, triassicLake],
    possTerrain: generateWeightedArray([
            {type: "grassland", occurance: 30}, 
            {type: "forest", occurance: 15}, 
            {type: "swampForest", occurance: 10},
            {type: "marsh", occurance: 5},
            {type: "desert", occurance: 5},
        ], 0),
    terrainTypes: {
        grassland: {
            key: "grassland",
            type: "grassland",
            color: terrainColors.grassland,
            isWater: false,
            creatures: generateWeightedArray([
                //{type: pulmonoscorpius, occurance: 1},
                {type: scorpion, occurance: 30},
                {type: apatosaurus, occurance: 20},
                {type: tarbosaurus, occurance: 10},
                {type: tyrannosaurus, occurance: 5},
                {type: baryonyx, occurance: 1},
                {type: yellowOraungosaurus, occurance: 5},
                {type: blueParasaurolophus, occurance: 10},
                {type: greyParasaurolophus, occurance: 6},
                {type: blueStyracosaurus, occurance: 5},
                {type: greenStyracosaurus, occurance: 5},
                {type: greyTriceratops, occurance: 5},
                {type: brownTriceratops, occurance: 5},
                {type: deinonychus, occurance: 12},
                {type: utahRaptor, occurance: 10},
                {type: velociraptor, occurance: 18},
            ], 500),
            plants: generateWeightedArray([
                {type: greenBrownFernClump, occurance: 10},
                {type: greenFernClump, occurance: 5},
                {type: redFernClump, occurance: 1},
                {type: yellowFernClump, occurance: 8},
                {type: lightGreenFernClump, occurance: 12},
                {type: darkGreenFernClump, occurance: 2},
                {type: yellowFern, occurance: 8},
                {type: greenFern, occurance: 5},
                {type: redFern, occurance: 1},
                {type: blueFern, occurance: 3},
                {type: lowFern, occurance: 2},
                {type: fern, occurance: 4},
                {type: darkFern, occurance: 1}
            ], 50),
            resources: [
              // {type: largeYellowRock, occurance: 1},
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1}
            ]            
        },
        forest: {
            key: "forest",
            type: "forest",
            color: terrainColors.forest,
            isWater: false,
            creatures: generateWeightedArray([
                //{type: pulmonoscorpius, occurance: 1},
                {type: lesserMisophilae, occurance: 5},
                {type: tarbosaurus, occurance: 1},
                {type: blueParasaurolophus, occurance: 4},
                {type: blueStyracosaurus, occurance: 4},
                {type: deinonychus, occurance: 3},
                {type: baryonyx, occurance: 1}
            ], 100),
            plants: generateWeightedArray([
                {type: greenFern, occurance: 3},
                {type: lowFern, occurance: 3},
                {type: blueFern, occurance: 3},
                {type: darkFern, occurance: 3},
                {type: darkGreenFernClump, occurance: 3},
                {type: fern, occurance: 3},
                {type: tallFern, occurance: 10}, 
                {type: blueTreeFern, occurance: 10},
                {type: scalyTreeFern, occurance: 8},
                {type: youngBlueTreeFern, occurance: 6}, 
                {type: youngLightGreenTreeFern, occurance: 8},
                {type: polycarpus, occurance: 10},
                {type: fallenPolycarpus, occurance: 18},
                {type: LightGreenTreeFern, occurance: 10},
                {type: lightMarshPine, occurance: 1},
                {type: buttressRoot, occurance: 5},
                {type: goldenButtressRoot, occurance: 5},
                {type: greenRoundleaf, occurance: 6},
                {type: darkPine, occurance: 2},
                {type: umbrellaPine, occurance: 2},
                {type: greyUmbrellaPine, occurance: 1},
                {type: silverFir, occurance: 1}
            ], 20),
            resources: [
              // {type: largeBlackRock, occurance: 1},
              // {type: largeGreyRock, occurance: 1},
              // {type: xLargeGreyRock, occurance: 1}
            ]
        },
        savannah: {
            key: "savannah",
            type: "savannah",
            color: terrainColors.savannah,
            isWater: false,
            creatures: generateWeightedArray([
                //{type: pulmonoscorpius, occurance: 3},
                {type: scorpion, occurance: 5},
                {type: apatosaurus, occurance: 2},
                {type: diplodocus, occurance: 3},
                {type: tyrannosaurus, occurance: 2},
                {type: greenStyracosaurus, occurance: 5},
                {type: greyTriceratops, occurance: 5},
                {type: brownTriceratops, occurance: 5},
                {type: velociraptor, occurance: 4},
                {type: utahRaptor, occurance: 3},
                {type: deinonychus, occurance: 2},
                {type: yellowOraungosaurus, occurance: 2},
                {type: orangeOrangosaurus, occurance: 1}
            ], 500),
            plants: generateWeightedArray([
                {type: redFern, occurance: 5},
                {type: yellowFern, occurance: 5},
                {type: yellowFernClump, occurance: 8},
                {type: redFernClump, occurance: 4},
                {type: yellowRoundleaf, occurance: 3},
                {type: orangeRoundleaf, occurance: 1}
            ], 50),
            resources: [
              // {type: largeYellowRock, occurance: 1}
            ]
        },
        desert: {
          key: "desert",
          type: "desert",
          color: terrainColors.desert,
          isWater: false,
          creatures: generateWeightedArray([
              //{type: pulmonoscorpius, occurance: 1},
              {type: orangeOrangosaurus, occurance: 1},
              {type: brownTriceratops, occurance: 1},
              {type: velociraptor, occurance: 4},
              {type: scorpion, occurance: 3}
          ], 100),
          plants: generateWeightedArray([
              {type: orangeRoundleaf, occurance: 6},
              {type: barrelFern, occurance: 6},
              {type: redFernClump, occurance: 6},
              {type: redFern, occurance: 6}
          ], 200),
          resources: [
            // {type: largeRedRock, occurance: 2},
            // {type: largeDarkRedRock, occurance: 1}
          ]
        },
        marsh: {
            key: "marsh",
            type: "marsh",
            color: terrainColors.marsh,
            isWater: true,
            isSwim: true,
            creatures: generateWeightedArray([
                // {type: yellowCrocodile, occurance: 2},
                {type: redDarter, occurance: 20},
                {type: purpleDarter, occurance: 20},
                {type: tarbosaurus, occurance: 6},
                {type: baryonyx, occurance: 8},
                {type: blueStyracosaurus, occurance: 5},
                {type: greenStyracosaurus, occurance: 5},
                {type: greyTriceratops, occurance: 5},
                {type: brownTriceratops, occurance: 5},
                {type: utahRaptor, occurance: 8},
                {type: deinonychus, occurance: 8},
                {type: spinosaurus, occurance: 5}
            ], 250),
            plants: generateWeightedArray([
                {type: horsetail, occurance: 3},
                {type: gianthorsetail, occurance: 3},
                {type: goldenhorsetail, occurance: 3},
                {type: reed, occurance: 1},
            ], 10),
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
                {type: greaterProterogyrinus, occurance: 5},
                {type: redDarter, occurance: 20},
                {type: purpleDarter, occurance: 20},
                {type: tarbosaurus, occurance: 5},
                {type: baryonyx, occurance: 5},
                {type: spinosaurus, occurance: 2},
                {type: blueStyracosaurus, occurance: 5},
                {type: greenStyracosaurus, occurance: 5},
                {type: greyTriceratops, occurance: 5},
                {type: brownTriceratops, occurance: 5},
                {type: utahRaptor, occurance: 8},
                {type: deinonychus, occurance: 8},
                // {type: orangeMeganuera, occurance: 1},
                // {type: blueMeganuera, occurance: 1},
            ], 250),
            plants: generateWeightedArray([
                {type: buttressRoot, occurance: 15},
                {type: goldenButtressRoot, occurance: 5},
                {type: darkMarshPine, occurance: 8},
                {type: lightMarshPine, occurance: 4}
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
                // {type: yellowCrocodile, occurance: 2},
                {type: redDarter, occurance: 20},
                {type: purpleDarter, occurance: 20},
                {type: baryonyx, occurance: 5},
                {type: spinosaurus, occurance: 5}
            ], 250),
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
                // {type: yellowCrocodile, occurance: 2},
                {type: redDarter, occurance: 20},
                {type: purpleDarter, occurance: 20},
                {type: spinosaurus, occurance: 1},
                {type: blueMosasaurus, occurance: 10},
                {type: greenMosasaurus, occurance: 5}
            ], 2500),
            plants: [],
            resources: []
        },
    }
}