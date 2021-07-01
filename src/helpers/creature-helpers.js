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

import {sample, clone, random} from "lodash";
import { entityAction, getDirFromFacing } from "./entity-helpers";

let creatureId = 1;
const facingDirs = ["n","s","e","w","ne","nw","se","sw"];

export function getNewCreature(creatureType, square) {
    const creature = clone(creatureType);
    if(!square) {
      console.log(creatureType, square)
    }

    creature.id = `creature-${creatureId}`;
    creatureId ++;
    creature.currentSquare = square;
    creature.heightIndex = square.heightIndex;
    creature.widthIndex = square.widthIndex;
    creature.facing = sample(facingDirs);
    creature.dir = getDirFromFacing(creature.facing); 
    creature.isSwim = square.terrainType.isSwim;
    creature.attacking = null;
    creature.attacker = null;
    creature.health = creature.hp;
    creature.isVisible = square.isVisible;
    creature.arrayType = "creatures";
    creature.mode = "idle";
    creature.hunger = random(0,100);


    creature.action = () => entityAction(creature, "creatures");

    // Add to square(s)
    square.currentEntity = creature;

    if(creature.isPredator) {
        creature.idealPreySize = creature.hp * .6;
        creature.preySizeRange = creature.idealPreySize * .75;
    }

    if(creature.isGroup) {
        creature.groupCohesion = creature.groupCohesion || 3;
        creature.groupDensity = creature.groupDensity || 1;
        creature.groupMaxSize = creature.groupMaxSize || 5;
    }

    if(creature.isTerritoryRestricted) {
        creature.territoryCenter = {heightIndex: square.heightIndex, widthIndex: square.widthIndex};
    }

    if(creature.isMega) {
        if(creature.waterOnly && creature.isOpenOceanOnly === "undefined") { // Any mega water creature is openOcean unless specifically set as false;
            creature.isOpenOceanOnly = true;
        }
    }

    return creature;
}