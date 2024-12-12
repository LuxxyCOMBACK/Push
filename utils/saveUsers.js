const logger = require("./logger");
const {
  writeFile
} = require("fs");
const {
  join
} = require("path");
module.exports = _0x36271c => {
  return new Promise((_0xbf165c, _0x1e880d) => {
    require("./readUsers")().then(_0x447554 => {
      const _0x2a2ca6 = _0x447554.data;
      const _0x367960 = _0x36271c.filter(_0x2b4173 => !_0x2a2ca6.includes(_0x2b4173));
      const _0x6ee65d = _0x36271c.filter(_0x36d8eb => _0x2a2ca6.includes(_0x36d8eb));
      if (!_0x367960 || _0x367960.length === 0) {
        logger("error", "SAVEUSERS", "BELUM ADA DATA BARU UNTUK DI SIMPAN");
        _0x1e880d("Tidak ada data pengguna baru untuk disimpan");
      }
      _0x2a2ca6.push(..._0x367960);
      writeFile(join(__dirname, "../data/users.json"), JSON.stringify(_0x2a2ca6), _0x4e89f4 => {
        if (_0x4e89f4) {
          logger("error", "SAVEUSERS", _0x4e89f4);
          _0x1e880d(_0x4e89f4);
        }
        _0xbf165c({
          data: {
            users: _0x2a2ca6,
            newUsers: _0x367960,
            alreadyUsers: _0x6ee65d
          }
        });
      });
    }).catch(_0xf5a20 => {
      _0x1e880d(_0xf5a20);
    });
  });
};