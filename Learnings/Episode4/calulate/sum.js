// Module protects their variables and functions from leaking

console.log("Sum Module executed...");

var x = "Hello world";

function calculateSum(a, b) {
  return a + b;
}

console.log(module.exports); // Its an empty object

// ------- we can export variables and functions like this way also -----
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;

module.exports = { x, calculateSum };
