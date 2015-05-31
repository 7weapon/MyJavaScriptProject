/**
 * Created by chenkai3 on 2015/5/19.
 */

var ActivitiesID = 201506098;
var url = '';
var focusStatus = false; //input 是否获得聚焦u
var ipLocation = '';
$(document).ready(function () {
    url = BitautoMarketSk.webapiSKurl + "Order.ashx";
    //url = 'http://market1.bitauto.com/webapi/Api/Handler1.ashx';
   ipLocation = bit_IpRegion;
    //ipLocation = "123.127.236.130:河南省三门峡市;201,河南,henan";
    BindProvince();
    $('#selPro').change(function () {
        var selectValue = $(this).val();
        BindCity(selectValue);
    });
    $('#selPro').trigger('change');

    $('#selCity').change(function () {
        var selectValue = $(this).val();
        BindDealer(selectValue);
    });
    $('#selCity').trigger('change');


    $('#selProFooter').change(function () {
        var selectValue = $(this).val();
        BindCityFooter(selectValue);
    });
    $('#selProFooter').trigger('change');

    $(':input').focus(function () {
        focusStatus = true;
    });
    $('#denging').unbind().bind('click', SubmitApply);

    $(document).keydown(function (event) {
        if (focusStatus && event && event.which == 13) {
            $('#denging').trigger('click');
        }
    });

});

/**
 * 表单验证
 * @returns {boolean}
 */
function dataVerify() {
    var loginName = $.trim($('#LoginName').val());
    var loginPhone = $.trim($('#LoginPhone').val());
    var chexing = $.trim($('#chexing').val());
    var city = $.trim($('#selCity').val());
    var pro = $.trim($('#selPro').val());
    var dealer = $('#selDealer').val();
    if (loginName === "") {
        alert('请填写姓名');
        return false;
    } else {
        if (GetStringRealLength(loginName) > 20) {
            alert('请输入正确的姓名');
            return false;
        }

    }
    if (loginPhone === "") {
        alert('请填写手机号');
        return false;
    } else {
        if (!isMobile(loginPhone)) {
            alert('请填写正确的手机号，如:13012345678');
            return false;
        }
    }
    if (chexing === "-1") {
        alert('请选择车型');
        return false;
    }
    if (pro === "-1") {
        alert('请选择省份');
        return false;
    }
    if (city === "-1") {
        alert('请选择城市');
        return false;
    }

    if (dealer === "-1") {
        alert('请选择经销商');
        return false;
    }

    return true;
}

/**
 * 清空表单
 * @constructor
 */
function Empty() {
    $('#LoginName').val('');
    $('#LoginPhone').val('');
    $('#chexing').val('-1');
    $('#selPro').val('-1');
    $('#selCity').val('-1');
    $('#selDealer').val('-1');
}
/**
 * 提交事件
 */
function SubmitApply() {
    if (dataVerify()) {
        var YOrderTypeID = 1; //订单类型
        var YDealerID = $('#selDealer').val(); //经销商ID 销售提供

        var YLocationID = bit_locationInfo.cityId; //地区id
        var YUserIP = bit_locationInfo.IP; //用户IP
        var YCarSerialId = $('#chexing').val(); //车型ID 销售提供
        var YCarId = 114802; //车款ID 销售提供

        //消息推送参数开始
        var msgUserId = 0; //易车会员ID
        var msgAddress = 0; //地址
        var msgbsid = "147"; //车型品牌
        var msgcsid = $('#chexing').val(); //车型
        try {
            if (Bitauto.Login.result.isLogined == true) {
                msgUserId = Bitauto.Login.result.userId;
            }
        } catch (err) {

        }

        var xcweblog = "";
        try {
            xcweblog = XCWEBLOG_ID;
        } catch (err) {
        }
        var cityName = "";
        try {
            cityName = bit_locationInfo.cityName;
        } catch (e) {

        }
        var filedgstr = "";
        try {
            var fgcx = request("fgcx");
            if (fgcx == "yes") {
                if (filedgstr == "") {
                    filedgstr = "6";
                } else {
                    filedgstr += "(6)";
                }
            }
            var marketfromad = request("marketfromad");
            filedgstr += "(" + marketfromad + ")";
        } catch (err2) {

        }
        var loginName = $.trim($('#LoginName').val());
        var loginPhone = $.trim($('#LoginPhone').val());
        var city = $.trim($('#selCity').val());
        var chexing = $('#chexing').find('option:selected').text();
        //var sex = $('#sex').val();
        var pro = $('#selPro').val();
        var dealer = $('#selDealer').find('option:selected').text();

        var str = escapeStr(',' + loginName + ',' + loginPhone + ',' + pro + ',' + city + ',' + dealer + ',' + filedgstr + ',' + ',' + chexing + ',' + ',' + ',' + ',,,,' + xcweblog); //生成以","为分隔符的字符串
        var body = "isonlyphone=3&istdata=1&strC=" + escapeStr(cityName) + ""; //常规参数
        body += "&isPostYiPai=1&YOrderTypeID=" + YOrderTypeID + "&YDealerID=" + YDealerID + "&YLocationID=" + YLocationID + "&YUserIP=" + YUserIP + "&YCarSerialId=" + YCarSerialId + "&YCarId=" + YCarId + ""; //易湃订单参数
        //消息推送传参开始
        body += "&isPushMsg=1&msgUserId=" + msgUserId + "&msgIP=" + YUserIP + "&msgAddress=" + msgAddress + "&msgCityId=" + YLocationID + "&msgbsid=" + msgbsid + "&msgcsid=" + msgcsid + ""; //发送消息参数
        //消息推送传参结束
        body += "&action=insert&actid=" + ActivitiesID + "&data=" + str; //报名参数
        $.getJSON(url + "?callback=?", body, function (data) {
            if (data.success) {
                alert('报名成功！');
                Empty();
            } else {
                if (data.result === '-2') {
                    alert('此手机号已报过名，无法再参加');
                } else {
                    alert('报名失败');
                }
            }
        });

    }
}

/**
 * 绑定尾部城市列表
 * @constructor
 */
function BindCityFooter(selectValue) {
    var option = '<option value="{1}" {2}>{0}</option>';
    var str = option.Format('请选择', '-1', '');
    if (JSonData.Information && JSonData.Information.length > 0) {
        for (var i = 0; i < JSonData.Information.length; i++) {
            if (str.indexOf(JSonData.Information[i].city) < 0) {

                if(JSonData.Information[i].pro === selectValue) {
                    if (ipLocation.indexOf(JSonData.Information[i].city) >0) {
                        str += option.Format(JSonData.Information[i].city, JSonData.Information[i].city, 'selected');

                    } else {
                        str += option.Format(JSonData.Information[i].city, JSonData.Information[i].city, '');
                    }

                }

            }
        }
    }
    $('#selCityFooter').html(str);
    //所有table显示
    $('.jxs>.box>table').show();
    $('.jxs>.box>table').each(function(index,item) {
        var $item = $(item);
        if($item.data('value') === selectValue)
        $item.siblings('table').hide();
        return;
    }) ;
}
/**
 * 加载省份
 * @constructor
 */
function BindProvince() {
    //var str = "<option value=\"" + "-1" + "\">" + "请选择" + "</option>";
    var option = '<option value="{1}" {2}>{0}</option>';

    var str = option.Format('请选择', '-1', '');
    if (JSonData.Information && JSonData.Information.length > 0) {
        for (var i = 0; i < JSonData.Information.length; i++) {
            if (str.indexOf(JSonData.Information[i].pro) < 0) {
                if (ipLocation.indexOf(JSonData.Information[i].pro) > 0) {
                    str += option.Format(JSonData.Information[i].pro, JSonData.Information[i].pro, 'selected');
                }
                else {
                    str += option.Format(JSonData.Information[i].pro, JSonData.Information[i].pro, '');
                }
            }
        }
    }
    $('#selPro').html(str);
    $('#selProFooter').html(str);
    // BindSelectOptions(arr, $('#selPro'));
}
/**
 * 绑定城市列表
 * @constructor
 */
function BindCity(selectValue) {
    var option = '<option value="{1}" {2}>{0}</option>';
    var str = option.Format('请选择', '-1', '');
    if (JSonData.Information && JSonData.Information.length > 0) {
        for (var i = 0; i < JSonData.Information.length; i++) {
            if (str.indexOf(JSonData.Information[i].city) < 0) {

                if(JSonData.Information[i].pro === selectValue) {
                    if (ipLocation.indexOf(JSonData.Information[i].city) >0) {
                        str += option.Format(JSonData.Information[i].city, JSonData.Information[i].city, 'selected');

                    } else {
                        str += option.Format(JSonData.Information[i].city, JSonData.Information[i].city, '');
                    }

                }

            }
        }
    }
    $('#selCity').html(str);

}
/**
 * 根据城市将在对应的经销商
 * @param selectValue
 * @constructor
 */
function BindDealer(selectValue) {
    var option = '<option value="{1}">{0}</option>';
    var str = option.Format('请选择', '-1');
    if (JSonData.Information && JSonData.Information.length > 0) {
        for (var i = 0; i < JSonData.Information.length; i++) {
            if (JSonData.Information[i].city === selectValue) {
                if (str.indexOf(JSonData.Information[i].dealer) < 0) {
                    str += option.Format(JSonData.Information[i].dealer, JSonData.Information[i].dealerId);
                }
            }
        }
    }
    $('#selDealer').html(str);
    //BindSelectOptions(arr, $('#selDealer'));
}

/**
 * 绑定数据
 * @param dataArr
 * @param $collection
 * @constructor
 */
function BindSelectOptions(dataArr, $collection) {
    if (dataArr && dataArr.length > 0) {
        var str = "<option value=\"" + "-1" + "\">" + "请选择" + "</option>";
        for (var i = 0; i < dataArr.length; i++) {
            if (str.indexOf(dataArr[i]) < 0) {
                str += "<option value=\"" + dataArr[i] + "\">" + "" + dataArr[i] + "" + "</option>";
            }
        }

        $collection.html(str);
    }

}

/**
 * ie8以下Array不支持indexOf方法，特此做兼容性
 */
if (typeof(Array.indexOf) !== 'function') {
    Array.prototype.indexOf = function (obj) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === obj)return i;
        }
        return -1;
    };
}
/**
 * 获取字符串长度
 * @param str
 * @returns {number}
 * @constructor
 */
function GetStringRealLength(str) {
    var bytesCount = 0;
    if (str) {
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c)) {
                bytesCount += 1;
            } else {
                bytesCount += 2;
            }
        }
    }
    return bytesCount;
}

/**
 * 替换字符串中的特定字符
 * @param str
 * @returns {XML|string}
 */
function escapeStr(str) {
    return escape(str).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F');
}

/**
 *  获取url中的参数
 * @param paras
 * @returns {*}
 */
function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}

/**
 * 手机号码验证
 * @param mobile
 * @returns {boolean}
 */
function isMobile(mobile) {
    return (/^(?:13\d|15\d|17\d|18\d|145|147)-?\d{5}(\d{3}|\*{3})$/.test(mobile));
}

/**
 * 邮箱验证
 * @param mail
 * @returns {boolean}
 */
function isMail(mail) {
    return (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(mail));
}
/**
 * 15位身份证验证
 * @param sfz
 * @returns {boolean}
 */
function is15sfz(sfz) {
    return (/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(sfz));
}
/**
 * 18位身份证验证
 * @param sfz
 * @returns {boolean}
 */
function is18sfz(sfz) {
    return (/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(sfz));
}

//  String.Format方法（注意大小写一致）
String.prototype.Format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

