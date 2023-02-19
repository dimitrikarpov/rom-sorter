const path = require("path")
const fs = require("fs")

const { DIRS } = require("./constants")
const { calculateHashes } = require("./hashes")
const { copyImages } = require("./images")
const { filename } = require("./filename")

const extToRomMap = {
  nes: "nes",
  fds: "nes:fds",
  md: "md",
  sfc: "snes",
}

const getRomsList = async () => {
  try {
    const files = await fs.promises.readdir(DIRS.ROMS)
    return files
  } catch (e) {
    console.error(e)
  }
}

const exportRom = (file_name) => {
  const { crc32, sha1 } = calculateHashes(file_name)

  const newRomName = sha1

  const name = filename.getFilename(file_name)
  const images = copyImages(filename.getFilename(file_name), newRomName)
  const exported_file = `${newRomName}.${filename.getExtension(file_name)}`

  fs.copyFileSync(
    path.join(DIRS.ROMS, file_name),
    path.join(DIRS.OUT, exported_file),
  )

  const json = {
    name,
    images,
    file: exported_file,
    original_rom_name: file_name,
    crc32,
    sha1,
    platform: "sfc",
    // platform: extToRomMap[filename.getExtension(file_name)],
  }
  fs.writeFileSync(
    path.join(DIRS.OUT, `${newRomName}.json`),
    JSON.stringify(json),
  )

  console.log(`exported: ${name}`)
}

const main = async () => {
  const files = await getRomsList()

  // exportRom(files[0])

  files.forEach(exportRom)
}

main()
