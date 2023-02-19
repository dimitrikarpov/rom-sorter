const path = require("path")
const fs = require("fs")
const crc32 = require("crc/crc32")
const crypto = require("crypto")
const { DIRS } = require("./constants")

const calculateCRC32 = (filename) => {
  const file = path.join(DIRS.ROMS, filename)

  const crc32_hash = crc32(fs.readFileSync(file)).toString(16)

  return crc32_hash
}

const calculateHashes = (filename) => {
  const file = path.join(DIRS.ROMS, filename)

  const fileBuffer = fs.readFileSync(file)
  const hashSum = crypto.createHash("sha1")
  hashSum.update(fileBuffer)
  const hex = hashSum.digest("hex")

  return {
    crc32: calculateCRC32(filename),
    sha1: hex,
  }
}

module.exports = {
  calculateHashes,
  calculateCRC32,
}
