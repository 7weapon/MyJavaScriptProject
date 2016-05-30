/**
 * Created by zybang on 2016/5/30.
 */
/*
    构造函数、原型、实例之间的区别
 */

function Person(name)
{
    this.name = name;
}

Person.prototype.getName  = function(){
    console.log(this.name);
}

var p = new Person('kk');

//1.构造函数的原型
console.log(Person.prototype) ;

//2.原型中的构造器

console.log(Person.prototype.constructor);

//3.实例的__proto__ 与 原型是否恒等

console.log(Person.prototype === p.__proto__);