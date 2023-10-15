// ADD CODE HERE
// create a function saveOutput that has two arguments, a callback function and a string
function saveOutput(callback, string){
  	// create an object
	const cache = {};
	// return a function that when a string is passed as an argument, all previous entries will be returned as key value pairs
	return (key) => {
    let value = callback(key);
    if(typeof key === "number"){
      	cache[key] = value;
      return value;
    } else {
       return cache;
    }
  }
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
