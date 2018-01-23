"use strict";

var x = 2;

console.log(eval('var x = 5; x'));

console.log(x);

function test(a){
  a = 5;
  console.log(a,arguments[0])
}

test(2)