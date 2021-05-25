const defaultHuman = {
    isUnit: true,
    heightToSquare: .45,
    widthToHeight: .5,
    preyType: "human",
    isPredator: true,
    prey: ["regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
    activityLevel: 1,
    isTerritoryRestricted: true,
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