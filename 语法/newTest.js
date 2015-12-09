/**
 * Created by chenkai3 on 2015/6/3.
 */
/*
    js中new操作符：如果在一个函数前面带上new来调用该函数，那么将会创建一个隐藏连接到该函数的prototype成员的
    新对象，同时this将会被绑定到新对象上
 */

/*
//1.如果一个函数没有返回值，没有prototype成员，然后使用new，会是什么结果呢？
function Class1(name)
{
    this._name = name;
}

//使用new，说明p1的类型是Object，说明函数的默认prototype是Object
var p1 = new Class1('zhangsan');
console.log(p1); //{ _name: 'zhangsan' }
var p2 = Class1('lisi');
console.log(p2);//undefined

*/

/*
//2.有返回值的函数
function Class2WithReturn(name)
{
    this._name = name;
    return this._name;
}

//使用new，函数的prototype类型是Object，所以p1是Object类型
var p1 = new Class2WithReturn('zhangsan');
console.log(p1);
//未使用new，函数的返回值类型为String，所以p2是string
var p2 = Class2WithReturn('lisi');
console.log(p2);
*/
/*
//3.如果返回类型是new出来的对象
function Class3WithNew(name)
{
    this._name = name;
    return new String(this._name);
}
var p1 = new Class3WithNew('zhangsan');
console.log(p1);   // [String: 'zhangsan']
console.log(typeof(p1));//Object

var p2 = Class3WithNew('李四');
console.log(p2);    //[String: '李四']
*/

//3.this是否被新创建的对象所取代
var Person = function(name,num)
{
    this._name = name;
    this._num = num;
}
Person.prototype.getString = function()
{
    return 'name:'+this._name+','+'num:'+this._num;
}

var p = new Person('zhangsan','123');
console.log(p.getString());

var p2 = Person('zhangsan','123');
console.log(p2);     //undefined
try{
    console.log(p2.getString());
}
catch(error)
{
    console.log(error);
}

