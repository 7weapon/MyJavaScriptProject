/* var color = '#808080';
 // var output = color.replace(/#(\d+)/, '$1' + '~~');
 //非捕获性分组
 var output = color.replace(/#(?:\d+)/, '$1' + '~~');

 console.log(RegExp.$1);
 console.log(output);*/

//分组 引用

var url = 'www.google.google.com';
var reg = /([a-z]+)\.\1/;

console.log(url.replace(reg, '$1'));
console.log(RegExp.$1);

