const personStore = {
  greet: function() {
    console.log('hello');
  },
  introduce: function(){}
}

function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  person.introduce = () => console.log("Hi, my name is " + name);
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// add code here

// Uncomment this line to check your work!
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'