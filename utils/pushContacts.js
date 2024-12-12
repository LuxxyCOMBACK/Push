const logger = require("./logger");
const readUsers = require("./readUsers");
const getDateTime = require("./getDateTime");
const {
  readFileSync,
  writeFileSync
} = require("fs");
const {
  join
} = require("path");
module.exports = async (_0x5608c1, _0x1bd267, _0x55efc2, _0x42c3e4, _0x45ace4, _0x7462ef, _0x18e04c, _0x4bb477) => {
  const _0x306b06 = Date.now();
  let _0x47af8d;
  const _0x54801b = JSON.parse(readFileSync(join(__dirname, "../setting.json")));
  const _0x17f4fb = JSON.parse(readFileSync(join(__dirname, "../data/histories.json")));
  let {
    data: _0x1499d8
  } = await readUsers();
  if (_0x54801b.features.filterContacts && _0x54801b.features.filterHistory) {
    _0x47af8d = _0x55efc2.filter(_0x5d550a => !_0x42c3e4.some(_0x2e8210 => _0x2e8210.id === _0x5d550a) && !_0x17f4fb.some(_0xca9552 => _0xca9552 === _0x5d550a));
  } else if (_0x54801b.features.filterContacts && !_0x54801b.features.filterHistory) {
    _0x47af8d = _0x55efc2.filter(_0x124bdb => !_0x42c3e4.some(_0x57bdf5 => _0x57bdf5.id === _0x124bdb));
  } else if (!_0x54801b.features.filterContacts && _0x54801b.features.filterHistory) {
    _0x47af8d = _0x55efc2.filter(_0x225bb0 => !_0x17f4fb.some(_0x6fe911 => _0x6fe911 === _0x225bb0));
  } else {
    _0x47af8d = _0x55efc2;
  }
  _0x47af8d = _0x47af8d.filter(_0x3373f1 => _0x3373f1 !== _0x5608c1.number + "@s.whatsapp.net");
  const _0x1f8ce0 = _0x1bd267.key.remoteJid;
  const _0x125ec6 = "`SC BY ULTRAMAN`";
  const _0x1a1eee = "BUY BOT BISA CHAT : t.me/ultraman_13";
  const _0x7a214 = "" + (_0x54801b.features.filterContacts ? "AKTIF" : "MATI");
  const _0x468a0b = "" + (_0x54801b.features.filterHistory ? "AKTIF" : "MATI");
  const _0x1338a8 = _0x45ace4;
  const _0x5a70e7 = parseInt(_0x7462ef);
  const _0x5ba16c = await _0x5608c1.sendMessage(_0x1f8ce0, {
    text: _0x125ec6 + "\n\n*MEMULAI* \n\n*Filter Kontak: _" + _0x7a214 + "_*\n*Filter History: _" + _0x468a0b + "_*\n\n*Member:* " + _0x47af8d.length + "\n*Jeda:* " + _0x5a70e7 / 1000 + "s\n*Selesai Dalam :* " + _0x5a70e7 * _0x47af8d.length / 1000 + "s\n*Pesan:* -\n*Text Push:* " + _0x1338a8 + "\n" + _0x1a1eee
  }, {
    quoted: _0x1bd267
  });
  if (_0x47af8d.length <= 0) {
    setTimeout(() => {
      _0x5608c1.sendMessage(_0x1f8ce0, {
        text: _0x125ec6 + "\n\n*GAGAL MEMULAI* \n\n*Filter Kontak: _" + _0x7a214 + "_*\n*Filter History: _" + _0x468a0b + "_*\n\n*Member:* " + _0x47af8d.length + "\n*Jeda:* " + _0x5a70e7 / 1000 + "s\n*Selesai Dalam :* " + _0x5a70e7 * _0x47af8d.length / 1000 + "s\n*Pesan:* -\n*Text Push:* " + _0x1338a8 + "\n" + _0x1a1eee,
        edit: _0x5ba16c.key
      }, {
        quoted: _0x1bd267
      });
    }, 3000);
    return;
  }
  let _0x5c7bfa = 0;
  const _0x3895a6 = setInterval(async () => {
    if (_0x5c7bfa >= _0x47af8d.length) {
      logger("success", "PUSH KONTAK", "Push kontak sukses, " + _0x5c7bfa + " pesan telah berhasil dikirim.");
      await _0x5608c1.sendMessage(_0x1bd267.key.remoteJid, {
        text: _0x125ec6 + "\n\n*SELESAI MELAKUKAN PUSHKONTAK* \n\n*Filter Kontak: _" + _0x7a214 + "_*\n*Filter History: _" + _0x468a0b + "_*\n\n*Member:* " + _0x47af8d.length + "\n*Jeda:* " + _0x5a70e7 / 1000 + "s\n*Selesai Dalam :* " + _0x5a70e7 * _0x47af8d.length / 1000 + "s\n*Pesan:* -\n*Text Push:* " + _0x1338a8 + "\n" + _0x1a1eee,
        edit: _0x5ba16c.key
      });
      return clearInterval(_0x3895a6);
    } else {
      try {
        if (_0x18e04c === "imageMessage") {
          await _0x5608c1.sendMessage(_0x47af8d[_0x5c7bfa], {
            image: {
              url: _0x4bb477
            },
            caption: _0x1338a8
          });
        } else {
          await _0x5608c1.sendMessage(_0x47af8d[_0x5c7bfa], {
            text: _0x1338a8
          });
        }
        _0x1499d8 = _0x1499d8.filter(_0x27246f => _0x27246f != _0x47af8d[_0x5c7bfa]);
        _0x17f4fb.push(_0x47af8d[_0x5c7bfa]);
        writeFileSync(join(__dirname, "../data/users.json"), JSON.stringify(_0x1499d8));
        writeFileSync(join(__dirname, "../data/histories.json"), JSON.stringify(_0x17f4fb));
        logger("success", "PUSH KONTAK " + (_0x5c7bfa + 1), "[1mPesan telah berhasil dikirim ke " + _0x47af8d[_0x5c7bfa].split("@")[0] + "[0m");
        _0x5c7bfa++;
      } catch (_0x38aac8) {
        logger("error", "PUSH KONTAK", _0x38aac8);
        logger("error", "PUSH KONTAK " + (_0x5c7bfa + 1), "[1mPesan gagal dikirim ke " + _0x47af8d[_0x5c7bfa].split("@")[0] + "[0m");
        if (_0x38aac8 === "Connection Closed") {
          process.exit();
        }
      }
    }
  }, _0x5a70e7);
};