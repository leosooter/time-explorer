import {timePeriods} from "../../constants/world-types";

/*
Creature Sizing 1 - 100
Predators
//////////////////////////// Small
1 scorpion
3 misophilae
5 velociraptor - coyote

//////////////////////////// Medium
10 deinonycus - dire wolf - human
15 herrerasaurus - postosuchus - cave-lion ~ 600
20 gorgonopsid - smilodon ~ 900

//////////////////////////// Large
30 ceratosaurus - utahraptor - short-faced-bear - hyneria ~ 2000
40 allosaurus - blue mososaur - dunkleostoles ~ 
50 sarcophaganax

//////////////////////////// X-Large
60 tyrannosaurus
70 spinosaurus - green mososaur

/////////////////////////////////////////////////////////////////////////////////
prey
//////////////////////////// Small
1 darter
3 small fish - rabbit
5 diectodon

//////////////////////////// Medium
10 othenelia - lystrosaurus - deer
15 edaphasaurus - 
20 camptosaurus

//////////////////////////// Large
30 kentrosaurus - styracosarus
40 stegosaurus - duckbills - wooly mammoth - wooly rhino
50 triceratops - ankylosarus - mastodon

//////////////////////////// X-Large
60 camarasarus - indricotherium
80 apatosaurus
80 brachiosaurus

//////////////////////////// XX-Large
90 seismosaurus
100 argintinosaurus
*/

const genericCreatureStats = {
    sightRange: 3,
    terrainRange: 10,
    moistureRange: 10,
    densityRange: 10,
    threatReaction: 50,
    activityLevel: 5,
    speed: 2,
    endurance: 4,
    range: 1,
    aggression: 50,
    isUnderWater: false,
    offSets: {
        n: {
            topOffset: 0,
            leftOffset: 0,
        },
        s: {
            topOffset: 0,
            leftOffset: 0,
        },
        e: {
            topOffset: 0,
            leftOffset: 0,
        },
        w: {
            topOffset: 0,
            leftOffset: 0,
        }
    }
    /* generated stats
    hp,
    attack,
    defence,
    health,
    */
}

const genericDarter = {
    ...genericCreatureStats,
    size: 1,
    tags: ["flying", "runningEscape", "wideRange", "ambushPredator"],
    moistureLevel: 15, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
    foliageDensity: 5, // 0-10;
}


export default {
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ Multiple Time Periods ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------
    ///////////////////////////////// ------------ Arthropods ----------------
    yellowDarter: {
        ...genericDarter,
        timePeriod: [timePeriods.car, timePeriods.tri, timePeriods.jur, timePeriods.pal],
    },
    purpleDarter: {
        ...genericDarter,
        size: 2,
        timePeriod: [timePeriods.per, timePeriods.cre, timePeriods.neo, timePeriods.qua],
    },
    greenDarter: {
        ...genericDarter,
        timePeriod: [timePeriods.per, timePeriods.tri, timePeriods.neo, timePeriods.qua],
    },
    redDarter: {
        ...genericDarter,
        size: 2,
        timePeriod: [timePeriods.car, timePeriods.jur, timePeriods.cre, timePeriods.qua],
    },
    blackSquare: {
        ...genericCreatureStats,
        timePeriod: [],
        size: 1,
        tags: [],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    scorpion: {
        ...genericCreatureStats,
        timePeriod: [timePeriods.ord, timePeriods.dev, timePeriods.car, timePeriods.per, timePeriods.tri, timePeriods.jur, timePeriods.cre, timePeriods.neo, timePeriods.pal, timePeriods.qua],
        size: 1,
        tags: ["passiveDefence", "ambushPredator"],
        moistureLevel: 3, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 4, // 0-10;
    },
    yellowScorpion: {
        ...genericCreatureStats,
        timePeriod: [timePeriods.ord, timePeriods.dev, timePeriods.car, timePeriods.per, timePeriods.tri, timePeriods.jur, timePeriods.cre, timePeriods.neo, timePeriods.pal, timePeriods.qua],
        size: 2,
        tags: ["passiveDefence", "ambushPredator"],
        moistureLevel: 6, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 6, // 0-10;
    },

    ///////////////////////////////// ------------ Fish ----------------
    yellowFish: {
        ...genericCreatureStats,
        timePeriod: [timePeriods.per, timePeriods.tri, timePeriods.neo, timePeriods.qua],
        isUnderWater: true,
        size: 5,
        tags: ["runningEscape", "ambushPredator"],
        moistureLevel: 22, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 0, // 0-10;
    },
    greenFish: {
        ...genericCreatureStats,
        timePeriod: [timePeriods.car, timePeriods.tri, timePeriods.jur, timePeriods.pal],
        isUnderWater: true,
        size: 3,
        tags: ["runningEscape", "smallHerdAnimal"],
        moistureLevel: 15, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 6, // 0-10;
    },
    blueFish: {
        ...genericCreatureStats,
        timePeriod: [timePeriods.car, timePeriods.jur, timePeriods.cre, timePeriods.qua],
        isUnderWater: true,
        size: 7,
        tags: ["runningEscape", "ambushPredator"],
        moistureLevel: 19, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 3, // 0-10;
    },
    silverBarb: {
        ...genericCreatureStats,
        timePeriod: [timePeriods.per, timePeriods.cre, timePeriods.neo, timePeriods.qua],
        isUnderWater: true,
        size: 15,
        tags: ["runningEscape", "smallHerdAnimal"],
        moistureLevel: 24, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 0, // 0-10;
    },
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ Devonian ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------


    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ Carboniferous ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------
    blueMeganeura: {
        ...genericDarter,
        timePeriod: timePeriods.car,
        size: 4,
        moistureLevel: 8, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    orangeMeganeura: {
        ...genericDarter,
        timePeriod: timePeriods.car,
        size: 5,
        moistureLevel: 8, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    lesserArthropleura: {
        ...genericCreatureStats,
        timePeriod: timePeriods.car,
        tags: ["passiveDefence"],
        size: 10,
        moistureLevel: 12, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    greaterArthropleura: {
        ...genericCreatureStats,
        timePeriod: timePeriods.car,
        tags: ["passiveDefence"],
        size: 15,
        moistureLevel: 10, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Predators ----------------
    pulmonoscorpius: {
        ...genericCreatureStats,
        timePeriod: timePeriods.car,
        size: 3,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 3, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    lesserMesothelae: {
        ...genericCreatureStats,
        timePeriod: timePeriods.car,
        size: 3,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    greaterMesothelae: {
        ...genericCreatureStats,
        timePeriod: timePeriods.car,
        size: 4,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 4, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 6, // 0-10;
    },
    proterogyrinus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.car,
        size: 15,
        tags: ["generalistPredator", "ambushPredator", "wideRange"],
        moistureLevel: 15, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 2, // 0-10;
    },
    
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ Permian ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------
    blueDiictodon: {
        ...genericCreatureStats,
        timePeriod: timePeriods.per,
        size: 4,
        tags: ["runningEscape"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    brownDiictodon: {
        ...genericCreatureStats,
        timePeriod: timePeriods.per,
        size: 5,
        tags: ["runningEscape"],
        moistureLevel: 2, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 4, // 0-10;
    },
    greenEdaphosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.per,
        size: 10,
        tags: ["runningEscape"],
        moistureLevel: 8, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    greyEdaphosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.per,
        size: 8,
        tags: ["runningEscape"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    yellowEdaphosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.per,
        size: 12,
        tags: ["runningEscape"],
        moistureLevel: 2, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 1, // 0-10;
    },

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Predators ----------------
    orangeDimetrodon: {
        ...genericCreatureStats,
        timePeriod: timePeriods.per,
        size: 15,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    lesserGorgonopsid: {
        ...genericCreatureStats,
        timePeriod: timePeriods.per,
        size: 18,
        tags: ["generalistPredator", "persuitPredator"],
        moistureLevel: 9, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    greaterGorgonopsid: {
        ...genericCreatureStats,
        timePeriod: timePeriods.per,
        size: 25,
        tags: ["specialistPredator", "persuitPredator"],
        moistureLevel: 2, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 2, // 0-10;
    },

    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ Triassic ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------
    redLystrosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.tri,
        size: 8,
        tags: ["runningEscape"],
        moistureLevel: 4, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 3, // 0-10;
    },
    purpleLystrosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.tri,
        size: 10,
        tags: ["runningEscape"],
        moistureLevel: 7, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 7, // 0-10;
    },
    brownDesmatosuchus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.tri,
        size: 27,
        tags: ["passiveDefence"],
        moistureLevel: 4, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 2, // 0-10;
    },
    blueDesmatosuchus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.tri,
        size: 27,
        tags: ["passiveDefence"],
        moistureLevel: 14, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 7, // 0-10;
    },
    yellowDesmatosuchus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.tri,
        size: 30,
        tags: ["passiveDefence"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 10, // 0-10;
    },

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Predators ----------------
    greenHerrerasaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.tri,
        size: 20,
        tags: ["generalistPredator", "persuitPredator"],
        moistureLevel: 6, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 10, // 0-10;
    },
    yellowHerrerasaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.tri,
        size: 12,
        tags: ["generalistPredator", "persuitPredator"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    greenPostosuchus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.tri,
        size: 30,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 7, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 6, // 0-10;
    },
    brownPostosuchus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.tri,
        size: 35,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 2, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 4, // 0-10;
    },

    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ Jurassic ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------
    greenKentrosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        size: 27,
        tags: ["passiveDefence"],
        moistureLevel: 14, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 7, // 0-10;
    },
    yellowKentrosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        offSetType: "largeQuadraped",
        size: 30,
        tags: ["passiveDefence"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 10, // 0-10;
    },
    blueStegosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        offSetType: "largeQuadraped",
        size: 35,
        tags: ["passiveDefence"],
        moistureLevel: 14, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    redStegosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        offSetType: "largeQuadraped",
        size: 43,
        tags: ["passiveDefence"],
        moistureLevel: 6, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 2, // 0-10;
    },
    apatosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        offSetType: "megaQuadraped",
        size: 80,
        tags: ["passiveDefence"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 3, // 0-10;
    },

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Predators ----------------
    yellowOrnitholestes: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        size: 6,
        tags: ["generalistPredator", "persuitPredator"],
        moistureLevel: 2, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    blueOrnitholestes: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        size: 7,
        tags: ["generalistPredator", "persuitPredator"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    ceratosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        offSetType: "largeQuadraped",
        size: 30,
        tags: ["generalistPredator", "persuitPredator"],
        moistureLevel: 2, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    allosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        offSetType: "largeBipedal",
        size: 40,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 8, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 6, // 0-10;
    },
    saurophaganax: {
        ...genericCreatureStats,
        timePeriod: timePeriods.jur,
        offSetType: "largeBipedal",
        size: 50,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 1, // 0-10;
    },
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ Cretaceous ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------
    ///////////////////////////////// ------------ Duckbills ----------------
    greyParasaurolophus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeQuadraped",
        size: 43,
        tags: ["runningEscape", "smallHerdAnimal"],
        moistureLevel: 10, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    blueParasaurolophus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeQuadraped",
        size: 40,
        tags: ["runningEscape"],
        moistureLevel: 12, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    brownOuranosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeQuadraped",
        size: 35,
        tags: ["runningEscape"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    yellowOuranosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeQuadraped",
        size: 33,
        tags: ["runningEscape", "narrowRange", "smallHerdAnimal"],
        moistureLevel: 2, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 2, // 0-10;
    },
    ///////////////////////////////// ------------ Ceretopsians ----------------
    greenStyracosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeQuadraped",
        size: 32,
        tags: ["activeDefence"],
        moistureLevel: 12, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    blueStyracosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeQuadraped",
        size: 35,
        tags: ["activeDefence", "smallHerdAnimal"],
        moistureLevel: 14, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
    },
    greyTriceratops: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeQuadraped",
        size: 40,
        tags: ["activeDefence", "aggressive", "largeHerdAnimal"],
        moistureLevel: 2, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 2, // 0-10;
    },
    brownTriceratops: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeQuadraped",
        size: 43,
        tags: ["activeDefence", "aggressive", "mediumHerdAnimal"],
        moistureLevel: 4, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 0, // 0-10;
    },
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Predators ----------------
    ///////////////////////////////// ------------ Raptors ----------------
    velociraptor: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        size: 5,
        tags: ["generalistPredator", "persuitPredator", "runningEscape", "mediumHerdAnimal"],
        moistureLevel: 2, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 3, // 0-10;
    },
    deinonychus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        size: 12,
        tags: ["generalistPredator", "persuitPredator", "runningEscape", "smallHerdAnimal"],
        moistureLevel: 9, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 8, // 0-10;
    },
    utahRaptor: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        size: 30,
        tags: ["generalistPredator", "persuitPredator", "runningEscape", "smallHerdAnimal", "largeTerritory"],
        moistureLevel: 6, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 4, // 0-10;
    },
    ///////////////////////////////// ------------ Tyrannosaurids ----------------
    tarbosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeBipedal",
        size: 55,
        tags: ["generalistPredator", "ambushPredator", "largeTerritory"],
        moistureLevel: 6, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 4, // 0-10;
    },
    tyrannosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeBipedal",
        size: 60,
        tags: ["generalistPredator", "ambushPredator", "largeTerritory"],
        moistureLevel: 3, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 2, // 0-10;
    },
    ///////////////////////////////// ------------ Spinosaurids ----------------
    baryonyx: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeBipedal",
        size: 40,
        tags: ["specialistPredator", "ambushPredator"],
        moistureLevel: 14, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 6, // 0-10;
    },
    spinosaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "largeBipedal",
        size: 70,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 13, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 2, // 0-10;
    },
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Marine Predators ----------------
    ///////////////////////////////// ------------ Mososaurs ----------------
    blueMosasaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "longWater",
        isUnderWater: true,
        size: 40,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 22, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 0, // 0-10;
    },
    greenMosasaurus: {
        ...genericCreatureStats,
        timePeriod: timePeriods.cre,
        offSetType: "longWater",
        isUnderWater: true,
        size: 70,
        tags: ["generalistPredator", "ambushPredator"],
        moistureLevel: 22, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 0, // 0-10;
    },

    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ PALEOGENE ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------
    
    uintatherium: {
        ...genericCreatureStats,
        timePeriod: timePeriods.pal,
        offSetType: "largeQuadraped",
        size: 30,
        tags: ["activeDefence", "narrowRange"],
        moistureLevel: 10, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 10, // 0-10;
    },
    brontotherium: {
        ...genericCreatureStats,
        timePeriod: timePeriods.pal,
        offSetType: "largeQuadraped",
        size: 38,
        tags: ["activeDefence", "aggressive", "smallHerdAnimal", "narrowRange"],
        moistureLevel: 4, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 0, // 0-10;
    },

    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ NEOGENE ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------


    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ------------ QUARTERNARY ----------------
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Prey ----------------
    woolyRhino: {
        ...genericCreatureStats,
        timePeriod: timePeriods.qua,
        offSetType: "largeQuadraped",
        size: 30,
        tags: ["activeDefence", "aggressive"],
        moistureLevel: 4, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 7, // 0-10;
        coldLevel: 7 // 0-10
    },
    elasmotherium: {
        ...genericCreatureStats,
        timePeriod: timePeriods.qua,
        offSetType: "largeQuadraped",
        size: 35,
        tags: ["activeDefence"],
        moistureLevel: 4, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
        coldLevel: 5 // 0-10
    },
    woolyMammoth: {
        ...genericCreatureStats,
        timePeriod: timePeriods.qua,
        offSetType: "largeQuadraped",
        size: 40,
        tags: ["activeDefence", "smallHerdAnimal"],
        moistureLevel: 8, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 0, // 0-10;
        coldLevel: 10 // 0-10
    },
    greyMastodon: {
        ...genericCreatureStats,
        timePeriod: timePeriods.qua,
        offSetType: "largeQuadraped",
        size: 45,
        tags: ["activeDefence", "smallHerdAnimal"],
        moistureLevel: 8, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 4, // 0-10;
        coldLevel: 1 // 0-10
    },
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------ Predators ----------------
    greyDinofelis: {
        ...genericCreatureStats,
        timePeriod: timePeriods.qua,
        size: 12,
        tags: ["generalistPredator", "ambushPredator", "runningEscape"],
        moistureLevel: 8, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 10, // 0-10;
        coldLevel: 1 // 0-10
    },
    whiteLion: {
        ...genericCreatureStats,
        timePeriod: timePeriods.qua,
        size: 20,
        tags: ["generalistPredator", "ambushPredator", "runningEscape", "smallHerdAnimal"],
        moistureLevel: 5, // 0-25 -- 0-10 land 10-15 shallow water 15-25 deep water
        foliageDensity: 5, // 0-10;
        coldLevel: 10 // 0-10
    }
}

// export default creatureDirectory;

/*
allosaurus
apatosaurus
baryonyx
desmatosuchus
meganeura
diictodon
stegosaurus
ornitholestes
styracosaurus
postosuchus
scutosaurus
deinonychus
diplodocus
dunkleosteus
gorgonopsid
arthropleura
lystrosaurus
edaphosaurus
proterogyrinus
herrerasaurus
pulmonoscorpius
mesothelae
mosasaurus
dimetrodon
ouranosaurus
saurophaganax
parasaurolophus
koolasuchus -- giant cretaceous amphibian
*/

// const genericDarter = {
//     heightToSquare: .3,
//     widthToHeight: 1.2,
//     isFlying: true,
//     preyType: "regular-tiny",
//     isPredator: false,
//     possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
//     terrainPreference: {
//         "desert": 10,
//         "savannah": 20, 
//         "grassland": 60, 
//         "forest": 50, 
//         "swampForest": 90,
//         "marsh": 90,
//         "shallowWater": 90,
//         "deepWater": 70
//     },
//     sightRange: 3,
//     isTerritoryRestricted: false,
//     territorySize: 0,
//     threatReaction: 50,


//     activityLevel: 10,
//     speed: 2,
//     hp: 2,
//     range: 1,
//     aggression: 1,
//     attack: 1,
//     defence: 0,
//     targetSpecs: {
//         top: 50,
//         left: 50,
//         height: 100,
//         width: 100,
//         color: "green"
//     },
//     escape: 9
// };

// const genericFish = {
//     heightToSquare: .3,
//     widthToHeight: 2,
//     preyType: "regular-medium",
//     isPredator: false,
//     possTerrain: ["shallowWater", "deepWater", "marsh", "swampForest"],
//     terrainPreference: {
//         "desert": 0,
//         "savannah": 0, 
//         "grassland": 0, 
//         "forest": 0, 
//         "swampForest": 80,
//         "marsh": 90,
//         "shallowWater": 100,
//         "deepWater": 100
//     },
//     sightRange: 3,
//     isTerritoryRestricted: false,
//     territorySize: 0,
//     threatReaction: 50,
//     activityLevel: 5,
//     isUnderWater: true,
//     hp: 10,
//     hunger: 100,
//     speed: 2,
//     range: 1,
//     aggression: 0,
//     attack: 1,
//     defence: 1,
//     targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//     escape: 1,
//     waterOnly: true
// }

// const genericOffsets = {
//     n: {
//         topOffset: 0,
//         leftOffset: 0,
//     },
//     s: {
//         topOffset: 0,
//         leftOffset: 0,
//     },
//     e: {
//         topOffset: 0,
//         leftOffset: 0,
//     },
//     w: {
//         topOffset: 0,
//         leftOffset: 0,
//     }
// }

// const genericApatosaurus = {
//     heightToSquare: 18,
//     widthToHeight: 2,
//     isMega: true,
//     preyType: "regular-mega",
//     isPredator: false,
//     possTerrain: ["grassland", "savannah"],
//     terrainPreference: {
//         "desert": 50,
//         "savannah": 100, 
//         "grassland": 80, 
//         "forest": 0, 
//         "swampForest": 0,
//         "marsh": 0,
//         "shallowWater": 0,
//         "deepWater": 0
//     },
//     sightRange: 3,
//     isTerritoryRestricted: false,
//     territorySize: 0,
//     threatReaction: 50,

//     activityLevel: 5,
//     hp: 200,
//     hunger: 100,
//     speed: 1,
//     range: 1,
//     aggression: 0,
//     attack: 80,
//     defence: 1,
//     targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//     escape: 1,
//     offSets: {
//         n: {
//             topOffset: -50,
//             leftOffset: 200,
//         },
//         s: {
//             topOffset: -180,
//             leftOffset: 120,
//         },
//         e: {
//             topOffset: -90,
//             leftOffset: 150,
//         },
//         w: {
//             topOffset: -150,
//             leftOffset: 220,
//         }
//     }
// }


// const editDirectory = {
//     // All
//       greenFish: {
//         ...genericFish,
//         name: "Green Fish",
//         imgDir: "green-fish",
//     },
//     blueFish: {
//         ...genericFish,
//         name: "Blue Fish",
//         imgDir: "blue-fish",
//     },
//     yellowFish: {
//         ...genericFish,
//         name: "Yellow Fish",
//         imgDir: "yellow-fish",
//     },
//     silverBarb: {
//         ...genericFish,
//         name: "Silver Barb",
//         imgDir: "silver-barb",
//     },
//     hynerpeton: {
//       name: "Hynerpeton",
//       imgDir: "hynerpeton",
//       heightToSquare: 1,
//       widthToHeight: 1.3,
//       hasSwim: true,
//       preyType: "dangerous-medium",
//       isPredator: true,
//       isHumanPredator: false,
//       prey: ["regular-medium", "regular-small", "dangerous-small", "dangerous-medium", ],
//       possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
//       terrainPreference: {
//             "desert": 0,
//             "savannah": 0, 
//             "grassland": 60, 
//             "forest": 70, 
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 90,
//             "deepWater": 60
//         },
//         sightRange: 3,
//         isTerritoryRestricted: true,
//         territorySize: 8,
//         threatReaction: 50,

//       activityLevel: 5,
//       hp: 10,
//       hunger: 100,
//       speed: 2,
//       range: 1,
//       aggression: 4,
//       attack: 5,
//       defence: 3,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//             height: 100,
//             width: 100,
//           color: "green"
//       },
//       escape: 1,
//        offSets: {
//            n: {
//                topOffset: -20,
//                leftOffset: 50,
//            },
//            s: {
//                topOffset: 0,
//                leftOffset: 0,
//            },
//            e: {
//                topOffset: -50,
//                leftOffset: 30,
//            },
//            w: {
//                topOffset: 0,
//                leftOffset: 50,
//            }
//        }
//     },
//     hyneria: {
//       name: "Hyneria",
//       imgDir: "hyneria",
//       heightToSquare: 6,
//       widthToHeight: 1.8,
//       preyType: "dangerous-XXlarge",
//       isPredator: true,
//       isHumanPredator: true,
//       prey: ["regular-Xlarge", "dangerous-Xlarge", "regular-XXlarge", "regular-large", "human", "dangerous-large", "regular-medium", "dangerous-medium"],
//       possTerrain: ["shallowWater", "marsh", "deepWater"],
//       terrainPreference: {
//         "desert": 0,
//         "savannah": 0, 
//         "grassland": 0, 
//         "forest": 0, 
//         "swampForest": 40,
//         "marsh": 40,
//         "shallowWater": 70,
//         "deepWater": 100
//     },
//     sightRange: 3,
//     isTerritoryRestricted: false,
//     territorySize: 0,
//     threatReaction: 50,

//       activityLevel: 5,
//       hp: 30,
//       hunger: 100,
//       speed: 1.5,
//       range: 1,
//       aggression: 5,
//       attack: 20,
//       defence: 8,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//           height: 100,
//           width: 100,
//           color: "green"
//       },
//       escape: 1,
//       waterOnly: false,
//       isUnderWater: true,
//        offSets: {
//            n: {
//                topOffset: -20,
//                leftOffset: 50,
//            },
//            s: {
//                topOffset: 0,
//                leftOffset: 0,
//            },
//            e: {
//                topOffset: -50,
//                leftOffset: 30,
//            },
//            w: {
//                topOffset: 0,
//                leftOffset: 50,
//            }
//        }
//     },
//     dunkleosteus: {
//       name: "Dunkleosteus",
//       imgDir: "dunkleost",
//       heightToSquare: 7,
//       widthToHeight: 1.2,
//       preyType: "dangerous-XXlarge",
//       isPredator: true,
//       isHumanPredator: true,
//       prey: ["regular-XXlarge", "regular-bnv cXlarge", "dangerous-Xlarge", "dangerous-XXlarge", "regular-large", "human", "dangerous-large"],
//       possTerrain: ["deepWater"],
//       terrainPreference: {
//         "desert": 0,
//         "savannah": 0, 
//         "grassland": 0, 
//         "forest": 0, 
//         "swampForest": 0,
//         "marsh": 10,
//         "shallowWater": 40,
//         "deepWater": 100
//     },
//     sightRange: 3,
//     isTerritoryRestricted: false,
//     territorySize: 0,
//     threatReaction: 50,

//       activityLevel: 3,
//       hp: 60,
//       hunger: 100,
//       speed: 1.5,
//       range: 1,
//       aggression: 5,
//       attack: 40,
//       defence: 6,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//             height: 100,
//             width: 100,
//           color: "green"
//       },
//       escape: 1,
//       waterOnly: false,
//       isUnderWater: true,
//        offSets: {
//            n: {
//                topOffset: -20,
//                leftOffset: 50,
//            },
//            s: {
//                topOffset: 0,
//                leftOffset: 0,
//            },
//            e: {
//                topOffset: -50,
//                leftOffset: 30,
//            },
//            w: {
//                topOffset: 0,
//                leftOffset: 50,
//            }
//        }
//   },
//     scorpion: {
//         name: "scorpion",
//         imgDir: "scorp",
//         heightToSquare: .2,
//         widthToHeight: 2,
//         preyType: "dangerous-tiny",
//         isPredator: false,
//         possTerrain: ["grassland", "desert", "savannah", "forest"],
//         terrainPreference: {
//             "desert": 90,
//             "savannah": 80, 
//             "grassland": 60, 
//             "forest": 80, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,
        
//         activityLevel: 5,
//         hp: 2,
//         hunger: 100,
//         speed: 1,
//         range: 1,
//         aggression: 3,
//         attack: 1,
//         defence: 1,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     pulmonoscorpius: {
//         name: "Pulmonoscorpius",
//         imgDir: "less-scorp",
//         heightToSquare: .5,
//         widthToHeight: 2,
//         preyType: "dangerous-small",
//         isPredator: true,
//         prey: ["regular-tiny", "dangerous-tiny"],
//         possTerrain: ["grassland", "desert", "savannah", "forest"],
//         terrainPreference: {
//             "desert": 90,
//             "savannah": 80, 
//             "grassland": 60, 
//             "forest": 80, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,
        
//         activityLevel: 5,
//         hp: 3,
//         hunger: 100,
//         speed: 1,
//         range: 1,
//         aggression: 4,
//         attack: 2,
//         defence: 4,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//      // Carboniferous
//      kingPulmonoscorpius: {
//         name: "King Pulmonoscorpius",
//         imgDir: "gre-scorp",
//         heightToSquare: .8,
//         widthToHeight: 2,
//         preyType: "dangerous-medium",
//         isPredator: true,
//         prey: ["regular-medium",  "regular-small", "dangerous-small", "regular-tiny", "dangerous-tiny"],
//         possTerrain: ["grassland", "desert", "savannah", "forest"],
//         terrainPreference: {
//             "desert": 90,
//             "savannah": 80, 
//             "grassland": 60, 
//             "forest": 80, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,
        
//         activityLevel: 5,
//         hp: 6,
//         hunger: 100,
//         speed: 1,
//         range: 1,
//         aggression: 5,
//         attack: 4,
//         defence: 4,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },

//      megaPulmonoscorpius: {
//          name: "Mega Pulmonoscorpius",
//          imgDir: "gre-scorp",
//          heightToSquare: 4,
//          widthToHeight: 1.5,
//          preyType: "dangerous-Xlarge",
//          isPredator: true,
//          isHumanPredator: true,
//          prey: ["human"],
//          possTerrain: ["savannah", "forest"],
//          terrainPreference: {
//             "desert": 90,
//             "savannah": 80, 
//             "grassland": 60, 
//             "forest": 80, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,
        
//          activityLevel: 5,
//          hp: 30,
//          hunger: 100,
//          speed: .3,
//          range: 2,
//          aggression: 5,
//          attack: 15,
//          defence: 6,
//          escape: 1
//      },

//     // Carboniferous
//     greaterArthropluera: {
//         name: "Greater Athropluera",
//         imgDir: "gre-arth",
//         heightToSquare: 1.5,
//         widthToHeight: 1.5,
//         preyType: "regular-large",
//         isPredator: false,
//         possTerrain: ["grassland", "forest", "marsh", "swampForest"],
//         terrainPreference: {
//             "desert": 0,
//             "savannah": 8, 
//             "grassland": 90, 
//             "forest": 90, 
//             "swampForest": 70,
//             "marsh": 80,
//             "shallowWater": 50,
//             "deepWater": 10
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,
        
//         activityLevel: 3,
//         hp: 20,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 7,
//         defence: 5,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     // Carboniferous
//     lesserArthropluera: {
//         name: "Lesser Athropluera",
//         imgDir: "less-arth",
//         heightToSquare: 1,
//         widthToHeight: 1.5,
//         preyType: "regular-medium",
//         isPredator: false,
//         possTerrain: ["grassland", "savannah", "forest", "marsh", "swampForest"],
//         terrainPreference: {
//             "desert": 0,
//             "savannah": 80, 
//             "grassland": 90, 
//             "forest": 90, 
//             "swampForest": 70,
//             "marsh": 80,
//             "shallowWater": 50,
//             "deepWater": 10
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,
        
//         activityLevel: 4,
//         hp: 15,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 0,
//         attack: 5,
//         defence: 4,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     megaMisophilae: {
//       name: "Mega Misophilae",
//       imgDir: "mega-meso",
//       heightToSquare: 5,
//       widthToHeight: 1,
//       preyType: "dangerous-large",
//       isPredator: true,
//       isHumanPredator: true,
//       prey: ["human"],
//       possTerrain: ["shallow-water", "deep-water", "marsh",  "savannah", "forest"],
//       terrainPreference: {
//             "desert": 0,
//             "savannah": 8, 
//             "grassland": 90, 
//             "forest": 90, 
//             "swampForest": 70,
//             "marsh": 80,
//             "shallowWater": 80,
//             "deepWater": 90
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 6,
//       hp: 25,
//       hunger: 100,
//       speed: .7,
//       range: 1,
//       aggression: 5,
//       attack: 10,
//       defence: 1,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//           height: 100,
//           width: 100,
//           color: "green"
//       },
//       escape: 1
//     },
//     // Carboniferous
//     greaterMisophilae: {
//         name: "Greater Misophilae",
//         imgDir: "gre-miso",
//         heightToSquare: .5,
//         widthToHeight: 1,
//         preyType: "dangerous-medium",
//         isPredator: true,
//         prey: ["regular-medium", "dangerous-medium", "regular-small", "dangerous-small","regular-tiny", "dangerous-tiny"],
//         possTerrain: ["grassland", "savannah", "forest"],
//         terrainPreference: {
//             "desert": 0,
//             "savannah": 80, 
//             "grassland": 90, 
//             "forest": 100, 
//             "swampForest": 50,
//             "marsh": 40,
//             "shallowWater": 10,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: true,
//         territorySize: 4,
//         threatReaction: 50,

//         activityLevel: 6,
//         hp: 6,
//         hunger: 100,
//         speed: .7,
//         range: 1,
//         aggression: 5,
//         attack: 4,
//         defence: 1,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     // Carboniferous/Permian
//     lesserMisophilae: {
//         name: "Lesser Misophilae",
//         imgDir: "less-miso",
//         heightToSquare: .25,
//         widthToHeight: 1,
//         preyType: "regular-small",
//         isPredator: true,
//         prey: ["regular-tiny", "dangerous-tiny"],
//         possTerrain: ["grassland", "savannah", "forest"],
//         terrainPreference: {
//             "desert": 0,
//             "savannah": 80, 
//             "grassland": 90, 
//             "forest": 100, 
//             "swampForest": 50,
//             "marsh": 40,
//             "shallowWater": 10,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: true,
//         territorySize: 3,
//         threatReaction: 50,

//         activityLevel: 7,
//         hp: 4,
//         hunger: 100,
//         speed: .5,
//         range: 1,
//         aggression: 3,
//         attack: 3,
//         defence: 1,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     // Carboniferous
//     orangeMeganuera: {
//         name: "Orange Meganuera",
//         imgDir: "orange-meg",
//         heightToSquare: .7,
//         widthToHeight: 1.2,
//         isFlying: true,
//         preyType: "regular-small",
//         isPredator: true,
//         prey: ["regular-tiny", "dangerous-tiny"],
//         possTerrain: ["grassland", "savannah", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
//         terrainPreference: {
//             "desert": 50,
//             "savannah": 60, 
//             "grassland": 80, 
//             "forest": 70, 
//             "swampForest": 100,
//             "marsh": 100,
//             "shallowWater": 100,
//             "deepWater": 60
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 10,
//         hp: 5,
//         hunger: 100,
//         speed: .3,
//         range: 1,
//         aggression: 1,
//         attack: 2,
//         defence: 1,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 8
//     },
//     // Carboniferous
//     blueMeganuera: {
//         name: "Blue Meganuera",
//         imgDir: "blue-meg",
//         heightToSquare: 1,
//         widthToHeight: 1.2,
//         isFlying: true,
//         preyType: "regular-medium",
//         isPredator: true,
//         prey: ["regular-small", "regular-tiny", "dangerous-tiny"],
//         possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
//         terrainPreference: {
//             "desert": 50,
//             "savannah": 60, 
//             "grassland": 80, 
//             "forest": 70, 
//             "swampForest": 100,
//             "marsh": 100,
//             "shallowWater": 100,
//             "deepWater": 60
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 10,
//         hp: 10,
//         hunger: 100,
//         speed: .5,
//         range: 1,
//         aggression: 0,
//         attack: 4,
//         defence: 1,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 7
//     },
//     redDarter: {
//         ...genericDarter,
//         name: "Red Darter",
//         imgDir: "red-darter",
//     },
//     yellowDarter: {
//         ...genericDarter,
//         name: "Yellow Darter",
//         imgDir: "yellow-darter",
//     },
//     greenDarter: {
//         ...genericDarter,
//         name: "Green Darter",
//         imgDir: "green-darter",
//     },
//     blueDarter: {
//       ...genericDarter,
//       name: "Blue Darter",
//       imgDir: "blue-meg",
//     },
//     purpleDarter: {
//         ...genericDarter,
//         name: "Purple Darter",
//         imgDir: "purple-darter",
//     },
    
//     // Carboniferous
//     greaterProterogyrinus: {
//         name: "Greater Proterogyrinus",
//         imgDir: "gre-amph",
//         heightToSquare: 2,
//         widthToHeight: 1.3,
//         hasSwim: true,
//         preyType: "dangerous-large",
//         isPredator: true,
//         isHumanPredator: true,
//         prey: ["regular-large", "human", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
//         possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
//         terrainPreference: {
//             "desert": 0,
//             "savannah": 0, 
//             "grassland": 60, 
//             "forest": 70, 
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 90,
//             "deepWater": 60
//         },
//         sightRange: 3,
//         isTerritoryRestricted: true,
//         territorySize: 8,
//         threatReaction: 50,

//         activityLevel: 4,
//         hp: 15,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 4,
//         attack: 6,
//         defence: 4,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     // Permian
//     yellowCrocodile: {
//         name: "Yellow Thecodont",
//         imgDir: "yellow-croc",
//         heightToSquare: 1,
//         widthToHeight: 2,
//         hasSwim: true,
//         preyType: "dangerous-large",
//         isPredator: true,
//         isHumanPredator: true,
//         prey: ["human", "regular-large", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
//         possTerrain: ["marsh", "swampForest", "shallowWater", "deepWater"],
//         terrainPreference: {
//             "desert": 0,
//             "savannah": 0, 
//             "grassland": 0, 
//             "forest": 0, 
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 100,
//             "deepWater": 100
//         },
//     sightRange: 3,
//     isTerritoryRestricted: false,
//     territorySize: 0,
//     threatReaction: 50,
//         activityLevel: 3,
//         hp: 15,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 6,
//         attack: 7,
//         defence: 3,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1,
//         waterOnly: true
//     },
//     // Permian
//     orangeDimetrodon: {
//         name: "Orange Dimetrodon",
//         imgDir: "orange-dim",
//         heightToSquare: 1.5,
//         widthToHeight: 1.2,
//         preyType: "dangerous-large",
//         isPredator: true,
//         prey: [ "regular-large", "human", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
//         possTerrain: ["grassland", "desert", "savannah"],
//         terrainPreference: {
//             "desert": 80,
//             "savannah": 90, 
//             "grassland": 80, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: true,
//         territorySize: 10,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 20,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 5,
//         attack: 15,
//         defence: 5,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
    
//     greyScutosaurus: {
//         name: "Grey Scutosaurus",
//         imgDir: "grey-scuta",
//         heightToSquare: 1.6,
//         widthToHeight: 1.1,
//         preyType: "regular-Xlarge",
//         isPredator: false,
//         possTerrain: ["desert", "savannah"],
//         terrainPreference: {
//             "desert": 90,
//             "savannah": 90, 
//             "grassland": 50, 
//             "forest": 30, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 30,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 4,
//         defence: 8,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 2,
//         offSets: {
//             n: {
//                 topOffset: -50,
//                 leftOffset: -50,
//             },
//             s: {
//                 topOffset: -50,
//                 leftOffset: -50,
//             },
//             e: {
//                 topOffset: -50,
//                 leftOffset: -50,
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: -50,
//             }
//         }
//     },
//     brownScutosaurus: {
//         name: "Brown Scutosaurus",
//         imgDir: "brown-scuta",
//         heightToSquare: 1.8,
//         widthToHeight: 1.1,
//         preyType: "regular-Xlarge",
//         isPredator: false,
//         possTerrain: ["desert", "savannah"],
//         terrainPreference: {
//             "desert": 90,
//             "savannah": 90, 
//             "grassland": 50, 
//             "forest": 30, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 35,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 5,
//         defence: 10,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 2,
//         offSets: {
//             n: {
//                 topOffset: -50,
//                 leftOffset: -50,
//             },
//             s: {
//                 topOffset: -50,
//                 leftOffset: -50,
//             },
//             e: {
//                 topOffset: -50,
//                 leftOffset: -50,
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: -50,
//             }
//         }
//     },

//     greaterEdaphasaurus: {
//       name: "Greater Edaphasaurus",
//       imgDir: "yellow-green-elaph",
//       heightToSquare: 1.8,
//       widthToHeight: 1.5,
//       preyType: "regular-large",
//       isPredator: false,
//       possTerrain: ["grassland", "savannah"],
//       terrainPreference: {
//             "desert": 50,
//             "savannah": 90, 
//             "grassland": 90, 
//             "forest": 30, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 4,
//       hp: 20,
//       hunger: 100,
//       speed: 3,
//       range: 1,
//       aggression: 1,
//       attack: 5,
//       defence: 5,
//       targetSpecs: {
//           top: 50,
//           left: 50,
// height: 100,
// width: 100,
//           color: "green"
//       },
//       escape: 2
//   },

//     orangeEdaphasaurus: {
//         name: "Orange Edaphasaurus",
//         imgDir: "orange-elaph",
//         heightToSquare: 1.5,
//         widthToHeight: 1.5,
//         preyType: "regular-large",
//         isPredator: false,
//         possTerrain: ["desert", "savannah"],
//         terrainPreference: {
//             "desert": 90,
//             "savannah": 90, 
//             "grassland": 50, 
//             "forest": 30, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 4,
//         hp: 15,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 0,
//         attack: 4,
//         defence: 4,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     greenEdaphasaurus: {
//         name: "Green Edaphasaurus",
//         imgDir: "green-elaph",
//         heightToSquare: 1.2,
//         widthToHeight: 1.5,
//         preyType: "regular-medium",
//         isPredator: false,
//         possTerrain: ["grassland", "forest"],
//         terrainPreference: {
//             "desert": 50,
//             "savannah": 60, 
//             "grassland": 90, 
//             "forest": 90, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 4,
//         hp: 10,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 0,
//         attack: 3,
//         defence: 3,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     blueDiictidon: {
//         name: "Blue Diictodon",
//         imgDir: "blue-dii",
//         heightToSquare: .6,
//         widthToHeight: 1.2,
//         preyType: "regular-small",
//         isPredator: false,
//         possTerrain: ["grassland", "forest"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 10,
//         hp: 4,
//         hunger: 100,
//         speed: .3,
//         range: 1,
//         aggression: 0,
//         attack: 1,
//         defence: 90,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 5
//     },
//     brownDiictidon: {
//         name: "Brown Diictodon",
//         imgDir: "brown-dii",
//         heightToSquare: .5,
//         widthToHeight: 1.2,
//         preyType: "regular-small",
//         isPredator: false,
//         possTerrain: ["savannah", "desert"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 10,
//         hp: 4,
//         hunger: 100,
//         speed: .3,
//         range: 1,
//         aggression: 0,
//         attack: 1,
//         defence: 60,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 5
//     },
//     lesserGorgonopsid: {
//         name: "Lesser Gorgonopsid",
//         imgDir: "less-gorg",
//         heightToSquare: 2,
//         widthToHeight: 1.8,
//         preyType: "dangerous-large",
//         isPredator: true,
//         isHumanPredator: true,
//         prey: ["regular-large", "human", "regular-Xlarge", "regular-medium", "dangerous-medium", "regular-small", "dangerous-small"],
//         possTerrain: ["grassland", "forest", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 7,
//         hp: 25,
//         hunger: 100,
//         speed: .4,
//         range: 1,
//         aggression: 7,
//         attack: 10,
//         defence: 2,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     greaterGorgonopsid: {
//         name: "Greater Gorgonopsid",
//         imgDir: "gre-gorg",
//         heightToSquare: 2.5,
//         widthToHeight: 1.8,
//         preyType: "dangerous-Xlarge",
//         isPredator: true,
//         isHumanPredator: true,
//         prey: ["regular-Xlarge", "regular-large", "human", "dangerous-large", "regular-medium", "dangerous-medium", "regular-small", "dangerous-small"],
//         possTerrain: ["desert", "grassland", "forest", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 30,
//         hunger: 100,
//         speed: .5,
//         range: 1,
//         aggression: 6,
//         attack: 12,
//         defence: 3,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     megaGorgonopsid: {
//       name: "Mega Gorgonopsid",
//       imgDir: "mega-gorganopsid",
//       heightToSquare: 6,
//       widthToHeight: 1.8,
//       preyType: "dangerous-XXlarge",
//       isPredator: true,
//       isHumanPredator: true,
//       prey: ["human"],
//       possTerrain: ["forest", "savannah"],
//       terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 5,
//       hp: 50,
//       hunger: 100,
//       speed: .5,
//       range: 1,
//       aggression: 6,
//       attack: 12,
//       defence: 3,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//           height: 100,
//           width: 100,
//           color: "green"
//       },
//       escape: 1
//     },
//     redLystosaurus: {
//         name: "Red Lystosaurus",
//         imgDir: "red-lyst",
//         heightToSquare: .8,
//         widthToHeight: 1.2,
//         preyType: "regular-medium",
//         isPredator: false,
//         possTerrain: ["savannah", "desert"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 6,
//         hp: 10,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 0,
//         attack: 3,
//         defence: 3,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     purpleLystosaurus: {
//         name: "Purple Lystosaurus",
//         imgDir: "purple-lyst",
//         heightToSquare: .9,
//         widthToHeight: 1.2,
//         preyType: "regular-large",
//         isPredator: false,
//         possTerrain: ["desert", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 4,
//         hp: 15,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 0,
//         attack: 4,
//         defence: 4,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     greenPostosuchus: {
//         name: "Green Postosuchus",
//         imgDir: "green-post",
//         heightToSquare: 3,
//         widthToHeight: 1.8,
//         preyType: "dangerous-Xlarge",
//         isPredator: true,
//         isHumanPredator: true,
//         prey: ["regular-large", "regular-Xlarge", "human", "dangerous-large", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
//         possTerrain: ["desert", "grassland", "forest", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 4,
//         hp: 30,
//         hunger: 100,
//         speed: 1,
//         range: 1,
//         aggression: 5,
//         attack: 10,
//         defence: 5,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1,
//         offSets: {
//             ...genericOffsets,
//             w: {
//                 topOffset: -40,
//                 leftOffset: 50,
//             },
//         }
//     },
//     brownPostosuchus: {
//         name: "Brown Postosuchus",
//         imgDir: "brown-post",
//         heightToSquare: 3.5,
//         widthToHeight: 1.8,
//         preyType: "dangerous-XXlarge",
//         isPredator: true,
//         isHumanPredator: true,
//         prey: ["regular-Xlarge", "regular-large", "regular-XXlarge", "human", "dangerous-Xlarge", "dangerous-large", "regular-medium", "dangerous-medium"],
//         possTerrain: ["desert", "grassland", "forest", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 3,
//         hp: 40,
//         hunger: 100,
//         speed: 1.5,
//         range: 1,
//         aggression: 5,
//         attack: 15,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1,
//         offSets: {
//             ...genericOffsets,
//             w: {
//                 topOffset: -40,
//                 leftOffset: 50,
//             },
//         }
//     },
//     megaPostosuchus: {
//       name: "Mega Postosuchus",
//       imgDir: "mega-posto",
//       heightToSquare: 10,
//       widthToHeight: 1.8,
//       preyType: "dangerous-XXXlarge",
//       isPredator: true,
//       isHumanPredator: true,
//       prey: ["human"],
//       possTerrain: ["forest", "savannah"],
//       terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 4,
//       hp: 60,
//       hunger: 100,
//       speed: 1,
//       range: 1,
//       aggression: 5,
//       attack: 25,
//       defence: 5,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//           height: 100,
//           width: 100,
//           color: "green"
//       },
//       escape: 1,
//       offSets: {
//           ...genericOffsets,
//           w: {
//               topOffset: -40,
//               leftOffset: 50,
//           },
//       }
//     },
//     yellowHerreresaurus: {
//         name: "Yellow Herreresaurus",
//         imgDir: "yellow-herr",
//         heightToSquare: 2.1,
//         widthToHeight: 1.5,
//         preyType: "dangerous-large",
//         isPredator: true,
//         prey: ["regular-large", "regular-medium", "dangerous-medium", "regular-small", "dangerous-small", "human", ],
//         possTerrain: ["desert", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 7,
//         hp: 20,
//         hunger: 100,
//         speed: .4,
//         range: 1,
//         aggression: 7,
//         attack: 10,
//         defence: 2,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     greenHerreresaurus: {
//         name: "green Herreresaurus",
//         imgDir: "green-herr",
//         heightToSquare: 1.8,
//         widthToHeight: 1.5,
//         preyType: "dangerous-large",
//         isPredator: true,
//         prey: ["regular-large", "regular-medium", "regular-small", "dangerous-small", "dangerous-medium"],
//         possTerrain: ["grassland", "forest", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 7,
//         hp: 15,
//         hunger: 100,
//         speed: .4,
//         range: 1,
//         aggression: 7,
//         attack: 10,
//         defence: 2,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     redDesmatosuchus: {
//         name: "Red Desmatosuchus",
//         imgDir: "less-desma",
//         heightToSquare: 2,
//         widthToHeight: 1.4,
//         preyType: "regular-large",
//         isPredator: false,
//         possTerrain: ["desert", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 25,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 4,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 2
//     },
//     greenDesmatosuchus: {
//         name: "Green Desmatosuchus",
//         imgDir: "desma",
//         heightToSquare: 2.5,
//         widthToHeight: 1.4,
//         preyType: "regular-Xlarge",
//         isPredator: false,
//         possTerrain: ["forset", "savannah", "grassland"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 30,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 5,
//         defence: 8,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 2
//     },
//     blueDesmatosuchus: {
//         name: "Blue Desmatosuchus",
//         imgDir: "blue-desma",
//         heightToSquare: 3,
//         widthToHeight: 1.4,
//         preyType: "regular-Xlarge",
//         isPredator: false,
//         hasSwim: true,
//         possTerrain: ["swamp-forest", "marsh", "grassland", "savannah", "desert"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         terrainPreference: {
//             "desert": 30,
//             "savannah": 100, 
//             "grassland": 90, 
//             "forest": 50, 
//             "swampForest": 30,
//             "marsh": 20,
//             "shallowWater": 10,
//             "deepWater": 0
//         },
//         threatReaction: 50,
//         activityLevel: 5,
//         hp: 40,
//         hunger: 100,
//         speed: 1,
//         range: 1,
//         aggression: 1,
//         attack: 5,
//         defence: 6,
//         sightRange: 5,

//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 2
//     },
    
//     // diplodocus: {
//     //     name: "Diplodocus",
//     //     imgDir: "diplo",
//     //     heightToSquare: 10,
//     //     widthToHeight: 2,
//     //     isMega: true,
//     //     preyType: "regular-mega",
//     //     isPredator: false,
//     //     possTerrain: ["grassland", "savannah"],
//     //     activityLevel: 5,
//     //     hp: 200,
//     //     hunger: 100,
//     //     speed: 1,
//     //     range: 1,
//     //     aggression: 0,
//     //     attack: 1,
//     //     defence: 1,
//     //     escape: 1
//     // },
    
//     yellowOrnitholestes: {
//         name: "Yellow-Ornitholestes",
//         imgDir: "yellow-ornitho",
//         heightToSquare: .8,
//         widthToHeight: 1,
//         preyType: "dangerous-medium",
//         isPredator: true,
//         prey: ["regular-medium", "regular-small", "dangerous-small","regular-tiny", "dangerous-tiny"],
//         possTerrain: ["savannah", "grassland"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 1.2,
//         hp: 6,
//         hunger: 100,
//         speed: .7,
//         range: 1,
//         aggression: 5,
//         attack: 3,
//         defence: 1,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },

//     blueOrnitholestes: {
//         name: "Blue Ornitholestes",
//         imgDir: "blue-ornitho",
//         heightToSquare: 1.5,
//         widthToHeight: 1,
//         preyType: "dangerous-medium",
//         isPredator: true,
//         prey: ["regular-medium", "regular-small", "dangerous-medium", "dangerous-small","regular-tiny", "dangerous-tiny"],
//         possTerrain: ["forest", "marsh", "swampForest"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 8,
//         hp: 8,
//         hunger: 100,
//         speed: .7,
//         range: 1,
//         aggression: 5,
//         attack: 4,
//         defence: 1,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1
//     },
//     velociraptor: {
//       name: "Velociraptor",
//       imgDir: "veloc",
//       heightToSquare: 1.8,
//       widthToHeight: 1,
//       preyType: "dangerous-medium",
//       isPredator: true,
//       prey: ["regular-medium", "dangerous-medium", "regular-small", "dangerous-small", "regular-tiny", "dangerous-tiny"],
//       possTerrain: ["savannah", "desert", "grassland"],
//       terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 8,
//       hp: 10,
//       hunger: 100,
//       speed: .7,
//       range: 1,
//       aggression: 5,
//       attack: 5,
//       defence: 1,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//           height: 100,
//           width: 100,
//           color: "green"
//       },
//       escape: 1
//   },

//   deinonychus: {
//       name: "Deinonychus",
//       imgDir: "deino-green",
//       heightToSquare: 2.5,
//       widthToHeight: 1,
//       preyType: "dangerous-Xlarge",
//       isPredator: true,
//       hasSwim: true,
//       prey: ["regular-large", "regular-Xlarge", "dangerous-large", "human", "regular-medium", "dangerous-medium","regular-small", "dangerous-small",],
//       possTerrain: ["forest", "marsh", "swampForest"],
//       terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 8,
//       hp: 20,
//       hunger: 100,
//       speed: .7,
//       range: 1,
//       aggression: 5,
//       attack: 10,
//       defence: 1,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//           height: 100,
//           width: 100,
//           color: "green"
//       },
//       escape: 1
//   },
//   utahRaptor: {
//       name: "Utah Raptor",
//       imgDir: "utah",
//       heightToSquare: 3.8,
//       widthToHeight: 1.8,
//       preyType: "dangerous-XXlarge",
//       isPredator: true,
//       isHumanPredator: true,
//       hasSwim: true,
//       prey: ["regular-Xlarge", "human", "regular-large", "dangerous-large", "dangerous-Xlarge", "regular-medium", "dangerous-medium"],
//       possTerrain: ["desert", "grassland", "forest", "savannah", "shallowWater"],
//       terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 3,
//       hp: 42,
//       hunger: 100,
//       speed: 1.5,
//       range: 1,
//       aggression: 5,
//       attack: 22,
//       defence: 6,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//           height: 100,
//           width: 100,
//           color: "green"
//       },
//       escape: 1,                    
//       offSets: {
//           n: {
//               topOffset: -20,
//               leftOffset: 50,
//           },
//           s: {
//               topOffset: 0,
//               leftOffset: 0,
//           },
//           e: {
//               topOffset: -50,
//               leftOffset: 30,
//           },
//           w: {
//               topOffset: 0,
//               leftOffset: 50,
//           }
//       }
//   },
//     ceratosaurus: {
//         name: "Ceratosaurus",
//         imgDir: "ceratosaurus",
//         heightToSquare: 3.8,
//         widthToHeight: 1.8,
//         preyType: "dangerous-Xlarge",
//         isPredator: true,
//         isHumanPredator: true,
//         //prey: ["regular-Xlarge", "human", "dangerous-Xlarge", "dangerous-large", "regular-large", "regular-medium", "dangerous-medium"],
//         possTerrain: ["desert", "grassland", "forest", "savannah"],
//         terrainPreference: {
//             "desert": 30,
//             "savannah": 100, 
//             "grassland": 90, 
//             "forest": 30, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         hunger: 100,
//         sightRange: 4,
//         isTerritoryRestricted: true,
//         territorySize: 5,
//         speed: 2,
//         threatReaction: 60,

//         activityLevel: 3,
//         hp: 40,
//         range: 1,
//         aggression: 5,
//         attack: 20,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1,
//         offSets: {
//             n: {
//                 topOffset: -20,
//                 leftOffset: 50,
//             },
//             s: {
//                 topOffset: 0,
//                 leftOffset: 0,
//             },
//             e: {
//                 topOffset: -50,
//                 leftOffset: 30,
//             },
//             w: {
//                 topOffset: 0,
//                 leftOffset: 50,
//             }
//         }
//     },
//     baryonyx: {
//         name: "Baryonyx",
//         imgDir: "baryonyx",
//         heightToSquare: 5,
//         widthToHeight: 1.8,
//         hasSwim: true,
//         preyType: "dangerous-XXXlarge",
//         isPredator: true,
//         isHumanPredator: true,
//         prey: ["regular-Xlarge", "regular-large", "regular-medium", "dangerous-medium", "human", "dangerous-large", "dangerous-Xlarge"],
//         possTerrain: ["grassland", "forest", "marsh"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 4,
//         hp: 55,
//         hunger: 100,
//         speed: 1.5,
//         range: 1,
//         aggression: 5,
//         attack: 25,
//         //attack: 5,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1,
//         offSets: {
//             n: {
//                 topOffset: -50,
//                 leftOffset: 100,
//             },
//             s: {
//                 topOffset: -60,
//                 leftOffset: 0,
//             },
//             e: {
//                 topOffset: -50,
//                 leftOffset: 30,
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: 100,
//             }
//         }
//     },
//     allosaurus: {
//         name: "Allosaurus",
//         imgDir: "allosaurus",
//         heightToSquare: 5.5,
//         widthToHeight: 1.8,
//         preyType: "dangerous-XXXlarge",
//         isPredator: true,
//         isHumanPredator: true,
//         prey: ["regular-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
//         possTerrain: ["desert", "grassland", "forest", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 70,
//         hunger: 100,
//         speed: 1.5,
//         range: 1,
//         aggression: 5,
//         attack: 30,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1,
//         offSets: {
//             n: {
//                 topOffset: -50,
//                 leftOffset: 100,
//             },
//             s: {
//                 topOffset: -30,
//                 leftOffset: 0,
//             },
//             e: {
//                 topOffset: -50,
//                 leftOffset: 30,
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: 90,
//             }
//         }
//     },
//     sarcophaganax: {
//         name: "Sarcophaganax",
//         imgDir: "sarco",
//         heightToSquare: 6.8,
//         widthToHeight: 1.8,
//         preyType: "dangerous-mega",
//         isPredator: true,
//         isApexPredator: true,
//         isHumanPredator: true,
//         prey: ["regular-XXXlarge", "regular-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
//         possTerrain: ["desert", "grassland", "forest", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 4,
//         hp: 85,
//         hunger: 100,
//         speed: 3,
//         range: 1,
//         aggression: 5,
//         // attack: 35,
//         attack: 5,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1,
//         offSets: {
//             n: {
//                 topOffset: -50,
//                 leftOffset: 100,
//             },
//             s: {
//                 topOffset: -60,
//                 leftOffset: 0,
//             },
//             e: {
//                 topOffset: -50,
//                 leftOffset: 30,
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: 100,
//             }
//         }
//     },

//     tarbosaurus: {
//         name: "Tarbosaurus",
//         imgDir: "trex-green",
//         heightToSquare: 8.5,
//         widthToHeight: 1.8,
//         preyType: "dangerous-mega",
//         isPredator: true,
//         isHumanPredator: true,
//         hasSwim: true,
//         prey: ["regular-XXXlarge", "regular-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
//         possTerrain: ["desert", "grassland", "forest", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 4,
//         hp: 90,
//         hunger: 100,
//         speed: 1.5,
//         range: 1,
//         aggression: 6,
//         // attack: 35,
//         attack: 5,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1,
//         offSets: {
//             n: {
//                 topOffset: -50,
//                 leftOffset: 100,
//             },
//             s: {
//                 topOffset: -60,
//                 leftOffset: 0,
//             },
//             e: {
//                 topOffset: -50,
//                 leftOffset: 30,
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: 100,
//             }
//         }
//     },


//     tyrannosaurus: {
//       name: "Tyrannosaurus",
//       imgDir: "trex-black",
//       heightToSquare: 9,
//       widthToHeight: 1.8,
//       preyType: "dangerous-mega",
//       isPredator: true,
//       isHumanPredator: true,
//       prey: ["regular-XXXlarge", "regular-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
//       possTerrain: ["desert", "grassland", "forest", "savannah"],
//       terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 4,
//       hp: 92,
//       hunger: 100,
//       speed: 1,
//       range: 1,
//       aggression: 7,
//       // attack: 35,
//       attack: 5,
//       defence: 6,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//           height: 100,
//           width: 100,
//           color: "green"
//       },
//       escape: 1,
//       offSets: {
//           n: {
//               topOffset: -50,
//               leftOffset: 100,
//           },
//           s: {
//               topOffset: -60,
//               leftOffset: 0,
//           },
//           e: {
//               topOffset: -50,
//               leftOffset: 30,
//           },
//           w: {
//               topOffset: -50,
//               leftOffset: 100,
//           }
//       }
//     },

//     spinosaurus: {
//         name: "Spinosaurus",
//         imgDir: "spino-green",
//         heightToSquare: 12,
//         widthToHeight: 1.8,
//         preyType: "dangerous-massive",
//         isPredator: true,
//         isHumanPredator: true,
//         hasSwim: true,
//         prey: ["regular-XXXlarge", "regular-mega", "regular-massive", "dangerous-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
//         possTerrain: ["grassland", "swampForest", "marsh", "shallowWater", "deepWater"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 4,
//         hp: 120,
//         hunger: 100,
//         speed: 1.5,
//         range: 1,
//         aggression: 5,
//         // attack: 35,
//         attack: 90,
//         defence: 6,
//         sightRange: 3,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         escape: 1,
//         offSets: {
//             n: {
//                 topOffset: -50,
//                 leftOffset: 100,
//             },
//             s: {
//                 topOffset: -60,
//                 leftOffset: 0,
//             },
//             e: {
//                 topOffset: -50,
//                 leftOffset: 30,
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: 100,
//             }
//         }
//     },
//     blueMosasaurus: {
//       name: "Blue Mosasaurus",
//       imgDir: "moso-blue",
//       heightToSquare: 7,
//       widthToHeight: 1.2,
//       preyType: "dangerous-XXXlarge",
//       isPredator: true,
//       isHumanPredator: true,
//       prey: ["regular-XXXlarge", "regular-mega", "regular-massive", "dangerous-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
//       possTerrain: ["deepWater"],
//       terrainPreference: {
//         "desert": 0,
//         "savannah": 0, 
//         "grassland": 0, 
//         "forest": 0, 
//         "swampForest": 10,
//         "marsh": 10,
//         "shallowWater": 60,
//         "deepWater": 100
//     },
//     sightRange: 3,
//     isTerritoryRestricted: true,
//     territorySize: 9,
//     threatReaction: 50,
//       activityLevel: 3,
//       hp: 65,
//       hunger: 100,
//       speed: 1.5,
//       range: 1,
//       aggression: 5,
//       attack: 20,
//       defence: 6,
//       targetSpecs: {
//           top: 50,
//           left: 50,
// height: 100,
// width: 100,
//           color: "green"
//       },
//       escape: 1,
//       waterOnly: false,
//       isUnderWater: true,
//        offSets: {
//            n: {
//                topOffset: -20,
//                leftOffset: 50,
//            },
//            s: {
//                topOffset: 0,
//                leftOffset: 0,
//            },
//            e: {
//                topOffset: -50,
//                leftOffset: 30,
//            },
//            w: {
//                topOffset: 0,
//                leftOffset: 50,
//            }
//        }
//   },
//   greenMosasaurus: {
//     name: "Green Mosasaurus",
//     imgDir: "moso-green",
//     heightToSquare: 12,
//     widthToHeight: 1.2,
//     preyType: "dangerous-massive",
//     isPredator: true,
//     isHumanPredator: true,
//     prey: ["regular-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
//     possTerrain: ["deepWater"],
//     terrainPreference: {
//         "desert": 0,
//         "savannah": 0, 
//         "grassland": 0, 
//         "forest": 0, 
//         "swampForest": 0,
//         "marsh": 0,
//         "shallowWater": 30,
//         "deepWater": 100
//     },
//     sightRange: 3,
//     isTerritoryRestricted: true,
//     territorySize: 10,
//     threatReaction: 50,

//     activityLevel: 3,
//     hp: 120,
//     hunger: 100,
//     speed: 1.5,
//     range: 1,
//     aggression: 5,
//     attack: 20,
//     defence: 6,
//     targetSpecs: {
//         top: 50,
//         left: 50,
// height: 100,
// width: 100,
//         color: "green"
//     },
//     escape: 1,
//     waterOnly: false,
//     isUnderWater: true,
//      offSets: {
//          n: {
//              topOffset: -20,
//              leftOffset: 50,
//          },
//          s: {
//              topOffset: 0,
//              leftOffset: 0,
//          },
//          e: {
//              topOffset: -50,
//              leftOffset: 30,
//          },
//          w: {
//              topOffset: 0,
//              leftOffset: 50,
//          }
//      }
// },
    
//     yellowKentrosaurus: {
//         name: "Yellow Kentrosaurus",
//         imgDir: "yellow-kentro",
//         heightToSquare: 3.5,
//         widthToHeight: 1.4,
//         preyType: "regular-large",
//         isPredator: false,
//         possTerrain: ["grassland", "savannah"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 30,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 4,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 2,
//         offSets: {
//             ...genericOffsets,
//             s: {
//                 topOffset: -100,
//                 leftOffset: -100
//             }
//         }
//     },
//     greenKentrosaurus: {
//         name: "Green Kentrosaurus",
//         imgDir: "green-kentro",
//         heightToSquare: 3,
//         widthToHeight: 1.4,
//         preyType: "regular-Xlarge",
//         isPredator: false,
//         possTerrain: ["marsh", "grassland", "forest"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hasSwim: true,
//         hp: 25,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 4,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 2,
//         offSets: {
//             ...genericOffsets,
//             s: {
//                 topOffset: -100,
//                 leftOffset: -100
//             },
//             e: {
//                 topOffset: 0,
//                 leftOffset: -50
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: 50
//             }
//         }
//     },
//     blueStegosaurus: {
//         name: "Blue Stegosaurus",
//         imgDir: "blue-stego",
//         heightToSquare: 4,
//         widthToHeight: 1.4,
//         preyType: "regular-XXlarge",
//         isPredator: false,
//         hasSwim: true,
//         possTerrain: ["swamp-forest", "marsh", "grassland"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 40,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 3,
//         defence: 15,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 2,
//         offSets: {
//             n: {
//                 topOffset: -100,
//                 leftOffset: 30,
//             },
//             s: {
//                 topOffset: -120,
//                 leftOffset: -120,
//             },
//             e: {
//                 topOffset: -100,
//                 leftOffset: -120,
//             },
//             w: {
//                 topOffset: -120,
//                 leftOffset: 20,
//             }
//         }
//     },
//     redStegosaurus: {
//         name: "Red Stegosaurus",
//         imgDir: "red-stego",
//         heightToSquare: 4.8,
//         widthToHeight: 1.4,
//         preyType: "regular-XXXlarge",
//         isPredator: false,
//         possTerrain: ["savannah", "grassland"],
//         terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//         activityLevel: 5,
//         hp: 60,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 3,
//         defence: 20,
//         targetSpecs: {
//             top: 50,
//             left: 50,
// height: 100,
// width: 100,
//             color: "green"
//         },
//         escape: 2,
//         topOffset: -130,
//         leftOffset: 100,
//         offSets: {
//             n: {
//                 topOffset: -130,
//                 leftOffset: 30,
//             },
//             s: {
//                 topOffset: -150,
//                 leftOffset: -120,
//             },
//             e: {
//                 topOffset: -100,
//                 leftOffset: -120,
//             },
//             w: {
//                 topOffset: -150,
//                 leftOffset: 50,
//             }
//         }
//     },
//     brownTriceratops: {
//       name: "Brown Triceratops",
//       imgDir: "tri-brown",
//       heightToSquare: 4.8,
//       widthToHeight: 1.4,
//       preyType: "regular-XXXlarge",
//       isPredator: false,
//       hasSwim: true,
//       possTerrain: ["savannah", "grassland", "swamp-forest", "marsh"],
//       terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 5,
//       hp: 58,
//       hunger: 100,
//       speed: 2,
//       range: 1,
//       aggression: 1,
//       attack: 3,
//       defence: 20,
//       targetSpecs: {
//           top: 50,
//           left: 50,
//           height: 100,
//           width: 100,
//           color: "green"
//       },
//       escape: 2,
//       topOffset: -130,
//       leftOffset: 100,
//       offSets: {
//           n: {
//               topOffset: -130,
//               leftOffset: 30,
//           },
//           s: {
//               topOffset: -150,
//               leftOffset: -120,
//           },
//           e: {
//               topOffset: -100,
//               leftOffset: -120,
//           },
//           w: {
//               topOffset: -150,
//               leftOffset: 50,
//           }
//       }
//   },

//   greyTriceratops: {
//     name: "Grey Triceratops",
//     imgDir: "tri-grey",
//     heightToSquare: 5,
//     widthToHeight: 1.4,
//     preyType: "regular-XXXlarge",
//     isPredator: false,
//     hasSwim: true,
//     possTerrain: ["savannah", "grassland", "swamp-forest", "marsh"],
//     terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//     activityLevel: 5,
//     hp: 60,
//     hunger: 100,
//     speed: 2,
//     range: 1,
//     aggression: 1,
//     attack: 3,
//     defence: 20,
//     targetSpecs: {
//         top: 50,
//         left: 50,
// height: 100,
// width: 100,
//         color: "green"
//     },
//     escape: 2,
//     topOffset: -130,
//     leftOffset: 100,
//     offSets: {
//         n: {
//             topOffset: -130,
//             leftOffset: 30,
//         },
//         s: {
//             topOffset: -150,
//             leftOffset: -120,
//         },
//         e: {
//             topOffset: -100,
//             leftOffset: -120,
//         },
//         w: {
//             topOffset: -150,
//             leftOffset: 50,
//         }
//     }
// },

// greenStyracosaurus: {
//   name: "Green Styracosaurus",
//   imgDir: "styrack-green",
//   heightToSquare: 4,
//   widthToHeight: 1.4,
//   preyType: "regular-XXlarge",
//   isPredator: false,
//   hasSwim: true,
//   possTerrain: ["savannah", "grassland", "swamp-forest", "marsh"],
//   terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//   activityLevel: 5,
//   hp: 55,
//   hunger: 100,
//   speed: 2,
//   range: 1,
//   aggression: 1,
//   attack: 3,
//   defence: 20,
//   targetSpecs: {
//       top: 50,
//       left: 50,
// height: 100,
// width: 100,
//       color: "green"
//   },
//   escape: 2,
//   topOffset: -130,
//   leftOffset: 100,
//   offSets: {
//       n: {
//           topOffset: -130,
//           leftOffset: 30,
//       },
//       s: {
//           topOffset: -150,
//           leftOffset: -120,
//       },
//       e: {
//           topOffset: -100,
//           leftOffset: -120,
//       },
//       w: {
//           topOffset: -150,
//           leftOffset: 50,
//       }
//   }
// },

// blueStyracosaurus: {
//   name: "Blue Styracosaurus",
//   imgDir: "styrack-blue",
//   heightToSquare: 3.8,
//   widthToHeight: 1.4,
//   preyType: "regular-XXlarge",
//   isPredator: false,
//   hasSwim: true,
//   possTerrain: ["forest", "grassland", "swamp-forest", "marsh"],
//   terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 90,
//             "marsh": 60,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//   activityLevel: 5,
//   hp: 52,
//   hunger: 100,
//   speed: 2,
//   range: 1,
//   aggression: 1,
//   attack: 3,
//   defence: 20,
//   targetSpecs: {
//       top: 50,
//       left: 50,
// height: 100,
// width: 100,
//       color: "green"
//   },
//   escape: 2,
//   topOffset: -130,
//   leftOffset: 100,
//   offSets: {
//       n: {
//           topOffset: -130,
//           leftOffset: 30,
//       },
//       s: {
//           topOffset: -150,
//           leftOffset: -120,
//       },
//       e: {
//           topOffset: -100,
//           leftOffset: -120,
//       },
//       w: {
//           topOffset: -150,
//           leftOffset: 50,
//       }
//   }
// },


//     blueParasaurolophus: {
//       name: "Blue Parasaurolophus",
//       imgDir: "para-blue",
//       heightToSquare: 4.8,
//       widthToHeight: 1.4,
//       preyType: "regular-XXXlarge",
//       isPredator: false,
//       hasSwim: true,
//       possTerrain: ["swamp-forest", "marsh", "forest", "grassland"],
//       terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//       activityLevel: 5,
//       hp: 50,
//       hunger: 100,
//       speed: 2.5,
//       range: 1,
//       aggression: 1,
//       attack: 10,
//       defence: 13,
//       targetSpecs: {
//           top: 50,
//           left: 50,
// height: 100,
// width: 100,
//           color: "green"
//       },
//       escape: 2,
//       topOffset: -130,
//       leftOffset: 100,
//       offSets: {
//           n: {
//               topOffset: -130,
//               leftOffset: 30,
//           },
//           s: {
//               topOffset: -150,
//               leftOffset: -120,
//           },
//           e: {
//               topOffset: -100,
//               leftOffset: -120,
//           },
//           w: {
//               topOffset: -150,
//               leftOffset: 50,
//           }
//       }
//   },
//   greyParasaurolophus: {
//     name: "Grey Parasaurolophus",
//     imgDir: "para-grey",
//     heightToSquare: 5,
//     widthToHeight: 1.4,
//     preyType: "regular-XXXlarge",
//     isPredator: false,
//     possTerrain: ["swamp-forest", "marsh", "grassland"],
//     terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//     activityLevel: 5,
//     hp: 55,
//     hunger: 100,
//     speed: 2,
//     range: 1,
//     aggression: 1,
//     attack: 12,
//     defence: 15,
//     targetSpecs: {
//         top: 50,
//         left: 50,
// height: 100,
// width: 100,
//         color: "green"
//     },
//     escape: 2,
//     topOffset: -130,
//     leftOffset: 100,
//     offSets: {
//         n: {
//             topOffset: -130,
//             leftOffset: 30,
//         },
//         s: {
//             topOffset: -150,
//             leftOffset: -120,
//         },
//         e: {
//             topOffset: -100,
//             leftOffset: -120,
//         },
//         w: {
//             topOffset: -150,
//             leftOffset: 50,
//         }
//     }
// },
// orangeOuranosaurus: {
//   name: "Orange Ouranosaurus",
//   imgDir: "ouranosaurus",
//   heightToSquare: 4.8,
//   widthToHeight: 1.4,
//   preyType: "regular-XXXlarge",
//   isPredator: false,
//   possTerrain: ["savannah", "desert"],
//   terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,

//   activityLevel: 5,
//   hp: 60,
//   hunger: 100,
//   speed: 2,
//   range: 1,
//   aggression: 1,
//   attack: 12,
//   defence: 15,
//   targetSpecs: {
//       top: 50,
//       left: 50,
// height: 100,
// width: 100,
//       color: "green"
//   },
//   escape: 2,
//   topOffset: -130,
//   leftOffset: 100,
//   offSets: {
//       n: {
//           topOffset: -130,
//           leftOffset: 30,
//       },
//       s: {
//           topOffset: -150,
//           leftOffset: -120,
//       },
//       e: {
//           topOffset: -100,
//           leftOffset: -120,
//       },
//       w: {
//           topOffset: -150,
//           leftOffset: 50,
//       }
//   }
// },
// yellowOuranosaurus: {
//   name: "Yellow Ouranosaurus",
//   imgDir: "ouranosaurus-yellow",
//   heightToSquare: 4.5,
//   widthToHeight: 1.4,
//   preyType: "regular-XXXlarge",
//   isPredator: false,
//   possTerrain: ["savannah", "grassland"],
//   terrainPreference: { // TODO set terrain preference
//             "desert": 60,
//             "savannah": 60, 
//             "grassland": 60, 
//             "forest": 60, 
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         sightRange: 3,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         threatReaction: 50,
        
//   activityLevel: 5,
//   hp: 55,
//   hunger: 100,
//   speed: 2,
//   range: 1,
//   aggression: 1,
//   attack: 10,
//   defence: 14,
//   targetSpecs: {
//       top: 50,
//       left: 50,
// height: 100,
// width: 100,
//       color: "green"
//   },
//   escape: 2,
//   topOffset: -130,
//   leftOffset: 100,
//   offSets: {
//       n: {
//           topOffset: -130,
//           leftOffset: 30,
//       },
//       s: {
//           topOffset: -150,
//           leftOffset: -120,
//       },
//       e: {
//           topOffset: -100,
//           leftOffset: -120,
//       },
//       w: {
//           topOffset: -150,
//           leftOffset: 50,
//       }
//   }
// },
//     apatosaurus: {
//         ...genericApatosaurus,
//         name: "Apatosaurus",
//         imgDir: "apato",
//     },
//     apatosaurusHouse1: {
//         ...genericApatosaurus,
//         offSets: {
//             ...genericApatosaurus.offSets,
//             n: {
//                 topOffset: -70,
//                 leftOffset: 200,
//             },
//             e: {
//                 topOffset: -70,
//                 leftOffset: 130,
//             },
//         },
//         name: "Apatosaurus Nomad 1",
//         imgDir: "apato-house-1",
        
//     },
//     apatosaurusHouse2: {
//         ...genericApatosaurus,
//         offSets: {
//             ...genericApatosaurus.offSets,
//             n: {
//                 topOffset: -90,
//                 leftOffset: 200,
//             },
//             e: {
//                 topOffset: -90,
//                 leftOffset: 130,
//             },
//         },
//         name: "Apatosaurus Nomad 2",
//         imgDir: "apato-house-2",
        
//     },
//     apatosaurusHouse3: {
//         ...genericApatosaurus,
//         offSets: {
//             ...genericApatosaurus.offSets,
//             n: {
//                 topOffset: -100,
//                 leftOffset: 200,
//             },
//             e: {
//                 topOffset: -100,
//                 leftOffset: 130,
//             },
//         },
//         name: "Apatosaurus Nomad 3",
//         imgDir: "apato-house-3",
        
//     },
//     apatosaurusHouse4: {
//         ...genericApatosaurus,
//         offSets: {
//             ...genericApatosaurus.offSets,
//             n: {
//                 topOffset: -150,
//                 leftOffset: 200,
//             },
//             e: {
//                 topOffset: -150,
//                 leftOffset: 130,
//             },
//         },
//         name: "Apatosaurus Nomad 4",
//         imgDir: "apato-house-4",
//     },
//     woolyMammoth: {
//         name: "Wooly Mammoth",
//         imgDir: "wooly-mammoth",
//         heightToSquare: 4,
//         widthToHeight: 1.4,
//         preyType: "regular-Xlarge",
//         isPredator: false,
//         possTerrain: ["grassland", "forest"],
//         terrainPreference: {
//             "desert": 0,
//             "savannah": 70, 
//             "grassland": 100, 
//             "forest": 100, 
//             "swampForest": 30,
//             "marsh": 50,
//             "shallowWater": 40,
//             "deepWater": 0
//         },
//         hunger: 100,
//         sightRange: 2,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         speed: 1,
//         threatReaction: 60,

//         activityLevel: 5,
//         hasSwim: false,
//         hp: 25,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 4,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         statusSpecs: {
//             top: 120,
//             left: 20
//         },
//         escape: 2,
//         offSets: {
//             ...genericOffsets,
//             s: {
//                 topOffset: -100,
//                 leftOffset: -100
//             },
//             e: {
//                 topOffset: 0,
//                 leftOffset: -50
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: 50
//             }
//         }
//     },
//     greyMastodon: {
//         name: "Grey Mastodon",
//         imgDir: "mastadon-grey",
//         heightToSquare: 4,
//         widthToHeight: 1.4,
//         preyType: "regular-Xlarge",
//         isPredator: false,
//         possTerrain: ["savannah", "marsh", "swamp forest"],
//         terrainPreference: {
//             "desert": 0,
//             "savannah": 100, 
//             "grassland": 90, 
//             "forest": 70, 
//             "swampForest": 30,
//             "marsh": 90,
//             "shallowWater": 70,
//             "deepWater": 0
//         },
//         hunger: 100,
//         sightRange: 2,
//         isTerritoryRestricted: false,
//         territorySize: 0,
//         speed: 1,
//         threatReaction: 60,

//         activityLevel: 5,
//         hasSwim: true,
//         hp: 25,
//         hunger: 100,
//         speed: 2,
//         range: 1,
//         aggression: 1,
//         attack: 4,
//         defence: 6,
//         targetSpecs: {
//             top: 50,
//             left: 50,
//             height: 100,
//             width: 100,
//             color: "green"
//         },
//         statusSpecs: {
//             top: 120,
//             left: 20
//         },
//         escape: 2,
//         offSets: {
//             ...genericOffsets,
//             s: {
//                 topOffset: -100,
//                 leftOffset: -100
//             },
//             e: {
//                 topOffset: 0,
//                 leftOffset: -50
//             },
//             w: {
//                 topOffset: -50,
//                 leftOffset: 50
//             }
//         }
//     }
// }
// /*
// Sizes

// Tiny - bug
// Small - rabbit
// Medium - dog
// Large - person
// XLarge - lion
// XXLarge - horse
// XXXLarge - elephant
// Mega - apatosaurus

// */

// //Trilobite - Ordovician/Devonian
// //Sea Scorpion - Ordovician/Devonian
// //Orthrocone - Ordovician
// //Armored Fish - Ordovician/Devonian
// //Small Anphibian - All past Devonian
// //Small Lizard - All past Carboniferous


// const generatedDirectory = {
//     "greenFish": {
//         "heightToSquare": 0.3,
//         "widthToHeight": 2,
//         "preyType": "regular-medium",
//         "isPredator": false,
//         "possTerrain": [
//             "shallowWater",
//             "deepWater",
//             "marsh",
//             "swampForest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 0,
//             "forest": 0,
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 100,
//             "deepWater": 100
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "isUnderWater": true,
//         "hp": 4,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 0,
//         "attack": 1,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "waterOnly": true,
//         "name": "Green Fish",
//         "imgDir": "green-fish",
//         "keyName": "greenFish",
//         "isMega": false
//     },
//     "blueFish": {
//         "heightToSquare": 0.3,
//         "widthToHeight": 2,
//         "preyType": "regular-medium",
//         "isPredator": false,
//         "possTerrain": [
//             "shallowWater",
//             "deepWater",
//             "marsh",
//             "swampForest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 0,
//             "forest": 0,
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 100,
//             "deepWater": 100
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "isUnderWater": true,
//         "hp": 4,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 0,
//         "attack": 1,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "waterOnly": true,
//         "name": "Blue Fish",
//         "imgDir": "blue-fish",
//         "keyName": "blueFish",
//         "isMega": false
//     },
//     "yellowFish": {
//         "heightToSquare": 0.3,
//         "widthToHeight": 2,
//         "preyType": "regular-medium",
//         "isPredator": false,
//         "possTerrain": [
//             "shallowWater",
//             "deepWater",
//             "marsh",
//             "swampForest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 0,
//             "forest": 0,
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 100,
//             "deepWater": 100
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "isUnderWater": true,
//         "hp": 4,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 0,
//         "attack": 1,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "waterOnly": true,
//         "name": "Yellow Fish",
//         "imgDir": "yellow-fish",
//         "keyName": "yellowFish",
//         "isMega": false
//     },
//     "silverBarb": {
//         "heightToSquare": 0.3,
//         "widthToHeight": 2,
//         "preyType": "regular-medium",
//         "isPredator": false,
//         "possTerrain": [
//             "shallowWater",
//             "deepWater",
//             "marsh",
//             "swampForest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 0,
//             "forest": 0,
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 100,
//             "deepWater": 100
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "isUnderWater": true,
//         "hp": 4,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 0,
//         "attack": 1,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "waterOnly": true,
//         "name": "Silver Barb",
//         "imgDir": "silver-barb",
//         "keyName": "silverBarb",
//         "isMega": false
//     },
//     "hynerpeton": {
//         "name": "Hynerpeton",
//         "imgDir": "hynerpeton",
//         "heightToSquare": 1,
//         "widthToHeight": 1.3,
//         "hasSwim": true,
//         "preyType": "dangerous-medium",
//         "isPredator": true,
//         "isHumanPredator": false,
//         "prey": [
//             "regular-medium",
//             "regular-small",
//             "dangerous-small",
//             "dangerous-medium"
//         ],
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 60,
//             "forest": 70,
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 90,
//             "deepWater": 60
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": true,
//         "territorySize": 8,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 8,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 4,
//         "attack": 3,
//         "defence": 3,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -20,
//                 "leftOffset": 50
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": 0,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "hynerpeton",
//         "isMega": false
//     },
//     "hyneria": {
//         "name": "Hyneria",
//         "imgDir": "hyneria",
//         "heightToSquare": 6,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-XXlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-Xlarge",
//             "dangerous-Xlarge",
//             "regular-XXlarge",
//             "regular-large",
//             "human",
//             "dangerous-large",
//             "regular-medium",
//             "dangerous-medium"
//         ],
//         "possTerrain": [
//             "shallowWater",
//             "marsh",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 0,
//             "forest": 0,
//             "swampForest": 40,
//             "marsh": 40,
//             "shallowWater": 70,
//             "deepWater": 100
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 48,
//         "hunger": 100,
//         "speed": 1.5,
//         "range": 1,
//         "aggression": 5,
//         "attack": 18,
//         "defence": 8,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "waterOnly": false,
//         "isUnderWater": true,
//         "offSets": {
//             "n": {
//                 "topOffset": -20,
//                 "leftOffset": 50
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": 0,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "hyneria",
//         "isMega": false
//     },
//     "dunkleosteus": {
//         "name": "Dunkleosteus",
//         "imgDir": "dunkleost",
//         "heightToSquare": 7,
//         "widthToHeight": 1.2,
//         "preyType": "dangerous-XXlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-XXlarge",
//             "regular-bnv cXlarge",
//             "dangerous-Xlarge",
//             "dangerous-XXlarge",
//             "regular-large",
//             "human",
//             "dangerous-large"
//         ],
//         "possTerrain": [
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 0,
//             "forest": 0,
//             "swampForest": 0,
//             "marsh": 10,
//             "shallowWater": 40,
//             "deepWater": 100
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 3,
//         "hp": 56,
//         "hunger": 100,
//         "speed": 1.5,
//         "range": 1,
//         "aggression": 5,
//         "attack": 21,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "waterOnly": false,
//         "isUnderWater": true,
//         "offSets": {
//             "n": {
//                 "topOffset": -20,
//                 "leftOffset": 50
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": 0,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "dunkleosteus",
//         "isMega": true
//     },
//     "scorpion": {
//         "name": "scorpion",
//         "imgDir": "scorp",
//         "heightToSquare": 0.2,
//         "widthToHeight": 2,
//         "preyType": "dangerous-tiny",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "desert",
//             "savannah",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 90,
//             "savannah": 80,
//             "grassland": 60,
//             "forest": 80,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 2,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 3,
//         "attack": 1,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "scorpion",
//         "isMega": false
//     },
//     "pulmonoscorpius": {
//         "name": "Pulmonoscorpius",
//         "imgDir": "less-scorp",
//         "heightToSquare": 0.5,
//         "widthToHeight": 2,
//         "preyType": "dangerous-small",
//         "isPredator": true,
//         "prey": [
//             "regular-tiny",
//             "dangerous-tiny"
//         ],
//         "possTerrain": [
//             "grassland",
//             "desert",
//             "savannah",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 90,
//             "savannah": 80,
//             "grassland": 60,
//             "forest": 80,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 4,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 4,
//         "attack": 2,
//         "defence": 4,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "pulmonoscorpius",
//         "isMega": false
//     },
//     "kingPulmonoscorpius": {
//         "name": "King Pulmonoscorpius",
//         "imgDir": "gre-scorp",
//         "heightToSquare": 0.8,
//         "widthToHeight": 2,
//         "preyType": "dangerous-medium",
//         "isPredator": true,
//         "prey": [
//             "regular-medium",
//             "regular-small",
//             "dangerous-small",
//             "regular-tiny",
//             "dangerous-tiny"
//         ],
//         "possTerrain": [
//             "grassland",
//             "desert",
//             "savannah",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 90,
//             "savannah": 80,
//             "grassland": 60,
//             "forest": 80,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 6,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 5,
//         "attack": 2,
//         "defence": 4,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "kingPulmonoscorpius",
//         "isMega": false
//     },
//     "megaPulmonoscorpius": {
//         "name": "Mega Pulmonoscorpius",
//         "imgDir": "gre-scorp",
//         "heightToSquare": 4,
//         "widthToHeight": 1.5,
//         "preyType": "dangerous-Xlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "human"
//         ],
//         "possTerrain": [
//             "savannah",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 90,
//             "savannah": 80,
//             "grassland": 60,
//             "forest": 80,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 32,
//         "hunger": 100,
//         "speed": 0.3,
//         "range": 2,
//         "aggression": 5,
//         "attack": 12,
//         "defence": 6,
//         "escape": 1,
//         "keyName": "megaPulmonoscorpius",
//         "isMega": false
//     },
//     "greaterArthropluera": {
//         "name": "Greater Athropluera",
//         "imgDir": "gre-arth",
//         "heightToSquare": 1.5,
//         "widthToHeight": 1.5,
//         "preyType": "regular-large",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh",
//             "swampForest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 8,
//             "grassland": 90,
//             "forest": 90,
//             "swampForest": 70,
//             "marsh": 80,
//             "shallowWater": 50,
//             "deepWater": 10
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 3,
//         "hp": 18,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 3,
//         "defence": 5,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "greaterArthropluera",
//         "isMega": false
//     },
//     "lesserArthropluera": {
//         "name": "Lesser Athropluera",
//         "imgDir": "less-arth",
//         "heightToSquare": 1,
//         "widthToHeight": 1.5,
//         "preyType": "regular-medium",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "savannah",
//             "forest",
//             "marsh",
//             "swampForest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 80,
//             "grassland": 90,
//             "forest": 90,
//             "swampForest": 70,
//             "marsh": 80,
//             "shallowWater": 50,
//             "deepWater": 10
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 12,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 0,
//         "attack": 2,
//         "defence": 4,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "lesserArthropluera",
//         "isMega": false
//     },
//     "megaMisophilae": {
//         "name": "Mega Misophilae",
//         "imgDir": "mega-meso",
//         "heightToSquare": 5,
//         "widthToHeight": 1,
//         "preyType": "dangerous-large",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "human"
//         ],
//         "possTerrain": [
//             "shallow-water",
//             "deep-water",
//             "marsh",
//             "savannah",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 8,
//             "grassland": 90,
//             "forest": 90,
//             "swampForest": 70,
//             "marsh": 80,
//             "shallowWater": 80,
//             "deepWater": 90
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 6,
//         "hp": 40,
//         "hunger": 100,
//         "speed": 0.7,
//         "range": 1,
//         "aggression": 5,
//         "attack": 15,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "megaMisophilae",
//         "isMega": false
//     },
//     "greaterMisophilae": {
//         "name": "Greater Misophilae",
//         "imgDir": "gre-miso",
//         "heightToSquare": 0.5,
//         "widthToHeight": 1,
//         "preyType": "dangerous-medium",
//         "isPredator": true,
//         "prey": [
//             "regular-medium",
//             "dangerous-medium",
//             "regular-small",
//             "dangerous-small",
//             "regular-tiny",
//             "dangerous-tiny"
//         ],
//         "possTerrain": [
//             "grassland",
//             "savannah",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 80,
//             "grassland": 90,
//             "forest": 100,
//             "swampForest": 50,
//             "marsh": 40,
//             "shallowWater": 10,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": true,
//         "territorySize": 4,
//         "threatReaction": 50,
//         "activityLevel": 6,
//         "hp": 4,
//         "hunger": 100,
//         "speed": 0.7,
//         "range": 1,
//         "aggression": 5,
//         "attack": 2,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "greaterMisophilae",
//         "isMega": false
//     },
//     "lesserMisophilae": {
//         "name": "Lesser Misophilae",
//         "imgDir": "less-miso",
//         "heightToSquare": 0.25,
//         "widthToHeight": 1,
//         "preyType": "regular-small",
//         "isPredator": true,
//         "prey": [
//             "regular-tiny",
//             "dangerous-tiny"
//         ],
//         "possTerrain": [
//             "grassland",
//             "savannah",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 80,
//             "grassland": 90,
//             "forest": 100,
//             "swampForest": 50,
//             "marsh": 40,
//             "shallowWater": 10,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": true,
//         "territorySize": 3,
//         "threatReaction": 50,
//         "activityLevel": 7,
//         "hp": 2,
//         "hunger": 100,
//         "speed": 0.5,
//         "range": 1,
//         "aggression": 3,
//         "attack": 1,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "lesserMisophilae",
//         "isMega": false
//     },
//     "orangeMeganuera": {
//         "name": "Orange Meganuera",
//         "imgDir": "orange-meg",
//         "heightToSquare": 0.7,
//         "widthToHeight": 1.2,
//         "isFlying": true,
//         "preyType": "regular-small",
//         "isPredator": true,
//         "prey": [
//             "regular-tiny",
//             "dangerous-tiny"
//         ],
//         "possTerrain": [
//             "grassland",
//             "savannah",
//             "forest",
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 50,
//             "savannah": 60,
//             "grassland": 80,
//             "forest": 70,
//             "swampForest": 100,
//             "marsh": 100,
//             "shallowWater": 100,
//             "deepWater": 60
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 10,
//         "hp": 6,
//         "hunger": 100,
//         "speed": 0.3,
//         "range": 1,
//         "aggression": 1,
//         "attack": 2,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 8,
//         "keyName": "orangeMeganuera",
//         "isMega": false
//     },
//     "blueMeganuera": {
//         "name": "Blue Meganuera",
//         "imgDir": "blue-meg",
//         "heightToSquare": 1,
//         "widthToHeight": 1.2,
//         "isFlying": true,
//         "preyType": "regular-medium",
//         "isPredator": true,
//         "prey": [
//             "regular-small",
//             "regular-tiny",
//             "dangerous-tiny"
//         ],
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 50,
//             "savannah": 60,
//             "grassland": 80,
//             "forest": 70,
//             "swampForest": 100,
//             "marsh": 100,
//             "shallowWater": 100,
//             "deepWater": 60
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 10,
//         "hp": 8,
//         "hunger": 100,
//         "speed": 0.5,
//         "range": 1,
//         "aggression": 0,
//         "attack": 3,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 7,
//         "keyName": "blueMeganuera",
//         "isMega": false
//     },
//     "redDarter": {
//         "heightToSquare": 0.3,
//         "widthToHeight": 1.2,
//         "isFlying": true,
//         "preyType": "regular-tiny",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 10,
//             "savannah": 20,
//             "grassland": 60,
//             "forest": 50,
//             "swampForest": 90,
//             "marsh": 90,
//             "shallowWater": 90,
//             "deepWater": 70
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 10,
//         "speed": 2,
//         "hp": 4,
//         "range": 1,
//         "aggression": 1,
//         "attack": 1,
//         "defence": 0,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 9,
//         "name": "Red Darter",
//         "imgDir": "red-darter",
//         "keyName": "redDarter",
//         "isMega": false
//     },
//     "yellowDarter": {
//         "heightToSquare": 0.3,
//         "widthToHeight": 1.2,
//         "isFlying": true,
//         "preyType": "regular-tiny",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 10,
//             "savannah": 20,
//             "grassland": 60,
//             "forest": 50,
//             "swampForest": 90,
//             "marsh": 90,
//             "shallowWater": 90,
//             "deepWater": 70
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 10,
//         "speed": 2,
//         "hp": 4,
//         "range": 1,
//         "aggression": 1,
//         "attack": 1,
//         "defence": 0,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 9,
//         "name": "Yellow Darter",
//         "imgDir": "yellow-darter",
//         "keyName": "yellowDarter",
//         "isMega": false
//     },
//     "greenDarter": {
//         "heightToSquare": 0.3,
//         "widthToHeight": 1.2,
//         "isFlying": true,
//         "preyType": "regular-tiny",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 10,
//             "savannah": 20,
//             "grassland": 60,
//             "forest": 50,
//             "swampForest": 90,
//             "marsh": 90,
//             "shallowWater": 90,
//             "deepWater": 70
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 10,
//         "speed": 2,
//         "hp": 4,
//         "range": 1,
//         "aggression": 1,
//         "attack": 1,
//         "defence": 0,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 9,
//         "name": "Green Darter",
//         "imgDir": "green-darter",
//         "keyName": "greenDarter",
//         "isMega": false
//     },
//     "blueDarter": {
//         "heightToSquare": 0.3,
//         "widthToHeight": 1.2,
//         "isFlying": true,
//         "preyType": "regular-tiny",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 10,
//             "savannah": 20,
//             "grassland": 60,
//             "forest": 50,
//             "swampForest": 90,
//             "marsh": 90,
//             "shallowWater": 90,
//             "deepWater": 70
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 10,
//         "speed": 2,
//         "hp": 4,
//         "range": 1,
//         "aggression": 1,
//         "attack": 1,
//         "defence": 0,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 9,
//         "name": "Blue Darter",
//         "imgDir": "blue-meg",
//         "keyName": "blueDarter",
//         "isMega": false
//     },
//     "purpleDarter": {
//         "heightToSquare": 0.3,
//         "widthToHeight": 1.2,
//         "isFlying": true,
//         "preyType": "regular-tiny",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 10,
//             "savannah": 20,
//             "grassland": 60,
//             "forest": 50,
//             "swampForest": 90,
//             "marsh": 90,
//             "shallowWater": 90,
//             "deepWater": 70
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 10,
//         "speed": 2,
//         "hp": 4,
//         "range": 1,
//         "aggression": 1,
//         "attack": 1,
//         "defence": 0,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 9,
//         "name": "Purple Darter",
//         "imgDir": "purple-darter",
//         "keyName": "purpleDarter",
//         "isMega": false
//     },
//     "greaterProterogyrinus": {
//         "name": "Greater Proterogyrinus",
//         "imgDir": "gre-amph",
//         "heightToSquare": 2,
//         "widthToHeight": 1.3,
//         "hasSwim": true,
//         "preyType": "dangerous-large",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-large",
//             "human",
//             "regular-medium",
//             "regular-small",
//             "dangerous-medium",
//             "dangerous-small"
//         ],
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 60,
//             "forest": 70,
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 90,
//             "deepWater": 60
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": true,
//         "territorySize": 8,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 16,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 4,
//         "attack": 6,
//         "defence": 4,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "greaterProterogyrinus",
//         "isMega": false
//     },
//     "yellowCrocodile": {
//         "name": "Yellow Thecodont",
//         "imgDir": "yellow-croc",
//         "heightToSquare": 1,
//         "widthToHeight": 2,
//         "hasSwim": true,
//         "preyType": "dangerous-large",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "human",
//             "regular-large",
//             "regular-medium",
//             "regular-small",
//             "dangerous-medium",
//             "dangerous-small"
//         ],
//         "possTerrain": [
//             "marsh",
//             "swampForest",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 0,
//             "forest": 0,
//             "swampForest": 80,
//             "marsh": 90,
//             "shallowWater": 100,
//             "deepWater": 100
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 3,
//         "hp": 8,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 6,
//         "attack": 3,
//         "defence": 3,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "waterOnly": true,
//         "keyName": "yellowCrocodile",
//         "isMega": false
//     },
//     "orangeDimetrodon": {
//         "name": "Orange Dimetrodon",
//         "imgDir": "orange-dim",
//         "heightToSquare": 1.5,
//         "widthToHeight": 1.2,
//         "preyType": "dangerous-large",
//         "isPredator": true,
//         "prey": [
//             "regular-large",
//             "human",
//             "regular-medium",
//             "regular-small",
//             "dangerous-medium",
//             "dangerous-small"
//         ],
//         "possTerrain": [
//             "grassland",
//             "desert",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 80,
//             "savannah": 90,
//             "grassland": 80,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": true,
//         "territorySize": 10,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 12,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 5,
//         "attack": 5,
//         "defence": 5,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "orangeDimetrodon",
//         "isMega": false
//     },
//     "greyScutosaurus": {
//         "name": "Grey Scutosaurus",
//         "imgDir": "grey-scuta",
//         "heightToSquare": 1.6,
//         "widthToHeight": 1.1,
//         "preyType": "regular-Xlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "desert",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 90,
//             "savannah": 90,
//             "grassland": 50,
//             "forest": 30,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 19,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 4,
//         "defence": 8,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "offSets": {
//             "n": {
//                 "topOffset": -50,
//                 "leftOffset": -50
//             },
//             "s": {
//                 "topOffset": -50,
//                 "leftOffset": -50
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": -50
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": -50
//             }
//         },
//         "keyName": "greyScutosaurus",
//         "isMega": false
//     },
//     "brownScutosaurus": {
//         "name": "Brown Scutosaurus",
//         "imgDir": "brown-scuta",
//         "heightToSquare": 1.8,
//         "widthToHeight": 1.1,
//         "preyType": "regular-Xlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "desert",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 90,
//             "savannah": 90,
//             "grassland": 50,
//             "forest": 30,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 22,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 4,
//         "defence": 10,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "offSets": {
//             "n": {
//                 "topOffset": -50,
//                 "leftOffset": -50
//             },
//             "s": {
//                 "topOffset": -50,
//                 "leftOffset": -50
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": -50
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": -50
//             }
//         },
//         "keyName": "brownScutosaurus",
//         "isMega": false
//     },
//     "greaterEdaphasaurus": {
//         "name": "Greater Edaphasaurus",
//         "imgDir": "yellow-green-elaph",
//         "heightToSquare": 1.8,
//         "widthToHeight": 1.5,
//         "preyType": "regular-large",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 50,
//             "savannah": 90,
//             "grassland": 90,
//             "forest": 30,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 22,
//         "hunger": 100,
//         "speed": 3,
//         "range": 1,
//         "aggression": 1,
//         "attack": 4,
//         "defence": 5,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "keyName": "greaterEdaphasaurus",
//         "isMega": false
//     },
//     "orangeEdaphasaurus": {
//         "name": "Orange Edaphasaurus",
//         "imgDir": "orange-elaph",
//         "heightToSquare": 1.5,
//         "widthToHeight": 1.5,
//         "preyType": "regular-large",
//         "isPredator": false,
//         "possTerrain": [
//             "desert",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 90,
//             "savannah": 90,
//             "grassland": 50,
//             "forest": 30,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 18,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 0,
//         "attack": 3,
//         "defence": 4,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "orangeEdaphasaurus",
//         "isMega": false
//     },
//     "greenEdaphasaurus": {
//         "name": "Green Edaphasaurus",
//         "imgDir": "green-elaph",
//         "heightToSquare": 1.2,
//         "widthToHeight": 1.5,
//         "preyType": "regular-medium",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 50,
//             "savannah": 60,
//             "grassland": 90,
//             "forest": 90,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 14,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 0,
//         "attack": 3,
//         "defence": 3,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "greenEdaphasaurus",
//         "isMega": false
//     },
//     "blueDiictidon": {
//         "name": "Blue Diictodon",
//         "imgDir": "blue-dii",
//         "heightToSquare": 0.6,
//         "widthToHeight": 1.2,
//         "preyType": "regular-small",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 10,
//         "hp": 7,
//         "hunger": 100,
//         "speed": 0.3,
//         "range": 1,
//         "aggression": 0,
//         "attack": 1,
//         "defence": 90,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 5,
//         "keyName": "blueDiictidon",
//         "isMega": false
//     },
//     "brownDiictidon": {
//         "name": "Brown Diictodon",
//         "imgDir": "brown-dii",
//         "heightToSquare": 0.5,
//         "widthToHeight": 1.2,
//         "preyType": "regular-small",
//         "isPredator": false,
//         "possTerrain": [
//             "savannah",
//             "desert"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 10,
//         "hp": 6,
//         "hunger": 100,
//         "speed": 0.3,
//         "range": 1,
//         "aggression": 0,
//         "attack": 1,
//         "defence": 60,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 5,
//         "keyName": "brownDiictidon",
//         "isMega": false
//     },
//     "lesserGorgonopsid": {
//         "name": "Lesser Gorgonopsid",
//         "imgDir": "less-gorg",
//         "heightToSquare": 2,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-large",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-large",
//             "human",
//             "regular-Xlarge",
//             "regular-medium",
//             "dangerous-medium",
//             "regular-small",
//             "dangerous-small"
//         ],
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 7,
//         "hp": 16,
//         "hunger": 100,
//         "speed": 0.4,
//         "range": 1,
//         "aggression": 7,
//         "attack": 6,
//         "defence": 2,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "lesserGorgonopsid",
//         "isMega": false
//     },
//     "greaterGorgonopsid": {
//         "name": "Greater Gorgonopsid",
//         "imgDir": "gre-gorg",
//         "heightToSquare": 2.5,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-Xlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-Xlarge",
//             "regular-large",
//             "human",
//             "dangerous-large",
//             "regular-medium",
//             "dangerous-medium",
//             "regular-small",
//             "dangerous-small"
//         ],
//         "possTerrain": [
//             "desert",
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 20,
//         "hunger": 100,
//         "speed": 0.5,
//         "range": 1,
//         "aggression": 6,
//         "attack": 8,
//         "defence": 3,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "greaterGorgonopsid",
//         "isMega": false
//     },
//     "megaGorgonopsid": {
//         "name": "Mega Gorgonopsid",
//         "imgDir": "mega-gorganopsid",
//         "heightToSquare": 6,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-XXlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "human"
//         ],
//         "possTerrain": [
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 48,
//         "hunger": 100,
//         "speed": 0.5,
//         "range": 1,
//         "aggression": 6,
//         "attack": 18,
//         "defence": 3,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "megaGorgonopsid",
//         "isMega": false
//     },
//     "redLystosaurus": {
//         "name": "Red Lystosaurus",
//         "imgDir": "red-lyst",
//         "heightToSquare": 0.8,
//         "widthToHeight": 1.2,
//         "preyType": "regular-medium",
//         "isPredator": false,
//         "possTerrain": [
//             "savannah",
//             "desert"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 6,
//         "hp": 10,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 0,
//         "attack": 2,
//         "defence": 3,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "redLystosaurus",
//         "isMega": false
//     },
//     "purpleLystosaurus": {
//         "name": "Purple Lystosaurus",
//         "imgDir": "purple-lyst",
//         "heightToSquare": 0.9,
//         "widthToHeight": 1.2,
//         "preyType": "regular-large",
//         "isPredator": false,
//         "possTerrain": [
//             "desert",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 11,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 0,
//         "attack": 2,
//         "defence": 4,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "purpleLystosaurus",
//         "isMega": false
//     },
//     "greenPostosuchus": {
//         "name": "Green Postosuchus",
//         "imgDir": "green-post",
//         "heightToSquare": 3,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-Xlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-large",
//             "regular-Xlarge",
//             "human",
//             "dangerous-large",
//             "regular-medium",
//             "regular-small",
//             "dangerous-medium",
//             "dangerous-small"
//         ],
//         "possTerrain": [
//             "desert",
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 24,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 5,
//         "attack": 9,
//         "defence": 5,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "w": {
//                 "topOffset": -40,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "greenPostosuchus",
//         "isMega": false
//     },
//     "brownPostosuchus": {
//         "name": "Brown Postosuchus",
//         "imgDir": "brown-post",
//         "heightToSquare": 3.5,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-XXlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-Xlarge",
//             "regular-large",
//             "regular-XXlarge",
//             "human",
//             "dangerous-Xlarge",
//             "dangerous-large",
//             "regular-medium",
//             "dangerous-medium"
//         ],
//         "possTerrain": [
//             "desert",
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 3,
//         "hp": 28,
//         "hunger": 100,
//         "speed": 1.5,
//         "range": 1,
//         "aggression": 5,
//         "attack": 11,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "w": {
//                 "topOffset": -40,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "brownPostosuchus",
//         "isMega": false
//     },
//     "megaPostosuchus": {
//         "name": "Mega Postosuchus",
//         "imgDir": "mega-posto",
//         "heightToSquare": 10,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-XXXlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "human"
//         ],
//         "possTerrain": [
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 80,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 5,
//         "attack": 30,
//         "defence": 5,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "w": {
//                 "topOffset": -40,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "megaPostosuchus",
//         "isMega": true
//     },
//     "yellowHerreresaurus": {
//         "name": "Yellow Herreresaurus",
//         "imgDir": "yellow-herr",
//         "heightToSquare": 2.1,
//         "widthToHeight": 1.5,
//         "preyType": "dangerous-large",
//         "isPredator": true,
//         "prey": [
//             "regular-large",
//             "regular-medium",
//             "dangerous-medium",
//             "regular-small",
//             "dangerous-small",
//             "human"
//         ],
//         "possTerrain": [
//             "desert",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 7,
//         "hp": 17,
//         "hunger": 100,
//         "speed": 0.4,
//         "range": 1,
//         "aggression": 7,
//         "attack": 6,
//         "defence": 2,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "yellowHerreresaurus",
//         "isMega": false
//     },
//     "greenHerreresaurus": {
//         "name": "green Herreresaurus",
//         "imgDir": "green-herr",
//         "heightToSquare": 1.8,
//         "widthToHeight": 1.5,
//         "preyType": "dangerous-large",
//         "isPredator": true,
//         "prey": [
//             "regular-large",
//             "regular-medium",
//             "regular-small",
//             "dangerous-small",
//             "dangerous-medium"
//         ],
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 7,
//         "hp": 14,
//         "hunger": 100,
//         "speed": 0.4,
//         "range": 1,
//         "aggression": 7,
//         "attack": 5,
//         "defence": 2,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "greenHerreresaurus",
//         "isMega": false
//     },
//     "redDesmatosuchus": {
//         "name": "Red Desmatosuchus",
//         "imgDir": "less-desma",
//         "heightToSquare": 2,
//         "widthToHeight": 1.4,
//         "preyType": "regular-large",
//         "isPredator": false,
//         "possTerrain": [
//             "desert",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 24,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 5,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "keyName": "redDesmatosuchus",
//         "isMega": false
//     },
//     "greenDesmatosuchus": {
//         "name": "Green Desmatosuchus",
//         "imgDir": "desma",
//         "heightToSquare": 2.5,
//         "widthToHeight": 1.4,
//         "preyType": "regular-Xlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "forset",
//             "savannah",
//             "grassland"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 30,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 6,
//         "defence": 8,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "keyName": "greenDesmatosuchus",
//         "isMega": false
//     },
//     "blueDesmatosuchus": {
//         "name": "Blue Desmatosuchus",
//         "imgDir": "blue-desma",
//         "heightToSquare": 3,
//         "widthToHeight": 1.4,
//         "preyType": "regular-Xlarge",
//         "isPredator": false,
//         "hasSwim": true,
//         "possTerrain": [
//             "swamp-forest",
//             "marsh",
//             "grassland",
//             "savannah",
//             "desert"
//         ],
//         "terrainPreference": {
//             "desert": 30,
//             "savannah": 100,
//             "grassland": 90,
//             "forest": 50,
//             "swampForest": 30,
//             "marsh": 20,
//             "shallowWater": 10,
//             "deepWater": 0
//         },
//         "sightRange": 5,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 36,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 1,
//         "attack": 7,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "keyName": "blueDesmatosuchus",
//         "isMega": false
//     },
//     "yellowOrnitholestes": {
//         "name": "Yellow-Ornitholestes",
//         "imgDir": "yellow-ornitho",
//         "heightToSquare": 0.8,
//         "widthToHeight": 1,
//         "preyType": "dangerous-medium",
//         "isPredator": true,
//         "prey": [
//             "regular-medium",
//             "regular-small",
//             "dangerous-small",
//             "regular-tiny",
//             "dangerous-tiny"
//         ],
//         "possTerrain": [
//             "savannah",
//             "grassland"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 1.2,
//         "hp": 6,
//         "hunger": 100,
//         "speed": 0.7,
//         "range": 1,
//         "aggression": 5,
//         "attack": 2,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "yellowOrnitholestes",
//         "isMega": false
//     },
//     "blueOrnitholestes": {
//         "name": "Blue Ornitholestes",
//         "imgDir": "blue-ornitho",
//         "heightToSquare": 1.5,
//         "widthToHeight": 1,
//         "preyType": "dangerous-medium",
//         "isPredator": true,
//         "prey": [
//             "regular-medium",
//             "regular-small",
//             "dangerous-medium",
//             "dangerous-small",
//             "regular-tiny",
//             "dangerous-tiny"
//         ],
//         "possTerrain": [
//             "forest",
//             "marsh",
//             "swampForest"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 8,
//         "hp": 12,
//         "hunger": 100,
//         "speed": 0.7,
//         "range": 1,
//         "aggression": 5,
//         "attack": 5,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "blueOrnitholestes",
//         "isMega": false
//     },
//     "velociraptor": {
//         "name": "Velociraptor",
//         "imgDir": "veloc",
//         "heightToSquare": 1.8,
//         "widthToHeight": 1,
//         "preyType": "dangerous-medium",
//         "isPredator": true,
//         "prey": [
//             "regular-medium",
//             "dangerous-medium",
//             "regular-small",
//             "dangerous-small",
//             "regular-tiny",
//             "dangerous-tiny"
//         ],
//         "possTerrain": [
//             "savannah",
//             "desert",
//             "grassland"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 8,
//         "hp": 14,
//         "hunger": 100,
//         "speed": 0.7,
//         "range": 1,
//         "aggression": 5,
//         "attack": 5,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "velociraptor",
//         "isMega": false
//     },
//     "deinonychus": {
//         "name": "Deinonychus",
//         "imgDir": "deino-green",
//         "heightToSquare": 2.5,
//         "widthToHeight": 1,
//         "preyType": "dangerous-Xlarge",
//         "isPredator": true,
//         "hasSwim": true,
//         "prey": [
//             "regular-large",
//             "regular-Xlarge",
//             "dangerous-large",
//             "human",
//             "regular-medium",
//             "dangerous-medium",
//             "regular-small",
//             "dangerous-small"
//         ],
//         "possTerrain": [
//             "forest",
//             "marsh",
//             "swampForest"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 8,
//         "hp": 20,
//         "hunger": 100,
//         "speed": 0.7,
//         "range": 1,
//         "aggression": 5,
//         "attack": 8,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "keyName": "deinonychus",
//         "isMega": false
//     },
//     "utahRaptor": {
//         "name": "Utah Raptor",
//         "imgDir": "utah",
//         "heightToSquare": 3.8,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-XXlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "hasSwim": true,
//         "prey": [
//             "regular-Xlarge",
//             "human",
//             "regular-large",
//             "dangerous-large",
//             "dangerous-Xlarge",
//             "regular-medium",
//             "dangerous-medium"
//         ],
//         "possTerrain": [
//             "desert",
//             "grassland",
//             "forest",
//             "savannah",
//             "shallowWater"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 3,
//         "hp": 30,
//         "hunger": 100,
//         "speed": 1.5,
//         "range": 1,
//         "aggression": 5,
//         "attack": 11,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -20,
//                 "leftOffset": 50
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": 0,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "utahRaptor",
//         "isMega": false
//     },
//     "ceratosaurus": {
//         "name": "Ceratosaurus",
//         "imgDir": "ceratosaurus",
//         "heightToSquare": 3.8,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-Xlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "possTerrain": [
//             "desert",
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 30,
//             "savannah": 100,
//             "grassland": 90,
//             "forest": 30,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "hunger": 100,
//         "sightRange": 4,
//         "isTerritoryRestricted": true,
//         "territorySize": 5,
//         "speed": 2,
//         "threatReaction": 60,
//         "activityLevel": 3,
//         "hp": 30,
//         "range": 1,
//         "aggression": 5,
//         "attack": 11,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -20,
//                 "leftOffset": 50
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": 0,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "ceratosaurus",
//         "isMega": false
//     },
//     "baryonyx": {
//         "name": "Baryonyx",
//         "imgDir": "baryonyx",
//         "heightToSquare": 5,
//         "widthToHeight": 1.8,
//         "hasSwim": true,
//         "preyType": "dangerous-XXXlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-Xlarge",
//             "regular-large",
//             "regular-medium",
//             "dangerous-medium",
//             "human",
//             "dangerous-large",
//             "dangerous-Xlarge"
//         ],
//         "possTerrain": [
//             "grassland",
//             "forest",
//             "marsh"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 40,
//         "hunger": 100,
//         "speed": 1.5,
//         "range": 1,
//         "aggression": 5,
//         "attack": 15,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             },
//             "s": {
//                 "topOffset": -60,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             }
//         },
//         "keyName": "baryonyx",
//         "isMega": false
//     },
//     "allosaurus": {
//         "name": "Allosaurus",
//         "imgDir": "allosaurus",
//         "heightToSquare": 5.5,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-XXXlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-XXXlarge",
//             "regular-XXlarge",
//             "dangerous-XXlarge",
//             "regular-Xlarge",
//             "dangerous-Xlarge",
//             "regular-large",
//             "human",
//             "dangerous-large"
//         ],
//         "possTerrain": [
//             "desert",
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 44,
//         "hunger": 100,
//         "speed": 1.5,
//         "range": 1,
//         "aggression": 5,
//         "attack": 17,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             },
//             "s": {
//                 "topOffset": -30,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": 90
//             }
//         },
//         "keyName": "allosaurus",
//         "isMega": false
//     },
//     "sarcophaganax": {
//         "name": "Sarcophaganax",
//         "imgDir": "sarco",
//         "heightToSquare": 6.8,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-mega",
//         "isPredator": true,
//         "isApexPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-XXXlarge",
//             "regular-mega",
//             "dangerous-XXXlarge",
//             "regular-XXlarge",
//             "dangerous-XXlarge",
//             "regular-Xlarge",
//             "dangerous-Xlarge",
//             "regular-large",
//             "human",
//             "dangerous-large"
//         ],
//         "possTerrain": [
//             "desert",
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 54,
//         "hunger": 100,
//         "speed": 3,
//         "range": 1,
//         "aggression": 5,
//         "attack": 20,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             },
//             "s": {
//                 "topOffset": -60,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             }
//         },
//         "keyName": "sarcophaganax",
//         "isMega": true
//     },
//     "tarbosaurus": {
//         "name": "Tarbosaurus",
//         "imgDir": "trex-green",
//         "heightToSquare": 8.5,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-mega",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "hasSwim": true,
//         "prey": [
//             "regular-XXXlarge",
//             "regular-mega",
//             "dangerous-XXXlarge",
//             "regular-XXlarge",
//             "dangerous-XXlarge",
//             "regular-Xlarge",
//             "dangerous-Xlarge",
//             "regular-large",
//             "human",
//             "dangerous-large"
//         ],
//         "possTerrain": [
//             "desert",
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 75,
//         "hunger": 100,
//         "speed": 1.5,
//         "range": 1,
//         "aggression": 6,
//         "attack": 21,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             },
//             "s": {
//                 "topOffset": -60,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             }
//         },
//         "keyName": "tarbosaurus",
//         "isMega": true
//     },
//     "tyrannosaurus": {
//         "name": "Tyrannosaurus",
//         "imgDir": "trex-black",
//         "heightToSquare": 9,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-mega",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-XXXlarge",
//             "regular-mega",
//             "dangerous-XXXlarge",
//             "regular-XXlarge",
//             "dangerous-XXlarge",
//             "regular-Xlarge",
//             "dangerous-Xlarge",
//             "regular-large",
//             "human",
//             "dangerous-large"
//         ],
//         "possTerrain": [
//             "desert",
//             "grassland",
//             "forest",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 4,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 80,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 7,
//         "attack": 21,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             },
//             "s": {
//                 "topOffset": -60,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             }
//         },
//         "keyName": "tyrannosaurus",
//         "isMega": true
//     },
//     "spinosaurus": {
//         "name": "Spinosaurus",
//         "imgDir": "spino-green",
//         "heightToSquare": 12,
//         "widthToHeight": 1.8,
//         "preyType": "dangerous-massive",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "hasSwim": true,
//         "prey": [
//             "regular-XXXlarge",
//             "regular-mega",
//             "regular-massive",
//             "dangerous-mega",
//             "dangerous-XXXlarge",
//             "regular-XXlarge",
//             "dangerous-XXlarge",
//             "regular-Xlarge",
//             "dangerous-Xlarge",
//             "regular-large",
//             "human",
//             "dangerous-large"
//         ],
//         "possTerrain": [
//             "grassland",
//             "swampForest",
//             "marsh",
//             "shallowWater",
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 4,
//         "hp": 96,
//         "hunger": 100,
//         "speed": 1.5,
//         "range": 1,
//         "aggression": 5,
//         "attack": 36,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             },
//             "s": {
//                 "topOffset": -60,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": 100
//             }
//         },
//         "keyName": "spinosaurus",
//         "isMega": true
//     },
//     "blueMosasaurus": {
//         "name": "Blue Mosasaurus",
//         "imgDir": "moso-blue",
//         "heightToSquare": 7,
//         "widthToHeight": 1.2,
//         "preyType": "dangerous-XXXlarge",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-XXXlarge",
//             "regular-mega",
//             "regular-massive",
//             "dangerous-mega",
//             "dangerous-XXXlarge",
//             "regular-XXlarge",
//             "dangerous-XXlarge",
//             "regular-Xlarge",
//             "dangerous-Xlarge",
//             "regular-large",
//             "human",
//             "dangerous-large"
//         ],
//         "possTerrain": [
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 0,
//             "forest": 0,
//             "swampForest": 10,
//             "marsh": 10,
//             "shallowWater": 60,
//             "deepWater": 100
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": true,
//         "territorySize": 9,
//         "threatReaction": 50,
//         "activityLevel": 3,
//         "hp": 56,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 5,
//         "attack": 21,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "waterOnly": false,
//         "isUnderWater": true,
//         "offSets": {
//             "n": {
//                 "topOffset": -20,
//                 "leftOffset": 50
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": 0,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "blueMosasaurus",
//         "isMega": true
//     },
//     "greenMosasaurus": {
//         "name": "Green Mosasaurus",
//         "imgDir": "moso-green",
//         "heightToSquare": 12,
//         "widthToHeight": 1.2,
//         "preyType": "dangerous-massive",
//         "isPredator": true,
//         "isHumanPredator": true,
//         "prey": [
//             "regular-XXXlarge",
//             "regular-XXlarge",
//             "dangerous-XXlarge",
//             "regular-Xlarge",
//             "dangerous-Xlarge",
//             "regular-large",
//             "human",
//             "dangerous-large"
//         ],
//         "possTerrain": [
//             "deepWater"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 0,
//             "grassland": 0,
//             "forest": 0,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 30,
//             "deepWater": 100
//         },
//         "sightRange": 5,
//         "isTerritoryRestricted": true,
//         "territorySize": 10,
//         "threatReaction": 50,
//         "activityLevel": 3,
//         "hp": 96,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 5,
//         "attack": 36,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "waterOnly": false,
//         "isUnderWater": true,
//         "offSets": {
//             "n": {
//                 "topOffset": -20,
//                 "leftOffset": 50
//             },
//             "s": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "e": {
//                 "topOffset": -50,
//                 "leftOffset": 30
//             },
//             "w": {
//                 "topOffset": 0,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "greenMosasaurus",
//         "isMega": true
//     },
//     "yellowKentrosaurus": {
//         "name": "Yellow Kentrosaurus",
//         "imgDir": "yellow-kentro",
//         "heightToSquare": 3.5,
//         "widthToHeight": 1.4,
//         "preyType": "regular-large",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 42,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 8,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "offSets": {
//             "n": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "s": {
//                 "topOffset": -100,
//                 "leftOffset": -100
//             },
//             "e": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "w": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             }
//         },
//         "keyName": "yellowKentrosaurus",
//         "isMega": false
//     },
//     "greenKentrosaurus": {
//         "name": "Green Kentrosaurus",
//         "imgDir": "green-kentro",
//         "heightToSquare": 3,
//         "widthToHeight": 1.4,
//         "preyType": "regular-Xlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "marsh",
//             "grassland",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hasSwim": true,
//         "hp": 36,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 7,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "offSets": {
//             "n": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "s": {
//                 "topOffset": -100,
//                 "leftOffset": -100
//             },
//             "e": {
//                 "topOffset": 0,
//                 "leftOffset": -50
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "greenKentrosaurus",
//         "isMega": false
//     },
//     "blueStegosaurus": {
//         "name": "Blue Stegosaurus",
//         "imgDir": "blue-stego",
//         "heightToSquare": 4,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXlarge",
//         "isPredator": false,
//         "hasSwim": true,
//         "possTerrain": [
//             "swamp-forest",
//             "marsh",
//             "grassland"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 48,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 9,
//         "defence": 15,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "offSets": {
//             "n": {
//                 "topOffset": -100,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -120,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -120,
//                 "leftOffset": 20
//             }
//         },
//         "keyName": "blueStegosaurus",
//         "isMega": false
//     },
//     "redStegosaurus": {
//         "name": "Red Stegosaurus",
//         "imgDir": "red-stego",
//         "heightToSquare": 4.8,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXXlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "savannah",
//             "grassland"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 58,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 11,
//         "defence": 20,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "topOffset": -130,
//         "leftOffset": 100,
//         "offSets": {
//             "n": {
//                 "topOffset": -130,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -150,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "redStegosaurus",
//         "isMega": false
//     },
//     "brownTriceratops": {
//         "name": "Brown Triceratops",
//         "imgDir": "tri-brown",
//         "heightToSquare": 4.8,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXXlarge",
//         "isPredator": false,
//         "isGroup": true,
//         "groupMaxSize": 10,
//         "groupCohesion": 4,
//         "hasSwim": true,
//         "possTerrain": [
//             "savannah",
//             "grassland",
//             "swamp-forest",
//             "marsh"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 10,
//             "marsh": 10,
//             "shallowWater": 10,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 58,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 1,
//         "attack": 11,
//         "defence": 20,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "topOffset": -130,
//         "leftOffset": 100,
//         "offSets": {
//             "n": {
//                 "topOffset": -130,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -150,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "brownTriceratops",
//         "isMega": false
//     },
//     "greyTriceratops": {
//         "name": "Grey Triceratops",
//         "imgDir": "tri-grey",
//         "heightToSquare": 5,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXXlarge",
//         "isPredator": false,
//         "isGroup": true,
//         "hasSwim": true,
//         "possTerrain": [
//             "savannah",
//             "grassland",
//             "swamp-forest",
//             "marsh"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 60,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 1,
//         "attack": 11,
//         "defence": 20,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "topOffset": -130,
//         "leftOffset": 100,
//         "offSets": {
//             "n": {
//                 "topOffset": -130,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -150,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "greyTriceratops",
//         "isMega": false
//     },
//     "greenStyracosaurus": {
//         "name": "Green Styracosaurus",
//         "imgDir": "styrack-green",
//         "heightToSquare": 4,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXlarge",
//         "isPredator": false,
//         "hasSwim": true,
//         "possTerrain": [
//             "savannah",
//             "grassland",
//             "swamp-forest",
//             "marsh"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 48,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 9,
//         "defence": 20,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "topOffset": -130,
//         "leftOffset": 100,
//         "offSets": {
//             "n": {
//                 "topOffset": -130,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -150,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "greenStyracosaurus",
//         "isMega": false
//     },
//     "blueStyracosaurus": {
//         "name": "Blue Styracosaurus",
//         "imgDir": "styrack-blue",
//         "heightToSquare": 3.8,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXlarge",
//         "isPredator": false,
//         "isGroup": true,
//         "hasSwim": true,
//         "possTerrain": [
//             "forest",
//             "grassland",
//             "swamp-forest",
//             "marsh"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 46,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 9,
//         "defence": 20,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "topOffset": -130,
//         "leftOffset": 100,
//         "offSets": {
//             "n": {
//                 "topOffset": -130,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -150,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "blueStyracosaurus",
//         "isMega": false
//     },
//     "blueParasaurolophus": {
//         "name": "Blue Parasaurolophus",
//         "imgDir": "para-blue",
//         "heightToSquare": 4.8,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXXlarge",
//         "isPredator": false,
//         "hasSwim": true,
//         "possTerrain": [
//             "swamp-forest",
//             "marsh",
//             "forest",
//             "grassland"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 58,
//         "hunger": 100,
//         "speed": 2.5,
//         "range": 1,
//         "aggression": 1,
//         "attack": 11,
//         "defence": 13,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "topOffset": -130,
//         "leftOffset": 100,
//         "offSets": {
//             "n": {
//                 "topOffset": -130,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -150,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "blueParasaurolophus",
//         "isMega": false
//     },
//     "greyParasaurolophus": {
//         "name": "Grey Parasaurolophus",
//         "imgDir": "para-grey",
//         "heightToSquare": 5,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXXlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "swamp-forest",
//             "marsh",
//             "grassland"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 60,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 11,
//         "defence": 15,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "topOffset": -130,
//         "leftOffset": 100,
//         "offSets": {
//             "n": {
//                 "topOffset": -130,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -150,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "greyParasaurolophus",
//         "isMega": false
//     },
//     "orangeOuranosaurus": {
//         "name": "Orange Ouranosaurus",
//         "imgDir": "ouranosaurus",
//         "heightToSquare": 4.8,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXXlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "savannah",
//             "desert"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 58,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 11,
//         "defence": 15,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "topOffset": -130,
//         "leftOffset": 100,
//         "offSets": {
//             "n": {
//                 "topOffset": -130,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -150,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "orangeOuranosaurus",
//         "isMega": false
//     },
//     "yellowOuranosaurus": {
//         "name": "Yellow Ouranosaurus",
//         "imgDir": "ouranosaurus-yellow",
//         "heightToSquare": 4.5,
//         "widthToHeight": 1.4,
//         "preyType": "regular-XXXlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "savannah",
//             "grassland"
//         ],
//         "terrainPreference": {
//             "desert": 60,
//             "savannah": 60,
//             "grassland": 60,
//             "forest": 60,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 54,
//         "hunger": 100,
//         "speed": 2,
//         "range": 1,
//         "aggression": 1,
//         "attack": 10,
//         "defence": 14,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 2,
//         "topOffset": -130,
//         "leftOffset": 100,
//         "offSets": {
//             "n": {
//                 "topOffset": -130,
//                 "leftOffset": 30
//             },
//             "s": {
//                 "topOffset": -150,
//                 "leftOffset": -120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": -120
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "yellowOuranosaurus",
//         "isMega": false
//     },
//     "apatosaurus": {
//         "heightToSquare": 18,
//         "widthToHeight": 2,
//         "isMega": true,
//         "preyType": "regular-mega",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 50,
//             "savannah": 100,
//             "grassland": 80,
//             "forest": 0,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 216,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 0,
//         "attack": 41,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -50,
//                 "leftOffset": 200
//             },
//             "s": {
//                 "topOffset": -180,
//                 "leftOffset": 120
//             },
//             "e": {
//                 "topOffset": -90,
//                 "leftOffset": 150
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 220
//             }
//         },
//         "name": "Apatosaurus",
//         "imgDir": "apato",
//         "keyName": "apatosaurus"
//     },
//     "apatosaurusHouse1": {
//         "heightToSquare": 18,
//         "widthToHeight": 2,
//         "isMega": true,
//         "preyType": "regular-mega",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 50,
//             "savannah": 100,
//             "grassland": 80,
//             "forest": 0,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 216,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 0,
//         "attack": 41,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -70,
//                 "leftOffset": 200
//             },
//             "s": {
//                 "topOffset": -180,
//                 "leftOffset": 120
//             },
//             "e": {
//                 "topOffset": -70,
//                 "leftOffset": 130
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 220
//             }
//         },
//         "name": "Apatosaurus Nomad 1",
//         "imgDir": "apato-house-1",
//         "keyName": "apatosaurusHouse1"
//     },
//     "apatosaurusHouse2": {
//         "heightToSquare": 18,
//         "widthToHeight": 2,
//         "isMega": true,
//         "preyType": "regular-mega",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 50,
//             "savannah": 100,
//             "grassland": 80,
//             "forest": 0,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 216,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 0,
//         "attack": 41,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -90,
//                 "leftOffset": 200
//             },
//             "s": {
//                 "topOffset": -180,
//                 "leftOffset": 120
//             },
//             "e": {
//                 "topOffset": -90,
//                 "leftOffset": 130
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 220
//             }
//         },
//         "name": "Apatosaurus Nomad 2",
//         "imgDir": "apato-house-2",
//         "keyName": "apatosaurusHouse2"
//     },
//     "apatosaurusHouse3": {
//         "heightToSquare": 18,
//         "widthToHeight": 2,
//         "isMega": true,
//         "preyType": "regular-mega",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 50,
//             "savannah": 100,
//             "grassland": 80,
//             "forest": 0,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 216,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 0,
//         "attack": 41,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -100,
//                 "leftOffset": 200
//             },
//             "s": {
//                 "topOffset": -180,
//                 "leftOffset": 120
//             },
//             "e": {
//                 "topOffset": -100,
//                 "leftOffset": 130
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 220
//             }
//         },
//         "name": "Apatosaurus Nomad 3",
//         "imgDir": "apato-house-3",
//         "keyName": "apatosaurusHouse3"
//     },
//     "apatosaurusHouse4": {
//         "heightToSquare": 18,
//         "widthToHeight": 2,
//         "isMega": true,
//         "preyType": "regular-mega",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "savannah"
//         ],
//         "terrainPreference": {
//             "desert": 50,
//             "savannah": 100,
//             "grassland": 80,
//             "forest": 0,
//             "swampForest": 0,
//             "marsh": 0,
//             "shallowWater": 0,
//             "deepWater": 0
//         },
//         "sightRange": 3,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "threatReaction": 50,
//         "activityLevel": 5,
//         "hp": 216,
//         "hunger": 100,
//         "speed": 1,
//         "range": 1,
//         "aggression": 0,
//         "attack": 41,
//         "defence": 1,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "escape": 1,
//         "offSets": {
//             "n": {
//                 "topOffset": -150,
//                 "leftOffset": 200
//             },
//             "s": {
//                 "topOffset": -180,
//                 "leftOffset": 120
//             },
//             "e": {
//                 "topOffset": -150,
//                 "leftOffset": 130
//             },
//             "w": {
//                 "topOffset": -150,
//                 "leftOffset": 220
//             }
//         },
//         "name": "Apatosaurus Nomad 4",
//         "imgDir": "apato-house-4",
//         "keyName": "apatosaurusHouse4"
//     },
//     "woolyMammoth": {
//         "name": "Wooly Mammoth",
//         "imgDir": "wooly-mammoth",
//         "heightToSquare": 4,
//         "widthToHeight": 1.4,
//         "preyType": "regular-Xlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "grassland",
//             "forest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 70,
//             "grassland": 100,
//             "forest": 100,
//             "swampForest": 30,
//             "marsh": 50,
//             "shallowWater": 40,
//             "deepWater": 0
//         },
//         "hunger": 100,
//         "sightRange": 2,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "speed": 2,
//         "threatReaction": 60,
//         "activityLevel": 5,
//         "hasSwim": false,
//         "hp": 48,
//         "range": 1,
//         "aggression": 1,
//         "attack": 9,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "statusSpecs": {
//             "top": 120,
//             "left": 20
//         },
//         "escape": 2,
//         "offSets": {
//             "n": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "s": {
//                 "topOffset": -100,
//                 "leftOffset": -100
//             },
//             "e": {
//                 "topOffset": 0,
//                 "leftOffset": -50
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "woolyMammoth",
//         "isMega": false
//     },
//     "greyMastodon": {
//         "name": "Grey Mastodon",
//         "imgDir": "mastadon-grey",
//         "heightToSquare": 3,
//         "widthToHeight": 1.4,
//         "preyType": "regular-Xlarge",
//         "isPredator": false,
//         "possTerrain": [
//             "savannah",
//             "marsh",
//             "swamp forest"
//         ],
//         "terrainPreference": {
//             "desert": 0,
//             "savannah": 100,
//             "grassland": 90,
//             "forest": 70,
//             "swampForest": 30,
//             "marsh": 90,
//             "shallowWater": 70,
//             "deepWater": 0
//         },
//         "hunger": 100,
//         "sightRange": 2,
//         "isTerritoryRestricted": false,
//         "territorySize": 0,
//         "speed": 2,
//         "threatReaction": 60,
//         "activityLevel": 5,
//         "hasSwim": true,
//         "hp": 36,
//         "range": 1,
//         "aggression": 1,
//         "attack": 7,
//         "defence": 6,
//         "targetSpecs": {
//             "top": 50,
//             "left": 50,
//             "height": 100,
//             "width": 100,
//             "color": "green"
//         },
//         "statusSpecs": {
//             "top": 120,
//             "left": 20
//         },
//         "escape": 2,
//         "offSets": {
//             "n": {
//                 "topOffset": 0,
//                 "leftOffset": 0
//             },
//             "s": {
//                 "topOffset": -100,
//                 "leftOffset": -100
//             },
//             "e": {
//                 "topOffset": 0,
//                 "leftOffset": -50
//             },
//             "w": {
//                 "topOffset": -50,
//                 "leftOffset": 50
//             }
//         },
//         "keyName": "greyMastodon",
//         "isMega": false
//     },
//     "human": {
//         name: "******** HUMAN ******",
//         isUnit: true,
//         heightToSquare: .45,
//         widthToHeight: .5,
//         preyType: "human",
//         isPredator: true,
//         hp: 12,
//         attack: 5,
//         // prey: ["regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
//         preyPreference: {
//             "human": 0,
//             "regular-tiny": 0,
//             "dangerous-tiny": 0,
//             "regular-small": 100,
//             "dangerous-small": 60,
//             "regular-medium": 80,
//             "dangerous-medium": 50,
//             "regular-large": 10,
//             "dangerous-large": 0,
//             "regular-Xlarge": 0,
//             "dangerous-Xlarge": 0,
//             "regular-XXlarge": 0,
//             "dangerous-XXlarge": 0,
//             "regular-XXXlarge": 0,
//             "dangerous-XXXlarge": 0,
//             "regular-mega": 0,
//             "dangerous-mega": 0
//         },
//         terrainPreference: {
//             "desert": 90,
//             "savannah": 90, 
//             "grassland": 90, 
//             "forest": 90, 
//             "swampForest": 20,
//             "marsh": 20,
//             "shallowWater": 20,
//             "deepWater": 10
//         },
//         hunger: 100,
//         sightRange: 4,
//         isTerritoryRestricted: true,
//         territorySize: 10,
//         speed: 2,
//         threatReaction: 60,
//         activityLevel: 1,
//         arrayType: "units"
//     }
// }

// export default generatedDirectory;
