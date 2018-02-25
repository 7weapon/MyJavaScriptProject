/**
 * Copyright (c) 2015-2017 Zuoyebang, All rights reseved.
 * @fileoverview
 * @author ChenKai | chenkai@zuoyebang.com
 * @version 1.0 | 2018/2/22 | ChenKai    // 初始版本
 */

"use strict";

var tpl = (str, data) => str.replace(/{{([a-zA-Z$_][a-zA-Z$_0-9\.]*)}}/g, (match, p) => {
  const path = p.split('.');
  let result = data;
  while (path.length) {
    result = result[path.shift()];
  }
  return String(result) || match;
})

console.log(
  tpl('<div>{{data.a}}</div>', {
    data: {
      a: 'chen'
    }
  }))