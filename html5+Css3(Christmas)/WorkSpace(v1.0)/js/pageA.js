/**
 * Created by chenkai3 on 2016/1/21.
 */
'use strict';
function pageA($el) {
    this.$root = $el;
    this.$boy = this.$root.find('.chs-boy');
    this.$window = this.$root.find('.window');
    this.$leftWin = this.$window.find('.window-left');
    this.$rightWin = this.$window.find('.window-right');
    this.run(function(){
        alert('窗户已经打开了')
    });
}

/**
 * 打开窗户
 * @param callback
 */
pageA.prototype.openWindow = function(callback){
  var count = 1,
      complete = function(){
          ++count;
          if(count == 2)
          {
              callback && callback();
          }
      };
    var bind = function(data){
        data.one('transitionend webkitTransitionEnd',function(e){
            data.removeClass('window-transition');
            complete();
        })
    }

    bind(this.$leftWin.addClass('window-transition').addClass('hover'));
    bind(this.$rightWin.addClass('window-transition').addClass('hover')) ;

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
        'time': '8000'
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
        that.openWindow(function(){
            callback && callback();
        })
    })
}