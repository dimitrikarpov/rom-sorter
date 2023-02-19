const filename = {
  getFilename: (name) => name.split(".").slice(0, -1).join("."),
  getExtension: (name) => name.split(".").slice(-1)[0],
}

module.exports = {
  filename,
}
