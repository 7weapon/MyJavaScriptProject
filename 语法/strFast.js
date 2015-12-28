/**
 * Created by chenkai3 on 2015/12/18.
 */
var str = 'adbc';
var arr = [1,2,3,4];
str = String.prototype.concat.apply(str,arr);
console.log(str);