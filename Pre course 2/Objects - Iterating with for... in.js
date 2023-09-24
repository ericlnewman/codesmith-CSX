const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

const objToArray = [];
function toAnArray(obj){
  for(let key in obj){
    if(obj[key] > 2){
      objToArray.push(obj[key]);
    }
  }
  return objToArray;
}
// ADD CODE HERE
console.log(toAnArray(checkObj));