

// 3.14159265358979323846264338327950288419

export class Pie {
  static PI = 3.14159265358979323846264338327950288419;
  i = 0;
  start;
  precision;
  constructor(precision = 10) {
    let pre = 1.0;
    for (let i = 0; i < precision; i++) {
      pre /= 10.0;
    }
    this.precision = pre;
    console.log("precision = " + pre);
  }
  generate() {
    this.start = new Date().getTime();

    let tmp = 1.0;
    let i = 1;
    while (true) {
      let even = (i % 2 === 0) ? 1.0 : -1.0;
      tmp += (even * 1.0) / (2.0 * i + 1.0);
      i++;
      if (Math.abs(4 * tmp - Pie.PI) < this.precision) {
        console.log("n = " + i);
        console.log("time passed(s) = " + (new Date().getTime() - this.start));
        console.log("π = " + 4 * tmp);
        break;
      }
      if (i % 100000000 == 0) {
        console.log("n = " + i);
        console.log("time passed(s) = " + (new Date().getTime() - this.start));
        console.log("π = " + 4 * tmp);
      }
    }
    return 4 * tmp;
  }
}
// let pie = new Pie();
// let pi = pie.generate();