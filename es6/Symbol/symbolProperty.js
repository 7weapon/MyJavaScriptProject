/**
 * Created by HawkingChan on 16/2/9.
 */
var a = {};
var mySymbol = Symbol();
a[mySymbol] = 'hello!';
a.mySymbol = 'hello2!';
console.log(a[mySymbol],a.mySymbol);