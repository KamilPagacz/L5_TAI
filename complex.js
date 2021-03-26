"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    addComplex(complex) {
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    }
    subtractComplex(complex) {
        return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
    }
    moduleComplex() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log('RE: ', this.real, ', IM: ', this.imaginary);
    }
}
let a = new Complex(2, 4);
let b = new Complex(-3, 6);
let c = a.addComplex(b);
c.toString();
let d = c.subtractComplex(a);
d.toString();
let e = d.moduleComplex();
console.log("Module: ", e);
