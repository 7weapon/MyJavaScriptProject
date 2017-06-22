"use strict";

var Hue = function (opt) {
  var el = document.querySelector(opt.el);
  var data = opt.data || {};
  return new Hue.prototype.init(el, data);
}


Hue.prototype = {
  construct: Hue,

  //实现类数组，必须具备两个属性
  length: 0,
  splice: [].splice,

  init: function (el, data) {
    this.el = el;
    this.data = data;
    // 具有h-* 属性的元素
    this.elems = this.bindNodeAttr(el);
    this.digest(true)
    return this;
  },

  bindNodeAttr: function (el) {
    var arr = [],
      _this = this,
      childs = el.childNodes,
      len = childs.length,
      el,
      i, j,
      attr,
      lenAttr;
    if (len) {
      for (i = 0; i < len; i++) {
        el = childs[i];
        if (el.nodeType === 1) { // element
          for (j = 0 , lenAttr = el.attributes.length; j < lenAttr; j++) {
            attr = el.attributes[j];
            if (attr.nodeName.indexOf('h-') >= 0) {
              arr.push(el);
              switch (attr.nodeName.slice(2)) {
                case 'model' :
                  if (document.addEventListener) {
                    el.addEventListener('keydown', function () {
                      //todo 修改数据
                      _this.digest();
                    }, false);
                  } else {
                    el.attachEvent('onkeydown', function () {
                      //todo  修改数据
                      _this.digest();
                    })
                  }
                  break;
                default:
                  break;
              }
              break;
            }
          }
          arr = arr.concat(_this.bindNodeAttr(el));
        }
      }
    }
    return arr;
  },

  digest: function (bool, ms) {
    bool = bool || false;
    ms = ms || 0;
    var i, j, len, len2;
    var elems = this.elems,
      data = this.data;

    setTimeout(function () {
      for (i = 0 , len = elems.length; i < len; i++) {
        var el = elems[i],
          attrs = el.attributes;
        for (j = 0, len2 = attrs.length; j < len2; j++) {
          var attr = attrs[j];
          if (attr.nodeName.indexOf('h-') >= 0) {
            switch (attr.nodeName.slice(2)) {
              case 'model':
                if (bool) {
                  el.value = data[attr.nodeValue];
                } else if (el.value !== data[attr.nodeValue]) { // dirty check
                  data[attr.nodeValue] = el.value;
                }
                break;

              case 'text':
                if (el.innerText !== data[attr.nodeValue]) {
                  el.innerText = data[attr.nodeValue];
                }
                break;
              default:
                console.error('Error:There is only h-model and h-text');
                break;
            }
          }
        }
      }
    }, ms)
  }
}

Hue.prototype.init.prototype = Hue.prototype;