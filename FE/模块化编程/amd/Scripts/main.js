/**
 * Created by chenkai3 on 2016/4/27.
 */
requirejs.config({
    baseUrl: 'Scripts'
});

/*require(['util', 'common'], function (util, common) {
 util.say('kk');
 console.log(common.add(10, 5));
 })*/

require(['util'], function (util) {
    util.say('kk');
})


