"use strict";

const me = {
  name: 'chenkai',
  company: 'zyb'
}

const meProxy = new Proxy(me, {
  get(target, prop) {
    if (prop === 'company') {
      return 'didi'
    }
    return target[prop]
  },
  set(target, prop, value) {
    if (prop === 'name') {
      throw new Error('name: ' + value + ' 无法修改')
    }
  }
})

console.log(meProxy.company)

meProxy.name = 'chen'

meProxy.name = 'chen1'