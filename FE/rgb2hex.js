function rgb2hex(sRgb) {
  var reg = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  var ret = sRgb.match(reg);
  if (!ret) {
    return sRgb;
  }
  var str = '#';
  for (var i = 1; i <= 3; i++) {
    var m = parseInt(ret[i]);
    if (m < 0 || m > 255) {
      return sRgb;
    }
    str += (m >= 16) ? m.toString(16) : '0' + m.toString();
  }
  return str;
}

console.info('---', rgb2hex('rgb(255,255,254)'))