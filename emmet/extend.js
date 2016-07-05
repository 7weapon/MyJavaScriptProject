/**
 * Created by HawkingChan on 16/6/28.
 */


function extend(child, parent) {
    var f = function () {

    };

    f.prototype = parent.prototype;

    child.prototype = new f();
    child.prototype.constructor = child;
}

function Shape() {
};

Shape.prototype.name = 'Shape';

function TwoDShape()
{};
extend(TwoDShape,Shape);
console.log(new TwoDShape().time);