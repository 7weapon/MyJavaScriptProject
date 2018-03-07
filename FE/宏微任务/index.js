"use strict";

setTimeout(() => {
  console.log('timeout')
}, 100)

new Promise(resolve => {
  console.log('promise1')
  for (let i = 0; i < 1000; i++) {
    i == 999 && resolve()
  }
  console.log('promise2')
}).then(() => {
  console.log('then')
})

console.log('global')