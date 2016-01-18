/**
 * Created by chenkai3 on 1/18/16.
 */
'use strict';

function onReady(fn) {
    var readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
       setTimeout(fn,0);
    } else {
        window.addEventListener('DOMContentLoaded', fn);
    }
}

onReady(function () {
    console.log('DOM fully loaded and parsed');
})

console.log('===starting===');