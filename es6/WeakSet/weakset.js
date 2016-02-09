/**
 * Created by HawkingChan on 16/2/6.
 */

'use strict';

let a = [[1,2],[3,4]];

let wset = new WeakSet(a);

let foo = {};
let obj = {};

wset.add(foo);

console.log(wset.has(obj));