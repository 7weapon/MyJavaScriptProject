/**
 * Created by chenkai3 on 2016/4/27.
 */
define(function (require, exports, module) {
    console.log('a module load');
    var util = require('util');
    exports = module.exports  = function(input){
        util.action('a function'+input);
    }
});