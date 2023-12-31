// ADD CODE HERE
function addByX(param){
  function innerFunction(num){
   	return num+=param;
  }
  return innerFunction;
}

const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1)); //should return 3
console.log(addByTwo(2)); //should return 4
console.log(addByTwo(3)); //should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); //should return 4
console.log(addByThree(2)); //should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); //should return 8
console.log(addByFour(10)); //should return 14