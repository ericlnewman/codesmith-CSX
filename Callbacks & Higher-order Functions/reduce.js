function eitherFilter(array, callback1, callback2) {
  // ADD CODE HERE
  let result = [];
  for(let element of array){
    if(callback1(element) || callback2(element)){
      result.push(element);
    }
  }
  return result;
}

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]