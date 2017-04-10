/*
 var str = 'aaaab',
 reg1 = /a+/,
 reg2 = /a+?/;

 console.log(str.match(reg1));
 console.log(str.match(reg2));
 */


var str = "<div class='v1'><div class='v2'>test</div><input type='text'/></div>",
  reg1 = /<div.*<\/div>/,
  reg2 = /<div.*?<\/div>/;

console.log(str.match(reg1));
console.log(str.match(reg2));
