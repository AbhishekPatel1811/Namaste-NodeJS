require("./xyz"); // Importing one module into another

// const calculateSum = require("./sum.js"); // Importing specific part of code one module into another

const { x, calculateSum, calculateMultiply } = require("./calulate");

var a = 10;
var b = 20;

const c = calculateSum(a, b);
console.log("Addition ---", c, "Variable X ---", x);
calculateMultiply(a, b);
