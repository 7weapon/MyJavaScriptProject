/**
 * Created by chenkai3 on 2016/1/18.
 */
'use strict';

function timerPromisefy(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    })
}

var startDate = Date.now();

var arr = [timerPromisefy(1), timerPromisefy(32), timerPromisefy(64), timerPromisefy(128)];

Promise.all(arr).then(function (datas) {
    console.log(Date.now() - startDate + 'ms');
    console.log(datas);
})