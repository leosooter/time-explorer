import tribeDirectory from "../components/units/tribeDirectory";

export function setUpNewPlayer(tribeName, level) {
    if(!tribeName) {
        tribeName = "permianNomad";
    }

    return {
        tribe: tribeDirectory[tribeName],
        color: "blue",
        units: [],
        resources: {
            food: 10
        }
    };
}