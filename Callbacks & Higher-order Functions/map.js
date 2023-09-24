// ADD CODE HERE
function subtractTwo(number){
  return number -2;
}
function map(array, callback){
  let newArray =[];
  for(let element of array){
    newArray.push(callback(element));
  }
  return newArray;
}
// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]