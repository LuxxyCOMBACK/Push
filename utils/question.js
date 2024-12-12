const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
module.exports = _0x50ad50 => {
  return new Promise(_0x51bd12 => {
    readLine.question("\n[1m " + _0x50ad50 + "[0m", _0x56ca61 => {
      _0x51bd12(_0x56ca61);
      readLine.close();
    });
  });
};