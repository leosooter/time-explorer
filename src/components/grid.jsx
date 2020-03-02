import React, {useState, useMemo} from "react";
import Square from "./square";
import {worldParams} from "../constants/world";
import {world} from "../helpers/world-creator";

function renderGrid(handleSquareSelect) {
  const {grid} = world;

  const rowStyles = {
    display: "flex"
  }
  let newGrid = [];

  for (let heightIndex = 0; heightIndex < grid[0].length; heightIndex++) {
    let row = [];
    for (let widthIndex = 0; widthIndex < grid[heightIndex].length; widthIndex++) {
      const square = grid[heightIndex][widthIndex]
      row.push(
        <Square 
          {...square}
          key={`${heightIndex}-${widthIndex}`}
          squareSize={worldParams.size / grid[0].length}
          handleSquareSelect={handleSquareSelect}
        />
      );
    }
    newGrid.push(<div style={rowStyles} key={`row-${heightIndex}`}>{row}</div>);
  }

  return newGrid;
}

const Grid = function Grid(props) {
  const gridStyles = {
    position: "relative",
    minWidth: `${worldParams.size}px`,
    minHeight: `${worldParams.size}px`,
    top:"0px",
    right: "0px",
    boxSizing: "border-box",
    // transform: "rotate(-45deg) skew(20deg, 20deg) translate(100px, 350px)",
    transform: `rotate(-45deg) skew(20deg, 20deg) translate(${worldParams.size / 4}px, ${worldParams.size / 4}px)`,
  }
  
  return (<div style={gridStyles} className="grid">{useMemo(() => renderGrid(props.handleSquareSelect))}</div>); 
};

export default Grid;

