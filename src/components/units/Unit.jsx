import React, {Fragment} from "react";
import {random, sample, clone} from "lodash";
import {getPosition, getZIndex} from "../../helpers/grid-helpers";
import Outline from "../outline";
import Status from "../status/status";
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
        handlePlayerAttackEntity,
        imgDir,
        dir,
        currentSquare
    } = props;

    const wadeDepth = currentSquare.wadeDepth || 0;
    console.log("heightToSquare", heightToSquare);
    
    let height = worldParams.squareHeight * heightToSquare * worldParams.unitRelativeSize;
    const {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight, -50 + wadeDepth, -30);

    // const height = worldParams.squareHeight * heightToSquare * worldParams.unitRelativeSize;

    // const {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight, -30, -70);

    let mainDir = dir === "s" || dir === "w" ? "s" : "n";
    let flip = dir === "w" || dir === "e" ? -1 : 1;
    // let dir = "sw";

    const wrapperHeight = `${165 - wadeDepth}px`;

    const wrapperStyle = {
        visibility: isVisible ? "visible" : "hidden",
        zIndex: getZIndex(heightIndex, widthIndex, "unit"),
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        transform: `scaleX(${flip})`,
        transition: `top ${tempSpeed || speed}s linear, left ${tempSpeed || speed}s linear`,
        overflow: "hidden",
        height: wrapperHeight,
        width: "100px",
        paddingTop: "30px",
    }

    const unitStyle = {
        position: "absolute",
        width: `${height}px`
    }

    return (
        <Fragment>
            <div style={wrapperStyle} onClick={() => handlePlayerAttackEntity("units", id)}>
                <span>{health}</span>
                {/* <Outline size={size} color={"red"} /> */}
                {/* <Status size={size} /> */}
                <img src={require(`./new-images/${imgDir}/${mainDir}.png`)} style={unitStyle}></img>
            </div>
        </Fragment>
    )
});