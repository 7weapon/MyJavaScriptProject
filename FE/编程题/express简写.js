/**
 * Copyright (c) 2015-2018, All rights reseved.
 * @fileoverview
 * @author ChenKai
 * @version 1.0 | 2018/3/17 | ChenKai    // 初始版本
 */

function express() {
  let tasks = []
  let tmp = (req, res) => {
    let i = 0

    function next() {
      let task = tasks[i++]
      if (!task) return
      task(req, res, next)
    }

    next()
  }

  tmp.use = (fn) => {
    tasks.push(fn)
  }
  return tmp
}