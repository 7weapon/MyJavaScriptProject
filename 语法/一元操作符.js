/**
 * Created by HawkingChan on 16/1/31.
 */

var a = 1,
    b= '123',
    c =false,
    d = 1.21,
    e = {    //先调用对象的valueOf()方法获得可供操作的a值,然后对a值进行操作
        valueOf:function(){
            return '321';
        }
    }

a++;
b++;
c++;
d++;
e++;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

