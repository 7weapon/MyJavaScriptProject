/**
 * Created by chenkai3 on 2016/1/28.
 */

var testfunc;

/*
 可知函数表达式在执行流执行到它时才会创建函数，所以函数表达式必须被执行才能够被调用
 */


//testfunc();

if (1) {
    testfunc = function () {
        console.log(1)
    }
}
else {
    testfunc = function () {
        console.log(2)
    }
}

testfunc()


/*
  函数声明的解析是在预执行阶段
*/
test2Func();

if (1) {
    function test2Func() {
        console.log(3)
    }
} else {
    function test2Func() {
        console.log(4)
    }
}


   function test(){
       console.log(a);
       console.log(foo());
       var a = 1;
       function foo(){
           return 2;
       }
   }

/*
    可知变量和函数声明都被提前（移动到函数的顶部），但变量不分配任何值
 */

test(); //undefined    2