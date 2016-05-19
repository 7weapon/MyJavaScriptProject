/**
 * Created by chenkai3 on 2016/4/22.
 */

/*
 * 偏函数 将函数当做返回值的函数，一个调用另外一个函数的参数或者内置变量的函数
 */

function isType(type) {
    "use strict";
    return function (obj) {
        return Object.prototype.toString.apply(obj) === '[object '+type+']';
    }
}

var arr = '123123';

console.log(isType('String')(arr));

console.log(Object.prototype.toString.apply(arr));