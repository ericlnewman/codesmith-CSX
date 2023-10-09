// ADD CODE HERE
function multiMap(array1, array2){
  const obj = {};
  const arr = [];
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      const callback = array2[j];
        arr.push(callback(array1[i]));
    }
    obj[array1[i]] = arr;
  }
  return obj;
}
// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
