/**
 * Created by chenkai3 on 2016/1/5.
 */
var count = 1;
var test = function(){
    console.log(count + '----------'+(test.length == arguments.callee.length));
    if(count ++ < 3)
    {
        arguments.callee();
    }
}

test();