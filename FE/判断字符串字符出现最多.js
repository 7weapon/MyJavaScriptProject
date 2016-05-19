/**
 * Created by chenkai3 on 2016/4/14.
 */
"use strict";

let str = 'aaabbbcccaaabbbaaa';

//1.采用hashtable

let obj = {};  //哈希表
let maxn = -1;
let letter;//次数最多字符

for (let n of str) {
    if (obj.hasOwnProperty(n)) {
        obj[n]++;
        if (obj[n] > maxn) {
            maxn = obj[n];
            letter = n;
        }
    } else {  //首次将字符添加到hashtable
        obj[n] = 1;
        if (obj[n] > maxn) { //如果字符串中各个字符都为一个，则以最后出现的字符
            maxn = obj[n];
            letter = n;
        }
    }
}

console.log(letter, maxn);


