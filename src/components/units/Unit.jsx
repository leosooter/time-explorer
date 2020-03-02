import React, {useState} from  "react";

export default function Unit(props) {
    const topOffset = 525;
    const leftOffset = 75;
    const modifier = 1.8;

    const {heightIndex, widthIndex} = props;

    let top = 615;
    let left = 78;

    top += (52 * heightIndex);
    left += (90 * heightIndex);
    
    top -= (52 * widthIndex);
    left += (90 * widthIndex);

    const unitStyles = {
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        backgroundColor: "lightblue",
        transition: "top 1s, left 1s",
    }

    if(props.isSelected) {
        unitStyles.border = "2px solid black"
    }

    return (<div key={props.id} style={unitStyles} onClick={() => props.handleUnitSelect(props.id)}></div>);
}

// function renderPlayer(widthIndex, heightIndex) {
//     const height = heightIndex * 100 - 50;
//     const width = widthIndex * 100 - 50;
  
//     const playerStyles = {
//       position: "absolute",
//       top: `${height}px`,
//       left: `${width}px`,
//       height: "10px",
//       width: "10px",
//       borderRadius: "50%",
//       backgroundColor: "red"
//     }
  
//     return (<div style={playerStyles}></div>);
//   }