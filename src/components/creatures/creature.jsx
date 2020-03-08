import React, {Fragment} from "react";
import {random, sample, clone} from "lodash";
import {getPosition, getZIndex} from "../../helpers/grid-helpers";
import Outline from "../outline";
import Shadow from "../shadow";
import { worldParams } from "../../constants/world";

export default React.memo(function Creature(props) {
    const {heightIndex, widthIndex, heightToSquare, widthToHeight, isSwim, isMega, hasSwim, speed, health, tempSpeed} = props;
    const height = worldParams.squareHeight * heightToSquare * worldParams.creatureRelativeSize;

    const {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight);

    
    // let dir = "sw";

    const wrapperStyles = {
        zIndex: getZIndex(heightIndex, widthIndex, "creature"),
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`,
        transition: `all ${tempSpeed || speed}s linear`,
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
                <span>{health}</span>
                {/* <Outline size={size} color={"red"} /> */}
                {/* <Shadow size={size} /> */}
                <img src={require(`./images/${props.imgDir}/${dir}.png`)} style={creatureStyles}></img>
            </div>
        </Fragment>
    )
});