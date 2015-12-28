/**
 * Created by chenkai3 on 2015/12/17.
 */

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

var str = '奥迪-湖北中基汽车销售服务有限公司、奥迪-襄阳东富汽车销售服务有限公司、奥迪-荆门中基汽车销售服务有限公司、一汽-大众-湖北东富汽车工贸有限公司、一汽-大众-武汉富尔汽车销售服务有限公司、一汽-大众-武汉东富优诚汽车销售服务有限公司、一汽-大众-湖北十堰东富汽车销售服务有限公司、一汽-大众-随州东富汽车销售服务有限公司';
var arr = str.split(/[、，]/);


var html = '';
var option = '<option value="{0}">{0}</option>';


for (var i = 0, length = arr.length; i < length; i++) {
    html += option.Format(arr[i]);
}

console.log(html);


