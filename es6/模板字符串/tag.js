/**
 * Created by HawkingChan on 16/2/10.
 */
'use strict';

function tag(strings) {
    console.log(arguments);
    console.log(strings[0]);
    console.log(strings[1]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

let a = 5, b = 10;

console.log(tag`Hello ${a + b} world ${a * b}`);