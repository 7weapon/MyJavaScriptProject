/**
 * Created by chenkai3 on 2016/4/27.
 */
define(function (require, exports, module) {
    console.log('util module load');
    var common = require('common');
    exports.say = function (input) {
        input += common.minus(10, 5);
        console.log(module.id, module.uri, module.exports);
        console.log('AMD : ' + input);
    }
})


