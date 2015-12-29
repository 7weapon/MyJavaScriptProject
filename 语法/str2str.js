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

var str = '福瑞达M50s、福瑞达M50、爱迪尔、福瑞达、福运、北斗星、北斗星X5、利亚纳A6两厢、利亚纳A6三厢、利亚纳两厢、派喜、浪迪、利亚纳三厢';
var arr = str.split(/[、，]/);


var html = '';
var option = '<option value="{0}">{0}</option>';


for (var i = 0, length = arr.length; i < length; i++) {
    html += option.Format(arr[i]);
}

console.log(html);


