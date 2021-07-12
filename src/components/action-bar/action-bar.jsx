import React from "react";
import {forEach} from "lodash";
import {worldNames} from "../../constants/world-types.js";

const labelStyle = {
    marginLeft: "10px"
}

const actionBarStyle = {
    position: "fixed",
    bottom: "20px",
    width: "100%",
    border: "1px solid red"
}

const colors = [
    "yellow",
    "orange",
    "red",
    "purple",
    "blue",
    "cyan",
    "green",
    "lightgreen",
    "black",
    "white"
]

function renderWorldTypes(handleWorldSelect) {
    const worldSelectButtons = [];

    forEach(worldNames, (type) => {
        worldSelectButtons.push(<button onClick={() => handleWorldSelect(type)} >{type}</button>);
    });

    return worldSelectButtons;
}

function renderResources(resources) {
    const resourceArray = [];

    for (const key in resources) {
        if (resources.hasOwnProperty(key)) {
            const resourceValue = resources[key];
        resourceArray.push(<span style={labelStyle}>{key} : {resourceValue}</span>)
        }
    }

    return resourceArray;
}

function handleColorSelect() {
    
}

export default (props) => {
    return (<div style={actionBarStyle}>
        <div>Turn: {props.turn}</div>
        
        <button onClick={props.handleTurn}>End Turn</button>
        {renderWorldTypes(props.handleWorldSelect)}
        {renderResources(props.playerResources)}
        <button onClick={props.healPlayer}>Heal</button>
        <button onClick={props.handleBuildStructure}>Build</button>
        {colors.map((color) => 
            <button onClick={() => props.setColor(color)}>{color}</button>
        )}
        <span>{props.color}</span>
        <input
            type="range"
            value={props.opacity}
            onChange={event => {
                props.setOpacity(event.target.value);
            }}
            // className="thumb thumb--left"
            // style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <span>{props.opacity}</span>
    </div>)
}