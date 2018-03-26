/**
 * Copyright (c) 2015-2018, All rights reseved.
 * @fileoverview
 * @author ChenKai
 * @version 1.0 | 2018/3/22 | ChenKai    // 初始版本
 */

"use strict";

const twoDimension = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

for (let t of twoDimension) {
  console.log(t)
}

const rows = twoDimension.length    // 行数
const cols = twoDimension[0].length // 列数

function isValidIndex(x, n) {
  return (x >= 0 && x < n)
}

function range(len) {
  let arr = []
  let i = 0
  while (++i <= len) {
    arr.push(i)
  }
  return arr
}

for (let i of range(2 * cols - 1)) { // 共输出 2* cols - 1 行
  let diff = cols - i - 1
  for (let j of range(cols)) {
    let k = j - diff
    if (isValidIndex(k, rows)) {
      console.log(twoDimension[k][j])
    }
  }
}