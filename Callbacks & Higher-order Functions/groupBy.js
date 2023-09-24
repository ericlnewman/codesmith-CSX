// ADD CODE HERE
const groupBy = (array, callback) => {
  const obj = {};
  for(let i = 0; i < array.length; i++){
    let current = array[i];
    let callBackResult = callback(current);
    if(!obj[callBackResult]){
      obj[callBackResult] = [current];
    } else {
      obj[callBackResult].push(current);
    }
  };
  return obj;
};
// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
