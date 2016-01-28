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
                $boy.transition({'right': '3.7rem'}, 4000, 'linear', function () {
                    defer.resolve();
                })
                return defer;
            },
            stopWalk: function () {     //停止走路
                $boy.removeClass('boy-walk');
                $boy.addClass('boy-stop');
            },
            runWalk: function () {     //继续走路
                $boy.addClass('walk-run');
            },
            unwrapp: function () {  //解开包裹
                var defer = $.Deferred();
                $boy.addClass('boy-unwrapp');
                $boy.removeClass('boy-stand');
                $boy.one(animationEndEv, function () {
                    defer.resolve();
                })
                return defer;
            },
            strip: function (count) {  //脱衣动作
                $boy.addClass('boy-strip-' + count);
                $boy.removeClass('boy-unwrapp');
            },
            hug: function () {  //人物拥抱
                $boy.addClass('boy-hug');
                $boy.one(animationEndEv, function () {
                    $('.christmas-boy-head').show();
                })
            }
        },
        $girl = $el.find('.girl'),
        girlAction = {
            standUp: function () {
                var defer = $.Deferred();
                //起身动作
                setTimeout(function () {
                    $girl.addClass('girl-standUp');
                }, 2000);
                //抛书
                setTimeout(function () {
                    $girl.addClass('girl-throwBook');
                    defer.resolve();
                }, 5000)
                return defer;
            },
            walk: function () {
                var defer = $.Deferred();
                $girl.addClass('girl-walk');
                $girl.transition({'left': '4.5rem'}, 4000, 'linear', function () {
                    defer.resolve();
                })
                return defer;
            },
            stopWalk: function () {
                $girl.addClass("walk-stop")
                $girl.removeClass("girl-standUp")
                $girl.removeClass("girl-walk")
                $girl.removeClass("girl-throwBook")
                $girl.addClass("girl-stand")
            },
            //选择3d
            choose: function(callback) {
                $girl.addClass("girl-choose")
                    .removeClass("walk-stop");
                $girl.one(animationEndEv, function() {
                    callback();
                })
            },
            //泪奔
            weepWalk: function(callback) {
                $girl.addClass("girl-weep");
                $girl.transition({
                    "left": "7rem"
                }, 1000, "linear", function() {
                    $girl.addClass("walk-stop").removeClass("girl-weep")
                    callback();
                })
            },
            //拥抱
            hug: function() {
                $girl.addClass("girl-hug").addClass("walk-run")
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
        }, 4000);
    });

    girlAction
        .standUp()
        .then(function() {
            //女孩停止走路
            return girlAction.stopWalk();
        })
        .then(function() {
            //女孩走路
            return girlAction.walk();
        })
        .then(function(){
            //选择
            girlAction.choose(function() {
                //继续走路
                girlAction.weepWalk(function() {
                    //拥抱
                    girlAction.hug();
                })
            })

        })
}