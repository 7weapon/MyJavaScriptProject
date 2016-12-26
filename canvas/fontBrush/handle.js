/**
 * Created by HawkingChan on 16/3/6.
 */
var cvsWidth = Math.min(400, $(window).width);
var cvs = new CanvasPrint('.canvas', cvsWidth, cvsWidth);
cvs.init();
document.querySelector('.controller').style.width = cvs.cvsWidth + 'px';

var color_btns = document.querySelectorAll('.color_btn');

$('#clear_btn').click(function (e) {
    cvs.clearContext();
});

$('.color_btn').click(function (e) {
    var $that = $(this);
    $that.addClass('color_btn_selected').siblings().removeClass('color_btn_selected');
    cvs.strokeStyle = $that.css('background-color');
});
