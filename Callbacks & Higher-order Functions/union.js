// ADD CODE HERE
function union(arr){
  // create each element of the array of arrays into a single array
  const array = [].concat(...arr);
  let result = [];
  for(let i = 0; i < array.length; i++){
    const current = array[i];
    if(!(result.includes(current))){
      result.push(current);
    }
  }
  return result;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
