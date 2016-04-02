;(function (shapes) {
    "use strict";
    var Triangle = shapes.Triangle = function (options) {
        this.width = options.width;
        this.height = options.height;
    };
    Triangle.prototype.getArea = function () {
        return 0.5 * this.width * this.height;
    };

    var Circle = shapes.Circl = function (options) {
        this.radius = options.radius;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };

    var Square = shapes.Square = function (options) {
        this.width = options.width;
    };
    Square.prototype.getArea = function () {
        return Math.pow(this.width, 2);
    }

})(window.shapes = window.shapes || {});


function getArea(shape, options) {
    "use strict";
    var Shape = window.shapes[shape], area = 0;
    if (Shape && typeof Shape === 'function') {
        area = new Shape(options).getArea();
    } else {
        throw new Error('Invaild shape : ' + shape);
    }
    return area;
}
