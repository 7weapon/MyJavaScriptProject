/**
 * Created by HawkingChan on 15/5/2.
 */
var result = [];
/*function foo()
{
    for(var i = 0; i < 5; i++)
    {
        result[i] = function () {
            console.log(i);
        };
    }
}
foo();
result[0]();
result[4]();*/
/*这种写法希望foo函数变量i被内部循环的函数使用，并且分别能获得他们的索引，但是实际上只能获得该变量最后保留的值
  也就是说，闭包中记录的自由变量，只是对这个变量的一个引用，而非变量的值，当这个变量被改变了，闭包获取的变量值
  也会被改变
 */

//解决方法
function foo()
{
    for(var i = 0;i < 5;i++)
    {
        result[i] = (function (j) {
           // console.log(j);
            return function()
            {
                console.log(j);
            }
        })(i);
    }
}
foo();
result[0]();
result[1]();
