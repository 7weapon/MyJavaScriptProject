/**
 * Copyright (c) 2015-2017 Zuoyebang, All rights reseved.
 * @fileoverview
 * @author ChenKai | chenkai@zuoyebang.com
 * @version 1.0 | 2018/1/16 | ChenKai    // 初始版本
 */


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = Array.prototype.slice.apply(arguments);

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    callNow && func.apply(context, args);
  }
}

function throttle(func, wait, mustRun) {
  var timeout,
    startTime = new Date();

  return function () {
    var context = this,
      args = Array.prototype.slice.apply(arguments),
      curTime = new Date();

    clearTimeout(timeout);

    if (curTime - startTime >= mustRun) {
      func.apply(context, args);
      startTime = curTime;
    } else {
      timeout = setTimeout(func.bind(context, args), wait);
    }
  }
}

throttle(function () {
  console.log(arguments);
},200,150)(1)

