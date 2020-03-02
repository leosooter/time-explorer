import React, {useState, useEffect} from 'react';
import './App.css';
import Grid from "./components/grid";
// import Units from "./components/units";
import ActionBar from "./components/action-bar";
import createNewWorld from "./helpers/world-creator";
import Tree from "./components/plants/tree";
import Background from './components/texture-background';
import {worldParams} from "./constants/world";
import Creature from './components/creatures/creature';
import Creatures from "./components/creatures/creatures";
import Plants from "./components/plants/plants";
import Structure from "./components/structures/structure";
import Player from "./components/units/player/player";
import TestPosition from "./components/test-position";
import {house1Mock, house2Mock, house3Mock, house4Mock} from "./components/structures/mocks";

let testHeightIndex = 5;
let testWidthIndex = 5;

const newWorld = createNewWorld(100, 100); // Returns and array with the grid and a squaresById object

function App() {
  // const [squaresById, setSquaresById] = useState(newGrid[1]);
  const [turn, setTurn] = useState(0);
  const [grid, setGrid] = useState(newWorld.grid);
  const [creatures, setCreatures] = useState(newWorld.creatures);
  const [plants, setPlants] = useState(newWorld.plants);
  const [redHighlightIndexes, setRedHighlightIndexes] = useState([]);
  const [blueHighlightIndexes, setBlueHighlightIndexes] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState({});
  const [selectedUnitId, setSelectedUnitId] = useState(null);
  const [selectedSquareId, setSelectedSquareId] = useState(null);
  const [unitIndex, setUnitIndex] = useState({height: 5, width: 5});
  const [unitArray, setUnitArray] = useState([]);
  const [playerPosition, setPlayerPosition] = useState({heightIndex: 1, widthIndex: 1});



  // const [playerUnitsById, setPlayerUnitsById] = useState({});
  // const [playerUnitIds, setPlayerUnitIds] = useState([]);

  // const [squaresById, setSquaresById] = useState({});
  // const [squareIds, setSquareIds] = useState([]);

  // const [playerUnitsById, setPlayerUnitsById] = useState({});
  // const [playerUnitIds, setPlayerUnitIds] = useState([]);

  // const [playerUnitsById, setPlayerUnitsById] = useState({});
  // const [playerUnitIds, setPlayerUnitIds] = useState([]);

  // function handleUnitSelect(unitId) {
  //     const unit = playerUnitsById[unitId];
  //     let unitActionSquares = getUnitActionSquare(unit);
  //     let blueHighlights = [];
  //     let redHighlights = [];

  //     for (let index = 0; index < unitActionSquares.length; index++) {
  //         const square = gridSquares[index];
  //         if(square) {
  //             blueHighlights.push(index);
  //         }
  //     }

  //     if(blueHighlights.length) {
  //         setBlueHighlightIndexes(blueHighlights);
  //     }

  //     setSelectedUnit(unit);
  // }

  // function handleSelectSquare(squareId) {
  //   const square = squaresById[squareId];
  // }

  let unitId = 0;

  function handleTest(heightIndex, widthIndex) {
    console.log("Change position height - width", heightIndex, widthIndex);

    setUnitIndex({
      height: heightIndex,
      width: widthIndex
    })
  }

  function handleUnitSelect(id) {
    console.log("handleUnitSelect", id);
    
    setSelectedUnit(id);
    setSelectedUnitId(id);
  }

  function handleSquareSelect(heightIndex, widthIndex) {
    console.log("handleSquareSelect");
    
    // if(selectedSquareId === id) {
    //   setSelectedSquareId(null);
    // } else {
    //   setSelectedSquareId();
    // }

    if(selectedUnit) {
      console.log("selectedUnit");
      
      setPlayerPosition({heightIndex, widthIndex});
    }
  }

  function moveCreatures(creatures) {
    for (let index = 0; index < creatures.length; index++) {
      const creature = creatures[index];
      creature.heightIndex ++;
    }

    setCreatures(creatures);
  }

  function handleTurn() {
    moveCreatures(creatures);
    setTurn(turn + 1);
  }

  function createUnit(x,y) {
    console.log("Creating new unit", x, y);
    
    let newUnit = {
      unitId,
      x,
      y
    }

    let newArray = unitArray.concat([newUnit])
    console.log(newArray);
    

    setUnitArray(
      newArray
    );

    unitId ++;
  }

  const appStyles = {
    // height: `${worldParams.size * 1.2}px`,
    // minWidth: `${worldParams.size}px`,
    // backgroundColor: "black"
  }

  const actionBarStyle = {
    position: "fixed",
    bottom: "20px",
    width: "100%",
    border: "1px solid red"
  }

  const wrapperStyles = {
    height: `${worldParams.size * .8}px`,
    width: `${1}px`,
    border: "1px solid red",
    position: "absolute"
  }

  const unitsWrapper = {
    position: "absolute",
    transform: `translate(${(worldParams.size / 36.5)}px, ${worldParams.size / 2}px)`
  }
  // useEffect()
  console.log("playerPosition.heightIndex", playerPosition.heightIndex);
  

  return (
    <div className="App" style={appStyles}>
      <div style={wrapperStyles}>
        <Background></Background>
        <Grid
          handleSquareSelect={handleSquareSelect}
          // redHighlightIndexes={redHighlightIndexes}
          // blueHighlightIndexes={blueHighlightIndexes}
          // grid={grid}
        />
        {/* <Units
          unitArray={unitArray}
          handleUnitSelect={handleUnitSelect}
          selectedUnitId={selectedUnitId}
        /> */}
      </div>
      
      {/* <Unit
            // id={unitId}
            // key={unitId}
            heightIndex={unitIndex.height}
            widthIndex={unitIndex.width}
      /> */}
      {/* <ActionBar 
        createUnit={createUnit}
      /> */}
      <div style={unitsWrapper}>
        {/* <TestPosition /> */}
        <Plants plants={plants}/>
        <Structure {...house4Mock} />
        <Creatures creatures={creatures}/>
        <Player heightIndex={playerPosition.heightIndex} widthIndex={playerPosition.widthIndex} id={"player-1"} currentSquareId={null} heightToSquare={.7} handleUnitSelect={handleUnitSelect}/>
      </div>
      
      
    <div style={actionBarStyle}>
      <div>Turn: {turn}</div>
        <button onClick={handleTurn}>End Turn</button>
      </div>
    </div>
  );
}

export default App;
