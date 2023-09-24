// ADD CODE HERE
function union(arrays){
  // assign an accumulator, or variable that keeps track
  const arr = [...new Set([...arrays[0],...arrays[1], ...arrays[3]])];
  return arr;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]