import React, {Fragment} from "react";
import {random, sample, clone} from "lodash";
import {getPosition, getZIndex} from "../../helpers/grid-helpers";
import Outline from "../outline";
import Shadow from "../shadow";
import { worldParams } from "../../constants/world";

export default React.memo(function Unit(props) {
    const {heightIndex,
        widthIndex,
        heightToSquare,
        widthToHeight,
        isSwim,
        hasSwim,
        speed,
        health,
        tempSpeed,
        isVisible,
        id,
        handlePlayerAttackEntity
    } = props;
    const height = worldParams.squareHeight * heightToSquare * worldParams.unitRelativeSize;

    const {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight, -30, -70);

    
    // let dir = "sw";

    const wrapperStyles = {
        visibility: isVisible ? "visible" : "hidden",
        zIndex: getZIndex(heightIndex, widthIndex, "unit"),
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`,
        transition: `all ${tempSpeed || speed}s linear`,
    }

    const unitStyles = {
        position: "absolute",
        width: `${height}px`
    }

    const dir = isSwim  && hasSwim ? `${props.dir}-swim` : props.dir;

    return (
        <Fragment>
            {/* <div style={shadowStyles}></div> */}
            <div style={wrapperStyles} onClick={() => handlePlayerAttackEntity("units", id)}>
                <span>{health}</span>
                {/* <Outline size={size} color={"red"} /> */}
                {/* <Shadow size={size} /> */}
                <img src={require(`./images/${props.imgDir}/${dir}.png`)} style={unitStyles}></img>
            </div>
        </Fragment>
    )
});