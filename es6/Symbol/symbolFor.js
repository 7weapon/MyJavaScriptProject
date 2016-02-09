/**
 * Created by HawkingChan on 16/2/9.
 */
'use strict';

let s1 = Symbol.for('foo'),
    s2 = Symbol('foo2');

console.log(Symbol.keyFor(s1));
console.log(Symbol.keyFor(s2));