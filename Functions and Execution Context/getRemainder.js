function getRemainder(num1, num2) {
  // INSERT CODE HERE
  let ans = 0;
  if(num1 > num2){
    ans = num1 % num2;
  } else {
    ans = num2 % num1;
  }
  return ans;
}

// Uncomment the lines below to test your code
 console.log(getRemainder(17, 5)); // => 2
// console.log(getRemainder(20, 5)); // => 0
// console.log(getRemainder(8, 22)); // => 6
// console.log(getRemainder(7, 42)); // => 0