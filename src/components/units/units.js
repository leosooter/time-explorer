import React from "react";
import Unit from "./Unit";


export default function (props) {
    return props.unitArray.map((unit) => {
        const {unitId, x, y} = unit;

        return (<Unit
            id={unitId}
            heightIndex={x}
            widthIndex={y}
            handleUnitSelect={props.handleUnitSelect}
            isSelected={props.selectedUnitId === unitId}
      />)
    })
}