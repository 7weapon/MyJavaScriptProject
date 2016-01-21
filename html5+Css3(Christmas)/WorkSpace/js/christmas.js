/**
 * Created by chenkai3 on 2016/1/21.
 */
'use strict';

/**
 *切换页面，模拟镜头效果
 * @param $el
 * @param effect
 * @param callback
 */
function changePage($el, effect, callback) {
    $el.addClass(effect).one('animationend webkitanimationend', function () {
        callback && callback();
    })
}

/**
 * 背景音乐播放
 * @param url
 * @param loop
 * @constructor
 */
function HTML5Audio(url, loop) {
    var audio = new Audio(url);
    audio.autoplay = true;
    audio.loop = loop || false;
    audio.play();
    return {
        end: function (callback) {
            audio.addEventListener('ended', function () {
                callback();
            }, false)
        }
    }

}


/**
 * 中间调用层
 * @constructor
 */
var Christmas = function () {
    var $pageA = $('.page-a'),
        $pageB = $('.page-b'),
        $pageC = $('.page-c'),
        url = 'http://www.imooc.com/upload/media/two.mp3';

    $('#page').bind('change', function (e) {
        var pageName = e.target.value;
        switch (pageName) {
            case 'page-b':
                changePage($pageA, 'effect-out', function () {
                    new pageB()
                })
                break
            case 'page-c':
                changePage($pageC, 'effect-in', function () {
                    new pageC()
                })
                break;
        }
    })

    $('#btnSwitch').bind('click', function () {
        //声明观察者
        var observer = new Observer();
        //场景A发布completeA
        new pageA(function () {
            observer.publish('completeA')
        })
        //进入场景B
        observer.subscribe('pageB', function () {
            new pageB(function () {
                observer.publish('completeB');
            })
        })

        observer.subscribe('pageC', function () {
            new pageC(function () {
                alert('end')
            });
        })

        //A-B场景切换
        observer.subscribe('completeA', function () {
            changePage($pageA, 'effect-out', function () {
                observer.publish('pageB');
            })
        });

        //B-C场景切换
        observer.subscribe('completeB', function () {
            changePage($pageC, 'effect-in', function () {
                observer.publish('pageC');
            })
        })
    })

    $('#btnPlay').click(function () {
        var audio = HTML5Audio(url);
        audio.end(function () {
            alert('播放结束')
        })
    })

    $('#btnPlayLoop').click(function(){
        HTML5Audio(url,true)
    })


}

$(function () {
    Christmas();
})