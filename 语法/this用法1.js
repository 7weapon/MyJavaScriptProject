/**
 * Created by chenkai3 on 2015/8/18.
 */

function Thing() {

}
Thing.prototype.foo = 'bar';
Thing.prototype.logFoo = function () {
    console.log(this.foo);
};
Thing.prototype.setFoo = function (newFoo) {
    this.foo = newFoo;
};


var thing1 = new Thing();
thing1.logFoo();
thing1.setFoo('foo1');
thing1.logFoo();


var thing2 = new Thing();
thing2.logFoo();
thing1.setFoo('foo2');
thing1.logFoo();

