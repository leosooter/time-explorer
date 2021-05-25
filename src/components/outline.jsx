import React from "react";
import Anime, {anime} from 'react-anime';

const outlineTypes = {
    red: "rgba(250, 10, 10, .75)",
    blue: "rgba(50, 50, 250, .5)"
}

export default function Outline(props) {
    const {size, color} = props;
    const top = size / 16;
    const left = size / 8;
    const outlineWidth = size / 12;
    const outlineSize = size / 3;



    const outlineStyle = {
        left,
        top,
        position: "absolute",
        height: outlineSize,
        width: outlineSize * 2,
        borderRadius: "50%",
        // border: "1px solid black",
        // boxShadow: `black 0px 3px ${left}px`
        // transform: "perspective(400px) rotateY(45deg)"
    }
    return (
        <Anime
            {...outlineStyle}
            duration={10000}
            border={`${outlineWidth}px solid ${outlineTypes[color]}`}
        >
            <div style={outlineStyle}></div>
        </Anime>
    )
}