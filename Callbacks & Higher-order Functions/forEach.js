// ADD CODE HERE
function forEach(arr, callback){
  for(let i of arr){
    callback(i);
  }
}
function map(arr, callback){
  const result = [];
  forEach(arr, (i) => {result.push(callback(i));})
  return result;
}
// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
