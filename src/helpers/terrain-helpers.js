import {random} from "lodash";



export function spreadTerrainFromStart(terrainType, start, power, endTerrain) {
    start.terrainType = terrainType;
    start.isMapped = true;

    function spreadInDirection(dir) {        
        const rand = random(1, power);

        if(start[dir] && !start[dir].isMapped) {
            if(rand >= 10) {
                spreadTerrainFromStart(terrainType, start[dir], power - 1, endTerrain);
            }
        }
    }

    spreadInDirection("north");
    spreadInDirection("south");
    spreadInDirection("east");
    spreadInDirection("west");
}

export function traceRiverFromStart(start, width, power) {

}

export function traceMountainsFromStart(start, width, power) {

}