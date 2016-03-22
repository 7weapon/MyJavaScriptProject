/**
 * Created by chenkai3 on 1/18/16.
 */
'use strict';
function onReadyPromise() {
    return new Promise(function (resolve, reject) {
        var readyState = document.readyState;
        if (readyState === 'interactive' || readyState === 'complete') {
            resolve('success');
        } else {
            window.addEventListener('DOMContentLoaded', resolve);
            //resolve('success');
        }

    })
}

onReadyPromise().then(function (data) {
    console.log('DOM fully loaded and parsed', data);
})

console.log('========starting======');