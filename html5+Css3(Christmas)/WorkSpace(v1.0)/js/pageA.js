/**
 * Created by chenkai3 on 2016/1/21.
 */
'use strict';
function pageA($el) {
    this.$root = $el;
    this.$boy = $el.find('.chs-boy');
    this.run();
}

/**
 * 运行下一个动画
 * @param options   参数
 */
pageA.prototype.next = function (options) {
    var defer = $.Deferred();
    this.$boy.transition(options.style, options.time, 'linear', function () {
        defer.resolve()
    })
    return defer;
}

/**
 * 停止走路
 */
pageA.prototype.stopWalk = function () {
    this.$boy.removeClass('chs-boy-deer')
}


pageA.prototype.run = function (callback) {
    var that = this,
        next = function () {
            return this.next.apply(this, arguments)
        }.bind(that);

    next({
        'style': {
            'top': '4rem',
            'right': '16rem',
            'scale': '1.2'
        },
        'time': '10000'
    }).then(function () {
        return next({
            'style': {
                'rotateY': '-180deg',
                'scale': '1.5'
            },
            'time': '500'
        })
    }).then(function () {
        return next({
            'style': {
                'top': '7.8rem',
                'right': '1.2rem'
            },
            'time': '7000'
        })
    }).then(function () {
        that.stopWalk()
    })
}