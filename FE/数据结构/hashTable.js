/**
 * Copyright (c) 2015-2018, All rights reseved.
 * @fileoverview
 * @author ChenKai
 * @version 1.0 | 2018/3/19 | ChenKai    // 初始版本
 */
"use strict";


class HashTable {
  constructor() {
    this._items = {}
  }

  put(key, val) {
    let hash = this.getHashCode(key)
    this._items[hash] = val
  }

  get(key) {
    let hash = this.getHashCode(key)
    return this._items[hash]
  }

  remove(key) {
    let hash = this.getHashCode(key)
    this._items[hash] = undefined
  }

  getHashCode(key) {
    let hash = 0
    for (let i = 0, len = key.length; i < len; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }
}