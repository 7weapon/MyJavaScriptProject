function A() {
  this.x = 100;
}

A.prototype.getX = function () {
  console.log(this.x);
}

// 原型继承  原型为父类实例化对象 ，继承父类属性和方法，需要在其原型链上追溯 父类实例化对象，在其实例化对象中追溯父类的方法，原型链遍历层数多了一层
/*function B() {
  this.y = 200;
}

B.prototype = new A;
B.prototype.constructor = B;*/

// 寄生继承   使用call 方法时，执行函数体代码，无法继承父类中的原型
/*function B() {
  A.call(this);
}*/

// 冒充对象继承   颠覆继承的概念，遍历父类的属性和对象，将其填充至子类，子类的原型链无父类原型
/*
function B() {
  var tmp = new A;
  for (var k in tmp) {
    this[k] = tmp[k];
  }
  tmp = null;
}
*/

// 寄生组合继承
function B() {
  A.call(this);
}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

///////////////////////////////////////////////////////////////////////////////////////////
var b = new B();

console.log(b.getX());