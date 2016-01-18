/**
 * Created by HawkingChan on 15/12/28.
 */
function Sharp() {

}

Sharp.prototype.x = 0;
Sharp.prototype.y = 0;

Sharp.prototype.move = function (x, y) {
    this.X = x;
    this.Y = y;
}

Sharp.prototype.distance_from_origin = function () {
    return Math.sqrt(this.X * this.X + this.Y + this.Y);
}

Sharp.prototype.area = function(){
    throw  new Error('empty method');
}


function Square()
{}

Square.prototype = new Sharp();
//Square.prototype._proto_ = Sharp.prototype;
Square.prototype.Width = 0;
Square.prototype.area = function(){
    return this.Width * this.Width;
}

var sq = new Square();
sq.move(-5,-5);
sq.Width = 5;
console.log(sq.distance_from_origin());
console.log(sq.area());

console.log(sq instanceof Square);
console.log(sq instanceof Sharp);

