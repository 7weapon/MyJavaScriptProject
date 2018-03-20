/**
 * Copyright (c) 2015-2018, All rights reseved.
 * @fileoverview
 * @author ChenKai
 * @version 1.0 | 2018/3/17 | ChenKai    // 初始版本
 */

"use strict";

Promise._all = (promises) => new Promise((resolve, reject) => {
  {
    let gen = (len, resolve) => {
      let count = 0,
        result = []
      return function (i, val) {
        result[i] = val
        if (++count === len) {
          resolve[result]
        }
      }
    }

    let done = gen(promises.length, resolve)
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(val => {
        done(i, val)
      }, reject)
    }
  }
})

