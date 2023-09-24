// ADD CODE HERE
function forEach(array, callback){
  let result = [];
  for(let element of array){
   	result.push(callback(element));
  }
  return result;
}
function map(array, callback){
  return forEach(array, callback)
}
// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]ea