/**
 * Created by chenkai3 on 1/18/16.
 */
'use strict';

Promise.resolve(1).then(function (data) {
    console.log(data);
    return data;
}).then(function (data) {
    console.log(data + 1);
})