console.log("This is a Synchronous code....");

var a = 123456;
var b = 987640;

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result:", c);
