// ALl modules are wrapped into a function by Nodejs - (IIFE)
// Immediately invoked function expression

(function () {
  // ALL module code goes here
})(); // -> this is function is being immediately invoked

// This IIFE function layer is hidden from us because NodeJS internally wraps each and every  code module. And because of that the variables and functions inside a module are private and cannot be accessed directly
// To access specific variables and functions from a module we have to export using - "module.exports"

// Q: How do we get access to these require and module.exports statement where does it come from ??

// -> So when NodeJs wraps our code we have module and require as parameters in the IIFE function so basically the require and module statements are provided by Nodejs IIFE function

(function (module, require) {
  require("./xyz");

  module.exports;
})();

/* 
 ### 5 step mechanism of require(/path)

 1. -> Resolving the module
    - Checks whether its a ./localpath
    - ./data.json, node: module

 2. -> Loading the module 
    - File Content is loaded according to file type

 3. -> Wraps inside IIFE

 4. -> Code Evaluation 
    - module.exports happens

 5. -> Module caching
     so suppose we have a module that is being used in multiple other modules so NodeJS on initial run will run the whole program as it is but on the next run it will just return from the cache it means 
     
     it will not go through the whole 5 step mechanism again it will just return it from cache

*/
