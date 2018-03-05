class Point {
  //   x: number;
  //   private x: number; this makes it private
  //   y: number;
  constructor(private x?: number, private y?: number) {
    //   constructor(x?: number, y?: number) { this makes it optional
    // this.x = x;
    // this.y = y;
  }
  draw() {
    console.log(`X: ${this.x} Y: ${this.y}`);
  }

  //   getDistance(another: Point) {
  //     // ..
  //   }
  //   getX() {
  //     return this.x;
  //   }

  //   setX(value) {
  //     if (value < 0) {
  //       throw new Error("value cannot be less than  0.");
  //     }
  //   }

  // Instead of code above we can use
  get X() {
    return this.x;
  }
  set X(value) {
    if (value < 0) throw new Error("value cannot be less than  0.");
  }
}
let point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
let x = point.getX();
point.setX(10);
point.draw();
