// ADD CODE HERE
function countBy(array, callback){

  const obj = {};
  for(let i of array){
		const c = callback(i);
    if(obj[c] === undefined){
      obj[c] = 1;
    } else {
      obj[c]++;
    }
  }
  return obj;
}
// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
