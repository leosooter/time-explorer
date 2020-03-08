//Height is defined as a percentage of square height.

/*
Sizes

Tiny - bug
Small - rabbit
Medium - dog
Large - person
XLarge - lion
XXLarge - horse
XXXLarge - elephant
Mega - apatosaurus

*/

const genericDarter = {
    heightToSquare: .3,
    widthToHeight: 1.2,
    isFlying: true,
    preyType: "regular-tiny",
    isPredator: false,
    possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
    activityLevel: 10,
    hp: 2,
    hunger: 100,
    speed: .2,
    range: 1,
    aggression: 1,
    attack: 1,
    defence: 0,
    escape: 9
};


export default {
    // All
    scorpion: {
        name: "scorpion",
        imgDir: "scorp",
        heightToSquare: .2,
        widthToHeight: 2,
        preyType: "dangerous-tiny",
        isPredator: false,
        possTerrain: ["grassland", "desert", "savannah", "forest"],
        activityLevel: 5,
        hp: 2,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 3,
        attack: 1,
        defence: 3,
        escape: 1
    },
    // Devonian/Carboniferous/Permian
    pulmonoscorpius: {
        name: "Pulmonoscorpius",
        imgDir: "less-scorp",
        heightToSquare: .3,
        widthToHeight: 2,
        preyType: "dangerous-small",
        isPredator: true,
        prey: ["regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "desert", "savannah", "forest"],
        activityLevel: 5,
        hp: 4,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 4,
        attack: 2,
        defence: 4,
        escape: 1
    },
     // Carboniferous
     kingPulmonoscorpius: {
        name: "King Pulmonoscorpius",
        imgDir: "gre-scorp",
        heightToSquare: .6,
        widthToHeight: 2,
        preyType: "dangerous-medium",
        isPredator: true,
        prey: ["regular-medium", "regular-small", "dangerous-small","regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "desert", "savannah", "forest"],
        activityLevel: 5,
        hp: 6,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 5,
        attack: 4,
        defence: 6,
        escape: 1
    },
    ultraPulmonoscorpius: {
        name: "Ultra Pulmonoscorpius",
        imgDir: "gre-scorp",
        heightToSquare: 5,
        widthToHeight: 1.5,
        preyType: "dangerous-mega",
        isPredator: true,
        prey: ["regular-large", "dangerous-large", "regular-medium", "dangerous-medium"],
        possTerrain: ["grassland", "desert", "savannah", "forest"],
        activityLevel: 5,
        hp: 50,
        hunger: 100,
        speed: .3,
        range: 2,
        aggression: 5,
        attack: 40,
        defence: 20,
        escape: 1
    },
    // Carboniferous
    greaterArthropluera: {
        name: "Greater Athropluera",
        imgDir: "gre-arth",
        heightToSquare: .9,
        widthToHeight: 1.5,
        preyType: "regular-large",
        isPredator: false,
        possTerrain: ["grassland", "forest", "marsh", "swampForest"],
        activityLevel: 3,
        hp: 20,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 1,
        defence: 5,
        escape: 1
    },
    // Carboniferous
    lesserArthropluera: {
        name: "Lesser Athropluera",
        imgDir: "less-arth",
        heightToSquare: .5,
        widthToHeight: 1.5,
        preyType: "regular-medium",
        isPredator: false,
        possTerrain: ["grassland", "savannah", "forest", "marsh", "swampForest"],
        activityLevel: 4,
        hp: 10,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 0,
        attack: 1,
        defence: 4,
        escape: 1
    },
    // Carboniferous
    greaterMisophilae: {
        name: "Greater Misophilae",
        imgDir: "gre-miso",
        heightToSquare: .5,
        widthToHeight: 1,
        preyType: "dangerous-medium",
        isPredator: true,
        prey: ["dangerous-medium", "regular-medium", "regular-small", "dangerous-small","regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "savannah", "forest"],
        activityLevel: 6,
        hp: 6,
        hunger: 100,
        speed: .7,
        range: 1,
        aggression: 5,
        attack: 5,
        defence: 1,
        escape: 1
    },
    // Carboniferous/Permian
    lesserMisophilae: {
        name: "Lesser Misophilae",
        imgDir: "less-miso",
        heightToSquare: .25,
        widthToHeight: 1,
        preyType: "regular-small",
        isPredator: true,
        prey: ["regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "savannah", "forest"],
        activityLevel: 7,
        hp: 4,
        hunger: 100,
        speed: .5,
        range: 1,
        aggression: 3,
        attack: 3,
        defence: 1,
        escape: 1
    },
    // Carboniferous
    orangeMeganuera: {
        name: "Orange Meganuera",
        imgDir: "orange-meg",
        heightToSquare: .4,
        widthToHeight: 1.2,
        isFlying: true,
        preyType: "regular-small",
        isPredator: true,
        prey: ["regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "savannah", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
        activityLevel: 10,
        hp: 3,
        hunger: 100,
        speed: .3,
        range: 1,
        aggression: 1,
        attack: 2,
        defence: 1,
        escape: 8
    },
    // Carboniferous
    blueMeganuera: {
        name: "Blue Meganuera",
        imgDir: "blue-meg",
        heightToSquare: .7,
        widthToHeight: 1.2,
        isFlying: true,
        preyType: "regular-medium",
        isPredator: true,
        prey: ["regular-small", "regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
        activityLevel: 10,
        hp: 5,
        hunger: 100,
        speed: .5,
        range: 1,
        aggression: 0,
        attack: 4,
        defence: 1,
        escape: 7
    },
    redDarter: {
        ...genericDarter,
        name: "Red Darter",
        imgDir: "red-darter",
    },
    yellowDarter: {
        ...genericDarter,
        name: "Yellow Darter",
        imgDir: "yellow-darter",
    },
    greenDarter: {
        ...genericDarter,
        name: "Green Darter",
        imgDir: "green-darter",
    },
    purpleDarter: {
        ...genericDarter,
        name: "Purple Darter",
        imgDir: "purple-darter",
    },
    blueDarter: {
        ...genericDarter,
        name: "Blue Darter",
        imgDir: "blue-meg",
    },
    // Carboniferous
    greaterProterogyrinus: {
        name: "Greater Proterogyrinus",
        imgDir: "gre-amph",
        heightToSquare: 1.2,
        widthToHeight: 1.3,
        hasSwim: true,
        preyType: "dangerous-large",
        isPredator: true,
        prey: ["regular-large", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
        possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
        activityLevel: 4,
        hp: 20,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 4,
        attack: 6,
        defence: 4,
        escape: 1
    },
    // Permian
    yellowCrocodile: {
        name: "Yellow Thecodont",
        imgDir: "yellow-croc",
        heightToSquare: 1,
        widthToHeight: 2,
        hasSwim: true,
        preyType: "dangerous-large",
        isPredator: true,
        prey: ["regular-large", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
        possTerrain: ["marsh", "swampForest", "shallowWater", "deepWater"],
        activityLevel: 3,
        hp: 15,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 6,
        attack: 5,
        defence: 3,
        escape: 1
    },
    // Permian
    orangeDimetrodon: {
        name: "Orange Dimetrodon",
        imgDir: "orange-dim",
        heightToSquare: 1,
        widthToHeight: 1.2,
        preyType: "dangerous-large",
        isPredator: true,
        prey: ["regular-large", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
        possTerrain: ["grassland", "desert", "savannah"],
        activityLevel: 5,
        hp: 20,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 5,
        attack: 8,
        defence: 3,
        escape: 1
    },
    silverBarb: {
        name: "Silver Barb",
        imgDir: "silver-barb",
        heightToSquare: .3,
        widthToHeight: 2,
        preyType: "regular-medium",
        isPredator: false,
        possTerrain: ["shallowWater", "deepWater"],
        activityLevel: 5,
        hp: 10,
        hunger: 100,
        speed: 1,
        range: 1,
        aggression: 0,
        attack: 1,
        defence: 1,
        escape: 1
    },
    diplodocus: {
        name: "Diplodocus",
        imgDir: "diplo",
        heightToSquare: 10,
        widthToHeight: 2,
        isMega: true,
        preyType: "regular-mega",
        isPredator: false,
        possTerrain: ["grassland", "savannah"],
        activityLevel: 5,
        hp: 10,
        hunger: 100,
        speed: 1,
        range: 1,
        aggression: 0,
        attack: 1,
        defence: 1,
        escape: 1
    },
    apatosaurus: {
        name: "Apatosaurus",
        imgDir: "apato",
        heightToSquare: 8,
        widthToHeight: 2,
        isMega: true,
        preyType: "regular-mega",
        isPredator: false,
        possTerrain: ["grassland", "savannah"],
        activityLevel: 5,
        hp: 10,
        hunger: 100,
        speed: 1,
        range: 1,
        aggression: 0,
        attack: 1,
        defence: 1,
        escape: 1
    },
}


//Trilobite - Ordovician/Devonian
//Sea Scorpion - Ordovician/Devonian
//Orthrocone - Ordovician
//Armored Fish - Ordovician/Devonian
//Small Anphibian - All past Devonian
//Small Lizard - All past Carboniferous



