const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
// ADD CODE HERE
function checkingObj(obj){
  for(let key in obj){
    if(key === 'foundNum'){
      found = 1;
    } 
  }
  return found;
}
console.log(checkingObj(checkObj));