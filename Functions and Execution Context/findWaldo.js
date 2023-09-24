// ADD CODE HERE
function findWaldo(object){
  if(!(Object.keys(object).includes("Waldo"))){
    return "Where's Waldo?";
  }
  return object["Waldo"];
}

// Uncomment these to check your work!
 const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
 const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
 console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
 console.log(findWaldo(supernatural)) // should log: 'unknown'