import React, {Fragment} from "react";
import {random, sample, clone} from "lodash";
import { getPosition } from "../../helpers/grid-helpers";
import Outline from "../outline";
import Shadow from "../shadow";
import { worldParams } from "../../constants/world";

export default function Structure(props) {
    const {heightIndex, widthIndex, heightToSquare, widthToHeight, isSwim, hasSwim, dir} = props;
    const height = worldParams.squareHeight * heightToSquare * worldParams.structureRelativeSize;
    console.log("height", height);
    

    let {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight);
    console.log("top, left", top, left);
    
    const flip = dir === "nw" || dir === "sw" ? "scaleX(-1)" : "";

    if(flip.length) {
        left += height * widthToHeight;
    }

    top -= height 
    // let dir = "sw";

    const wrapperStyles = {
        position: "absolute",
        // transform: `translate(${left}px, ${top}px)`
        transform: `translate(${left}px, ${top}px) ${flip}`
    }

    const structureStyles = {
        position: "absolute",
        width: `${height}px`
    }

    const orient = dir === "nw" ? "n" : "s";

    return (
        <Fragment>
            {/* <div style={shadowStyles}></div> */}
            <div style={wrapperStyles}>
                {/* <Outline size={size} color={"red"} /> */}
                {/* <Shadow size={size} /> */}
                <img src={require(`./images/${props.imgDir}/${orient}.png`)} style={structureStyles}></img>
            </div>
        </Fragment>
    )
}