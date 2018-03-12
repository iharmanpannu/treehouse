class Point {
  //   private x: number;
  //   b: number;

  constructor(private x?: number, private b?: number) {}

  print() {
    console.log(`X: ${this.x} B: ${this.b} `);
  }
}
let printIt = new Point(2, 3);

printIt.print();
let math = 10 % 90;
console.log(math);
