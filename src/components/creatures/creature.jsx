import React, {Fragment, useState} from "react";
import Anime, {anime} from 'react-anime';
import {random, sample, clone} from "lodash";
import {getPosition, getZIndex} from "../../helpers/grid-helpers";
import Outline from "../outline";
import Status from "../status/status";
import Target from "../target/target";
import {worldParams} from "../../constants/world";
import "../effects/css/hover-animations.css";

export default React.memo(function Creature(props) {
    const {
        heightIndex,
        widthIndex,
        heightToSquare,
        widthToHeight,
        isSwim,
        isMega,
        hasSwim,
        speed,
        health,
        tempSpeed,
        isVisible,
        id,
        handlePlayerAttackEntity,
        imgDir,
        isUnderWater,
        offSets,
        statusSpecs,
        isGroupLeader,
        mode
        // leftOffset,
        // topOffset
    } = props;
    // console.log("props", props);
    // console.log("props.imgDir", props.imgDir);
    
    const height = worldParams.squareHeight * heightToSquare * worldParams.creatureRelativeSize;

    let topOffset = 0;
    let leftOffset = 0;


    if(offSets) {
        topOffset = offSets[props.dir].topOffset;
        leftOffset = offSets[props.dir].leftOffset;
    }

    const {top, left} = getPosition(heightIndex, widthIndex, height, widthToHeight, topOffset, leftOffset);

    
    // let dir = "sw";
    const [oldIndex, setOldIndex] = useState(1);
    const [newIndex, setNewIndex] = useState(1);

    const opacity = isUnderWater ? ".5" : "1";

    const wrapperStyle = {
        // pointerEvents: "none",
        visibility: isVisible ? "visible" : "hidden",
        zIndex: getZIndex(heightIndex, widthIndex, "creature"),
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`,
        // transition: `all ${tempSpeed || speed}s linear`,
        transition: `all 3s ease`,
    }

    const creatureStyle = {
        position: "absolute",
        width: `${height}px`,
        opacity
    }

    const dir = isSwim  && hasSwim ? `${props.dir}-swim` : props.dir;

    function handleClick() {
        console.log("Status", props.status);
        console.log("Creature", props);
        // handlePlayerAttackEntity("creatures", id);
        // setOldIndex(newIndex);
        // setNewIndex(newIndex + 1);
    }

    function getAnimateProps() {
        return {
            
        }
    }

    return (
        <Anime
            {...getAnimateProps()}
        >
            <div style={wrapperStyle} className={"wiggle"}>
                <span>{health}</span>
                {oldIndex != newIndex && <Outline size={height} color={"blue"} />}
                <Status specs={statusSpecs} size={height} mode={mode} isGroupLeader={isGroupLeader}/>
                <img src={require(`./images/${imgDir}/${dir}.png`)} style={creatureStyle}></img>
                <Target {...props.targetSpecs} handleClick={handleClick}></Target>
            </div>
        </Anime>
    )
});