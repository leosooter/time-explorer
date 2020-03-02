import React, {useState} from "react";
import Tree from "./plants/tree";
import Creature from "./creatures/creature";

function getColorString(colorvalues) {
  const {r,g,b} = colorvalues;
  return `rgba(${r},${g},${b},.87)`
} 

export default function Square(props) {
    const {heightIndex, widthIndex, handleSquareSelect, hasTree, isSea, terrainType, squareSize, id} = props

    const backgroundColor = getColorString(terrainType.color);
    let border = `1px solid ${backgroundColor}`;
    
    // if(props.isLandCoast) {
    //   border = "1px solid red"
    // } else if(props.isWaterCoast) {
    //   border = "1px solid yellow"
    // }
    
    const squareStyles = {
      boxSizing: "border-box",
      height: `${squareSize}px`,
      width: `${squareSize}px`,
      border: border,
      // border: "1px solid red",
      backgroundColor,
      margin: "0",
      padding: "0"
      // padding: "49px"
    }

    const dotStyles = {
      height: "1px",
      width: "1px",
      backgroundColor: "black",
      display: "none"
    };

    const disrupterStyles = {
      position: "absolute",
      height: "20px",
      width: "20px",
      marginTop: "120px",
      marginLeft: "80px",
      // border: "1px solid red",
      backgroundColor
    };
  
    return (
      <div style={squareStyles} onClick={() => handleSquareSelect(heightIndex, widthIndex)}></div>
    );
  }