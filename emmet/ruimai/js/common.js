$(document).ready(function (e) {

/*切换标签*/	
$(".menu li").each(function(i){
	$(this).mouseover(function(){
		$(".menu li").removeClass("cur").eq(i).addClass("cur");
		$(".jx").hide().eq(i).show()		
	})
})
	

/*隔行变色*/
$(".jxs tr:even").addClass("jxs_bg")


/*敬请期待*/
$(".results").each(function () {
	var s = $(this).html();
	$(this).hover(function () {
		$(this).html('敬请期待');
	}, function () {
		$(this).html(s);
	});
});


/*hover方式出现浮层*/
$("#txtShow li").hover(function(){
	$(this).find('.txtDiv').show();
},function(){
	$(this).find('.txtDiv').hide();
})

/*经销商列表*/
$(".dealer tr").each(function(){
    $(this).find("td").eq(0).addClass("t_l")
	$(this).find("td").eq(1).addClass("t_l")
	$(this).find("td").eq(2).addClass("t_r")
})


	

/*弹窗*/
$('.pop_close').click(function () {
	$(this).parent().fadeOut(200)
	$('.mask').fadeOut(200);
})

$('.mask').click(function () {
	$('.pop').fadeOut(200)
	$('.mask').fadeOut(200);
})

$('.pop_login_btn').click(function () {
	$('.pop_login_box').fadeIn(200);
	$('.mask').fadeIn(200);
})

$('.pop_btn_2').click(function () {
	$('.pop_box_2').fadeIn(200);
	$('.mask').fadeIn(200);
})
	


/*浮动菜单*/
$(window).scroll(function(e){
	s = $(document).scrollTop();	
	/*回到顶部*/
	if($(window).scrollTop() >= 300){ 
			$('.actGotop').fadeIn(300); 
		}else{    
			$('.actGotop').fadeOut(300); 
	}  
})
$('.actGotop').click(function(){$('html,body').animate({scrollTop: 0}, 500);});
})

/*手机扫描默认转到手机端代码*/
//function switchMobi(mobiStatus,mobileUrl){
//	if(mobiStatus){
//	    var pcUrl = window.location.href;
//	    var pcUrlArr = pcUrl.split("/");
//	    var thisPage = pcUrlArr[5]
//	    var mobileUrlDefault = "http://www.bitauto.com/zhuanti/adtopic/" + thisPage +"_m";
//	    a = mobileUrl.length>0 ? mobileUrl : mobileUrlDefault;
//	    //alert(a)
//	    if(/iphone|ios|ipad|android|mobile/i.test(navigator.userAgent.toLowerCase())){
//	        location.href= a;
//	    }
//    }
//}
//switchMobi(false,"")
//参数1 true为默认有对应手机网站，参数2 为空为网址为默认
//1如移动端地址为 http://www.bitauto.com/zhuanti/adtopic/xxxx_m/，默认为空，例：switchMobi(true,"")
//2 有M端页面但为客户提供或者链接不符合此规则，例：switchMobi(true,"http://www.xxx.com")
//3 无M端页面，例：switchMobi(false," ")

function switchMobi(mobiStatus,mobileUrl){
	if(mobiStatus){
	    var pcUrl = window.location.href;
	    var pcUrlArr = pcUrl.split("/");
	    var thisPage = pcUrlArr[5];
	    var mobileUrlDefault = "http://www.bitauto.com/zhuanti/adtopic/" + thisPage +"_m";
		a = mobileUrl.length>0 ? mobileUrl : mobileUrlDefault;
		if(pcUrl.indexOf("index.shtml") == -1){
			//alert(a)
			if(/iphone|ios|ipad|android|mobile/i.test(navigator.userAgent.toLowerCase())){
				location.href= a;
			}
		}
    }
}
switchMobi(false,"");
//参数1 true为默认有对应手机网站，参数2 为空为网址为默认网址

