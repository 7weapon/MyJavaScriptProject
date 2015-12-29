/**
 * Created by chenkai3 on 2016/1/5.
 */
var obj = {
    a: function () {
        console.log('a');
        return this;
    },
    b: function () {
        console.log('b');
        return this;
    }
}

obj.a().b();


Function.prototype.method = function (name, func) {
    if (!this.prototype[name])
        this.prototype[name] = func;
    return this;
}

String.method ('trim',function(){
    return this.replace(/^\s+|\s+$/g,'');
})

String.method('log2',function(){
    console.log("链式调用");
    return this;
});

String.method('r',function(){
    return this.replace(/a/,'');
});


var str = 'abc ';
console.log(str.trim().log2().r()) ;