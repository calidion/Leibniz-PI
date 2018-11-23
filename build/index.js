// 3.14159265358979323846264338327950288419
"use strict";
var Pie = (function () {
    function Pie(precision) {
        if (precision === void 0) { precision = 10; }
        this.i = 0;
        var pre = 1.0;
        for (var i = 0; i < precision; i++) {
            pre /= 10.0;
        }
        this.precision = pre;
        console.log("precision = " + pre);
    }
    Pie.prototype.generate = function () {
        this.start = new Date().getTime();
        var tmp = 1.0;
        var i = 1;
        while (true) {
            var even = (i % 2 === 0) ? 1.0 : -1.0;
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
    };
    Pie.PI = 3.14159265358979323846264338327950288419;
    return Pie;
}());
exports.Pie = Pie;
// let pie = new Pie();
// let pi = pie.generate(); 
