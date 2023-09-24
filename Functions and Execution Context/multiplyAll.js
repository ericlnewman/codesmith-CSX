// ADD CODE HERE
function multiplyAll(arr){
  let product = [];
  for(let i = 0; i < arguments.length; i++){
    product.push(arguments[i]);
  }
  let ans = 1;
  for(let i = 0; i < product.length; i++){
    ans*=product[i];
  }
  return ans;
}

// Uncomment these to check your work!
 console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
 console.log(multiplyAll(5, 5, 5, 3)) // should log: 375