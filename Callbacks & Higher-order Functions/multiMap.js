// ADD CODE HERE
function multiMap(arr1, arr2, obj = {}){
  for(let i = 0; i < arr1.length; i++){
    const newArray = [];
    const element = arr1[i];
    for(let j = 0; j < arr1.length; j++){
    	const callback = arr2[j];
      let newResult = callback(element);
    	newArray.push(newResult);
    	obj[element] = newArray;
    }
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
