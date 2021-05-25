import React, {useState, useEffect} from "react";

export default function Status(props) {

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
            setFlashColor("none");
        }
    })

    const sizeAdjust = props.size * .3;
    // const top = sizeAdjust;
    // const left = sizeAdjust * 1.5;
    const top = 0;
    const left = 0;
    const height = sizeAdjust * 2;
    const width = height * 2;

    const statusStyle = {
        backgroundColor: flashColor,
        transition: "background-color 200ms cubic-bezier(.09,100,.83,100)",
        position: "absolute",
        borderRadius: "50%",
        height,
        width,
        top,
        left, 
        boxShadow: "red 1px 1px 20px"
    }

    return (
        <div style={statusStyle}>{flashColor}</div>
    );
}


