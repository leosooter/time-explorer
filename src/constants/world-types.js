
import ordovician from "./world-config/ordovician";
import devonian from "./world-config/devonian";
import carboniferous from "./world-config/carboniferous";
import permian from "./world-config/permian";
import triassic from "./world-config/triassic";
import jurassic from "./world-config/jurassic";
import cretaceous from "./world-config/cretaceous";
import pleistocene from "./world-config/pleistocene";
import ultraRealm from "./world-config/ultra-realm";
import testWorld from "./world-config/test-world";

export const ORDOVICIAN = "ordovician";
export const DEVONIAN = "devonian";
export const CARBONIFEROUS = "carboniferous";
export const PERMIAN = "permian";
export const TRIASSIC = "triassic";
export const JURASSIC = "jurassic";
export const CRETACEOUS = "cretaceous";
export const EOCENE = "eocene";
export const OGLIOCENE = "ogliocene";
export const PLIOCENE = "pliocene";
export const PLEISTOCENE = "pleistocene";
export const ULTRA_REALM = "ultraRealm";
export const TEST_WORLD = "testWorld";

/*
import {
  PLEISTOCENE,
  PLIOCENE,
  OGLIOCENE,
  EOCENE,
  CRETACEOUS,
  JURASSIC,
  TRIASSIC,
  PERMIAN,
  CARBONIFEROUS,
  DEVONIAN,
  ORDOVICIAN
}
*/

export const worldNames = {
  PLEISTOCENE,
  PLIOCENE,
  OGLIOCENE,
  EOCENE,
  CRETACEOUS,
  JURASSIC,
  TRIASSIC,
  PERMIAN,
  CARBONIFEROUS,
  DEVONIAN,
  ORDOVICIAN
}

export const timePeriods = {
    ple: PLEISTOCENE,
    pli: PLIOCENE,
    ogl: OGLIOCENE,
    eoc: EOCENE,
    cre: CRETACEOUS,
    jur: JURASSIC,
    tri: TRIASSIC,
    per: PERMIAN,
    car: CARBONIFEROUS,
    dev: DEVONIAN,
    ord: ORDOVICIAN
}

export default {
    ordovician,
    devonian,
    carboniferous,
    permian,
    triassic,
    jurassic,
    cretaceous,
    pleistocene,
    ultraRealm,
    testWorld
}






/*
Ordovician
- Deep Water - plants: none
- Shallow Water - plants: purple-globe-reed, stolomite
- Marsh - plants: orange-globe-reed, purple-globe-reed, smooth-horsetail
- Plains - plants: yellow-moss, green-creeper
- Desert - plants: none

Devonian
- Deep Water - plants: none
- Shallow Water - plants: stolomite, green-reed
- Marsh - plants: green-reed, smooth-horsetail, yellow-horsetail
- Plains - plants: green-creeper, low-fern, yellow-horsetail, moss
- Forest - plants: polycarpus*, low-fern, green-creeper, moss
- Desert - plants: barrel-fern

Carboniferous
- Deep Water - plants: none
- Shallow Water - plants: green-reed
- Marsh - plants: green-reed, smooth-horsetail
- Swamp Forest - plants: butress-root-tree*, spike-tree*
- Plains - plants: low-fern, moss
- Forest - plants: polycarpus*, tree-fern*, scaly-palm*, low-fern, moss

Permian
- Deep Water - plants: none
- Shallow Water - plants: green-reed
- Plains - plants: high-fern, low-fern, moss
- Forest - plants: scrub-tree*, tree-fern*, scaly-palm*, high-fern, low-fern, moss
- Savannah - plants: scaly-palm*, antler-tree*, low-fern
- Desert - plants: antler-shrub, antler-tree*, 

Triassic
- Deep Water - plants: none
- Shallow Water - plants: tuft-reed
- Plains - plants: low-fern, moss
- Forest - plants: monkey-puzzle*, scrub-tree*, tree-fern*, scaly-palm*, high-fern, low-fern, moss
- Savannah - plants: monkey-puzzle*, scaly-palm*, high-fern, low-fern
- Desert - plants: euphorbia-tree*, euphorbia*, jade-plant, yuca

Jurassic ----------------------------------
- Deep Water - plants: none
- Shallow Water - plants: tuft-reed
- Plains - plants: low-fern, moss
- Forest - plants: monkey-puzzle*, scrub-tree*, tree-fern*, scaly-palm*, high-fern, low-fern, moss
- Savannah - plants: monkey-puzzle*, scaly-palm*, high-fern, low-fern
- Desert - plants: euphorbia-tree*, euphorbia*, jade-plant, yuca

Cretaceous

Paleogene

Neogene

Pliestocene

*/