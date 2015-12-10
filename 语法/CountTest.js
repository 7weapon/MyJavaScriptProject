/**
 * Created by chenkai3 on 2015/12/11.
 */

/*
 *判断一个字符串中出现次数最多的字符，并统计次数
 */

var s = 'aaabbbcccaaabbbaaa';

//使用hashtable方式
var obj = {};
var maxn = -1;
var letter;

for (var i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
        obj[s[i]]++;
        if (obj[s[i]] > maxn) {
            maxn = obj[s[i]];
            letter = s[i];
        }

    } else {
        obj[s[i]] = 1;
        if (obj[s[i]] > maxn) {
            maxn = obj[s[i]];
            letter = s[i];
        }
    }
}

console.log('letter:' + letter + ',maxn:' + maxn);