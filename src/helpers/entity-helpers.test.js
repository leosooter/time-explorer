import creatureDirectory from "../components/creatures/creature-directory";
import {canDefeat} from "./entity-helpers"
import unitDirectory from "../components/units/unit-directory";
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
    yellowDarter,
    greenDarter,
    orangeEdaphasaurus,
    greenEdaphasaurus,
    blueDiictidon,
    brownDiictidon,
    greaterEdaphasaurus,
    greaterGorgonopsid,
    lesserGorgonopsid
} = creatureDirectory;

let entityWins = [];
let entityLoses = [];

export function testCanDefeat(entity1, entity2) {
    // console.log(entity1, entity2);
    entity1.health = entity1.hp;
    entity2.health = entity2.hp;
    console.log("\n\n\n");
    
    let result = canDefeat(entity1, entity2);
    if(result) {
        entityWins.push(entity2.name);
    } else {
        entityLoses.push(entity2.name);
    }
    // console.log(`Testing ${entity1.name} against ${entity2.name}`);
    // console.log("Entity 1 wins : ", canDefeat(entity1, entity2));

    console.log("\n\n\n");
}


export function testMatches() {
    for (const key in creatureDirectory) {
        if (creatureDirectory.hasOwnProperty(key)) {
            const creature = creatureDirectory[key];
            testCanDefeat(unitDirectory.hunter1, creature)
        }
    }

    console.log("Can Defeat", entityWins);
    console.log("Cannot Defeat", entityLoses);
}