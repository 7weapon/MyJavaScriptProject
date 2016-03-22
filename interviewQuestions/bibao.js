/**
 * Created by chenkai3 on 2016/3/22.
 */
function foo(a,b)
{
    "use strict";
    console.log(b);
    return  {
        foo:function(c)
        {
           return foo(c,a);
        }
    }
}


/*var a = foo(0);
a.foo(1)
a.foo(2)
a.foo(3)*/

//var b = foo(0).foo(1).foo(2).foo(3)

var c = foo(0).foo(1)

c.foo(2)
c.foo(3)



