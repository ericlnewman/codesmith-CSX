// ADD CODE HERE
// create a function that takes a callback function and a string as a password
function saveOutput(callback, password){
  // create an object to hold the keys and values of the callback arguements and the function preformed on the arguemnts as values
  const cache = {};
	// return a function that acts just as the passed in function, but will return the object with all
  // previous passed in key/values when the password is an argument
  return (key) => {
    if(key === password){
      return cache;
    }
    const value = callback(key);
    cache[key] = value;
    return value;
  }
	
}
	

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
