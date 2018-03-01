/*
  有一个大数组,var a = ['1', '2', '3', ...];a的长度是100,内容填充随机整数的字符串.请先构造此数组a,然后设计一个算法将其内容去重
 */

"use strict";

let arr = []

for (var i = 1; i <= 100; i++) {
  arr.push(String((Math.random() * 100 | 0) + 1));
}

let result = Array.from(new Set(arr))

console.log(result.length, result)
