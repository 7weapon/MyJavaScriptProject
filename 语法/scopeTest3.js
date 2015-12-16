/**
 * Created by chenkai3 on 2015/12/17.
 */

function test(o) {
    var i = 0;
    if (typeof o == 'object') {
        var j = 0;
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }
        console.log(i);
    }
    console.log(j);
}


//test();

var a = [1, 2, 3, 4];

var b = a.reduce(function (x, y) {
    return x + y
}, 0);

var c = a.reduce(function(x,y){return x * y},1) ;

console.log(b);
console.log(c);