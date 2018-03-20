/**
 * Created by HawkingChan on 16/2/6.
 */
'use strict';

let p = Promise.resolve(3)
let r = Promise.reject(Error('error'))

Promise.all([r, true, p]).then(values => {
    console.log(values);
  }
).catch(err => console.log(err))
