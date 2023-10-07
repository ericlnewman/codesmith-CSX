function makePerson(name, age) {
	// add code here
	const person = {
    name: name,
    age: age
  };
  return person;
}

const vicky = makePerson('Vicky', 24);


// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24