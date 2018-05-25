/**
 * Created by zybang on 2016/5/30.
 */

/*
    es6的for-of 循环支持es6迭代（通过iterables和iterators）和析构。通过数组的entries方法再结合析构
 */
"use strict";

Array.prototype.func1 = function(){};
Object.prototype.func2 = function(){};

const arr = ['a', 'b', 'c', 'd'];
arr.kk = 'kk';

for(const k in arr){
    console.log(k);
}

for (const [index,el] of arr.entries()) {
    console.log(`${el}`);
}
