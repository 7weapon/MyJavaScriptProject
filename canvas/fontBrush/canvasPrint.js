/**
 * Created by HawkingChan on 16/3/4.
 */

;(function () {
  "use strict";

  function CanvasPrint(dom, width, height, color) {
    this.cvs = document.querySelector(dom);
    this.context = this.cvs.getContext('2d');
    this.cvsWidth = width || 800;
    this.cvsHeight = height || 800;
    this.strokeStyle = color || 'black';
  }

  CanvasPrint.prototype = {
    drawGrid: function () {
      var _this = this;
      _this.context.save();

      _this.context.beginPath();
      _this.context.moveTo(3, 3);
      _this.context.lineTo(_this.cvs.width - 3, 3);
      _this.context.lineTo(_this.cvs.width - 3, _this.cvs.height - 3);
      _this.context.lineTo(3, _this.cvs.height - 3);
      _this.context.closePath();
      _this.context.strokeStyle = 'rgb(230,11,9)';
      _this.context.lineWidth = 6;
      _this.context.stroke();

      _this.context.beginPath();
      _this.context.moveTo(0, 0);
      _this.context.lineTo(_this.cvs.width, _this.cvs.height);
      _this.context.moveTo(_this.cvs.width, 0);
      _this.context.lineTo(0, _this.cvs.height);

      _this.context.moveTo(0, _this.cvs.height / 2);
      _this.context.lineTo(_this.cvs.width, _this.cvs.height / 2);
      _this.context.moveTo(_this.cvs.width / 2, 0);
      _this.context.lineTo(_this.cvs.width / 2, _this.cvs.height);

      _this.context.closePath();
      _this.context.lineWidth = 1;
      _this.context.stroke();

      _this.context.restore();
    },
    windowToCanvs: function (x, y) {
      var rect = this.cvs.getBoundingClientRect();
      return {x: Math.round(x - rect.left), y: Math.round(y - rect.top)};
    },
    opControl: function () {
      var _this = this;
      //鼠标是否按下
      var isMouseDown = false;
      //鼠标上次移动的位置
      var lastLoc = {x: 0, y: 0};
      //上次时间戳
      var lastTime;
      var maxLineWidth = 30, minLineWidth = 1, //线条粗细
        maxStrokeV = 10, minStrokeV = 0.1;   //鼠标移动速度

      var beginStroke = function (point) {
        var curLoc = _this.windowToCanvs(point.x, point.y);
        var curTime = new Date().getTime();
        //线条宽度
        var lineWidth = (function () {
          var distance = Math.sqrt((curLoc.x - lastLoc.x) * (curLoc.x - lastLoc.x) + (curLoc.y - lastLoc.y) * (curLoc.y - lastLoc.y));
          var t = curTime - lastTime;
          //当前速度
          var curV = distance / t;
          if (curV >= maxStrokeV) {
            return maxLineWidth;
          } else if (curV <= minStrokeV) {
            return minLineWidth;
          } else {
            return maxLineWidth - (curV - minStrokeV) / ( maxStrokeV - minStrokeV) * (maxLineWidth - minLineWidth);
          }

        })();

        _this.context.beginPath();
        _this.context.moveTo(lastLoc.x, lastLoc.y);
        _this.context.lineTo(curLoc.x, curLoc.y);
        _this.context.strokeStyle = _this.strokeStyle;
        _this.context.lineCap = 'round';
        _this.context.lineJoin = 'round';
        _this.context.lineWidth = lineWidth;
        _this.context.stroke();

        lastLoc = curLoc;
        lastTime = curTime;
      };

      _this.cvs.onmouseup = function (e) {
        e.preventDefault();
        isMouseDown = false;
      };
      _this.cvs.onmousedown = function (e) {
        e.preventDefault();
        isMouseDown = true;
        lastLoc = _this.windowToCanvs(e.clientX, e.clientY);
      };
      _this.cvs.onmouseout = function (e) {
        e.preventDefault();
        isMouseDown = false;
      };
      _this.cvs.onmousemove = function (e) {
        e.preventDefault();
        if (isMouseDown) {
          var point = {x: e.clientX, y: e.clientY};
          beginStroke(point);
        }
      }
    },
    clearContext: function () {
      var _this = this;
      _this.context.clearRect(0, 0, _this.cvs.width, _this.cvs.height);
      _this.init();
    },
    init: function () {
      var _this = this;
      _this.cvs.width = this.cvsWidth;
      _this.cvs.height = this.cvsHeight;
      //绘制表格
      _this.drawGrid();
      //鼠标控制事件
      _this.opControl();

    }
  };

  window.CanvasPrint = CanvasPrint;
})();




