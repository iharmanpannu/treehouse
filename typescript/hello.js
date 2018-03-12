var Point = /** @class */ (function () {
    //   private x: number;
    //   b: number;
    function Point(x, b) {
        this.x = x;
        this.b = b;
    }
    Point.prototype.print = function () {
        console.log("X: " + this.x + " B: " + this.b + " ");
    };
    return Point;
}());
var printIt = new Point(2, 3);
printIt.print();
var math = 10 % 90;
console.log(math);
