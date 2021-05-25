import React, {useState} from "react";
import Resource from "./resource";
// import {clone, sample, random} from "lodash";
// import {worldParams} from "../../constants/world";
// import resourceDirectory from "./resource-directory";

export default function Resources(props) {
  const {resources, handlePlayerHarvestResource} = props;
  const resourcesWrapper = {
    // position: "absolute",
    // transform: `translate(${(worldParams.size / 40) - 13}px, ${(worldParams.size / 2) - 60}px)`
  }

  return (
    <div style={resourcesWrapper}>
      {resources.map((resource) => {
        return (<Resource key={`resource:${resource.heightIndex}-${resource.widthIndex}`} {...resource} handlePlayerHarvestResource={handlePlayerHarvestResource}/>);
      })}
    </div>
  );
}