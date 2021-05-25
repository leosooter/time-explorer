import React from "react";
import {worldParams} from "../constants/world";

export default function Background() {
    const xTranslate = -937;
    const yTranslate = -687
    const backgroundStyle = {
        position: "absolute",
        backgroundImage: 'url("background1.jpg")',
        backgroundRepeat: "repeat",
        top: "0",
        left: "0",
        height: `${worldParams.size}px`,
        width: `${worldParams.size}px`,
        transform: `rotate(-45deg) skew(20deg, 20deg) translate(${worldParams.size / 4}px, ${worldParams.size / 4}px)`,
        boxShadow: "-50px 50px 5px grey"
        // translate(-937px, -687px)
    };

    return (
        <div style={backgroundStyle}></div>
    );
}