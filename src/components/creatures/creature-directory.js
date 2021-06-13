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
Massive - argentinosaurus

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
    targetSpecs: {
        top: 50,
        left: 50,
        height: 100,
        width: 100,
        color: "green"
    },
    escape: 9
};

const genericFish = {
    heightToSquare: .3,
    widthToHeight: 2,
    preyType: "regular-medium",
    isPredator: false,
    possTerrain: ["shallowWater", "deepWater", "marsh", "swampForest"],
    activityLevel: 5,
    isUnderWater: true,
    hp: 10,
    hunger: 100,
    speed: 1,
    range: 1,
    aggression: 0,
    attack: 1,
    defence: 1,
    targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
    escape: 1,
    waterOnly: true
}

const genericOffsets = {
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

const genericApatosaurus = {
    heightToSquare: 18,
    widthToHeight: 2,
    isMega: true,
    preyType: "regular-mega",
    isPredator: false,
    possTerrain: ["grassland", "savannah"],
    activityLevel: 5,
    hp: 200,
    hunger: 100,
    speed: 1,
    range: 1,
    aggression: 0,
    attack: 1,
    defence: 1,
    targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
    escape: 1,
    offSets: {
        n: {
            topOffset: -50,
            leftOffset: 200,
        },
        s: {
            topOffset: -180,
            leftOffset: 120,
        },
        e: {
            topOffset: -90,
            leftOffset: 150,
        },
        w: {
            topOffset: -150,
            leftOffset: 220,
        }
    }
}


export default {
    // All
      greenFish: {
        ...genericFish,
        name: "Green Fish",
        imgDir: "green-fish",
    },
    blueFish: {
        ...genericFish,
        name: "Blue Fish",
        imgDir: "blue-fish",
    },
    yellowFish: {
        ...genericFish,
        name: "Yellow Fish",
        imgDir: "yellow-fish",
    },
    silverBarb: {
        ...genericFish,
        name: "Silver Barb",
        imgDir: "silver-barb",
    },
    hynerpeton: {
      name: "Hynerpeton",
      imgDir: "hynerpeton",
      heightToSquare: 1,
      widthToHeight: 1.3,
      hasSwim: true,
      preyType: "dangerous-medium",
      isPredator: true,
      isHumanPredator: false,
      prey: ["regular-medium", "regular-small", "dangerous-small", "dangerous-medium", ],
      possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
      activityLevel: 5,
      hp: 10,
      hunger: 100,
      speed: 2,
      range: 1,
      aggression: 4,
      attack: 2,
      defence: 3,
      targetSpecs: {
          top: 50,
          left: 50,
height: 100,
width: 100,
          color: "green"
      },
      escape: 1,
       offSets: {
           n: {
               topOffset: -20,
               leftOffset: 50,
           },
           s: {
               topOffset: 0,
               leftOffset: 0,
           },
           e: {
               topOffset: -50,
               leftOffset: 30,
           },
           w: {
               topOffset: 0,
               leftOffset: 50,
           }
       }
    },
    hyneria: {
      name: "Hyneria",
      imgDir: "hyneria",
      heightToSquare: 6,
      widthToHeight: 1.8,
      preyType: "dangerous-XXlarge",
      isPredator: true,
      isHumanPredator: true,
      prey: ["regular-Xlarge", "dangerous-Xlarge", "regular-XXlarge", "regular-large", "human", "dangerous-large", "regular-medium", "dangerous-medium"],
      possTerrain: ["shallowWater", "marsh", "deepWater"],
      activityLevel: 5,
      hp: 60,
      hunger: 100,
      speed: 1.5,
      range: 1,
      aggression: 5,
      attack: 15,
      defence: 8,
      targetSpecs: {
          top: 50,
          left: 50,
          height: 100,
          width: 100,
          color: "green"
      },
      escape: 1,
      waterOnly: false,
      isUnderWater: true,
       offSets: {
           n: {
               topOffset: -20,
               leftOffset: 50,
           },
           s: {
               topOffset: 0,
               leftOffset: 0,
           },
           e: {
               topOffset: -50,
               leftOffset: 30,
           },
           w: {
               topOffset: 0,
               leftOffset: 50,
           }
       }
    },
    dunkleosteus: {
      name: "Dunkleosteus",
      imgDir: "dunkleost",
      heightToSquare: 7,
      widthToHeight: 1.2,
      preyType: "dangerous-XXlarge",
      isPredator: true,
      isHumanPredator: true,
      prey: ["regular-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "dangerous-XXlarge", "regular-large", "human", "dangerous-large"],
      possTerrain: ["deepWater"],
      activityLevel: 3,
      hp: 70,
      hunger: 100,
      speed: 1.5,
      range: 1,
      aggression: 5,
      attack: 20,
      defence: 6,
      targetSpecs: {
          top: 50,
          left: 50,
height: 100,
width: 100,
          color: "green"
      },
      escape: 1,
      waterOnly: false,
      isUnderWater: true,
       offSets: {
           n: {
               topOffset: -20,
               leftOffset: 50,
           },
           s: {
               topOffset: 0,
               leftOffset: 0,
           },
           e: {
               topOffset: -50,
               leftOffset: 30,
           },
           w: {
               topOffset: 0,
               leftOffset: 50,
           }
       }
  },
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
        defence: 1,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
    pulmonoscorpius: {
        name: "Pulmonoscorpius",
        imgDir: "less-scorp",
        heightToSquare: .5,
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
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
     // Carboniferous
     kingPulmonoscorpius: {
        name: "King Pulmonoscorpius",
        imgDir: "gre-scorp",
        heightToSquare: .8,
        widthToHeight: 2,
        preyType: "dangerous-medium",
        isPredator: true,
        prey: ["regular-medium",  "regular-small", "dangerous-small", "regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "desert", "savannah", "forest"],
        activityLevel: 5,
        hp: 6,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 5,
        attack: 4,
        defence: 4,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },

    // ultraPulmonoscorpius: {
    //     name: "Ultra Pulmonoscorpius",
    //     imgDir: "gre-scorp",
    //     heightToSquare: 5,
    //     widthToHeight: 1.5,
    //     preyType: "dangerous-mega",
    //     isPredator: true,
    //     prey: ["regular-large", "dangerous-large", "regular-medium", "dangerous-medium"],
    //     possTerrain: ["grassland", "desert", "savannah", "forest"],
    //     activityLevel: 5,
    //     hp: 50,
    //     hunger: 100,
    //     speed: .3,
    //     range: 2,
    //     aggression: 5,
    //     attack: 40,
    //     defence: 45,
    //     escape: 1
    // },

    // Carboniferous
    greaterArthropluera: {
        name: "Greater Athropluera",
        imgDir: "gre-arth",
        heightToSquare: 1.5,
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
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
    // Carboniferous
    lesserArthropluera: {
        name: "Lesser Athropluera",
        imgDir: "less-arth",
        heightToSquare: 1,
        widthToHeight: 1.5,
        preyType: "regular-medium",
        isPredator: false,
        possTerrain: ["grassland", "savannah", "forest", "marsh", "swampForest"],
        activityLevel: 4,
        hp: 15,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 0,
        attack: 1,
        defence: 4,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
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
        prey: ["regular-medium", "dangerous-medium", "regular-small", "dangerous-small","regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "savannah", "forest"],
        activityLevel: 6,
        hp: 6,
        hunger: 100,
        speed: .7,
        range: 1,
        aggression: 5,
        attack: 5,
        defence: 1,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
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
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
    // Carboniferous
    orangeMeganuera: {
        name: "Orange Meganuera",
        imgDir: "orange-meg",
        heightToSquare: .7,
        widthToHeight: 1.2,
        isFlying: true,
        preyType: "regular-small",
        isPredator: true,
        prey: ["regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "savannah", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
        activityLevel: 10,
        hp: 5,
        hunger: 100,
        speed: .3,
        range: 1,
        aggression: 1,
        attack: 2,
        defence: 1,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 8
    },
    // Carboniferous
    blueMeganuera: {
        name: "Blue Meganuera",
        imgDir: "blue-meg",
        heightToSquare: 1,
        widthToHeight: 1.2,
        isFlying: true,
        preyType: "regular-medium",
        isPredator: true,
        prey: ["regular-small", "regular-tiny", "dangerous-tiny"],
        possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
        activityLevel: 10,
        hp: 10,
        hunger: 100,
        speed: .5,
        range: 1,
        aggression: 0,
        attack: 4,
        defence: 1,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
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
    blueDarter: {
      ...genericDarter,
      name: "Blue Darter",
      imgDir: "blue-meg",
    },
    purpleDarter: {
        ...genericDarter,
        name: "Purple Darter",
        imgDir: "purple-darter",
    },
    
    // Carboniferous
    greaterProterogyrinus: {
        name: "Greater Proterogyrinus",
        imgDir: "gre-amph",
        heightToSquare: 2,
        widthToHeight: 1.3,
        hasSwim: true,
        preyType: "dangerous-large",
        isPredator: true,
        isHumanPredator: true,
        prey: ["regular-large", "human", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
        possTerrain: ["grassland", "forest", "marsh", "swampForest", "shallowWater", "deepWater"],
        activityLevel: 4,
        hp: 22,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 4,
        attack: 6,
        defence: 4,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
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
        isHumanPredator: true,
        prey: ["human", "regular-large", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
        possTerrain: ["marsh", "swampForest", "shallowWater", "deepWater"],
        activityLevel: 3,
        hp: 15,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 6,
        attack: 5,
        defence: 3,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1,
        waterOnly: true
    },
    // Permian
    orangeDimetrodon: {
        name: "Orange Dimetrodon",
        imgDir: "orange-dim",
        heightToSquare: 1.5,
        widthToHeight: 1.2,
        preyType: "dangerous-large",
        isPredator: true,
        prey: [ "regular-large", "human", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
        possTerrain: ["grassland", "desert", "savannah"],
        activityLevel: 5,
        hp: 20,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 5,
        attack: 7,
        defence: 5,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
    
    greyScutosaurus: {
        name: "Grey Scutosaurus",
        imgDir: "grey-scuta",
        heightToSquare: 1.6,
        widthToHeight: 1.1,
        preyType: "regular-Xlarge",
        isPredator: false,
        possTerrain: ["desert", "savannah"],
        activityLevel: 5,
        hp: 30,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 4,
        defence: 8,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 2,
        offSets: {
            n: {
                topOffset: -50,
                leftOffset: -50,
            },
            s: {
                topOffset: -50,
                leftOffset: -50,
            },
            e: {
                topOffset: -50,
                leftOffset: -50,
            },
            w: {
                topOffset: -50,
                leftOffset: -50,
            }
        }
    },
    brownScutosaurus: {
        name: "Brown Scutosaurus",
        imgDir: "brown-scuta",
        heightToSquare: 1.8,
        widthToHeight: 1.1,
        preyType: "regular-Xlarge",
        isPredator: false,
        possTerrain: ["desert", "savannah"],
        activityLevel: 5,
        hp: 35,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 5,
        defence: 10,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 2,
        offSets: {
            n: {
                topOffset: -50,
                leftOffset: -50,
            },
            s: {
                topOffset: -50,
                leftOffset: -50,
            },
            e: {
                topOffset: -50,
                leftOffset: -50,
            },
            w: {
                topOffset: -50,
                leftOffset: -50,
            }
        }
    },

    greaterEdaphasaurus: {
      name: "Greater Edaphasaurus",
      imgDir: "yellow-green-elaph",
      heightToSquare: 1.8,
      widthToHeight: 1.5,
      preyType: "regular-large",
      isPredator: false,
      possTerrain: ["grassland", "savannah"],
      activityLevel: 4,
      hp: 20,
      hunger: 100,
      speed: 3,
      range: 1,
      aggression: 1,
      attack: 5,
      defence: 5,
      targetSpecs: {
          top: 50,
          left: 50,
height: 100,
width: 100,
          color: "green"
      },
      escape: 2
  },

    orangeEdaphasaurus: {
        name: "Orange Edaphasaurus",
        imgDir: "orange-elaph",
        heightToSquare: 1.5,
        widthToHeight: 1.5,
        preyType: "regular-large",
        isPredator: false,
        possTerrain: ["desert", "savannah"],
        activityLevel: 4,
        hp: 15,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 0,
        attack: 4,
        defence: 4,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
    greenEdaphasaurus: {
        name: "Green Edaphasaurus",
        imgDir: "green-elaph",
        heightToSquare: 1.2,
        widthToHeight: 1.5,
        preyType: "regular-medium",
        isPredator: false,
        possTerrain: ["grassland", "forest"],
        activityLevel: 4,
        hp: 10,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 0,
        attack: 3,
        defence: 3,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
    blueDiictidon: {
        name: "Blue Diictodon",
        imgDir: "blue-dii",
        heightToSquare: .6,
        widthToHeight: 1.2,
        preyType: "regular-small",
        isPredator: false,
        possTerrain: ["grassland", "forest"],
        activityLevel: 10,
        hp: 4,
        hunger: 100,
        speed: .3,
        range: 1,
        aggression: 0,
        attack: 1,
        defence: 90,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 5
    },
    brownDiictidon: {
        name: "Brown Diictodon",
        imgDir: "brown-dii",
        heightToSquare: .5,
        widthToHeight: 1.2,
        preyType: "regular-small",
        isPredator: false,
        possTerrain: ["savannah", "desert"],
        activityLevel: 10,
        hp: 4,
        hunger: 100,
        speed: .3,
        range: 1,
        aggression: 0,
        attack: 1,
        defence: 60,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 5
    },
    lesserGorgonopsid: {
        name: "Lesser Gorgonopsid",
        imgDir: "less-gorg",
        heightToSquare: 2,
        widthToHeight: 1.8,
        preyType: "dangerous-large",
        isPredator: true,
        isHumanPredator: true,
        prey: ["regular-large", "human", "regular-Xlarge", "regular-medium", "dangerous-medium", "regular-small", "dangerous-small"],
        possTerrain: ["grassland", "forest", "savannah"],
        activityLevel: 7,
        hp: 25,
        hunger: 100,
        speed: .4,
        range: 1,
        aggression: 7,
        attack: 10,
        defence: 2,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
    greaterGorgonopsid: {
        name: "Greater Gorgonopsid",
        imgDir: "gre-gorg",
        heightToSquare: 2.5,
        widthToHeight: 1.8,
        preyType: "dangerous-Xlarge",
        isPredator: true,
        isHumanPredator: true,
        prey: ["regular-Xlarge", "regular-large", "human", "dangerous-large", "regular-medium", "dangerous-medium", "regular-small", "dangerous-small"],
        possTerrain: ["desert", "grassland", "forest", "savannah"],
        activityLevel: 5,
        hp: 30,
        hunger: 100,
        speed: .5,
        range: 1,
        aggression: 6,
        attack: 12,
        defence: 3,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },

    redLystosaurus: {
        name: "Red Lystosaurus",
        imgDir: "red-lyst",
        heightToSquare: .8,
        widthToHeight: 1.2,
        preyType: "regular-medium",
        isPredator: false,
        possTerrain: ["savannah", "desert"],
        activityLevel: 6,
        hp: 10,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 0,
        attack: 3,
        defence: 3,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
    purpleLystosaurus: {
        name: "Purple Lystosaurus",
        imgDir: "purple-lyst",
        heightToSquare: .9,
        widthToHeight: 1.2,
        preyType: "regular-large",
        isPredator: false,
        possTerrain: ["desert", "savannah"],
        activityLevel: 4,
        hp: 15,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 0,
        attack: 4,
        defence: 4,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1
    },
    greenPostosuchus: {
        name: "Green Postosuchus",
        imgDir: "green-post",
        heightToSquare: 3,
        widthToHeight: 1.8,
        preyType: "dangerous-Xlarge",
        isPredator: true,
        isHumanPredator: true,
        prey: ["regular-large", "regular-Xlarge", "human", "dangerous-large", "regular-medium", "regular-small", "dangerous-medium", "dangerous-small"],
        possTerrain: ["desert", "grassland", "forest", "savannah"],
        activityLevel: 4,
        hp: 30,
        hunger: 100,
        speed: 1,
        range: 1,
        aggression: 5,
        attack: 10,
        defence: 5,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1,
        offSets: {
            ...genericOffsets,
            w: {
                topOffset: -40,
                leftOffset: 50,
            },
        }
    },
    brownPostosuchus: {
        name: "Brown Postosuchus",
        imgDir: "brown-post",
        heightToSquare: 3.5,
        widthToHeight: 1.8,
        preyType: "dangerous-XXlarge",
        isPredator: true,
        isHumanPredator: true,
        prey: ["regular-Xlarge", "regular-large", "regular-XXlarge", "human", "dangerous-Xlarge", "dangerous-large", "regular-medium", "dangerous-medium"],
        possTerrain: ["desert", "grassland", "forest", "savannah"],
        activityLevel: 3,
        hp: 40,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 5,
        attack: 15,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1,
        offSets: {
            ...genericOffsets,
            w: {
                topOffset: -40,
                leftOffset: 50,
            },
        }
    },
    yellowHerreresaurus: {
        name: "Yellow Herreresaurus",
        imgDir: "yellow-herr",
        heightToSquare: 2.1,
        widthToHeight: 1.5,
        preyType: "dangerous-large",
        isPredator: true,
        prey: ["regular-large", "regular-medium", "dangerous-medium", "regular-small", "dangerous-small", "human", ],
        possTerrain: ["desert", "savannah"],
        activityLevel: 7,
        hp: 20,
        hunger: 100,
        speed: .4,
        range: 1,
        aggression: 7,
        attack: 10,
        defence: 2,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 1
    },
    greenHerreresaurus: {
        name: "green Herreresaurus",
        imgDir: "green-herr",
        heightToSquare: 1.8,
        widthToHeight: 1.5,
        preyType: "dangerous-large",
        isPredator: true,
        prey: ["regular-large", "regular-medium", "regular-small", "dangerous-small", "dangerous-medium"],
        possTerrain: ["grassland", "forest", "savannah"],
        activityLevel: 7,
        hp: 15,
        hunger: 100,
        speed: .4,
        range: 1,
        aggression: 7,
        attack: 10,
        defence: 2,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1
    },
    redDesmatosuchus: {
        name: "Red Desmatosuchus",
        imgDir: "less-desma",
        heightToSquare: 2,
        widthToHeight: 1.4,
        preyType: "regular-large",
        isPredator: false,
        possTerrain: ["desert", "savannah"],
        activityLevel: 5,
        hp: 25,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 4,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 2
    },
    greenDesmatosuchus: {
        name: "Green Desmatosuchus",
        imgDir: "desma",
        heightToSquare: 2.5,
        widthToHeight: 1.4,
        preyType: "regular-Xlarge",
        isPredator: false,
        possTerrain: ["forset", "savannah", "grassland"],
        activityLevel: 5,
        hp: 30,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 5,
        defence: 8,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 2
    },
    blueDesmatosuchus: {
        name: "Blue Desmatosuchus",
        imgDir: "blue-desma",
        heightToSquare: 3,
        widthToHeight: 1.4,
        preyType: "regular-XXlarge",
        isPredator: false,
        hasSwim: true,
        possTerrain: ["swamp-forest", "marsh", "grassland"],
        activityLevel: 5,
        hp: 40,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 5,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 2
    },
    
    // diplodocus: {
    //     name: "Diplodocus",
    //     imgDir: "diplo",
    //     heightToSquare: 10,
    //     widthToHeight: 2,
    //     isMega: true,
    //     preyType: "regular-mega",
    //     isPredator: false,
    //     possTerrain: ["grassland", "savannah"],
    //     activityLevel: 5,
    //     hp: 200,
    //     hunger: 100,
    //     speed: 1,
    //     range: 1,
    //     aggression: 0,
    //     attack: 1,
    //     defence: 1,
    //     escape: 1
    // },
    
    yellowOrnitholestes: {
        name: "Yellow-Ornitholestes",
        imgDir: "yellow-ornitho",
        heightToSquare: .8,
        widthToHeight: 1,
        preyType: "dangerous-medium",
        isPredator: true,
        prey: ["regular-medium", "regular-small", "dangerous-small","regular-tiny", "dangerous-tiny"],
        possTerrain: ["savannah", "grassland"],
        activityLevel: 1.2,
        hp: 6,
        hunger: 100,
        speed: .7,
        range: 1,
        aggression: 5,
        attack: 3,
        defence: 1,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1
    },

    blueOrnitholestes: {
        name: "Blue Ornitholestes",
        imgDir: "blue-ornitho",
        heightToSquare: 1.5,
        widthToHeight: 1,
        preyType: "dangerous-medium",
        isPredator: true,
        prey: ["regular-medium", "regular-small", "dangerous-medium", "dangerous-small","regular-tiny", "dangerous-tiny"],
        possTerrain: ["forest", "marsh", "swampForest"],
        activityLevel: 8,
        hp: 8,
        hunger: 100,
        speed: .7,
        range: 1,
        aggression: 5,
        attack: 4,
        defence: 1,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1
    },
    velociraptor: {
      name: "Velociraptor",
      imgDir: "veloc",
      heightToSquare: 1.8,
      widthToHeight: 1,
      preyType: "dangerous-medium",
      isPredator: true,
      prey: ["regular-medium", "dangerous-medium", "regular-small", "dangerous-small", "regular-tiny", "dangerous-tiny"],
      possTerrain: ["savannah", "desert", "grassland"],
      activityLevel: 8,
      hp: 10,
      hunger: 100,
      speed: .7,
      range: 1,
      aggression: 5,
      attack: 5,
      defence: 1,
      targetSpecs: {
          top: 50,
          left: 50,
          height: 100,
          width: 100,
          color: "green"
      },
      escape: 1
  },

  deinonychus: {
      name: "Deinonychus",
      imgDir: "deino-green",
      heightToSquare: 2.5,
      widthToHeight: 1,
      preyType: "dangerous-Xlarge",
      isPredator: true,
      hasSwim: true,
      prey: ["regular-large", "regular-Xlarge", "dangerous-large", "human", "regular-medium", "dangerous-medium","regular-small", "dangerous-small",],
      possTerrain: ["forest", "marsh", "swampForest"],
      activityLevel: 8,
      hp: 20,
      hunger: 100,
      speed: .7,
      range: 1,
      aggression: 5,
      attack: 10,
      defence: 1,
      targetSpecs: {
          top: 50,
          left: 50,
          height: 100,
          width: 100,
          color: "green"
      },
      escape: 1
  },
  utahRaptor: {
      name: "Utah Raptor",
      imgDir: "utah",
      heightToSquare: 3.8,
      widthToHeight: 1.8,
      preyType: "dangerous-XXlarge",
      isPredator: true,
      isHumanPredator: true,
      hasSwim: true,
      prey: ["regular-Xlarge", "human", "regular-large", "dangerous-large", "dangerous-Xlarge", "regular-medium", "dangerous-medium"],
      possTerrain: ["desert", "grassland", "forest", "savannah", "shallowWater"],
      activityLevel: 3,
      hp: 42,
      hunger: 100,
      speed: 1.5,
      range: 1,
      aggression: 5,
      attack: 22,
      defence: 6,
      targetSpecs: {
          top: 50,
          left: 50,
          height: 100,
          width: 100,
          color: "green"
      },
      escape: 1,                    
      offSets: {
          n: {
              topOffset: -20,
              leftOffset: 50,
          },
          s: {
              topOffset: 0,
              leftOffset: 0,
          },
          e: {
              topOffset: -50,
              leftOffset: 30,
          },
          w: {
              topOffset: 0,
              leftOffset: 50,
          }
      }
  },
    ceratosaurus: {
        name: "Ceratosaurus",
        imgDir: "ceratosaurus",
        heightToSquare: 3.8,
        widthToHeight: 1.8,
        preyType: "dangerous-XXlarge",
        isPredator: true,
        isHumanPredator: true,
        prey: ["regular-Xlarge", "regular-large", "human", "dangerous-large", "dangerous-Xlarge", "regular-medium", "dangerous-medium"],
        possTerrain: ["desert", "grassland", "forest", "savannah"],
        activityLevel: 3,
        hp: 40,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 5,
        attack: 20,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1,
        offSets: {
            n: {
                topOffset: -20,
                leftOffset: 50,
            },
            s: {
                topOffset: 0,
                leftOffset: 0,
            },
            e: {
                topOffset: -50,
                leftOffset: 30,
            },
            w: {
                topOffset: 0,
                leftOffset: 50,
            }
        }
    },
    baryonyx: {
        name: "Baryonyx",
        imgDir: "baryonyx",
        heightToSquare: 5,
        widthToHeight: 1.8,
        preyType: "dangerous-XXXlarge",
        isPredator: true,
        isHumanPredator: true,
        prey: ["regular-Xlarge", "regular-large", "regular-medium", "dangerous-medium", "human", "dangerous-large", "dangerous-Xlarge"],
        possTerrain: ["grassland", "forest", "marsh"],
        activityLevel: 4,
        hp: 55,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 5,
        attack: 25,
        //attack: 5,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1,
        offSets: {
            n: {
                topOffset: -50,
                leftOffset: 100,
            },
            s: {
                topOffset: -60,
                leftOffset: 0,
            },
            e: {
                topOffset: -50,
                leftOffset: 30,
            },
            w: {
                topOffset: -50,
                leftOffset: 100,
            }
        }
    },
    allosaurus: {
        name: "Allosaurus",
        imgDir: "allosaurus",
        heightToSquare: 5.5,
        widthToHeight: 1.8,
        preyType: "dangerous-XXXlarge",
        isPredator: true,
        isHumanPredator: true,
        prey: ["regular-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
        possTerrain: ["desert", "grassland", "forest", "savannah"],
        activityLevel: 5,
        hp: 70,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 5,
        attack: 30,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1,
        offSets: {
            n: {
                topOffset: -50,
                leftOffset: 100,
            },
            s: {
                topOffset: -30,
                leftOffset: 0,
            },
            e: {
                topOffset: -50,
                leftOffset: 30,
            },
            w: {
                topOffset: -50,
                leftOffset: 90,
            }
        }
    },
    sarcophaganax: {
        name: "Sarcophaganax",
        imgDir: "sarco",
        heightToSquare: 6.8,
        widthToHeight: 1.8,
        preyType: "dangerous-mega",
        isPredator: true,
        isHumanPredator: true,
        prey: ["regular-XXXlarge", "regular-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
        possTerrain: ["desert", "grassland", "forest", "savannah"],
        activityLevel: 4,
        hp: 85,
        hunger: 100,
        speed: 3,
        range: 1,
        aggression: 5,
        // attack: 35,
        attack: 5,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1,
        offSets: {
            n: {
                topOffset: -50,
                leftOffset: 100,
            },
            s: {
                topOffset: -60,
                leftOffset: 0,
            },
            e: {
                topOffset: -50,
                leftOffset: 30,
            },
            w: {
                topOffset: -50,
                leftOffset: 100,
            }
        }
    },

    tarbosaurus: {
        name: "Tarbosaurus",
        imgDir: "trex-green",
        heightToSquare: 7,
        widthToHeight: 1.8,
        preyType: "dangerous-mega",
        isPredator: true,
        isHumanPredator: true,
        hasSwim: true,
        prey: ["regular-XXXlarge", "regular-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
        possTerrain: ["desert", "grassland", "forest", "savannah"],
        activityLevel: 4,
        hp: 90,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 6,
        // attack: 35,
        attack: 5,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1,
        offSets: {
            n: {
                topOffset: -50,
                leftOffset: 100,
            },
            s: {
                topOffset: -60,
                leftOffset: 0,
            },
            e: {
                topOffset: -50,
                leftOffset: 30,
            },
            w: {
                topOffset: -50,
                leftOffset: 100,
            }
        }
    },


    tyrannosaurus: {
      name: "Tyrannosaurus",
      imgDir: "trex-black",
      heightToSquare: 7.1,
      widthToHeight: 1.8,
      preyType: "dangerous-mega",
      isPredator: true,
      isHumanPredator: true,
      prey: ["regular-XXXlarge", "regular-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
      possTerrain: ["desert", "grassland", "forest", "savannah"],
      activityLevel: 4,
      hp: 92,
      hunger: 100,
      speed: 1,
      range: 1,
      aggression: 7,
      // attack: 35,
      attack: 5,
      defence: 6,
      targetSpecs: {
          top: 50,
          left: 50,
          height: 100,
          width: 100,
          color: "green"
      },
      escape: 1,
      offSets: {
          n: {
              topOffset: -50,
              leftOffset: 100,
          },
          s: {
              topOffset: -60,
              leftOffset: 0,
          },
          e: {
              topOffset: -50,
              leftOffset: 30,
          },
          w: {
              topOffset: -50,
              leftOffset: 100,
          }
      }
    },

    spinosaurus: {
        name: "Spinosaurus",
        imgDir: "spino-green",
        heightToSquare: 12,
        widthToHeight: 1.8,
        preyType: "dangerous-massive",
        isPredator: true,
        isHumanPredator: true,
        hasSwim: true,
        prey: ["regular-XXXlarge", "regular-mega", "regular-massive", "dangerous-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
        possTerrain: ["grassland", "swampForest", "marsh", "shallowWater", "deepWater"],
        activityLevel: 4,
        hp: 120,
        hunger: 100,
        speed: 1.5,
        range: 1,
        aggression: 5,
        // attack: 35,
        attack: 5,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 1,
        offSets: {
            n: {
                topOffset: -50,
                leftOffset: 100,
            },
            s: {
                topOffset: -60,
                leftOffset: 0,
            },
            e: {
                topOffset: -50,
                leftOffset: 30,
            },
            w: {
                topOffset: -50,
                leftOffset: 100,
            }
        }
    },
    blueMosasaurus: {
      name: "Blue Mosasaurus",
      imgDir: "moso-blue",
      heightToSquare: 7,
      widthToHeight: 1.2,
      preyType: "dangerous-XXXlarge",
      isPredator: true,
      isHumanPredator: true,
      prey: ["regular-XXXlarge", "regular-mega", "regular-massive", "dangerous-mega", "dangerous-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
      possTerrain: ["deepWater"],
      activityLevel: 3,
      hp: 65,
      hunger: 100,
      speed: 1.5,
      range: 1,
      aggression: 5,
      attack: 20,
      defence: 6,
      targetSpecs: {
          top: 50,
          left: 50,
height: 100,
width: 100,
          color: "green"
      },
      escape: 1,
      waterOnly: false,
      isUnderWater: true,
       offSets: {
           n: {
               topOffset: -20,
               leftOffset: 50,
           },
           s: {
               topOffset: 0,
               leftOffset: 0,
           },
           e: {
               topOffset: -50,
               leftOffset: 30,
           },
           w: {
               topOffset: 0,
               leftOffset: 50,
           }
       }
  },
  greenMosasaurus: {
    name: "Green Mosasaurus",
    imgDir: "moso-green",
    heightToSquare: 12,
    widthToHeight: 1.2,
    preyType: "dangerous-massive",
    isPredator: true,
    isHumanPredator: true,
    prey: ["regular-XXXlarge", "regular-XXlarge", "dangerous-XXlarge", "regular-Xlarge", "dangerous-Xlarge", "regular-large", "human", "dangerous-large"],
    possTerrain: ["deepWater"],
    activityLevel: 3,
    hp: 120,
    hunger: 100,
    speed: 1.5,
    range: 1,
    aggression: 5,
    attack: 20,
    defence: 6,
    targetSpecs: {
        top: 50,
        left: 50,
height: 100,
width: 100,
        color: "green"
    },
    escape: 1,
    waterOnly: false,
    isUnderWater: true,
     offSets: {
         n: {
             topOffset: -20,
             leftOffset: 50,
         },
         s: {
             topOffset: 0,
             leftOffset: 0,
         },
         e: {
             topOffset: -50,
             leftOffset: 30,
         },
         w: {
             topOffset: 0,
             leftOffset: 50,
         }
     }
},
    
    yellowKentrosaurus: {
        name: "Yellow Kentrosaurus",
        imgDir: "yellow-kentro",
        heightToSquare: 3.5,
        widthToHeight: 1.4,
        preyType: "regular-large",
        isPredator: false,
        possTerrain: ["grassland", "savannah"],
        activityLevel: 5,
        hp: 30,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 4,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 2,
        offSets: {
            ...genericOffsets,
            s: {
                topOffset: -100,
                leftOffset: -100
            }
        }
    },
    greenKentrosaurus: {
        name: "Green Kentrosaurus",
        imgDir: "green-kentro",
        heightToSquare: 3,
        widthToHeight: 1.4,
        preyType: "regular-Xlarge",
        isPredator: false,
        possTerrain: ["marsh", "grassland", "forest"],
        activityLevel: 5,
        hasSwim: true,
        hp: 25,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 4,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 2,
        offSets: {
            ...genericOffsets,
            s: {
                topOffset: -100,
                leftOffset: -100
            },
            e: {
                topOffset: 0,
                leftOffset: -50
            },
            w: {
                topOffset: -50,
                leftOffset: 50
            }
        }
    },
    blueStegosaurus: {
        name: "Blue Stegosaurus",
        imgDir: "blue-stego",
        heightToSquare: 4,
        widthToHeight: 1.4,
        preyType: "regular-XXlarge",
        isPredator: false,
        hasSwim: true,
        possTerrain: ["swamp-forest", "marsh", "grassland"],
        activityLevel: 5,
        hp: 40,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 3,
        defence: 15,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 2,
        offSets: {
            n: {
                topOffset: -100,
                leftOffset: 30,
            },
            s: {
                topOffset: -120,
                leftOffset: -120,
            },
            e: {
                topOffset: -100,
                leftOffset: -120,
            },
            w: {
                topOffset: -120,
                leftOffset: 20,
            }
        }
    },
    redStegosaurus: {
        name: "Red Stegosaurus",
        imgDir: "red-stego",
        heightToSquare: 4.8,
        widthToHeight: 1.4,
        preyType: "regular-XXXlarge",
        isPredator: false,
        possTerrain: ["savannah", "grassland"],
        activityLevel: 5,
        hp: 60,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 3,
        defence: 20,
        targetSpecs: {
            top: 50,
            left: 50,
height: 100,
width: 100,
            color: "green"
        },
        escape: 2,
        topOffset: -130,
        leftOffset: 100,
        offSets: {
            n: {
                topOffset: -130,
                leftOffset: 30,
            },
            s: {
                topOffset: -150,
                leftOffset: -120,
            },
            e: {
                topOffset: -100,
                leftOffset: -120,
            },
            w: {
                topOffset: -150,
                leftOffset: 50,
            }
        }
    },
    brownTriceratops: {
      name: "Brown Triceratops",
      imgDir: "tri-brown",
      heightToSquare: 4.8,
      widthToHeight: 1.4,
      preyType: "regular-XXXlarge",
      isPredator: false,
      hasSwim: true,
      possTerrain: ["savannah", "grassland", "swamp-forest", "marsh"],
      activityLevel: 5,
      hp: 58,
      hunger: 100,
      speed: 2,
      range: 1,
      aggression: 1,
      attack: 3,
      defence: 20,
      targetSpecs: {
          top: 50,
          left: 50,
          height: 100,
          width: 100,
          color: "green"
      },
      escape: 2,
      topOffset: -130,
      leftOffset: 100,
      offSets: {
          n: {
              topOffset: -130,
              leftOffset: 30,
          },
          s: {
              topOffset: -150,
              leftOffset: -120,
          },
          e: {
              topOffset: -100,
              leftOffset: -120,
          },
          w: {
              topOffset: -150,
              leftOffset: 50,
          }
      }
  },

  greyTriceratops: {
    name: "Grey Triceratops",
    imgDir: "tri-grey",
    heightToSquare: 5,
    widthToHeight: 1.4,
    preyType: "regular-XXXlarge",
    isPredator: false,
    hasSwim: true,
    possTerrain: ["savannah", "grassland", "swamp-forest", "marsh"],
    activityLevel: 5,
    hp: 60,
    hunger: 100,
    speed: 2,
    range: 1,
    aggression: 1,
    attack: 3,
    defence: 20,
    targetSpecs: {
        top: 50,
        left: 50,
height: 100,
width: 100,
        color: "green"
    },
    escape: 2,
    topOffset: -130,
    leftOffset: 100,
    offSets: {
        n: {
            topOffset: -130,
            leftOffset: 30,
        },
        s: {
            topOffset: -150,
            leftOffset: -120,
        },
        e: {
            topOffset: -100,
            leftOffset: -120,
        },
        w: {
            topOffset: -150,
            leftOffset: 50,
        }
    }
},

greenStyracosaurus: {
  name: "Green Styracosaurus",
  imgDir: "styrack-green",
  heightToSquare: 4,
  widthToHeight: 1.4,
  preyType: "regular-XXlarge",
  isPredator: false,
  hasSwim: true,
  possTerrain: ["savannah", "grassland", "swamp-forest", "marsh"],
  activityLevel: 5,
  hp: 55,
  hunger: 100,
  speed: 2,
  range: 1,
  aggression: 1,
  attack: 3,
  defence: 20,
  targetSpecs: {
      top: 50,
      left: 50,
height: 100,
width: 100,
      color: "green"
  },
  escape: 2,
  topOffset: -130,
  leftOffset: 100,
  offSets: {
      n: {
          topOffset: -130,
          leftOffset: 30,
      },
      s: {
          topOffset: -150,
          leftOffset: -120,
      },
      e: {
          topOffset: -100,
          leftOffset: -120,
      },
      w: {
          topOffset: -150,
          leftOffset: 50,
      }
  }
},

blueStyracosaurus: {
  name: "Blue Styracosaurus",
  imgDir: "styrack-blue",
  heightToSquare: 3.8,
  widthToHeight: 1.4,
  preyType: "regular-XXlarge",
  isPredator: false,
  hasSwim: true,
  possTerrain: ["forest", "grassland", "swamp-forest", "marsh"],
  activityLevel: 5,
  hp: 52,
  hunger: 100,
  speed: 2,
  range: 1,
  aggression: 1,
  attack: 3,
  defence: 20,
  targetSpecs: {
      top: 50,
      left: 50,
height: 100,
width: 100,
      color: "green"
  },
  escape: 2,
  topOffset: -130,
  leftOffset: 100,
  offSets: {
      n: {
          topOffset: -130,
          leftOffset: 30,
      },
      s: {
          topOffset: -150,
          leftOffset: -120,
      },
      e: {
          topOffset: -100,
          leftOffset: -120,
      },
      w: {
          topOffset: -150,
          leftOffset: 50,
      }
  }
},


    blueParasaurolophus: {
      name: "Blue Parasaurolophus",
      imgDir: "para-blue",
      heightToSquare: 4.8,
      widthToHeight: 1.4,
      preyType: "regular-XXXlarge",
      isPredator: false,
      hasSwim: true,
      possTerrain: ["swamp-forest", "marsh", "forest", "grassland"],
      activityLevel: 5,
      hp: 50,
      hunger: 100,
      speed: 2.5,
      range: 1,
      aggression: 1,
      attack: 10,
      defence: 13,
      targetSpecs: {
          top: 50,
          left: 50,
height: 100,
width: 100,
          color: "green"
      },
      escape: 2,
      topOffset: -130,
      leftOffset: 100,
      offSets: {
          n: {
              topOffset: -130,
              leftOffset: 30,
          },
          s: {
              topOffset: -150,
              leftOffset: -120,
          },
          e: {
              topOffset: -100,
              leftOffset: -120,
          },
          w: {
              topOffset: -150,
              leftOffset: 50,
          }
      }
  },
  greyParasaurolophus: {
    name: "Grey Parasaurolophus",
    imgDir: "para-grey",
    heightToSquare: 5,
    widthToHeight: 1.4,
    preyType: "regular-XXXlarge",
    isPredator: false,
    possTerrain: ["swamp-forest", "marsh", "grassland"],
    activityLevel: 5,
    hp: 55,
    hunger: 100,
    speed: 2,
    range: 1,
    aggression: 1,
    attack: 12,
    defence: 15,
    targetSpecs: {
        top: 50,
        left: 50,
height: 100,
width: 100,
        color: "green"
    },
    escape: 2,
    topOffset: -130,
    leftOffset: 100,
    offSets: {
        n: {
            topOffset: -130,
            leftOffset: 30,
        },
        s: {
            topOffset: -150,
            leftOffset: -120,
        },
        e: {
            topOffset: -100,
            leftOffset: -120,
        },
        w: {
            topOffset: -150,
            leftOffset: 50,
        }
    }
},
orangeOrangosaurus: {
  name: "Orange Oraungosaurus",
  imgDir: "oraungosaurus",
  heightToSquare: 4.8,
  widthToHeight: 1.4,
  preyType: "regular-XXXlarge",
  isPredator: false,
  possTerrain: ["savannah", "desert"],
  activityLevel: 5,
  hp: 60,
  hunger: 100,
  speed: 2,
  range: 1,
  aggression: 1,
  attack: 12,
  defence: 15,
  targetSpecs: {
      top: 50,
      left: 50,
height: 100,
width: 100,
      color: "green"
  },
  escape: 2,
  topOffset: -130,
  leftOffset: 100,
  offSets: {
      n: {
          topOffset: -130,
          leftOffset: 30,
      },
      s: {
          topOffset: -150,
          leftOffset: -120,
      },
      e: {
          topOffset: -100,
          leftOffset: -120,
      },
      w: {
          topOffset: -150,
          leftOffset: 50,
      }
  }
},
yellowOraungosaurus: {
  name: "Yellow Oraungosaurus",
  imgDir: "oraungosaurus-yellow",
  heightToSquare: 4.5,
  widthToHeight: 1.4,
  preyType: "regular-XXXlarge",
  isPredator: false,
  possTerrain: ["savannah", "grassland"],
  activityLevel: 5,
  hp: 55,
  hunger: 100,
  speed: 2,
  range: 1,
  aggression: 1,
  attack: 10,
  defence: 14,
  targetSpecs: {
      top: 50,
      left: 50,
height: 100,
width: 100,
      color: "green"
  },
  escape: 2,
  topOffset: -130,
  leftOffset: 100,
  offSets: {
      n: {
          topOffset: -130,
          leftOffset: 30,
      },
      s: {
          topOffset: -150,
          leftOffset: -120,
      },
      e: {
          topOffset: -100,
          leftOffset: -120,
      },
      w: {
          topOffset: -150,
          leftOffset: 50,
      }
  }
},
    apatosaurus: {
        ...genericApatosaurus,
        name: "Apatosaurus",
        imgDir: "apato",
    },
    apatosaurusHouse1: {
        ...genericApatosaurus,
        offSets: {
            ...genericApatosaurus.offSets,
            n: {
                topOffset: -70,
                leftOffset: 200,
            },
            e: {
                topOffset: -70,
                leftOffset: 130,
            },
        },
        name: "Apatosaurus Nomad 1",
        imgDir: "apato-house-1",
        
    },
    apatosaurusHouse2: {
        ...genericApatosaurus,
        offSets: {
            ...genericApatosaurus.offSets,
            n: {
                topOffset: -90,
                leftOffset: 200,
            },
            e: {
                topOffset: -90,
                leftOffset: 130,
            },
        },
        name: "Apatosaurus Nomad 2",
        imgDir: "apato-house-2",
        
    },
    apatosaurusHouse3: {
        ...genericApatosaurus,
        offSets: {
            ...genericApatosaurus.offSets,
            n: {
                topOffset: -100,
                leftOffset: 200,
            },
            e: {
                topOffset: -100,
                leftOffset: 130,
            },
        },
        name: "Apatosaurus Nomad 3",
        imgDir: "apato-house-3",
        
    },
    apatosaurusHouse4: {
        ...genericApatosaurus,
        offSets: {
            ...genericApatosaurus.offSets,
            n: {
                topOffset: -150,
                leftOffset: 200,
            },
            e: {
                topOffset: -150,
                leftOffset: 130,
            },
        },
        name: "Apatosaurus Nomad 4",
        imgDir: "apato-house-4",
    },
    woolyMammoth: {
        name: "Wooly Mammoth",
        imgDir: "wooly-mammoth",
        heightToSquare: 4,
        widthToHeight: 1.4,
        preyType: "regular-Xlarge",
        isPredator: false,
        possTerrain: ["grassland", "forest"],
        activityLevel: 5,
        hasSwim: false,
        hp: 25,
        hunger: 100,
        speed: 2,
        range: 1,
        aggression: 1,
        attack: 4,
        defence: 6,
        targetSpecs: {
            top: 50,
            left: 50,
            height: 100,
            width: 100,
            color: "green"
        },
        escape: 2,
        offSets: {
            ...genericOffsets,
            s: {
                topOffset: -100,
                leftOffset: -100
            },
            e: {
                topOffset: 0,
                leftOffset: -50
            },
            w: {
                topOffset: -50,
                leftOffset: 50
            }
        }
    },
     greyMastodon: {
         name: "Grey Mastodon",
         imgDir: "mastadon-grey",
         heightToSquare: 4.5,
         widthToHeight: 1.4,
         preyType: "regular-XXXlarge",
         isPredator: false,
         possTerrain: ["savannah", "marsh", "swamp forest"],
         activityLevel: 5,
         hasSwim: true,
         hp: 25,
         hunger: 100,
         speed: 2,
         range: 1,
         aggression: 1,
         attack: 4,
         defence: 6,
         targetSpecs: {
             top: 50,
             left: 50,
             height: 100,
             width: 100,
             color: "green"
         },
         escape: 2,
         offSets: {
             ...genericOffsets,
             s: {
                 topOffset: -100,
                 leftOffset: -100
             },
             e: {
                 topOffset: 0,
                 leftOffset: -50
             },
             w: {
                 topOffset: -50,
                 leftOffset: 50
             }
         }
     }
}
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

//Trilobite - Ordovician/Devonian
//Sea Scorpion - Ordovician/Devonian
//Orthrocone - Ordovician
//Armored Fish - Ordovician/Devonian
//Small Anphibian - All past Devonian
//Small Lizard - All past Carboniferous



