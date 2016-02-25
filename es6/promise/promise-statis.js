/**
 * Created by chenkai3 on 2016/2/25.
 */
"use strict";

var userCache = {};

/**
 * 获取用户消息信息
 * @param name
 * @returns {Promise.<*>}
 */
function getUserDetail(name) {
    if (userCache[name]) {
        return Promise.resolve(userCache[name]);
    } else {
        return Promise.resolve(name).then(data=> {
            userCache[data] = data;
            return data;
        });
    }
}

let promise = getUserDetail('tom');

promise.then(data=>console.log(data));