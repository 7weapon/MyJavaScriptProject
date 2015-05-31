$(function(){
	jQuery("#slideBox_1").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",delayTime:600,effect:"left"});

	// var flag_1 = "true";
	var flag_2 = "true";
	var flag_3 = "true";
	var flag_4 = "true";

    $('.nav_box').on('click','li', function () {
        $(this).addClass("on").siblings().removeClass("on");
        var dataName = $(this).attr("data-name");
        $("#contentId_1>div").addClass("dn");
        $("#contentId_2>div").addClass("dn");
        $("."+dataName).removeClass("dn");

        if(dataName == "box_2" && flag_2 == "true"){
            jQuery("#slideBox_2").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",delayTime:600,effect:"left"});
            flag_2 = "false";
        }else if(dataName == "box_3" && flag_3 == "true"){
            jQuery("#slideBox_3").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",delayTime:600,effect:"left"});
            flag_3 = "false";
        }else if(dataName == "box_4" && flag_4 == "true"){
            jQuery("#slideBox_4").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",delayTime:600,effect:"left"});
            flag_4 = "false";
        }
    }) ;

	/*$(".nav_box li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var dataName = $(this).attr("data-name");
		$("#contentId_1>div").addClass("dn");
		$("#contentId_2>div").addClass("dn");
		$("."+dataName).removeClass("dn");

		if(dataName == "box_2" && flag_2 == "true"){
			jQuery("#slideBox_2").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",delayTime:600,effect:"left"});
			flag_2 = "false";
		}else if(dataName == "box_3" && flag_3 == "true"){
			jQuery("#slideBox_3").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",delayTime:600,effect:"left"});
			flag_3 = "false";
		}else if(dataName == "box_4" && flag_4 == "true"){
			jQuery("#slideBox_4").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",delayTime:600,effect:"left"});
			flag_4 = "false";
		}
	});*/

	// 活动报名
    function ml_close_demo() {
        $('#applyPopId').animate({
            right: '-281px'
        }, 312, function () {
            $('.apply_open').delay(50).animate({
                right: '0px'
            }, 312);
        });
    }
    function ml_open_demo() {
        $('.apply_open').animate({
            right: '-64px'
        }, 100, function () {
            $('#applyPopId').delay(50).animate({
                right: '0px'
            }, 312);
        });
    }

    $('#closeBtnId').click(function () {
        ml_close_demo();
        return false;
    });
    $('#openBtn').click(function () {
        ml_open_demo();
        return false;
    });
})