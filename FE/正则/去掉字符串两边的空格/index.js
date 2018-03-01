"use strict";

// 非正则

function trim(str) {
  var start, end;
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== '') {
      start = i;
      break;
    }
  }

  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] !== '') {
      end = i;
      break;
    }
  }

  return str.substring(start, end - 1);
}


function trim2(str){
  return str.replace(/(^\s*)|(\s*$)/g,'') ;
}



