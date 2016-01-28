/**
 * Created by chenkai3 on 2016/1/21.
 */
'use strict';

/**
 *  第二幅场景
 * @param $el
 * @param pageComplete
 */
function pageB($el, pageComplete) {
    var $boy = $el.find('.christmas-boy'),
        animationEndEv = 'animationend webkitAnimationEnd',
        boyAction = {
            walk: function () { //继续走路
                var defer = $.Deferred();
                $boy.transition({'right': '4.5rem'}, 4000, 'linear', function () {
                    defer.resolve();
                })
                return defer;
            },
            stopWalk: function () {     //停止走路
                $boy.removeClass('boy-walk').addClass('boy-stop');
            },
            runWalk: function () {     //继续走路
                $boy.addClass('walk-run');
            },
            unwrapp: function () {  //解开包裹
                var defer = $.Deferred();
                $boy.addClass('boy-unwrapp').removeClass('boy-stand').one(animationEndEv, function () {
                    defer.resolve();
                })
                return defer;
            },
            strip: function (count) {  //脱衣动作
                $boy.addClass('boy-strip' + count).removeClass('boy-unwrapp');
            },
            hug: function () {  //人物拥抱
                $boy.addClass('boy-hug').one(animationEndEv, function () {
                    $('.christmas-boy-head').show();
                })
            }
        };

    boyAction.walk().then(function () {
        boyAction.stopWalk();//停止走路
    }).then(function () {
        return boyAction.unwrapp();//解开包裹
    }).then(function () {
        setTimeout(function () {
            boyAction.strip(1);
        }, 1000)
        setTimeout(function () {
            boyAction.strip(2)
        }, 2000)
        setTimeout(function () {
            boyAction.strip(3)
        }, 3000)
        //任务重叠问题
        setTimeout(function () {
            boyAction.hug();
        }, 4000)
    });
}