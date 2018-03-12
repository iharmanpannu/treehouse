class Point {
  private x: number;
  b: number;

  constructor(x?: number, b?: number) {
    this.x = x;
    this.b = b;
  }

  print() {
    console.log(`X: ${this.x} B: ${this.b} `);
  }
}
let printIt = new Point(2, 3);
printIt.b = 4;
printIt.print();
