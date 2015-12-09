/**
 * Created by chenkai3 on 2015/7/24.
 */

var x = 1;
var f = function()
{
    console.log(this.x);
}

f();

var ff = function()
{
    this.x = 2;
    console.log(this.x);
}

ff();

console.log(this.x);

