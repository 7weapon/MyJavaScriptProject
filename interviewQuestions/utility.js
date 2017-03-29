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

/**
 * 传统的函数节流
 * @param method
 * @param context
 */
function throttle(method, context) {
  "use strict";
  clearTimeout(method.tId);
  method.tId = setTimeout(() => {
    method.call(context);
  }, 100)
}

var throttleV1 = function (fn, delay) {
  "use strict";
  var timer = null;
  return () => {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
};

var throttleV2 = function (fn, dely, mustRunDely) {
  "use strict";
  var timer = null;
  var t_start;
  return () => {
    var context = this, args = arguments, t_cur = +new Date();  //获取毫秒数
    clearTimeout(timer);
    if (!t_start) {
      t_start = t_cur;
    }
    if (t_cur - t_start >= mustRunDely) {
      fn.apply(context, args);
      t_start = t_cur;
    }
    else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, dely)
    }
  }
};

function inherits(subClass, superClass) {
  var F = new Function();
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
}


function Dog() {
}
Dog.prototype = {
  constructor: Dog,
  alert: function () {
    console.log(this.name);
  }
}

function Cat(){

}

inherits(Cat,Dog);

var cat = new Cat();
cat.name = 'cat';
cat.alert();