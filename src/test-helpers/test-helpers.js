import {forEach} from "lodash";
import {tribesById} from "../App";
import {createNewCity} from "./city-helpers";
import {createNewTribe, addNewKnownEntity, addNewKnownTribe} from "./tribe-helpers";
import {createNewTribeEntity} from "./entity-helpers";

export function createNewTestTribe(units, grid, standing) {
    const isKnown = standing !== undefined;
    const testTribe = createNewTribe(false);
    testTribe.actionPriorities = [];
    units.forEach(unit => {
        createNewTribeEntity(unit.type, createNewCity(unit.square, testTribe.tribeId, grid, 0));
    });

    if(isKnown) {
        console.log("tribesById", tribesById);
        forEach(tribesById, (tribe) => {
            console.log("tribe", tribe);
            if(tribe.tribeId !== testTribe.tribeId) {
                tribe.knownTribesStandingById[testTribe.tribeId] = standing;
                addNewKnownTribe(tribe, testTribe);
                testTribe.ownUnits.forEach(unit => {
                    addNewKnownEntity(tribe, unit); 
                });
            }
        })
    }
    
    return testTribe;
}