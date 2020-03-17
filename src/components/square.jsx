import React, {useState} from "react";
import Tree from "./plants/tree";
import Creature from "./creatures/creature";

function getColorString(colorvalues) {
  const {r,g,b} = colorvalues;
  return `rgba(${r},${g},${b},.87)`
} 

export default function Square(props) {
    const {heightIndex, widthIndex, handleSquareSelect, hasTree, isWater, terrainType, squareSize, id, borderColor, isVisible} = props

    const backgroundColor = getColorString(terrainType.color);
    let border = borderColor ? `1px solid ${borderColor}`: `1px solid ${backgroundColor}`;
    let unexploredColor = "rgba(70, 70, 70, .95)"
    
    // if(props.isLandCoast) {
    //   border = "1px solid red"
    // } else if(props.isWaterCoast) {
    //   border = "1px solid yellow"
    // }
    
    const squareStyles = {
      // visibility: isVisible ? "visible" : "hidden",
      boxSizing: "border-box",
      height: `${squareSize}px`,
      width: `${squareSize}px`,
      border: isVisible? border : `1px solid ${unexploredColor}`,
      // border: "1px solid red",
      backgroundColor: isVisible? backgroundColor : unexploredColor,
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
      <div style={squareStyles} onClick={() => handleSquareSelect(id)}></div>
    );
  }