/**
 * Created by zybang on 2016/5/30.
 */

/*
 原型链继承
 */

function Animal(type) {
    this.type = type;
}

Animal.prototype.getType = function () {
    console.log(this.type);
}

function Dog(name) {
    this.name = name;
}

Dog.prototype = new Animal('Dog');
Dog.prototype.getName = function () {
    console.log(this.name);
}

var d = new Dog('哈士奇');
d.getType();
d.getName();