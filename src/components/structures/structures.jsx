import React, {useState} from "react";
import Structure from "./structure";
import {worldParams} from "../../constants/world";

export default React.memo(function Structures(props) {
  const {structures} = props;
  
  return (
      structures.map((structure) => {
        return (<Structure key={`structure:${structure.heightIndex}-${structure.widthIndex}`} {...structure} />);
      })
  );
});