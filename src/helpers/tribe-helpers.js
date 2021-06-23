import {random, sample, remove} from "lodash";
import {world} from "./world-creator";
import {removeEntity} from "./entity-helpers";

const structureLimit = 10;
const shortDirs = ["n","s","e","w"];

export function newStructure(square, type) {
    const {heightIndex, widthIndex, isVisible} = square;

    const structure = {
        ...type,
        heightIndex,
        widthIndex,
        isVisible,
        currentSquare: square
    }

    structure.dir = sample(shortDirs);
    square.structure = structure
    
    world.structures.push(structure);

    return structure;
}

export function addStructure(square, structureType, tribe) {
    if(square.plant) {
        removeEntity(square.plant)
    }
    
    if(!square.structure) {
        const structure = newStructure(square, structureType);
        tribe.structures.push(structure);
        tribe.populationCapacity += structure.populationSupport;
    }
}

function removeSquareFromBuildingSquares(square, tribe) {
    remove(tribe.buildingSquares, (buildSquare) => buildSquare.id === square.id);
}

export function buildStructure(tribe, square) {
    const buildSquare = square ? square : sample(tribe.buildingSquares);
    const structure = tribe.possStructures[tribe.techLevel]
    addStructure(buildSquare, structure, tribe);
    removeSquareFromBuildingSquares(buildSquare, tribe);
    tribe.wood -= structure.cost;    
}

// export function removeStructure(removeStructure, tribe) {
//     remove(tribe.structures, (structure) => structure.id === removeStructure.id)
// }

// function upgradeStructure(replaceStructure, tribe) {
//     const {dir, currentSquare} = replaceStructure;
//     tribe.populationCapacity -= newStructure.populationSupport;
//     removeStructure(replaceStructure);

//     const structure = newStructure(currentSquare, tribe.possStructures[tribe.techLevel]);
//     structure.dir = dir;
//     tribe.structures.push(structure);
//     tribe.populationCapacity += structure.populationSupport;
// }

function upgradeStructure(structure, tribe) {
    // const {dir, currentSquare} = replaceStructure;
    // tribe.populationCapacity -= newStructure.populationSupport;
    // removeStructure(replaceStructure);

    // const structure = newStructure(currentSquare, tribe.possStructures[tribe.techLevel]);
    // structure.dir = dir;
    // tribe.structures.push(structure);
    // tribe.populationCapacity += structure.populationSupport;
    structure = Object.assign(structure, tribe.possStructures[tribe.techLevel]);    
}

function upgradeTechLevel(tribe) {
    tribe.techLevel ++;
    for (let index = 0; index < tribe.structures.length; index++) {
        const structure = tribe.structures[index];        
        upgradeStructure(structure, tribe);
    }
}

function canBuildStructure(tribe) {
    const {
        structures,
        possStructures,
        wood,
        techLevel,
    } = tribe;

    const underStructureLimit = structures.length <= structureLimit;

    if(!underStructureLimit) {
        console.log("OVER STRUCTURE LIMIT");
    }
    const hasResources = wood >= possStructures[techLevel].cost;
    if(!hasResources) {
        console.log("NOT ENOUGH WOOD");
    }
    const hasSpace = tribe.buildingSquares.length > 0;
    if(!hasSpace) {
        console.log("NO SPACE");
    }

    return underStructureLimit && hasResources && hasSpace;
}


export function tribeAction(tribe) {    
    if(canBuildStructure(tribe)) {
        buildStructure(tribe);
    }
    
    if(tribe.techPoints > 60 && tribe.techLevel < 3) {
        console.log("UPGRADE @!!!!!!!!!!!!!!");
        
        upgradeTechLevel(tribe);
    }
}