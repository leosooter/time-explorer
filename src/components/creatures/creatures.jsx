import React, {useState, useEffect} from "react";
import Creature from "./creature";
import {worldParams} from "../../constants/world";

export default React.memo(function Creatures(props) {
  const {creatures, handlePlayerAttackEntity} = props;

  return (
      creatures.map((creature) => {
        return (<Creature key={creature.id} {...creature} handlePlayerAttackEntity={handlePlayerAttackEntity}/>);
      })
  );
});