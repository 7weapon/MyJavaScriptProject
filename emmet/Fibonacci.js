/**
 * Created by chenkai3 on 2016/1/5.
 */
var count = 0;
var fibonacci = (function () {
    var cache = [0, 1];
    var fib = function (n) {
        count ++;
        var result = cache[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            cache[n] = result;
        }
        return result;
    }
    return fib;
})();




/*for (var i = 0; i < 10; i++) {
    console.log(i + ' : ' + fibonacci(i));
}

console.log(count);*/


var memoizer = function(cache,formula){
    var recur = function(n){
        var result = cache[n];
        if(typeof result !== 'number')
        {
            result = formula(recur,n);
            cache[n] = result;
        }
        return result;
    }
    return recur;
}

var fibonacci2 = memoizer([0,1],function(recur,n){
    return recur(n-1) + recur(n-2);
})

for (var i = 0; i < 10; i++) {
    console.log(i + ' : ' + fibonacci2(i));
}

