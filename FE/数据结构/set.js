"use strict";

/*
  集合是有一组无序且唯一项组成
 */

class Set {
  constructor() {
    this._items = {}
  }

  has(item) {
    return item in this._items
  }

  add(item) {
    if (this.has(item)) {
      return false
    }
    this._items[item] = item
    return true
  }

  remove(item) {
    if (this.has(item)) {
      delete this._items[item]
      return true
    }
    return false
  }

  clear() {
    this._items = []
  }

  size() {
    return this._items.length
  }

  values() {
    return Object.keys(this._items)
  }

  union(otherSet) {
    let unionSet = new Set()
    this._items.forEach((item) => unionSet.add(item))
    otherSet.values().forEach((item) => unionSet.add(item))
    return unionSet
  }

  intersection(otherSet) {
    let intersectionSet = new Set()
    this.values().forEach((item) => {
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    })
    return intersectionSet
  }

  difference(otherSet) {
    let diffSet = new Set()
    this.values().forEach((item) => {
      if (!otherSet.has(item)) {
        diffSet.add(item)
      }
    })
    return diffSet
  }

  isSubset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let values = this.values()
    for (let i = 0, len = values.length; i < len; i++) {
      if (!otherSet.has(values[i])) {
        return false
      }
    }
    return true
  }
}