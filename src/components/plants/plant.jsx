import React, {Fragment, useEffect, useRef, useLayoutEffect} from "react";
import {random, sample, clone} from "lodash";
import Status from "../status";
import {getPosition, getZIndex} from "../../helpers/grid-helpers";
import plantDirectory from "./plant-directory.js";
import Target from "../target/target";

export default function Plant(props) {    
    const {keyName, heightIndex, widthIndex, height, widthToHeight, image, isVisible, id, handlePlayerHarvestResource, health, targetSpecs} = props;
    const {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight, height * -.7, height * -.15);

    targetSpecs.height = height / 2;
    targetSpecs.width = (height * widthToHeight) / 2;

    const wrapperStyle = {
        visibility: isVisible ? "visible" : "hidden",
        // border: "1px solid green",
        pointerEvents: "none",
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`,
        zIndex: getZIndex(heightIndex, widthIndex, "plant")
    }

    const plantStyle = {
        height: `${height}px`,
        pointerEvents: "none"
    }

    function handleClick() {
        handlePlayerHarvestResource("plants", id)
    }

    return (
        <Fragment>
            {/* <div style={StatusStyle}></div> */}
            <div style={wrapperStyle}>
                <span>{health}</span>
                {/* <Status size={size} /> */}
                <img src={require(`./images/${image}`)} style={plantStyle}></img>
                {/* {hasTarget && <div style={targetStyle} onClick={()=> handlePlayerHarvestResource("plants", id)}></div>} */}
                <Target {...props.targetSpecs} handleClick={handleClick}></Target>

            </div>
        </Fragment>
    )
}