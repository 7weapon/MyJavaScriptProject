/**
 * Created by chenkai3 on 2016/4/27.
 */
define(function(require,exports,module){
    var common = require('common') ;
    exports.say = function(input){
        input += common.minus(10,5);
        console.log('AMD : '+input);
    }
})
