/**
 * Copyright (c) 2015-2018, All rights reseved.
 * @fileoverview
 * @author ChenKai
 * @version 1.0 | 2018/3/19 | ChenKai    // 初始版本
 */

"use strict";

class Dictionary {
  constructor() {
    this._items = {}
  }

  set(key, val) {
    this._items[key] = val
  }

  get(key) {
    return this._items[key]
  }

  remove(key) {
    if (this.has(key)) {
      delete  this._items[key]
      return true
    }
    return false
  }

  keys() {
    return Object.keys(this._items)
  }

  size() {
    return this.keys().length
  }

  has(key) {
    return key in this._items
  }

  getItem(key) {
    return this._items[key]
  }

  clear() {
    this._items = {}
  }
}