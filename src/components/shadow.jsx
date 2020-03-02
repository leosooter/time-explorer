import React from "react";

export default function Shadow(props) {

    const sizeAdjust = props.size * .3;
    const top = sizeAdjust;
    const left = sizeAdjust * 1.5;
    const height = sizeAdjust / 3;
    const width = height * 2;

    const shadowStyles = {
        backgroundColor: "rgba(62, 62, 62, .8)",
        position: "absolute",
        borderRadius: "50%",
        height,
        width,
        top,
        left, 
        boxShadow: "black 1px 1px 20px"
    }

    return (
        <div style={shadowStyles}></div>
    );
}


