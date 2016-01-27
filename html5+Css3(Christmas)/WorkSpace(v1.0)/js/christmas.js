/**
 * Created by chenkai3 on 2016/1/21.
 */
'use strict';


/**
 * 中间调用层
 * @constructor
 */
var Christmas = function () {
    /*var $pageA = $('.page-a');
    new pageA($pageA);*/
    var $pageB = $('.page-b');
    new pageB($pageB);
}

$(function () {
    /*$('#btnSleigh').click(function(){
     Christmas();
     })*/
    $('#btnRunB').click(function () {
        Christmas();
    })

})