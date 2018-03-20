"use strict";

class EventEmiter {
  constructor() {
    this._events = {}
  }

  on(event, cb) {
    if (Array.isArray(event)) {
      for (let i = 0; i < event.length; i++) {
        this.on(event[i], cb)
      }
    } else {
      (this._events[event] || (this._events[event] = [])).push(cb);
    }
    return this
  }

  once(event, cb) {
    let on = function () {
      this.off(event, cb)
      cb.apply(this, arguments);
    }
    on.fn = cb;
    this.on(event, on)
    return this
  }

  off(event, cb) {
    if (!arguments.length) {
      this._events = Object.create(null)
      return this
    }
    if (!cb) {
      this._events[event] = null
      return this
    }
    let cbs = this._events[event]
    let i = cbs.length
    while (i--) {
      if (cbs[i] === cb || cbs[i] === cb.fn) {
        cbs.splice(i, 1)
        break;
      }
    }
    return this
  }

  emit(event) {
    let cbs = this._events[event]
    let arg = Array.prototype.slice.call(arguments, 1)
    if (cbs) {
      for (let i = 0; i < cbs.length; i++) {
        cbs[i].apply(this, arg)
      }
    }
    return this
  }
}