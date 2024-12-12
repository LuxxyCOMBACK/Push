const logger = require("./logger");
const {
  readFile
} = require("fs");
const {
  join
} = require("path");
module.exports = () => {
  return new Promise((_0x33149d, _0xb91734) => {
    readFile(join(__dirname, "../data/users.json"), "utf8", (_0x43ab7a, _0x481340) => {
      if (_0x43ab7a) {
        logger("error", "READUSERS", _0x43ab7a);
        _0xb91734(_0x43ab7a);
      }
      _0x33149d({
        data: JSON.parse(_0x481340)
      });
    });
  });
};