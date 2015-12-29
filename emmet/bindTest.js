/**
 * Created by chenkai3 on 2015/12/31.
 */
Function.prototype.bind = function(context) {
    var self = this;
    return function(){
        return self.apply(context,arguments);
    }
}

var obj = {
    name:'KK'
};
var func = function(){
    console.log(this.name)
}.bind(obj);

func();