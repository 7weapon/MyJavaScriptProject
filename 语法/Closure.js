/**
 * Created by HawkingChan on 15/7/24.
 */
/**
 * 闭包 ：
 * 每个function在调用时会创建新的上下文及作用域链，而作用域链就是把外层（最外层）上下文所绑定的变量对象逐一串联起来，使当前function获取外层上下文变量、数据等。如果我们在function中定义新的function，同时将内层function做为值返回，那么内层的function所包含的作用域链将会一起返回，即使内层funcion在其他上下文中执行，其内部的作用域链仍然保持着原有数据，而当前的上下文可能无法获取原先外层function中的数据，使得function内部的作用域链被保护起来，从而形成闭包
 **/

var x = 100;
var inc = function()
{
    var x = 0;
    return function(){
        console.log(x++);
    }
}
