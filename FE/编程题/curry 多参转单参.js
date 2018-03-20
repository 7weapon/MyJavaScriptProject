"use strict";

let fn = function (a, b, c) {
  return a + b + c
}

function curryFn(fn) {
  let args = [],
    len = fn.length

  return function func() {
    args = args.concat(Array.prototype.slice.apply(arguments))
    if (args.length === len) {
      return fn.apply(null, args)
    }
    return func;
  }
}

console.log(curryFn(fn)(1)(2)(3))