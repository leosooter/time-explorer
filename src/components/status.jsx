import React, {useState, useEffect} from "react";
import {getModeColor} from "../new-helpers/entity-helpers.js";

export default function Status(props) {
    console.log("PROPS", props);
    // if(props.flash) {
    //     
    //     setTimeout(props.resetFlash, 1000);
    // }
    const [flashColor, setFlashColor] = useState("none");

    useEffect(() => {
        if(props.flash) {
            setFlashColor("rgba(255, 0, 0, .01)");
            props.resetFlash();
        } else {
            setFlashColor("");
        }
    })

    const sizeAdjust = props.size * .3;
    // const top = sizeAdjust;
    // const left = sizeAdjust * 1.5;
    const height = sizeAdjust * 2;
    const width = height * 2;
    const {top, left} = props.specs || {top: props.size * .25, left: 0};
    const modeColor = getModeColor(props.mode);

    const statusStyle = {
        backgroundColor: flashColor,
        transition: "background-color 200ms cubic-bezier(.09,100,.83,100)",
        position: "absolute",
        borderRadius: "50%",
        height,
        width,
        top,
        left, 
        boxShadow: `${modeColor} 1px 1px 20px`
    }

    return (
        <div style={statusStyle}>{flashColor}</div>
    );
}


