const logger = require("./logger");
const {
  writeFile
} = require("fs");
const {
  join
} = require("path");
module.exports = () => {
  return new Promise((_0x3fda8e, _0x1962b4) => {
    require("./readUsers")().then(_0x498277 => {
      writeFile(join(__dirname, "../data/users.json"), "[]", _0x1c9387 => {
        if (_0x1c9387) {
          logger("error", "DROPUSERS", _0x1c9387);
          _0x1962b4(_0x1c9387);
        }
        _0x3fda8e({
          data: _0x498277.data
        });
      });
    }).catch(_0x567ffb => {
      _0x1962b4(_0x567ffb);
    });
  });
};