import React from "react";
import Shadow from "../../shadow";
import Outline from "../../outline";
import {getPlantPosition} from "../../../helpers/grid-helpers";
import {worldParams} from "../../../constants/world";

export default function Player(props) {
    const {heightIndex, widthIndex, heightToSquare, squareId, id, handleUnitSelect} = props;
    const height = worldParams.squareHeight * heightToSquare * worldParams.creatureRelativeSize;
    const widthToHeight = 1;
    const {top, left} = getPlantPosition(heightIndex, widthIndex, height, widthToHeight);

    let dirs = ["ne","nw", "se", "sw"];
    // let dir = sample(dirs);
    let dir = "se";

    const wrapperStyles = {
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`,
        transition: "all 1s",
        pointerEvents: "none"
    }

    const playerStyles = {
        position: "absolute",
        width: `${height}px`
    }

    function handleClick() {
        handleUnitSelect(id);
    }

    return (
        <div style={wrapperStyles}>
            {/* <Outline size={100} color={"blue"} /> */}
            <img onClick={handleClick} src={require(`./${dir}.png`)} style={playerStyles}></img>
        </div>
    )
}