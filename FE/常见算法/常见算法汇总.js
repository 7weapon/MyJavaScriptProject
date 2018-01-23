"use strict";

/*
  判断一个单词是否为回文
 */

function checkPalindrome(str) {
  return str == str.split('').reverse().join('')
}

/*
  去掉数组中重复的值
 */

function uniqueArr(arr) {
  let hashMap = {},
    tmp = []
  for (let i = 0, len = arr.length; i < len; i++) {
    let el = arr[i]
    if (!hashMap.hasOwnProperty(el)) {
      hashMap[el] = 1
      tmp.push(el)
    }
  }
  return tmp
}

/*
  统计一个字符串出现最多的字符
 */
function findMaxDuplicateChar(str) {
  let hashMap = {},
    maxCount = 0,
    maxChar

  let arr = str.split('')

  for (let i = 0, len = arr.length; i < len; i++) {
    let el = arr[i]
    if (hashMap.hasOwnProperty(el)) {
      ++hashMap[el]
    } else {
      hashMap[el] = 1
    }
    if (hashMap[el] > maxCount) {
      maxCount = hashMap[el]
      maxChar = el
    }
  }
  console.log(maxChar + ': ' + maxCount + '次')
}

/*
  冒泡排序
 */

function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      let tmp = arr[i]
      if (arr[i] > arr[j]) {
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}