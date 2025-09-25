var a = 12309734;
var b = 3234558;

// SetTimeOut is an Async operation so offloaded to LibUV
// Its only pushed to callstack in v8 once the call stack is empty, so once the sync operations are finished and the call stack is empty then only this setTimeOut is pushed to call stack.

setTimeout(() => {
  console.log("Call me right now ASAP!!!");
}, 0);

setTimeout(() => {
  console.log("Call me after 3 sec");
}, 3000);

// Synchronous operation it will be executed first
function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result:", c);
