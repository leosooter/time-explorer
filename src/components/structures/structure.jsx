import React, {Fragment} from "react";
import {random, sample, clone} from "lodash";
import { getPosition, getZIndex } from "../../helpers/grid-helpers";
import Outline from "../outline";
import Status from "../status/status";
import { worldParams } from "../../constants/world";

export default function Structure(props) {
    const {
        heightIndex,
        widthIndex, 
        heightToSquare, 
        widthToHeight, 
        dir, 
        topOffset, 
        leftOffset, 
        tribeImgDir,
        imgDir,
        isVisible
    } = props;

    const height = worldParams.squareHeight * heightToSquare * worldParams.structureRelativeSize;
    // console.log("height", height);
    

    let {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight, topOffset, leftOffset);
    // console.log("top, left", top, left);
    
    // const flip = dir === "nw" || dir === "sw" ? "scaleX(-1)" : "";

    // if(flip.length) {
    //     left += height * widthToHeight;
    // }

    // top -= height 
    // // let dir = "sw";

    const wrapperStyle = {
        visibility: isVisible ? "visible" : "hidden",
        zIndex: getZIndex(heightIndex, widthIndex, "plant"),
        position: "absolute",
        // transform: `translate(${left}px, ${top}px)`
        transform: `translate(${left}px, ${top}px)`
    }

    const structureStyle = {
        position: "absolute",
        width: `${height}px`
    }

    // const orient = dir === "nw" ? "n" : "s";

    // const orient = "n";    

    try {
        return (
            <Fragment>
                {/* <div style={StatusStyle}></div> */}
                <div style={wrapperStyle}>
                    {/* <Outline size={size} color={"red"} /> */}
                    {/* <Status size={size} /> */}
                    <img src={require(`./images/${tribeImgDir}/${imgDir}/${dir}.png`)} style={structureStyle}></img>
                </div>
            </Fragment>
        )
    } catch (error) {
        console.log("ERROR Rendering Structure", props);
        console.log(error);
        
        return null;
    }
}