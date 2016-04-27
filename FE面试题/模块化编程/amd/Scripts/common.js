/**
 * Created by chenkai3 on 2016/4/27.
 */
define(function (require, exports, module) {
    console.log('common module load');
    exports = module.exports = {
        add: function (x, y) {
            return x + y;
        },
        minus: function (x, y) {
            return x - y;
        }
    }
})