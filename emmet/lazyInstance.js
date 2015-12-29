/**
 * Created by chenkai3 on 2016/1/5.
 */
var myNameSpace = function () {
    var Configure = function () {
        var _name = 'tss';
        var _getName = function () {
            return _name;
        }
        var _setName = function (name) {
            _name = name;
        }

        return {
            setName: function (name) {
                _setName(name);
            },
            getName: function () {
                return _getName();
            }
        };
    }

    var instance;//存储Configure实例

    return {
        init: function () {
            if (!instance) {
                instance = Configure();
            }

            //创建Configure单列
            for (var key in instance) {
                if (instance.hasOwnProperty(key)) {
                    this[key] = instance[key];
                }
            }
            this.init = null;
            return this;
        }
    }
}();

//myNameSpace.init();

var name = myNameSpace.init().getName();
console.log(name);

