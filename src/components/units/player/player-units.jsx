import React, {useState, useEffect} from "react";
import Player from "./player";
// import {worldParams} from "../../constants/world";

export default React.memo(function Units(props) {
  const {playerUnits, handleUnitSelect} = props;

  console.log("playerUnits", playerUnits);
  

  return (
      playerUnits.map((playerUnit) => {
        return (<Player key={playerUnit.id} {...playerUnit} handleUnitSelect={handleUnitSelect}/>);
      })
  );
});

