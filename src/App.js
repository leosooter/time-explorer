import React, {useState, useEffect} from 'react';
import {random, sample} from "lodash"
import './App.css';
import Grid from "./components/grid";
import {getPosition} from "./helpers/grid-helpers";
// import Units from "./components/units";
import createNewWorld, {setVisibility, createNewTestWorld} from "./helpers/world-creator";
import {setUpNewPlayer} from "./helpers/player-helpers";
import {addStructure, tribeAction} from "./helpers/tribe-helpers";
import Background from './components/texture-background';
import {worldParams} from "./constants/world";
import Creature from './components/creatures/creature';
import Creatures from "./components/creatures/creatures";
import Plants from "./components/plants/plants";
import Resources from "./components/resources/resources";
import Structures from "./components/structures/structures";
import Units from "./components/units/units.jsx";
import PlayerUnits from "./components/units/player/player-units";
import ActionBar from "./components/action-bar/action-bar";
import StartScreen from "./components/start-screen";
import {attackEntity, getEntityById, moveEntityToSquare, healEntityFromFood, harvestResource} from "./helpers/entity-helpers"
import TestPosition from "./components/test-position";
import structureDirectory from "./components/structures/structure-directory";
import tribeDirectory from "./components/units/tribeDirectory";
import {worldNames} from "./constants/world-types";

import worldChoices from "./constants/world-config/world-choices";

import {takeEntityTurn} from "./new-helpers/creature-helpers";

const {
  ORDOVICIAN,
  DEVONIAN,
  CARBONIFEROUS,
  PERMIAN,
  TRIASSIC,
  JURASSIC,
  CRETACEOUS,
  PLEISTOCENE,
  ULTRA_REALM,
  TEST_WORLD,
} = worldNames;

let isStart = false;

let testHeightIndex = 5;
let testWidthIndex = 5;
let updateNumber = 0;

const creatureActionChance = 1;

let defaultWorld = CRETACEOUS;
let isExplorerMode = true;
isExplorerMode = false;
let world;

world = createNewWorld(100, 100, defaultWorld, isExplorerMode, "permianAdobe");
// world = createNewTestWorld(100, 100, isExplorerMode, "permianAdobe", false);

function App() {
  
  // const [squaresById, setSquaresById] = useState(newGrid[1]);
  const [turn, setTurn] = useState(0);
  // const [grid, setGrid] = useState(world.grid);
  // const [creatures, setCreatures] = useState(world.creatures);
  // const [structures, setStructures] = useState(world.structures);
  // const [units, setUnits] = useState(world.units);
  // const [tribes, setTribes] = useState(world.tribes);
  // const [playerUnits, setPlayerUnits] = useState(world.playerUnits);
  // // const [playerResources, setPlayerResources] = useState({wood: 0, food: 0});
  // const [plants, setPlants] = useState(world.plants);
  // const [resources, setResources] = useState(world.resources);
  const [selectedUnit, setSelectedUnit] = useState(world.playerUnits[0]);
  const [selectedUnitId, setSelectedUnitId] = useState(null);
  const [playerPosition, setPlayerPosition] = useState({});

  const {
    grid,
    plants,
    creatures,
    units,
    tribes,
    structures,
    playerUnits,
    resources
  } = world;

  function updateAll() {
    // setGrid(world.grid);
    // setCreatures(world.creatures);
    // setStructures(world.structures);
    // setUnits(world.units);
    // setTribes(world.tribes);
    // setPlayerUnits(world.playerUnits);
    setSelectedUnit(world.playerUnits[0]);
    // setPlants(world.plants);
    // setResources(world.resources);
  }

  function handleWorldSelect(worldType, tribeName) {
    world = createNewWorld(100, 100, worldType, isExplorerMode, tribeName);

    setTurn(0);
    updateAll();
    // let startSquare = sample(world.landSquares);
    // const {heightIndex, widthIndex} = startSquare;
    // startSquare.isVisible = true;
    // moveEntityToSquare(selectedUnit, startSquare);
    // updateVisibility(heightIndex, widthIndex);

    isStart = false;
    scrollToEntity(selectedUnit);
    // handleTurn();
  }



  function scrollToEntity(entity) {
    const {heightIndex, widthIndex} = entity.currentSquare;
    let yScroll = 9500 + heightIndex * 100;
    let xScroll = widthIndex * 100;
    let {top, left} = getPosition(heightIndex, widthIndex, 100, .4);
    top += 9500
    console.log("yScroll", yScroll);
    console.log("xScroll", xScroll);
    
    window.scrollTo(left, top)
    console.log("document", document.body.scrollTop);
    
  }

  function handleUnitSelect(id) {
    console.log("handleUnitSelect", id);
    
    setSelectedUnit(id);
    setSelectedUnitId(id);
  }

  function handleBuildStructure () {
    if(world.player.resources.wood >= 20) {
      const buildSquare = selectedUnit.currentSquare;
      addStructure(buildSquare, structureDirectory.triassicLake4);
      world.player.resources.wood -= 20;
      handleTurn();
    }
  }

  function handlePlayerHarvestResource(type, targetEntityId) {
    
    
    const targetEntity = getEntityById(type, targetEntityId);
    console.log("handlePlayerHarvestResource", targetEntity);
    if(targetEntity) {
      harvestResource(selectedUnit, targetEntity);
      updateVisibility(selectedUnit.currentSquare.heightIndex, selectedUnit.currentSquare.widthIndex); 
      handleTurn();
    } else {
      console.log("ERROR, No entity found");
    }
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
    healEntityFromFood(selectedUnit, world.player.resources);
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

  function canMoveToSquare(entity, square) {
    if (!isExplorerMode) {
      return true;
    }

    let xDiff = Math.abs(entity.widthIndex - square.widthIndex);
    let yDiff = Math.abs(entity.heightIndex - square.heightIndex);

    return xDiff <= entity.range && yDiff <= entity.range;
  }

  function handleSquareSelect(squareId) {
    console.log("handleSquareSelect");
    const moveSquare = world.squaresById[squareId];
    
    // if(selectedSquareId === id) {
    //   setSelectedSquareId(null);
    // } else {
    //   setSelectedSquareId();
    // }

    if(selectedUnit && canMoveToSquare(selectedUnit, moveSquare)) {
      console.log("selectedUnit", selectedUnit);
      moveEntityToSquare(selectedUnit, moveSquare);
      handleTurn();
      setVisibility(moveSquare, 3);
    }

    // updateVisibility(moveSquare.heightIndex, moveSquare.widthIndex); 
  }

  function moveCreatures(creatures) {
    let movedCreatures = 0;
    for (let index = 0; index < creatures.length; index++) {
      const creature = creatures[index];
        takeEntityTurn(creature, grid)
        // creature.action();
        // creature.heightIndex ++;
        movedCreatures ++;
      // if(random(1, creatureActionChance) === 1) {
        
      // }
    }
    console.log("movedCreatures", movedCreatures);
    

    // setCreatures(creatures);
  }

  function tribeActions(tribes) {
    for (let index = 0; index < tribes.length; index++) {
      const tribe = tribes[index];
      console.log("TRIBE", tribe);
      
      tribeAction(tribe);
      tribe.wood += 10;
      tribe.techPoints += 70;
    }
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
    

    // setUnits(units);
  }

  function handleTurn() {
    moveCreatures(creatures);
    // moveUnits(units);
    // tribeActions(tribes);
    setTurn(turn + 1);
    console.log("Number of creatures", creatures.length);
    
  }

  const appStyles = {
    // height: `${worldParams.size * 1.2}px`,
    // minWidth: `${worldParams.size}px`,
    // backgroundColor: "black"
  }

  const wrapperStyles = {
    height: `${worldParams.size * .7}px`,
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
        />
      </div>
      
      <div style={unitsWrapper}>
        {/* <TestPosition /> */}
        <Structures turn={turn} updateNumber={updateNumber} structures={structures}/>
        <Units turn={turn} updateNumber={updateNumber} units={units} handlePlayerAttackEntity={handlePlayerAttackEntity}/>
        <Plants turn={turn} plants={plants} handlePlayerHarvestResource={handlePlayerHarvestResource}/>
        <Resources turn={turn} resources={resources} handlePlayerHarvestResource={handlePlayerHarvestResource}/>
        <Creatures turn={turn} updateNumber={updateNumber} creatures={creatures} handlePlayerAttackEntity={handlePlayerAttackEntity}/>
        <PlayerUnits turn={turn} playerUnits={playerUnits} handleUnitSelect={handleUnitSelect}/>
        {/* <Player heightIndex={playerPosition.heightIndex} widthIndex={playerPosition.widthIndex} id={"player-1"} currentSquareId={null} heightToSquare={.4} handleUnitSelect={handleUnitSelect}/> */}
      </div>
      
      <ActionBar handleTurn={handleTurn} handleWorldSelect={handleWorldSelect} healPlayer={healPlayer} turn={turn} playerResources={world.player.resources} handleBuildStructure={handleBuildStructure}/>
      <StartScreen worldChoices={worldChoices} isStart={isStart} handleWorldSelect={handleWorldSelect}/>
  </div>

  );
}

export default App;
