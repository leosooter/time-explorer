import React, {useState, useEffect} from "react";
import Player from "./player";
import Unit from "../unit";
// import {worldParams} from "../../constants/world";

export default React.memo(function Units(props) {
  const {playerUnits, handleUnitSelect} = props;
  

  return (
      playerUnits.map((playerUnit) => {
        return (<Unit key={playerUnit.id} {...playerUnit} handleUnitSelect={handleUnitSelect}/>);
      })
  );
});

