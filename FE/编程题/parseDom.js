var parseHtml = function (dom, result) {
  result.push(dom)
  for (var i = 0, len = dom.children.length; i < len; i++) {
    parseHtml(dom.children[i], result)
  }
}