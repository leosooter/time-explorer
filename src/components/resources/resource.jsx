import React, {Fragment} from "react";
import {random, sample, clone} from "lodash";
import Status from "../status/status";
import { getPosition, getZIndex } from "../../helpers/grid-helpers";

export default function Resource(props) {    
    const {
        heightIndex,
        widthIndex,
        height,
        widthToHeight,
        image,
        isVisible,
        id,
        handlePlayerHarvestResource,
        health,
        hasTarget, 
        leftOffset,
        topOffset
    } = props;

    // console.log("heightIndex, widthIndex, height, widthToHeight", heightIndex, widthIndex, height, widthToHeight,);
    
    const {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight, leftOffset, topOffset);
    console.log("Resource", top, left);
    

    const wrapperStyle = {
        visibility: isVisible ? "visible" : "hidden",
        // border: "1px solid green",
        pointerEvents: "none",
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`,
        zIndex: getZIndex(heightIndex, widthIndex, "plant")
    }

    const resourceStyle = {
        height: `${height}px`,
        // opacity: "0.3",
        pointerEvents: hasTarget ? "none" : "auto"
    }

    const targetStyle = {
        position: "absolute",
        pointerEvents: "auto",
        bottom: "0",
        left: "calc(50% - 50px)",
        height: height > 100 ? "100px" : `${height}px`,
        width: "100px",
        // border: "1px solid yellow"
    }

    const StatusStyle = {
        height: "30px",
        width: "80px",
        backgroundColor: "rgba(100, 100, 100, .2)",
        borderRadius: "20%",
        transform: "translate(76px,0px) rotate(45deg) skew(0deg, 0deg)"
    }

    return (
        <Fragment>
            {/* <div style={StatusStyle}></div> */}
            <div style={wrapperStyle}>
                <span>{health}</span>
                {/* <Status size={size} /> */}
                <img src={require(`./images/${image}`)} style={resourceStyle} onClick={()=> handlePlayerHarvestResource("resources", id)}></img>
                {hasTarget && <div style={targetStyle} onClick={()=> handlePlayerHarvestResource("resources", id)}></div>}

            </div>
        </Fragment>
    )
}