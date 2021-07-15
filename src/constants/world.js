const worldSize = 100;

export const worldParams = {
    size: worldSize * 100,
    modifier: worldSize / 400
}

worldParams.squareSize = worldParams.size / 100;
worldParams.squareHeight = .9 * worldParams.squareSize;
worldParams.squareWidth = 1.929 * worldParams.squareSize;

// worldParams.squareHeight = worldParams.size * .009;
// worldParams.squareWidth = worldParams.size * .01929;

worldParams.creatureRelativeSize = .4;
worldParams.plantRelativeSize = .7;
worldParams.structureRelativeSize = .8;
worldParams.resourceRelativeSize = .5;
worldParams.unitRelativeSize = .4;