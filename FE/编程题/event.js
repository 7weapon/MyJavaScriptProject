/*
  * 实现Ovent类，继承此类的对象拥有on、off、once、fire
*/

'use strict';

class Ovent extends Event {
  constructor() {
    super(this)
    this._callbacks = {}
  }

  on(type, handler) {
    this._callbacks = this._callbacks || {}
    this._callbacks[type] = this._callbacks[tyep] || []
    this
      ._callbacks[type]
      .push(handler)
    return this
  }

  off(type, handler) {
    var handlerList = this._callbacks[type]
    var index = handlerList.findIndex((el) => el === handler)
    index !== -1 && handlerList.splice(index, 1)
  }

  once(type, handler) {
    let self = this

    function tmpFn() {
      handler.apply(self, arguments);
      self.off(type, handler)
    }

    this.on(type, tmpFn)
    return this
  }
}