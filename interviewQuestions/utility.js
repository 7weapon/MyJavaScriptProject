/**
 * Created by chenkai3 on 2016/3/22.
 */

/**
 * 获取指定函数的名称（兼容ie）
 * @param func
 * @returns {*}
 */
function getFuncName(func) {
    if (typeof func !== 'function') {
        throw  new TypeError('support Type Function');
    }
    if (func.name) {
        return func.name
    }
    var ret = func.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('C'));
    return ret;

}


if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof  this !== 'function') {
            throw  new TypeError('Function.prototype.bind-what is trying to be bound is not callable');
        }

        //获取参数数组
        var aArgs = Array.prototype.slice.call(arguments, 1);
        var fToBind = this;   //被绑定的函数对象
        var fNOP = function () {
        };
        var fBound = function () {
            return fToBind.apply(this instanceof fNOP ? this : oThis || this, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fNOP;
    }
}

function getQueryObject(url) {
    "use strict";
    url = url || window.location.href;
    var search = url.substr(url.lastIndexOf('?'));
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function (match, $1, $2) {
        var name = decodeURIComponent($1);
        var value = decodeURIComponent($2);
        value = String(value);
        obj[name] = value;
    });

    return obj;
}


