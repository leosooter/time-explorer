import structureDirectory from "./structure-directory";
const {
    house1,
    house2,
    house3,
    house4
} = structureDirectory;

export const house1Mock = {
    ...house1,
    heightIndex: 0,
    widthIndex: 0,
    dir: "nw"
}

export const house2Mock = {
    ...house2,
    heightIndex: 0,
    widthIndex: 0,
    dir: "nw"
}

export const house3Mock = {
    ...house3,
    widthToHeight: .9,
    heightIndex: 0,
    widthIndex: 0,
    dir: "nw"
}

export const house4Mock = {
    ...house4,
    heightIndex: 0,
    widthIndex: 0,
    dir: "nw"
}