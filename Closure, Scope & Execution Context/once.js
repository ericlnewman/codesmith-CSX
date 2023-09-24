// ADD CODE HERE
function once(callback){
  let done = false;
  let firstValue;
  return (...callbackArgument) =>{
    if(!done){
      done = true;
      firstValue = callback(...callbackArgument);
    }
    return firstValue;
  }
}
const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7