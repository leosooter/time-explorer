import React from "react";
import {worldParams} from "../constants/world";

export default function FilterLayer({color = "white", opacity = 0}) {
    const xTranslate = -937 * 400 / worldParams.squareSize;
    const yTranslate = -687 * 400 / worldParams.squareSize;
    const backgroundStyle = {
        position: "absolute",
        backgroundColor: color,
        top: "0",
        left: "0",
        opacity: opacity + "%",
        pointerEvents: "none",
        height: `${worldParams.size}px`,
        width: `${worldParams.size}px`,
        transform: `rotate(-45deg) skew(20deg, 20deg) translate(${worldParams.size / 4}px, ${worldParams.size / 4}px)`,
    };

    return (
        <div style={backgroundStyle}></div>
    );
}