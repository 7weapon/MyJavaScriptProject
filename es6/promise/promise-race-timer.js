/**
 * Created by chenkai3 on 2016/1/18.
 */

var timerPromisefy = function (delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}


var startDate = Date.now();

var arr = [timerPromisefy(1), timerPromisefy(32), timerPromisefy(64), timerPromisefy(128)];

Promise.race(arr).then(function (datas) {
    console.log(Date.now() - startDate + 'ms');
    console.log(datas);
})