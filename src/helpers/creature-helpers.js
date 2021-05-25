/*
    Animal action logic
    I If under attack
        - flee : low aggression and path available OR low health and path available
        - fight : high aggression or no path available
    
    II Check Surroundings
        - If predators detected
            - flee : low aggression and path available
            - freeze : - flee : low aggression and no path available
            - fight : high aggression
        
        - If prey detected
            - move towards : if hungry and prey is distant
            - fight : if hungry and prey is adjacent
    
    III Otherwise if random = movement
        - Turn or
        - Move or
        - Turn and Move
*/

import {sample, clone} from "lodash";
import { entityAction, getDirFromFacing } from "./entity-helpers";

let creatureId = 1;
const facingDirs = ["n","s","e","w","ne","nw","se","sw"];

export function getNewCreature(creatureType, square) {
    const creature = clone(creatureType);
    creature.id = `creature-${creatureId}`;
    creature.currentSquare = square;
    creature.heightIndex = square.heightIndex;
    creature.widthIndex = square.widthIndex;
    creature.facing = sample(facingDirs);
    creature.dir = getDirFromFacing(creature.facing); 
    creature.isSwim = square.terrainType.isSwim;
    creatureId ++;
    creature.attacking = null;
    creature.attacker = null;
    creature.health = creature.hp;
    creature.isVisible = square.isVisible;
    creature.arrayType = "creatures";

    creature.action = () => entityAction(creature, "creatures");

    // Add to square(s)
    square.currentEntity = creature;

    if(creature.isMega) {
        console.log("adding square to Mega");
        creature.coveredSqaures = [];
        creature.coveredSqaures.push(square.n);
        square.n.currentEntity = creature;
        creature.coveredSqaures.push(square.n.e);
        square.n.e.currentEntity = creature;
        creature.coveredSqaures.push(square.e);
        square.e.currentEntity = creature;
    }

    return creature;
}