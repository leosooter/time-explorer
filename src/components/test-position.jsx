import React from "react";
import {getPosition} from "../helpers/grid-helpers";


export default function TestPosition() {
    const {top, left} = getPosition(99,0);

    const testStyle = {
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        height: "5px",
        width: "5px",

        backgroundColor: "black",
        border: "1px solid red"
    }

    return (
        <div style={testStyle}></div>
    )
}