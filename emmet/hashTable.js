/**
 * Created by HawkingChan on 16/1/12.
 */
var str = 'aaabbbcccaaabbbaaa';

var obj = {},
    maxn = -1,
    letter;
for (var i = 0, length = str.length; i < length; i++) {
    if (obj[str[i]]) {
        obj[str[i]]++;
        if (obj[str[i]] > maxn) {
            maxn = obj[str[i]];
            letter = str[i];
        }
    } else {
        obj[str[i]] = 1;
        if (obj[str[i]] > maxn) {
            maxn = obj[str[i]];
            letter = str[i];
        }
    }
}

console.log(letter+" : "+maxn);
