import React, {useState} from "react";
import Creature from "./creature";
import {worldParams} from "../../constants/world";

export default React.memo(function Creatures(props) {
  const {creatures} = props;
  
  return (
      creatures.map((creature) => {
        return (<Creature key={`creature:${creature.heightIndex}-${creature.widthIndex}`} {...creature} />);
      })
  );
});