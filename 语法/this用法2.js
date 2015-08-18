/**
 * Created by chenkai3 on 2015/8/18.
 */

function Thing1()
{
    this.foo = 'foo';
}

Thing1.prototype.foo = 'bar';

function Thing2()
{
    this.logFoo();
    Thing1.apply(this);
    this.logFoo();
}

Thing2.prototype = Object.create(Thing1.prototype);
Thing2.prototype.logFoo = function(){
    console.log(this.foo);
}

var thing2 = new Thing2();