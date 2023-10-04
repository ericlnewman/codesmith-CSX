function cascade(number) {
 	if(number < 10){
    console.log(number);
  } else {
    console.log(number);
    cascade(Math.floor(number/10));
    console.log(number);
  }
}



// // Uncomment to test your work!
 cascade(111)
// // should print
// /*
// 111
// 11
// 1
// 11
// 111
// */
/*
	// Your code here!
  const amountOfPlaces = Math.floor(Math.log10(Math.abs(number)))-1;
  // the amount of time it needs to print is 5 times with three characters, it increases 2 for each  character added, unless length is 1 or 2
  const timesToPrint = amountOfPlaces + 2;
  // half way needs to start adding
  const halfWay = timesToPrint / 2;
  let tempNumber = number;
  let answer;
  while(tempNumber > 0){
    const digit = tempNumber % 10;
    answer = tempNumber;
    tempNumber/=10;
      console.log(answer)
  }


 if(number < 10){
    console.log(number);
  } else {
		console.log(number);
    cascade(Math.floor(number/10));
    console.log(number)
  }
*/