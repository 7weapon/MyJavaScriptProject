/**
 * Copyright (c) 2015-2017 Zuoyebang, All rights reseved.
 * @fileoverview
 * @author ChenKai | chenkai@zuoyebang.com
 * @version 1.0 | 2018/2/26 | ChenKai    // 初始版本
 */

function deepClone(obj) {
  var _toString = Object.prototype.toString;

  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  // DomNode
  if (obj.nodeType && 'cloneNode' in obj) {
    return obj.cloneNode(true)
  }

  //Date
  if (_toString.call(obj) === '[object Date]') {
    return new Date(obj.getTime());
  }

  // RegExp
  if (_toString.call(obj) === '[object RegExp]') {
    var flags = [];
    if (obj.global) {
      flags.push('g');
    }
    if (obj.multiline) {
      flags.push('m');
    }
    if (obj.ignoreCase) {
      flags.push('i');
    }
    return new RegExp(obj.source, flags.join(''))
  }

  var result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {};

  for (var key in obj) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}

function A(a) {
  this.a = a;
}

var a = new A('chen');

var a_clone = deepClone(a);

console.log(a_clone.a === a.a)