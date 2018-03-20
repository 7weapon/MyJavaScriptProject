/**
 * Copyright (c) 2015-2018, All rights reseved.
 * @fileoverview
 * @author ChenKai
 * @version 1.0 | 2018/3/17 | ChenKai    // 初始版本
 */

"use strict";

class Stack {
  constructor() {
    this._items = []
  }

  push(item) {
    this._items.push(item)
  }

  pop() {
    return this._items.pop()
  }

  peek() {
    return this._items[this._items.length - 1]
  }

  isEmpty() {
    return this._items.length === 0
  }

  size() {
    return this._items.length
  }

  clear() {
    this._items = []
  }

  print() {
    console.log(this._items)
  }
}

// 正整数的二进制转化

function divideBy2(num) {
  let stack = new Stack()
  let rem, decString = ''

  while (num > 0) {
    rem = num % 2
    stack.push(rem)
    num = Math.floor(num / 2)
  }

  while (!stack.isEmpty()) {
    decString += stack.pop().toString()
  }
  return decString
}

console.log(divideBy2(10))