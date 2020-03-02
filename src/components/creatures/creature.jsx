import React, {Fragment} from "react";
import {random, sample, clone} from "lodash";
import { getPosition } from "../../helpers/grid-helpers";
import Outline from "../outline";
import Shadow from "../shadow";
import { worldParams } from "../../constants/world";

export default function Creature(props) {
    const {heightIndex, widthIndex, heightToSquare, widthToHeight, isSwim, isMega, hasSwim} = props;
    const height = worldParams.squareHeight * heightToSquare * worldParams.creatureRelativeSize;

    const {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight);

    const zIndex = isMega ? "100000" : "";

    
    // let dir = "sw";

    const wrapperStyles = {
        zIndex,
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`
    }

    const creatureStyles = {
        position: "absolute",
        width: `${height}px`
    }

    const dir = isSwim  && hasSwim ? `${props.dir}-swim` : props.dir;

    return (
        <Fragment>
            {/* <div style={shadowStyles}></div> */}
            <div style={wrapperStyles}>
                {/* <Outline size={size} color={"red"} /> */}
                {/* <Shadow size={size} /> */}
                <img src={require(`./images/${props.imgDir}/${dir}.png`)} style={creatureStyles}></img>
            </div>
        </Fragment>
    )
}