import React from "react";

const worldTypes = ["ordovician", "devonian", "carboniferous", "permian", "triassic", "jurassic", "cretaceous"];

const labelStyle = {
    marginLeft: "10px"
}

const actionBarStyle = {
    position: "fixed",
    bottom: "20px",
    width: "100%",
    border: "1px solid red"
}

function renderWorldTypes(handleWorldSelect) {
    return worldTypes.map((type) => (<button onClick={() => handleWorldSelect(type)} >{type}</button>));
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

export default (props) => {
    return (<div style={actionBarStyle}>
        <div>Turn: {props.turn}</div>
        
        <button onClick={props.handleTurn}>End Turn</button>
        {renderWorldTypes(props.handleWorldSelect)}
        {renderResources(props.playerResources)}
        <button onClick={props.healPlayer}>Heal</button>
        <button onClick={props.handleBuildStructure}>Build</button>
    </div>)
}