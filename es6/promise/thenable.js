/**
 * Created by HawkingChan on 16/1/17.
 */
'use strict';

const url = 'http://www.baidu.com';

var promise = Promise.resolve($.ajax(url));

promise.then(function(data){
    console.log(data);
});