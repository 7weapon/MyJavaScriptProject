/**
 * Created by chenkai3 on 2015/12/31.
 */
"use strict";

Function.prototype._bind = function (context) {
  let self = this
  return (...args) => {
    self.apply(context, args)
  }
}

var obj = {
  name: 'KK'
};
var func = function () {
  console.log(this.name)
}._bind(obj);

func();