/**
 * Created by HawkingChan on 2017/2/27.
 */

/**
 * 实现一个add方法，使计算结果能够满足如下预期：
 add(1)(2)(3) = 6
 add(1, 2, 3)(4) = 10
 add(1)(2)(3)(4)(5) = 15
 */
function add() {
  var _args = [].slice.call(arguments);

  var adder = function () {
    var _adder = function () {
      [].push.apply(_args, [].slice.call(arguments));
      return _adder;
    };

    _adder.toString = function () {
      return _args.reduce(function (a, b) {
        return a + b;
      });
    }
    return _adder;
  }
  return adder.apply(null, [].slice.call(arguments));
}                                                                  w

// console.log(add(1, 2, 3, 4, 5).toString())
console.log(add(1, 2, 3, 4)(5).toString())