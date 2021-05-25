import React from "react";
import "./target.css";

export default function(props) {
    const {color, height, width, top, left, handleClick} = props;

    const targetStyle = {
        top,
        left,
        height: `${height / 2}px`,
        width: `${height / 2}px`,
    };

    return (
        <div className="target" style={targetStyle} onClick={handleClick}>X</div>
    )
}