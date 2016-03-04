/**
 * Created by chenkai3 on 2016/3/1.
 */
"use strict";

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    console.log(this.x, this.y);
}


class Person {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    toString() {
        console.log(this.name, this.phone);
    }
}

Object.assign(Person.prototype, {
    toSay(){
        console.log(this.name+', hello');
    }
});

let p = new Person('chan', '18515659527');

p.toSay();

console.log(p instanceof Person);

console.log(typeof Person);

console.log(Person === Person.prototype.constructor);

console.log(p.hasOwnProperty('name'));
