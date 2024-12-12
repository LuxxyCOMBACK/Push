module.exports = (_0x2e9cfd, _0x2b9329, _0x44599f) => {
  const _0x1591e5 = require("./getDateTime")();
  let _0x40d34f;
  switch (_0x2e9cfd.toLowerCase()) {
    case "primary":
      _0x40d34f = "4";
      break;
    case "success":
      _0x40d34f = "2";
      break;
    case "info":
      _0x40d34f = "6";
      break;
    case "warning":
      _0x40d34f = "3";
      break;
    case "error":
      _0x40d34f = "1";
      break;
    default:
      _0x40d34f = "5";
      break;
  }
  console.log("\n[1m[4" + _0x40d34f + "m ϟ Ultraman ヅ [0m  SC VIP V1\n[1m[4" + _0x40d34f + "m " + _0x2b9329 + " [0m\n[1m Message:[0m " + _0x44599f);
};