// ADD CODE HERE
// create a function that has an array as an argument
function cycleIterator(array){
  // create a returned function that does not have any arguments
  const cache = {};
  let count = 0;
  return () => {
    // the function returns the first element of the array on the first call
		// returns the second element on the second call, and so on
    for(let i = 0; i < array.length; i++){
      cache[i] = array[i];
    }
    let ans = cache[count];
    count++;
    if(count > 2){
      count = 0;
    }
  	return ans;
  }
}
	

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
