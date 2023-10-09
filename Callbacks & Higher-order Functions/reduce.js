// ADD CODE HERE
function reduce(array, callback, acc){
  for(let i = 0; i < array.length; i++){
    acc = callback(acc, array[i]);
  }
  return acc;
}
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8
