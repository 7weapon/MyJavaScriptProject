'use strict';

function thoundFormat(str) {
  return str.replace(/(?!^)(\d{3})+$/g)
}

// 循环拼接字符，每三个字符添加,
function thoundFormat2(str) {
  var result = '',
    index = 0,
    len = str.length - 1;

  while (len >= 0) {
    index % 3 === 0 && index !== 0 ? result += ',' : result += str[len];
    len--;
    index++;
  }

  result = result.split('').reverse().join('');
  return result;
}


// 循环push分隔符
function thoundFormat3(str) {
  var result = '',
    index = 0,
    len = str.length,
    arr = str.split('');

  while (len > index) {
    len - index !== len && arr.splice(len - index, 0, ',');
    index += 3;
  }
  return arr.join('');
}