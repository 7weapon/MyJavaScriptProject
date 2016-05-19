/**
 * Created by chenkai3 on 2016/4/14.
 */
"use strict";

/*function fn(a) {
 console.log(a);
 var a = 2;
 function a() {
 };
 console.log(a);
 }*/

/*
 变量名提升， 函数名提升 优先于 变量名
 */
function fn(a) {
    function a() {
    }

    console.log(a);
    var a = 2;
    console.log(a);
}


fn(1);