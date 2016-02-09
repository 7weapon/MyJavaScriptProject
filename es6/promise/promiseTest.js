/**
 * Created by HawkingChan on 16/2/6.
 */
'use strict';
var promise = new Promise(function (resolve, reject) {
    resolve('Lucy');
});
promise.then(function (data) {
    console.log(data + ' is a girl');
}, function (err) {
    console.log(err);
})