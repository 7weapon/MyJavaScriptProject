"use strict";

/*
  封装一个restful api
 */

const api = new Proxy({}, {
  get(target, prop) {
    const method = /^[a-z]+/.exec(prop)[0]
    const path = '/' + prop
      .substring(method.length)
      .replace(/([a-z]([A-Z]))/g, '$1/$2')
      .replace(/\$/g, '/$/')
      .toLowerCase()

    return (...args) => {
      const url = path.replace(/\$/g, () => args.shift())
      const options = args.shift() || {}
      console.log('request: ', method, url, options)
    }
  }
})


api.get()

api.getUsers()

api.getUsers$Books(42)

api.getUsers$Books(42,{
  params:{
    page:2
  }
})


