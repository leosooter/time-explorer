import React, {useState, useEffect} from 'react';
import {random} from "lodash"
import './App.css';
import Grid from "./components/grid";
// import Units from "./components/units";
import createNewWorld from "./helpers/world-creator";
import Tree from "./components/plants/tree";
import Background from './components/texture-background';
import {worldParams} from "./constants/world";
import Creature from './components/creatures/creature';
import Creatures from "./components/creatures/creatures";
import Plants from "./components/plants/plants";
import Structures from "./components/structures/structures.jsx";
import Units from "./components/units/units.jsx";
import PlayerUnits from "./components/units/player/player-units";
import ActionBar from "./components/action-bar/action-bar";
import {attackEntity, getEntityById, moveEntityToSquare, healEntityFromFood} from "./helpers/entity-helpers"
import TestPosition from "./components/test-position";
import {house1Mock, house2Mock, house3Mock, house4Mock} from "./components/structures/mocks";

let testHeightIndex = 5;
let testWidthIndex = 5;
let updateNumber = 0;

const creatureActionChance = 1;
// const explorationMode = true;

let defaultWorld = "triassic";

let world = createNewWorld(100, 100, defaultWorld);

function App() {
  // const [squaresById, setSquaresById] = useState(newGrid[1]);
  const [turn, setTurn] = useState(0);
  const [grid, setGrid] = useState(world.grid);
  const [creatures, setCreatures] = useState(world.creatures);
  const [structures, setStructures] = useState(world.structures);
  const [units, setUnits] = useState(world.units);
  const [playerUnits, setPlayerUnits] = useState(world.playerUnits);
  // const [playerResources, setPlayerResources] = useState({wood: 0, food: 0});
  const [plants, setPlants] = useState(world.plants);
  const [selectedUnit, setSelectedUnit] = useState(world.playerUnits[0]);
  const [selectedUnitId, setSelectedUnitId] = useState(null);
  const [playerPosition, setPlayerPosition] = useState({heightIndex: 1, widthIndex: 1});

  function updateAll() {
    setGrid(world.grid);
    setCreatures(world.creatures);
    setStructures(world.structures);
    setUnits(world.units);
    setPlayerUnits(world.playerUnits);
    setPlants(world.plants);
  }

  function handleWorldSelect(worldType) {
    world = createNewWorld(100, 100, worldType);
    setTurn(0);
    updateAll();
    setSelectedUnit({});
    setSelectedUnitId(null);
    setPlayerPosition({heightIndex: 1, widthIndex: 1});
  }

  function handleUnitSelect(id) {
    console.log("handleUnitSelect", id);
    
    setSelectedUnit(id);
    setSelectedUnitId(id);
  }

  function handlePlayerAttackEntity(type, targetEntityId) {
    const targetEntity = getEntityById(type, targetEntityId);
    if(targetEntity) {
      attackEntity(selectedUnit, targetEntity);
      updateVisibility(selectedUnit.currentSquare.heightIndex, selectedUnit.currentSquare.widthIndex); 
      handleTurn();
    } else {
      console.log("ERROR, No entity found");
    }
  }

  function healPlayer() {
    healEntityFromFood(selectedUnit, world.playerResources);
    handleTurn();
  }

  function updateVisibility(heightIndex, widthIndex) {
    const square = world.grid[heightIndex][widthIndex];
    let visibilityChange = false;

    for (let index = 0; index < square.allSides.length; index++) {
      const side = square.allSides[index];
      console.log("side", side);
      if(!side.isVisible) {
        
        
        visibilityChange = true;
        side.isVisible = true;
        if(side.structure) {
          side.structure.isVisible = true;
        }
        if(side.plant) {
          side.plant.isVisible = true;
        }
        if(side.currentEntity) {
          side.currentEntity.isVisible = true;
        }
      }
    }
    console.log("visibilityChange", visibilityChange);
    
    if(visibilityChange) {
      updateNumber ++
    }
  }

  function handleSquareSelect(squareId) {
    console.log("handleSquareSelect");
    const moveSquare = world.squaresById[squareId];
    
    // if(selectedSquareId === id) {
    //   setSelectedSquareId(null);
    // } else {
    //   setSelectedSquareId();
    // }

    if(selectedUnit) {
      moveEntityToSquare(selectedUnit, moveSquare);
      // console.log("selectedUnit");
      // const playerUnit = playerUnits[0];

      // selectedUnit.heightIndex = heightIndex;
      // selectedUnit.widthIndex = widthIndex;
      // selectedUnit.currentSquare = square
      
      // setPlayerPosition({heightIndex, widthIndex});
    }

    handleTurn();
    updateVisibility(moveSquare.heightIndex, moveSquare.widthIndex); 
  }

  function moveCreatures(creatures) {
    let movedCreatures = 0;
    for (let index = 0; index < creatures.length; index++) {
      const creature = creatures[index];
        creature.action();
        // creature.heightIndex ++;
        movedCreatures ++;
      // if(random(1, creatureActionChance) === 1) {
        
      // }
    }
    console.log("movedCreatures", movedCreatures);
    

    setCreatures(creatures);
  }

  function moveUnits(units) {
    let movedUnits = 0;
    for (let index = 0; index < units.length; index++) {
      const unit = units[index];
        unit.action();
        // creature.heightIndex ++;
        movedUnits ++;
      // if(random(1, creatureActionChance) === 1) {
        
      // }
    }
    console.log("movedUnits", movedUnits);
    

    setUnits(units);
  }

  function handleTurn() {
    moveCreatures(creatures);
    moveUnits(units)
    setTurn(turn + 1);
    console.log("Number of creatures", creatures.length);
    
  }

  const appStyles = {
    // height: `${worldParams.size * 1.2}px`,
    // minWidth: `${worldParams.size}px`,
    // backgroundColor: "black"
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
        <Structures updateNumber={updateNumber} structures={structures}/>
        <Units turn={turn} updateNumber={updateNumber} units={units} handlePlayerAttackEntity={handlePlayerAttackEntity}/>
        <Plants plants={plants}/>
        <Creatures turn={turn} updateNumber={updateNumber} creatures={creatures} handlePlayerAttackEntity={handlePlayerAttackEntity}/>
        <PlayerUnits turn={turn} playerUnits={playerUnits} handleUnitSelect={handleUnitSelect}/>
        {/* <Player heightIndex={playerPosition.heightIndex} widthIndex={playerPosition.widthIndex} id={"player-1"} currentSquareId={null} heightToSquare={.4} handleUnitSelect={handleUnitSelect}/> */}
      </div>
      
      <ActionBar handleTurn={handleTurn} handleWorldSelect={handleWorldSelect} healPlayer={healPlayer} turn={turn} playerResources={world.playerResources}/>
  </div>

  );
}

export default App;
