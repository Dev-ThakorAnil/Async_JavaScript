//Write a JavaScript program that converts a callback-based function 
//to a Promise-based function.


function callback_baseFunction(arg1, arg2, callback) {
    setTimeout(() => {
      var result = arg1 + arg2;
      if (result % 2 !== 0) {
        callback(null, result);
      } else {
        callback(new Error("Number is not odd"), null);
      }
    }, 2000);
  }
  
  function promiseBaseFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
      callback_baseFunction(arg1, arg2, (error, result) => { // Fix the callback parameters here
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  
  promiseBaseFunction(2, 3)
    .then(result => { // Fix the parameter here
      console.log("Result:", result);
    })
    .catch(error => { // Fix the parameter here
      console.log("Error:", error.message);
    });
  
  promiseBaseFunction(3, 3)
    .then(result => { // Fix the parameter here
      console.log("Result:", result);
    })
    .catch(error => { // Fix the parameter here
      console.log("Error:", error.message);
    });
  