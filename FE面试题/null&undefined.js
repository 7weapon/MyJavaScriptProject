/**
 * Created by chenkai3 on 2016/4/20.
 */

/*
console.log(typeof null);  //没有对象
console.log(null instanceof Object);

console.log(typeof undefined);//没有值
*/


var obj = {};

console.log(obj.name);     //对象不存在的属性 undefined

var name ;
function test()
{
    "use strict";

    this.name = 'kk';
}

console.log(test.name)