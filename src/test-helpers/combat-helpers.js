import {isInRange} from "./grid-helpers";
import {leaveCity} from "./city-helpers";
import {removeEntity} from "./entity-helpers";


export function getHealAmount(entity) {
  let healAmount = 2;

  if(entity.currentCity && entity.currentCity.tribeId === entity.tribeId) {
    healAmount = Math.floor(healAmount * entity.currentCity.healBonus);
  }

  let entityDamage = entity.hp - entity.health;

  return healAmount > entityDamage ? entityDamage : healAmount;
}

export function isEntityInRange(entity, other) {
    return isInRange(entity.currentSquare, other.currentSquare, entity.attackRange);
}

function killEntity(entity, killedBy, setSelectedEntity) {
  if(setSelectedEntity) { // setSelectedEntity is only passed for player units
    setSelectedEntity(null);
  }

  killedBy.kills ++;
  entity.startCity.population --;

  if(entity.currentCity) {
    leaveCity(entity, entity.currentCity);
  }

  removeEntity(entity);
}

function getDefenceBonus(entity) {
  if(entity.currentCity && entity.currentCity.tribeId === entity.tribeId) {
    return entity.currentCity.defenceBonus;
  }

  return 1;
}

function getEntityAttack(entity) {
  const entityStrength = entity.health / entity.hp;
  return Math.ceil(entity.attack * entityStrength);
}

function getEntityDefence(entity) {
  const entityStrength = entity.health / entity.hp;
  const defenceBonus = getDefenceBonus(entity);
  return Math.ceil(entity.defence * entityStrength * defenceBonus);
}

export function attackEntity(entity, target, setSelectedEntity) {
  console.log(entity.id, "Attacking --- ", target.id);
  console.log('ATTACK_STRENGTH', getEntityAttack(entity));
  target.health -= getEntityAttack(entity);
  entity.canAttack = false;
  entity.canTakeCity = false;

  if(!entity.canMoveAfterAttack) {
    entity.canMove = false;
  }

  if(target.health <= 0) {
    let targetSquare = target.currentSquare;
    killEntity(target, entity, false, setSelectedEntity);
    
    if(entity.attackRange === 1) {
      moveEntityToSquare(entity, targetSquare);
    }
    return true;
  }

  if(isEntityInRange(target, entity)) {
    console.log('DEFENCE_STRENGTH', getEntityDefence(entity));
    entity.health -= getEntityDefence(entity);

    if(entity.health <= 0) {
      killEntity(entity, target, true, setSelectedEntity);
      return false;
    }
  }
}