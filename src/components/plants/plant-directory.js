// import resources from "../resources/resources";
// const {wood, nuts, fruit, food, "medicine", "poison"} = resources; 

export default {
    /////////////////////////////////// Horsetails
    horsetail: {
        name: "Horsetail",
        imageArray: ["horsetail1.png", "horsetail2.png", "horsetail3.png", "horsetail4.png"],
        heightToSquare: .6,
        widthToHeight: 1.2,
        sizeRange: 20,
        resources: [{type: "medicine", quantity: 2}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    goldenHorsetail: {
        name: "Golden Horsetail",
        imageArray: ["golden-horsetail1.png", "golden-horsetail2.png", "golden-horsetail3.png"],
        heightToSquare: .8,
        widthToHeight: 1,
        sizeRange: 20,
        resources: [{type: "medicine", quantity: 20}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    giantHorsetail: {
        name: "Giant Horsetail",
        imageArray: ["giant-horsetail1.png", "giant-horsetail2.png", "giant-horsetail3.png"],
        heightToSquare: 1.8,
        widthToHeight: .7,
        sizeRange: 20,
        resources: [{type: "medicine", quantity: 20}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },

    /////////////////////////////////// Primitive Trees
    greenCalamite: {
        name: "Green Calamite",
        imageArray: ["succulent-green1.png", "succulent-green2.png", "succulent-green3.png", "succulent-green4.png"],
        heightToSquare: 2,
        widthToHeight: .1,
        sizeRange: 20,
        resources: [{type: "medicine", quantity: 2}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    orangeCalamite: {
        name: "Orange Calamite",
        imageArray: ["succulent-orange1.png", "succulent-orange2.png", "succulent-orange3.png"],
        heightToSquare: 2,
        widthToHeight: .2,
        sizeRange: 20,
        resources: [{type: "medicine", quantity: 2}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    orangeWaterCalamite: {
        name: "Orange Water Calamite",
        imageArray: ["succulent-orange-water1.png", "succulent-orange-water2.png", "succulent-orange-water3.png", "succulent-orange-water4.png"],
        heightToSquare: 2,
        widthToHeight: .2,
        sizeRange: 20,
        resources: [{type: "medicine", quantity: 2}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    purpleWaterCalamite: {
        name: "Purple Water Calamite",
        imageArray: ["succulent-purple-water1.png", "succulent-purple-water2.png", "succulent-purple-water3.png"],
        heightToSquare: 2,
        widthToHeight: .2,
        sizeRange: 20,
        resources: [{type: "medicine", quantity: 2}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    tallCalamite: {
        name: "Tall Calamite",
        imageArray: ["tall-calamite1.png", "tall-calamite2.png", "tall-calamite3.png", "tall-calamite4.png", "tall-calamite5.png", "tall-calamite6.png", "tall-calamite7.png"],
        heightToSquare: 2.8,
        widthToHeight: .34,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [2,3]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    greenLycopsid: {
        name: "Green Lycopsid",
        imageArray: ["lyco-green1.png", "lyco-green2.png", "lyco-green3.png"],
        heightToSquare: 2.2,
        widthToHeight: .54,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [2,3]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    yellowLycopsid: {
        name: "Yellow Lycopsid",
        imageArray: ["lyco-yellow1.png", "lyco-yellow2.png", "lyco-yellow3.png"],
        heightToSquare: 2.2,
        widthToHeight: .54,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [2,3]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    shrubLycopsid: {
        name: "Shrub Lycopsid",
        imageArray: ["lyco-low1.png", "lyco-low2.png", "lyco-low3.png", "lyco-low4.png"],
        heightToSquare: 2.2,
        widthToHeight: .54,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [2,3]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    monkeyPuzzle: {
        name: "Monkey Puzzle",
        imageArray: ["monkey-puzzle1.png", "monkey-puzzle2.png", "monkey-puzzle3.png", "monkey-puzzle4.png"],
        heightToSquare: 2.2,
        widthToHeight: .54,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    /////////////////////////////////// Trees
    polycarpus: {
        name: "Polycarpus",
        imageArray: ["polycarpus1.png", "polycarpus2.png", "polycarpus3.png", "polycarpus4.png", "polycarpus5.png", "polycarpus6.png"],
        heightToSquare: 2.2,
        widthToHeight: .54,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    marshPine: {
        name: "Marsh Pine",
        imageArray: ["light-marsh-pine1.png", "light-marsh-pine2.png", "light-marsh-pine3.png", "light-marsh-pine4.png"],
        heightToSquare: 2,
        widthToHeight: .54,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    darkMarshPine: {
        name: "Dark Marsh Pine",
        imageArray: ["dark-marsh-pine1.png", "dark-marsh-pine2.png", "dark-marsh-pine3.png", "dark-marsh-pine4.png"],
        heightToSquare: 2,
        widthToHeight: .54,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    buttressRoot: {
        name: "Buttress Root",
        imageArray: ["buttress-root1.png", "buttress-root2.png", "buttress-root3.png", "buttress-root4.png"],
        heightToSquare: 3,
        widthToHeight: .75,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    goldenButtressRoot: {
        name: "Golden Buttress Root",
        imageArray: ["golden-buttress-root1.png", "golden-buttress-root2.png", "golden-buttress-root3.png"],
        heightToSquare: 2,
        widthToHeight: .75,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    /////////////////////////////////// Conifers
    pine: {
        name: "Pine",
        imageArray: ["conif-green-brown1.png", "conif-green-brown2.png", "conif-green-brown3.png", "conif-green-brown4.png"],
        heightToSquare: 2,
        widthToHeight: .75,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    darkPine: {
        name: "Dark Pine",
        imageArray: ["dark-pine1.png", "dark-pine2.png", "dark-pine3.png", "dark-pine4.png"],
        heightToSquare: 2,
        widthToHeight: .75,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    silverFir: {
        name: "Silver Fir",
        imageArray: ["silver-fir1.png", "silver-fir2.png", "silver-fir3.png"],
        heightToSquare: 2,
        widthToHeight: .75,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    umbrellaPine: {
        name: "Umbrella Pine",
        imageArray: ["umbrella-pine1.png", "umbrella-pine2.png", "umbrella-pine3.png", "umbrella-pine4.png"],
        heightToSquare: 2,
        widthToHeight: .75,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    greyUmbrellaPine: {
        name: "Grey Umbrella Pine",
        imageArray: ["umbrella-pine-grey1.png", "umbrella-pine-grey2.png", "umbrella-pine-grey3.png", "umbrella-pine-grey4.png"],
        heightToSquare: 2,
        widthToHeight: .75,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    redwood: {
        name: "Umbrella Pine",
        imageArray: ["umbrella-pine1.png", "umbrella-pine2.png", "umbrella-pine3.png", "umbrella-pine4.png"],
        heightToSquare: 5,
        widthToHeight: .75,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    snowPine: {
        name: "Snowy Pine",
        imageArray: ["snow-pine1.png", "snow-pine2.png"],
        heightToSquare: 3,
        widthToHeight: .75,
        sizeRange: 100,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    snowFir: {
        name: "Snowy Fir",
        imageArray: ["snow-fir1.png", "snow-fir2.png", "snow-fir3.png", "snow-fir4.png", "snow-fir5.png"],
        heightToSquare: 5,
        widthToHeight: .75,
        sizeRange: 100,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    snowSpruce: {
        name: "Snowy Spruce",
        imageArray: ["snow-spruce1.png", "snow-spruce2.png", "snow-spruce3.png"],
        heightToSquare: 3.5,
        widthToHeight: .75,
        sizeRange: 100,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    //tree-fern
    /////////////////////////////////// Ferns
    barrelFern: {
        name: "Barrel Fern",
        imageArray: ["barrel-fern.png", "barrel-fern2.png", "barrel-fern3.png"],
        heightToSquare: 1,
        widthToHeight: 1,
        sizeRange: 20,
        resources: [{type: "wood", quantity: 20}, {type: "food", quantity: [1,2]}],
        health: 20,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    tallFern: {
        name: "Umbrella Fern",
        imageArray: ["fern.png"],
        heightToSquare: .5,
        widthToHeight: 1.5,
        sizeRange: 20,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
    },
    tallDarkFern: {
        name: "Sword Fern",
        imageArray: ["dark-fern.png"],
        heightToSquare: .5,
        widthToHeight: 1.5,
        sizeRange: 20,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    greenFern: {
        name: "Green Fern",
        imageArray: ["low-fern1.png", "low-fern2.png", "low-fern3.png"],
        heightToSquare: .5,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    yellowFern: {
        name: "Yellow Fern",
        imageArray: ["low-fern4.png", "low-fern5.png"],
        heightToSquare: .15,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    redFern: {
        name: "Red Fern",
        imageArray: ["red-fern1.png", "red-fern2.png"],
        heightToSquare: .18,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    blueFern: {
        name: "Blue Fern",
        imageArray: ["blue-fern1.png", "blue-fern1.png"],
        heightToSquare: .18,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    yellowFernClump: {
        name: "Yellow Fern Clump",
        imageArray: ["yellow-fern-clump1.png", "yellow-fern-clump2.png"],
        heightToSquare: .5,
        widthToHeight: 2,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    greenFernClump: {
        name: "Green Fern Clump",
        imageArray: ["green-fern-clump1.png", "green-fern-clump2.png", "green-fern-clump3.png", "green-fern-clump4.png"],
        heightToSquare: .5,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    redFernClump: {
        name: "Red Fern Clump",
        imageArray: ["red-fern-clump1.png", "red-fern-clump2.png"],
        heightToSquare: .5,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    lightGreenFernClump: {
        name: "Light Green Fern Clump",
        imageArray: ["light-green-fern-clump1.png", "light-green-fern-clump2.png"],
        heightToSquare: .5,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    greenBrownFernClump: {
        name: "Green Brown Fern Clump",
        imageArray: ["green-brown-fern-clump1.png", "green-brown-fern-clump2.png"],
        heightToSquare: .5,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    darkGreenFernClump: {
        name: "Dark Green Fern Clump",
        imageArray: ["dark-green-fern-clump1.png", "dark-green-fern-clump2.png"],
        heightToSquare: .5,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "food", quantity: [1,2]}],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    youngBlueTreeFern: {
        name: "Young Blue Tree Fern",
        imageArray: ["young-blue-tree-fern1.png"],
        heightToSquare: .8,
        widthToHeight: 1,
        sizeRange: 10,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [1,2]}],
        health: 10,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    youngLightGreenTreeFern: {
        name: "Young Light Green Tree Fern",
        imageArray: ["young-light-green-tree-fern1.png", "young-light-green-tree-fern2.png"],
        heightToSquare: 1,
        widthToHeight: 1,
        sizeRange: 10,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [1,2]}],
        health: 10,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    scalyTreeFern: {
        name: "Scaly Tree Fern",
        imageArray: ["scaly-tree-fern1.png", "scaly-tree-fern2.png", "scaly-tree-fern3.png"],
        heightToSquare: 1,
        widthToHeight: 1,
        sizeRange: 10,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [1,2]}],
        health: 10,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    blueTreeFern: {
        name: "Blue Tree Fern",
        imageArray: ["blue-tree-fern1.png", "blue-tree-fern2.png", "blue-tree-fern3.png"],
        heightToSquare: 1.5,
        widthToHeight: 1,
        sizeRange: 10,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [1,2]}],
        health: 10,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    ////////////////////////////////// Reeds
     reed: {
         name: "Reed",
         imageArray: ["reed1.png", "reed2.png"],
         heightToSquare: 1,
         widthToHeight: .75,
         sizeRange: 20,
         resources: [],
         health: 5,
         targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        }
     },
    //////////////////////////////// Moss
    greenMoss: {
        name: "Green Moss",
        imageArray: ["green-moss1.png", "green-moss2.png"],
        heightToSquare: .3,
        widthToHeight: 2,
        sizeRange: 10,
        resources: [],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    yellowMoss: {
        name: "Yellow Moss",
        imageArray: ["yellow-moss1.png", "yellow-moss2.png", "yellow-moss3.png"],
        heightToSquare: .3,
        widthToHeight: 2,
        sizeRange: 10,
        resources: [],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    orangeMoss: {
        name: "Orange Moss",
        imageArray: ["orange-moss1.png", "orange-moss2.png"],
        heightToSquare: .3,
        widthToHeight: 2,
        sizeRange: 10,
        resources: [],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    //////////////////////////////// Misc
    yellowGlobe: {
        name: "Yellow Globe",
        imageArray: ["yellow-globe1.png", "yellow-globe2.png", "yellow-globe3.png", "yellow-globe4.png"],
        heightToSquare: .4,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    purpleGlobe: {
        name: "Purple Globe",
        imageArray: ["purple-globe1.png", "purple-globe2.png"],
        heightToSquare: .5,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [],
        health: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    //////////////////////////////// Shrubs
    yellowRoundleaf: {
        name: "Yellow Roundleaf",
        imageArray: ["yellow-roundleaf1.png", "yellow-roundleaf2.png", "yellow-roundleaf3.png", "yellow-roundleaf4.png"],
        heightToSquare: .7,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [1,2]}],
        health: 10,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    orangeRoundleaf: {
        name: "Orange Roundleaf",
        imageArray: ["orange-roundleaf1.png", "orange-roundleaf2.png", "orange-roundleaf3.png", "orange-roundleaf4.png"],
        heightToSquare: .7,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [1,2]}],
        health: 10,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
    greenRoundleaf: {
        name: "Green Roundleaf",
        imageArray: ["green-roundleaf1.png", "green-roundleaf2.png", "green-roundleaf3.png", "green-roundleaf4.png"],
        heightToSquare: .7,
        widthToHeight: 1.5,
        sizeRange: 10,
        resources: [{type: "wood", quantity: 10}, {type: "food", quantity: [1,2]}],
        health: 10,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        }
    },
}

let plants = {};

const {
    horsetail,
    goldenHorsetail,
    giantHorsetail,
    /////////////////////////////////// Trees
    polycarpus,
    marshealthine,
    darkMarshealthine,
    buttressRoot,
    goldenButtressRoot,
    /////////////////////////////////// Conifers
    pine,
    darkPine,
    silverFir,
    umbrellaPine,
    greyUmbrellaPine,
    //tree-fern
    /////////////////////////////////// Ferns
    barrelFern,
    tallFern,
    tallDarkFern,
    greenFern,
    yellowFern,
    redFern,
    blueFern,
    yellowFernClump,
    greenFernClump,
    redFernClump,
    lightGreenFernClump,
    greenBrownFernClump,
    darkGreenFernClump,
    youngBlueTreeFern,
    youngLightGreenTreeFern,
    scalyTreeFern,
    blueTreeFern,
    ////////////////////////////////// Reeds
    reed,
    //////////////////////////////// Moss
    greenMoss,
    yellowMoss,
    orangeMoss,
    //////////////////////////////// Misc
    yellowGlobe,
    purpleGlobe,
    //////////////////////////////// Shrubs
    yellowRoundleaf,
    orangeRoundleaf,
    greenRoundleaf
} = plants;

//scrub-tree