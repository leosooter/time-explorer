import {random, sample, find, remove, clamp} from "lodash";
import {world} from "../helpers/world-creator";

export const IDLE = "idle";
export const CHASING_PREY = "chasing prey";
export const CHASING_PLAYER = "chasing player";
export const ESCAPING_PREDATOR = "escaping predator";
export const ESCAPING_PLAYER = "escaping player";
export const FIGHTING = "fighting";

const modeColors = {
    "idle": "rgba(100,100,100, .1)",
    "idleGroupLeader": "black",
    "chasing prey": "orangeRed",
    "chasing player": "red",
    "escaping predator": "blue",
    "escaping player": "green",
    "fighting": "purple"
}

export function getModeColor(startMode, isGroupLeader) {
    let mode = isGroupLeader && startMode === "idle" ? "idleGroupLeader" : startMode;
    return modeColors[mode] || "";
}

export function healEntityFromFood(entity, resources) {
    const foodAmount = resources.food;
    let diffToFullHealth = entity.hp - entity.health;
    let healAmount = foodAmount < diffToFullHealth ? foodAmount : diffToFullHealth;

    entity.health += healAmount;
    resources.food -= healAmount;
}

export function healEntityFromPrey(entity, other) {
    let diffToFullHealth = entity.hp - entity.health;
    let healAmount = other.hp < diffToFullHealth ? other.hp : diffToFullHealth;

    entity.health += healAmount;
    entity.hunger = clamp(entity.hunger, 0, 100);
}

function addResources(entity, other) {
    if(!other.isUnit) {
        entity.resources.food += other.hp;
    }
}

export function attackEntity(entity, other) {
    // console.log(`\n\n\n${entity.name} Attacking ${other.name}`);
    // turnEntityToSquare(entity, other.currentSquare)
    entity.mode = FIGHTING;
    entity.status = `Fighting ${other.name}`;
    other.mode = FIGHTING;
    other.status = `Fighting ${entity.name}`;
    entity.attacking = other;
    other.attacker = entity;
    other.health -= entity.attack;
    if(other.health <= 0) {
        killEntity(entity, other);
        if(entity.isPlayerUnit) {
            addResources(entity, other);
        } else if(entity.health < entity.hp) {
            healEntityFromPrey(entity, other);
        }
    } else {
        entity.health -= other.defence;
        if(entity.health <= 0) {
            removeEntity(entity);
        }
    }
}

export function getEntityById(type, id) {
    const typeArray = world[type] || [];
    return find(typeArray, (entity) => entity.id === id);
}

function killEntity(entity, other) {
    entity.mode = IDLE;
    other.currentSquare.currentSquare = null;
    // if(entity.possTerrain && entity.possTerrain.indexOf(other.currentSquare.terrainType.key) !== -1) {
    //     // console.log("moving to square");
        
    //     moveEntityToSquare(entity, other.currentSquare, .25);
    // }

    
    removeEntity(other);
}

export function removeEntity(removeEntity) {
    // console.log("world[type].length before", world[type].length);
    
    // if(type === "units") {
    //     console.log("Removing unit", removeEntity.id, world[type]);
        
    // }
    // if(!world[type]) {
    //     console.log("Type is not valid - removeEntity()");
        
    // }
    removeEntity.currentSquare.currentEntity = null;
    const removed = remove(world[removeEntity.arrayType], (entity) => entity.id === removeEntity.id);
    // if(type === "units") {
    //     console.log("\n\n\n\n\n REMOVED", removed);
        
    // }

    // console.log("world[type].length after", world[type].length);
    return removed;
}