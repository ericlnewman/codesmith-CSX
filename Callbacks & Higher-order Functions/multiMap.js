// ADD CODE HERE
function multiMap(arrOfValues, arrOfCallbacks){
  let arrOfObj = [];
  for (let i = 0; i < arrOfValues.length; i++) {
    const value = arrOfValues[i];
    const resultArr = [];
    for (let j = 0; j < arrOfCallbacks.length; j++) {
      const callback = arrOfCallbacks[j];
       resultArr.push(callback(value));
    }

    arrOfObj.push(resultArr);
  }

  return arrOfObj;
}
// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }