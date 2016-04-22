/**
 * Created by chenkai3 on 2016/4/22.
 */

/*
 *  回调函数  当做参数进行传递
 */

function cb(item, i, arr) {
    "use strict";
    console.log(item);
}

var arr = [1, 2, 3];

arr.forEach(cb,arr);
