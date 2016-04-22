/**
 * Created by chenkai3 on 2016/4/22.
 */

/*
  *  柯里化函数（部分值）
  * 接受参数，然后将这些参数在函数形成的闭包保存起来，待到函数被真正需求时，闭包中参数被调用
 */

var currying  = function (fn)
{
    var args = [];
    return function (){
        if(arguments.length === 0)
        {
            return fn.apply(this||null,args);
        }  else
        {
            Array.prototype.push.apply(args,arguments);
            return arguments.callee;
        }
    }
}

var cost = function ()
{
    var sum = 0;
    for(var i =0,length=arguments.length;i < length;i++)
    {
        sum +=arguments[i];
    }
   return sum;
}

var fn = currying(cost);

console.log(fn(100)());
