import React from "react";
import {forEach} from "lodash";
import creatureDirectory from "./creatures/creature-directory.js";

let creatureOffsets = {};

function generateImageStats(img, name, handleFinish) {
    const imageStats = {
        imgHeight: img.offsetHeight,
        imgWidth: img.offsetWidth,
        heightToWidth: img.offsetHeight / img.offsetWidth
    }

    console.log("imageStats", imageStats);

    creatureDirectory[name].imageStats = imageStats;
    console.log("creatureDirectory[name]", creatureDirectory[name]);

    if(handleFinish) {
        console.log("Done with image read", creatureDirectory);
    }
}

export default function ReadImages({handleFinish}) {
    let numCreatures = Object.keys(creatureDirectory).length;
    let count = 0;
    let images = [];

    const styles = {
        opacity: "0",
        position: "absolute"
    }

    forEach(creatureDirectory, (creature) => {
        count ++;
        const isLast = count === numCreatures
        const {imgDir, keyName} = creature;
        const testImage = (<img onLoad={(img) => generateImageStats(img.target, keyName, isLast && handleFinish)} src={require(`./creatures/images/${imgDir}/n.png`)}></img>);
        images.push(testImage);
    });

    return (
        <div style={styles}>{images}</div>
    )
}