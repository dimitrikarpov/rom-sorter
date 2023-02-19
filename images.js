const path = require("path")
const fs = require("fs")
const { DIRS } = require("./constants")

const copy = (imgPath, imgPostfix, rom_uid) => {
  if (fs.existsSync(imgPath)) {
    const newImgFileName = `${rom_uid}-${imgPostfix}.png`
    const newImgPath = path.join(DIRS.OUT, newImgFileName)

    fs.copyFileSync(imgPath, newImgPath)

    return newImgFileName
  }
}

const copyImages = (name, rom_uid) => {
  const romImgName = `${name}.png`
  const possibleSnap = path.join(DIRS.IMG_SNAP, romImgName)
  const possibleTitle = path.join(DIRS.IMG_TITLE, romImgName)

  return [
    copy(possibleSnap, "snap", rom_uid),
    copy(possibleTitle, "title", rom_uid),
  ].filter(Boolean)
}

module.exports = {
  copyImages,
}
