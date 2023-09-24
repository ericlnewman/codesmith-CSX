const fb = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// ADD CODE HERE
function fizzBuzz(array){
  for(let i = 0; i < array.length; i++){
    let n = array[i];
    if(n % 3 === 0){
      array[i] = "fizz";
    }
  	if(n % 5 === 0){
      array[i] = "buzz";
    }
    if(n % 5 === 0 && n % 3 === 0){
      array[i] = "fizzbuzz";
    }
  }
	return array;
}
console.log(fizzBuzz(fb));
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]