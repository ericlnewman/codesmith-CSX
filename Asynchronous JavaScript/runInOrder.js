// Add code here
function runInOrder(arrOfFunc, arrOfNum){
  let delay = 0;
  for(let i = 0; i < arrOfFunc.length; i++){
    setTimeout(arrOfFunc[i], delay);
    delay += arrOfNum[i];
  }
}
// /* Uncomment the following lines and click 'run' to test your work */

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
