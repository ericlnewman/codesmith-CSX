// ADD CODE HERE
function majority(array, callback){
  let counter = 0;
  for(let index in array){
    if(callback(index)){
      counter++;
    }
  }
  return counter > array.length / 2;
}
// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false