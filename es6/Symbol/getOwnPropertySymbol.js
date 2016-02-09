/**
 * Created by HawkingChan on 16/2/9.
 */
'use strict';

let obj = {},
    a = Symbol('a'),
    b = Symbol('b');
obj[a] = 'A';
obj[b] = 'B';

var propertyArr = Object.getOwnPropertySymbols(obj);
console.log(propertyArr);