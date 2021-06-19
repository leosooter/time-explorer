const defaultHuman = {
    isUnit: true,
    heightToSquare: .45,
    widthToHeight: .5,
    preyType: "human",
    isPredator: true,
    // prey: ["regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
    preyPreference: {
        "human": 0,
        "regular-tiny": 0,
        "dangerous-tiny": 0,
        "regular-small": 100,
        "dangerous-small": 60,
        "regular-medium": 80,
        "dangerous-medium": 50,
        "regular-large": 10,
        "dangerous-large": 0,
        "regular-Xlarge": 0,
        "dangerous-Xlarge": 0,
        "regular-XXlarge": 0,
        "dangerous-XXlarge": 0,
        "regular-XXXlarge": 0,
        "dangerous-XXXlarge": 0,
        "regular-mega": 0,
        "dangerous-mega": 0
    },
    terrainPreference: {
        "desert": 90,
        "savannah": 90, 
        "grassland": 90, 
        "forest": 90, 
        "swampForest": 20,
        "marsh": 20,
        "shallowWater": 20,
        "deepWater": 10
    },
    hunger: 100,
    sightRange: 4,
    isTerritoryRestricted: true,
    territorySize: 10,
    speed: 2,
    threatReaction: 60,
    activityLevel: 1,
    arrayType: "units"
}

export default {
    hunter1: {
        ...defaultHuman,
        key: "hunter",
        name: "hunter",
        hp: 15,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 3,
        attack: 6,
        defence: 5,
        escape: 3,
        weapon: "spear1"
    },
    hunter2: {
        ...defaultHuman,
        key: "hunter2",
        name: "hunter",
        hp: 17,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 3,
        attack: 7,
        defence: 6,
        escape: 3,
        weapon: "spear2"
    },
    hunter3: {
        ...defaultHuman,
        key: "hunter3",
        name: "hunter",
        hp: 19,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 3,
        attack: 8,
        defence: 7,
        escape: 3,
        weapon: "spear3"
    },
    hunter4: {
        ...defaultHuman,
        key: "hunter4",
        name: "hunter",
        hp: 21,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 3,
        attack: 9,
        defence: 8,
        escape: 3,
        weapon: "spear4"
    }
}

//warrior
//scout