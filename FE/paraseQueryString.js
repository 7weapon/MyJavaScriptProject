/**
 * Created by chenkai3 on 2016/4/14.
 */
"use strict";

function paraseQueryString(url) {
    url = url || window.location.href;
    let search = url.substr(url.lastIndexOf('?'));
    let obj = {};
    let reg = /([^?&=]+)=([^?&=]*)/g;

    search.replace(reg, (match, $1, $2)=> {
        let key = decodeURIComponent($1);
        let value = decodeURIComponent($2);
        obj[key] = value;
    });

    return obj;
}

var query = paraseQueryString('http://www.baidu.com?url=bitauto.com&name=kk');

console.log(JSON.stringify(query));