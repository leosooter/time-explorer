import React, {useState, useEffect} from "react";
import Unit from "./unit";
import {worldParams} from "../../constants/world";

export default React.memo(function Units(props) {
  const {units} = props;

  console.log("units", units);
  

  return (
      units.map((unit) => {
        return (<Unit key={unit.id} {...unit} />);
      })
  );
});