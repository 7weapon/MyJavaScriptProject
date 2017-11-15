function cssStyle2DomStyle(sName) {
  return sName.replace(/(?!^)\-(\w)(\w+)/g, function ($1, $2, $3) {
    return $2.toUpperCase() + $3.toLowerCase();
  }).replace(/^\-?/,'')
}

console.info(cssStyle2DomStyle('background-image-color'))
