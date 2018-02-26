/**
 * Copyright (c) 2015-2017 Zuoyebang, All rights reseved.
 * @fileoverview
 * @author ChenKai | chenkai@zuoyebang.com
 * @version 1.0 | 2018/2/26 | ChenKai    // 初始版本
 */

function Page() {

}

Page.prototype = {
  constructor: Page,
  postA: function (a) {
    console.log('a: ' + a)
  },
  postB: function (b) {
    console.log('b: ' + b)
  },
  postC: function (c) {
    console.log('c: ' + c)
  },
  checkfy: function () {
    return Math.random() > .5
  }
}

function checkfy(obj) {
  for (var key in obj) {
    if (key.indexOf('post') != -1 && typeof obj[key] === 'function') {
      ~function (key) {
        var fn = obj[key];
        obj[key] = function () {
          if (obj.checkfy()) {
            fn.apply(obj, arguments)
          }
        }
      }(key)
    }
  }
}

checkfy(Page.prototype)

var obj = new Page()

obj.postA('checkfy')
obj.postB('checkfy')
obj.postC('checkfy')