module.exports = () => {
  const _0x3438c8 = new Date();
  const _0x325b65 = _0x3438c8.getDate();
  const _0x3d0517 = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][_0x3438c8.getMonth()];
  const _0x813b15 = _0x3438c8.getFullYear();
  const _0x5a2aca = _0x3438c8.getHours().toString().padStart(2, "0");
  const _0x3b6b5b = _0x3438c8.getMinutes().toString().padStart(2, "0");
  const _0x5b96f9 = _0x3438c8.getSeconds().toString().padStart(2, "0");
  return "  " + _0x5a2aca + ":" + _0x3b6b5b + ":" + _0x5b96f9 + "  " + _0x325b65 + " " + _0x3d0517 + " " + _0x813b15;
};