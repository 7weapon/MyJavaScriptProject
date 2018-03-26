/**
 * Copyright (c) 2015-2018, All rights reseved.
 * @fileoverview
 * @author ChenKai
 * @version 1.0 | 2018/3/20 | ChenKai    // 初始版本
 */

"use strict";

function swap(index1, index2,arr) {
  let tmp = arr[index2]
  arr[index2] = arr[index1]
  arr[index1] = tmp
}

const sortAlgorithm = {
  // 时间复杂度 O(n^2)
  bubbleSort(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr [j + 1]) {
          swap(j, j + 1,arr)
        }
      }
    }
    return arr
  },
  selectionSort(arr) {
    let indexMin
    for (let i = 0, len = arr.length; i < len - 1; i++) {
      indexMin = i
      for (let j = i; j < len; j++) {
        if (arr[indexMin] > arr[j]) {
          indexMin = j
        }
      }
      indexMin !== i && ~swap(indexMin, i,arr)
    }
    return arr
  },
  quickSort(arr) {
    function sort(arr) {
      let pivotIndex = (arr / 2) | 0
      let pivot = arr.splice(pivotIndex, 1)[0]
      let left = []
      let right = []
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > pivot) {
          right.push(arr[i])
        } else {
          left.push(arr[i])
        }
      }
      return sort(left).concat([pivot], sort(right))
    }
  }

}

console.log(sortAlgorithm.bubbleSort([2,3,1,5,6,4,8]))
