const path = require("path")

const DIRS = {
  ROMS: path.join(__dirname, "in", "roms"),
  IMG_SNAP: path.join(__dirname, "in", "img", "Named_Snaps"),
  IMG_TITLE: path.join(__dirname, "in", "img", "Named_Titles"),
  OUT: path.join(__dirname, "out"),
}

module.exports = {
  DIRS,
}
