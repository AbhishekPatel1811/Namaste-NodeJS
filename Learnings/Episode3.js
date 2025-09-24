// First Program
var a = 10;
var b = 20;

var name = "Namaste NodeJS";

console.log(name);
console.log(a + b);

// In Browsers we have window, this, self, frames that points to global object
// And in Node we have global as global object but this points to an {} object
// The JS committe introduced in es22 that lets standardized and they came up with "globalThis"
console.log(global);
console.log(this); // Empty object {}
console.log(globalThis);
