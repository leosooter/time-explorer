import {forEach, round} from "lodash";
import {getPreyPreferenceLevel} from "./creature-helpers";
import {getNewCreature} from "../helpers/creature-helpers";
import creatureDirectory from "../components/creatures/creature-directory";

const sides = {
    n: {},
    ne: {},
    nw: {},
    s: {},
    se: {},
    sw: {},
    e: {},
    w: {},
}

const allSides = {
    n: {...sides},
    ne: {...sides},
    nw: {...sides},
    s: {...sides},
    se: {...sides},
    sw: {...sides},
    e: {...sides},
    w: {...sides},
}

const fakeSquare = {
    heightIndex: 1,
    widthIndex: 1,
    terrainType: {isSwim: false},
    ...allSides
};

let bestPrey = [];
let marginalPrey = [];
let notPrey = [];

function testCreaturePreyPreference(entity, other) {
    let preyLevel = getPreyPreferenceLevel({predator: entity, prey: other, data: true});
    let result = `${other.name}- score ${preyLevel.level} - hpLevel ${preyLevel.hpIdeal} (${entity.hp}/${other.hp}) || attackLevel ${preyLevel.attackIdeal} (${entity.attack}/${other.attack})`;

    if(preyLevel.level > 75) {
        bestPrey.push(result);
    } else if(preyLevel.level > 40) {
        marginalPrey.push(result);
    } else {
        notPrey.push(result);
    }
}

export function testCreaturePredation(entityType, other) {
    const entity = getNewCreature(entityType, fakeSquare);
    bestPrey = [];
    marginalPrey = [];
    notPrey = [];

    if(other) {
        testCreaturePreyPreference(entity, other)
    } else {
        testEntityAgainstDirectory(entity, creatureDirectory, testCreaturePreyPreference);
    }

    console.log("-----------------------------------------------------------------------------------------------");
    console.log("Results for", entity.name);
    console.log("Ideal prey size", entity.idealPreySize);
    console.log(`Prey size range ${entity.preySizeRange}, (${entity.idealPreySize - entity.preySizeRange} - ${entity.idealPreySize + entity.preySizeRange})`);
    console.log("Best Prey", bestPrey);
    console.log("Marginal Prey", marginalPrey);
    console.log("Not Prey", notPrey);
}

function assignHPFromSize(ignore, entity) {
    let modifier = entity.isPredator ? .8 : 1.2;
    entity.hp = round(entity.heightToSquare * 10 * modifier);

    modifier = entity.isPredator ? 1.5 : .75;
    entity.attack = round(entity.hp / 4 * modifier) || 1;
}

export function generateHPFromSize() {
    testEntityAgainstDirectory(creatureDirectory.apatosaurus, creatureDirectory, assignHPFromSize);
    testEntityAgainstDirectory(creatureDirectory.apatosaurus, creatureDirectory, (ignore, entity) => console.log("Name", entity.name, "HP", entity.hp));
    console.log(creatureDirectory);
}


export function testEntityAgainstDirectory(entity, directory, testFunction, passedParams) {
    forEach(directory, (other) => testFunction(entity, other, passedParams));
}