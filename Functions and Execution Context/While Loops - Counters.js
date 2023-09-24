function imAboutToExplodeWithExcitement(n){
  // ADD CODE HERE
  let number = n;
  while(number > 0){
    if(number == 5){
      console.log("Oh wow, I can't handle the anticipation!");
    }
    if(number == 3){
      console.log("I'm about to explode with excitement!");
    }
    console.log(number);
    number--;
  }
  console.log("That was kind of a let down");
}

// Uncomment the line below to check your work!
 imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'