/**
 * Created by HawkingChan on 16/4/24.
 */
"use strict";

function toThousands(input) {
    var counter = 0, result = [],
        arr = (input || 0).toString().split('');
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        counter++;
        result.unshift(arr[i]);
        if (!(counter % 3) && i != 0) {
            result.unshift(',');
        }
    }
    return result.join('');
}

function toThousands2(input) {
    var counter = 0, result = '',
        input = (input || 0).toString();
    var len = input.length;
    for (var i = len - 1; i >= 0; i--) {
        counter++;
        result = input.charAt(i) + result;
        if (!(counter % 3) && i != 0) {
            result = ',' + result;
        }
    }
    return result;
}

/**
 * 循环匹配末尾的三个数字
 * @param input
 */
function toThousands3(input) {
    return (input || 0).toString().replace(/\B(?=(?:\d{3})+$)/g, ',');
}

var num = 123456;
//console.log(toThousands(num));
//console.log(toThousands2(num));
console.log(toThousands3(num));