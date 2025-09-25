const crypto = require("crypto");

var a = 123456;
var b = 9876;

// Crypto call is an async function
// pbkdf2 - Password-Based Key Derivation Function 2

// Synchrounous function - WILL BLOCK THE MAIN THREAD - DON'T USE IT
const key = crypto.pbkdf2Sync("password", "salt", 5000000, 10, "sha512");
console.log("Synchronous Key is generated....", key.toString("hex"));

crypto.pbkdf2("password", "salt", 500000, 10, "sha512", (err, derivedKey) => {
  console.log("Second Key is generated", derivedKey.toString("hex"));
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result:", c);
