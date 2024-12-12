const logger = require("./logger");
const getDateTime = require("./getDateTime");
const {
  join
} = require("path");
const {
  readFileSync
} = require("fs");
module.exports = async (_0x1697c3, _0x597507, _0x5ce730, _0x30a8c9, _0x193fb4) => {
  const _0x5d6862 = "ultramanz_" + _0x193fb4 + ".vcf";
  const _0x5667e4 = JSON.parse(readFileSync(join(__dirname, "../setting.json")));
  let _0x5597e6;
  if (_0x5667e4.features.filterContacts) {
    _0x5597e6 = _0x5ce730.filter(_0x1c9b7a => !_0x30a8c9.some(_0x5a467c => _0x5a467c.id === _0x1c9b7a));
  } else {
    _0x5597e6 = _0x5ce730;
  }
  const _0x40b07c = _0x597507.key.remoteJid;
  const _0x22e1b3 = "`SC BY ULTRAMAN`";
  const _0x342765 = "BUY BOT BISA CHAT : t.me/ultraman_13";
  const _0x496dda = "" + (_0x5667e4.features.filterContacts ? "AKTIF" : "MATI");
  const _0x62a0d5 = "" + (_0x5667e4.features.filterHistory ? "AKTIF" : "MATI");
  const _0x2ed574 = await _0x1697c3.sendMessage(_0x40b07c, {
    text: _0x22e1b3 + "\n\n*MEMULAI SAVE* 🚀\n*Filter Kontak Status: _" + _0x496dda + "_*\n\n*Prefix:* " + _0x193fb4 + "\n*Participants:* " + _0x5ce730.length + "\n*Target:* " + _0x5597e6.length + "\n*Pesan:* -\n" + _0x342765
  }, {
    quoted: _0x597507
  });
  if (_0x5597e6.length <= 0) {
    setTimeout(() => {
      _0x1697c3.sendMessage(_0x40b07c, {
        text: _0x22e1b3 + "*SAVE KONTAK GAGAL* ‼️\n*Filter Kontak Status: _" + _0x496dda + "_*\n*Prefix:* " + _0x193fb4 + "\n*Participants:* " + _0x5ce730.length + "\n*Target:* " + _0x5597e6.length + "\n*Pesan:* Semua nomor target sudah tersimpan dikontak\n" + _0x342765,
        edit: _0x2ed574.key
      }, {
        quoted: _0x597507
      });
    }, 3000);
    return;
  }
  try {
    const _0x1cfccd = _0x5597e6.map((_0x5ec0e0, _0xf37d87) => {
      return "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x193fb4 + " - " + (_0xf37d87 + 1) + "\nORG:-\nTEL;type=CELL;type=VOICE;waid=" + _0x5ec0e0.split("@")[0] + ":+" + _0x5ec0e0.split("@")[0] + "\nEND:VCARD";
    }).join("\n");
    setTimeout(async () => {
      await _0x1697c3.sendMessage(_0x40b07c, {
        delete: _0x2ed574.key
      });
      return _0x1697c3.sendMessage(_0x40b07c, {
        document: Buffer.from(_0x1cfccd),
        fileName: _0x5d6862,
        caption: _0x22e1b3 + "*SAVE KONTAK BERHASIL* ✅\n*Filter Kontak Status: _" + _0x496dda + "_*\n\n*Prefix:* " + _0x193fb4 + "\n*Participants:* " + _0x5ce730.length + "\n*Target:* " + _0x5597e6.length + "\n*Pesan:* Semua nomor target telah berhasil ditambahkan ke file _" + _0x5d6862 + "_\n" + _0x342765,
        mimetype: "text/vcard"
      }, {
        quoted: _0x597507
      });
    }, 3000);
  } catch (_0x1b7c56) {
    logger("error", "SAVE KONTAK ERROR", _0x1b7c56);
    return _0x1697c3.sendMessage(_0x597507.key.remoteJid, {
      text: "⚡ *" + _0x1697c3.name + " ヅ* | *SAVE KONTAK ERROR*\n\n" + _0x1b7c56 + "\n\n*⌱ BANG ULTRAMAN*"
    }, {
      quoted: _0x597507
    });
  }
};