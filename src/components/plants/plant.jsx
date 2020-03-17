import React, {Fragment} from "react";
import {random, sample, clone} from "lodash";
import Shadow from "../shadow";
import { getPlantPosition, getZIndex } from "../../helpers/grid-helpers";

export default function Plant(props) {    
    const {heightIndex, widthIndex, height, widthToHeight, image, isVisible} = props;
    const {top, left} = getPlantPosition(heightIndex, widthIndex, height, widthToHeight, "plant");

    // if(props.name === "Red Fern") {
    //     console.log("height", height);
    // } 
    
    // let top = 0;
    // let left = 0;
    

    // top += (144 * heightIndex);
    // left += (308.5 * heightIndex);
    
    // top -= (144 * widthIndex);
    // left += (308.5 * widthIndex);

    const wrapperStyles = {
        visibility: isVisible ? "visible" : "hidden",
        pointerEvents: "none",
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`,
        zIndex: getZIndex(heightIndex, widthIndex, "plant")
    }

    const plantStyles = {
        height: `${height}px`
    }

    const shadowStyles = {
        height: "30px",
        width: "80px",
        backgroundColor: "rgba(100, 100, 100, .2)",
        borderRadius: "20%",
        transform: "translate(76px,0px) rotate(45deg) skew(0deg, 0deg)"
    }

    return (
        <Fragment>
            {/* <div style={shadowStyles}></div> */}
            <div style={wrapperStyles}>
                {/* <Shadow size={size} /> */}
                <img src={require(`./images/${image}`)} style={plantStyles}></img>
            </div>
        </Fragment>
    )
}