(function (win) {
  function fn(str) {
    this.str = str;
  }

  fn.prototype.formate = function () {
    var args = Array
      .prototype
      .slice
      .call(arguments);
    return str.replace(/\{\s*(\d+)\s*\}/g, function (match, p) {
      return args[p] || '';
    })
  }

  win.fn = fn;

}(window))