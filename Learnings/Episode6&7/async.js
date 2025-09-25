const https = require("https");
const fs = require("fs");

var a = 1078698;
var b = 20986;

// Its an synchrounous function and it will actually block the main thread
// fs.readFileSync("./file.txt", "utf-8");
// console.log("Read file sync finished...");

https.get("https://dummyjson.com/products/1", (res) => {
  let data = "";

  // A chunk of data has been received.
  res.on("data", (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on("end", () => {
    console.log(JSON.parse(data));
  });

  console.log("Fetched Data successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 sec");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data: \n", data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication---", c);
