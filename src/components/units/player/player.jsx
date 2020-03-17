import React from "react";
import Shadow from "../../shadow";
import Outline from "../../outline";
import {getPosition, getZIndex} from "../../../helpers/grid-helpers";
import {worldParams} from "../../../constants/world";

export default function Player(props) {
    const {
        heightIndex,
        widthIndex,
        heightToSquare,
        squareId,
        id,
        handleUnitSelect,
        dir,
        health
    } = props;

    const height = worldParams.squareHeight * heightToSquare * worldParams.unitRelativeSize;
    const widthToHeight = 1;
    const {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight, -80, 0);

    // let dirs = ["n","w", "e", "s"];
    // // let dir = sample(dirs);
    // let dir = "s";

    // let weapon = {
    //     s: {
    //         height: height * 2.5,
    //         left: 55,
    //         top: -22
    //     }
        
    // }

    let weapon = {
        s: {
            height: height * .8,
            left: 50,
            top: 18
        }
        
    }

    const wrapperStyles = {
        zIndex: getZIndex(heightIndex, widthIndex, "unit"),
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`,
        transition: "all 1s",
        pointerEvents: "none"
    }

    const playerStyles = {
        position: "absolute",
        width: `${height}px`
    }

    const weaponStyle ={
        position: "absolute",
        height: `${weapon[dir].height}px`,
        transform: `translate(${weapon[dir].left}px, ${weapon[dir].top}px)`,
    }

    function handleClick() {
        handleUnitSelect(id);
    }

    return (
        <div style={wrapperStyles}>
            <span>{health}</span>
            {/* <Outline size={100} color={"blue"} /> */}
            <img src={require("../images/weapons/axe/front.png")} style={weaponStyle}></img>
            <img onClick={handleClick} src={require(`../images/red-black/${dir}.png`)} style={playerStyles}></img>
        </div>
    )
}