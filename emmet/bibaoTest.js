/**
 * Created by chenkai3 on 2015/12/31.
 */
function f(x) {
    var arr = [];
    for (var i = 0; i < x.length; i++) {
        var temp = x[i];
        arr.push(function () {
            console.log(temp + '  ' + x[i]);
        })
    }
    //当循环结束时，此时i=x.length
    return arr;
}

function e() {
    var arr = f(['a,', 'b', 'c', 'd']);
    for (var i = 0; i < arr.length; i++) {
        arr[i]();
    }
}

//e();

function f2(x) {
    var arr = [];
    for (var i = 0; i < x.length; i++) {
        var obj = x[i];
        (function (temp, i) {
            arr.push(function () {
                console.log(temp + '  ' + x[i]);
            })
        })(obj, i);
    }
    return arr;
}

function e2() {
    var arr = f2(['a,', 'b', 'c', 'd']);
    for (var i = 0; i < arr.length; i++) {
        arr[i]();
    }
}

e2();
