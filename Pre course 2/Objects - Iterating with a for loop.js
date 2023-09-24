const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
// ADD CODE HERE
const objToArray = Object.values(checkObj).flat();
for(let i in objToArray){
  if(i % 6 == 0){
    divBy6 = true;
  }
}
console.log(objToArray);
console.log(divBy6);