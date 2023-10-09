// ADD CODE HERE
function intersection(arr){
  let result = arr[0];
  for(let i = 0; i < arr.length; i++){
    const current = arr[i];
    result = result.filter((element) => current.includes(element));
  }
  return result;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
