/**
 * Created by HawkingChan on 16/1/17.
 */
'use strict';

function getUrl(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('get', url, true);
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.responseText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.responseText));
        }
        req.send();
    });
}

var url = 'http://www.baidu.com/';
getUrl(url).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

