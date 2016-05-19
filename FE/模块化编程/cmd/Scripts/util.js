/**
 * Created by chenkai3 on 2016/4/27.
 */
define(function (require, exports, module) {
    console.log('util module load');
    exports.action = function (input) {
        console.log(input);
    }
})