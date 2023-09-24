// ADD CODE HERE
function after(numberOfCalls, callback){
  // assign a counter variablle
  let counter = 0;
  // return a closure function that takes one argument for persistance 
  return (...arg) =>{
    // increment the counter by 1
    counter++;
  	// if the counter is equal to the number of calls, return callback
    if(counter === numberOfCalls){
      return callback(...arg);
    }
  }
  	
}
const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed