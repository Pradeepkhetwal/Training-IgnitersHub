// A function which is passed as a parameter to another function and after being passed it is called inside that function at last or at the end of execution is called a callback function.s


function msg(callback) {
  console.log("Hello ");
  callback();
}

function callback() {
  console.log("I am callback");
}


msg(callback);