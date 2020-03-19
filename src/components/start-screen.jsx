import React, {useState} from "react";

export default function(props) {
    if(!props.isStart) {
        return null;
    }

    const [worldChoice, setWorldChoice] = useState(props.worldChoices[0]);
    const [tribeChoice, setTribeChoice] = useState(props.worldChoices[0].tribes[0]);

    const wrapperStyle = {
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundColor: "white"
    }

    const tribeChoiceStyle = {
        
    }

    function renderWorldChoices() {
        console.log("props.worldChoices");
        
        return props.worldChoices.map((world) => {
            const borderColor = world.name === worldChoice.name ? "red" : "green";

            const worldChoiceStyle = {
                height: "200px",
                width: "200px",
                border: `1px solid ${borderColor}`,
                display: "inline-block"
            }
        
            return (
                <div style={worldChoiceStyle} onClick={() => setWorldChoice(world)}>
                    {world.name}
                </div>
            );
        })
    }

    function renderTribeChoices() {
        return worldChoice.tribes.map((tribe) => {
            const borderColor = tribe.name === tribeChoice.name ? "red" : "green";

            const tribeChoiceStyle = {
                height: "100px",
                width: "200px",
                border: `1px solid ${borderColor}`,
                // display: "inline-block"
            }

            return (
                <div style={tribeChoiceStyle} onClick={() => setTribeChoice(tribe)}>
                    {tribe.name}
                </div>
        )})
    }

    return (
        <div style={wrapperStyle}>
            <div><h2>Time Explorer</h2></div>
            {renderWorldChoices()}
            {renderTribeChoices()}
            <button onClick={() => props.handleWorldSelect(worldChoice.name, tribeChoice.name)}>Select</button>
        </div>
    )
}