/**
 * Copyright (c) 2015-2017 Zuoyebang, All rights reseved.
 * @fileoverview
 * @author ChenKai | chenkai@zuoyebang.com
 * @version 1.0 | 2018/2/26 | ChenKai    // 初始版本
 */

function flatten(arr, output) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i];
    if (!Array.isArray(item)) {
      output.push(item)
    } else {
      flatten(item,output);
    }
  }
}

var output = [];
flatten([1,[2,3],[4,5,6],7],output)

console.log(output)