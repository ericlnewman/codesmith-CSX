function gradeCalculator(grade) {
  // ADD CODE HERE
  if(grade >= 90){
    return "A";
  }
  if(grade >= 80){
    return "B";
  }
  if(grade >= 70){
    return "C";
  }
  if(grade >= 60){
    return "D";
  } else {
    return "F";
  }
}

// Uncomment the lines below to test your code
 console.log(gradeCalculator(92)); // => "A"
// console.log(gradeCalculator(84)); // => "B"
// console.log(gradeCalculator(70)); // => "C"
// console.log(gradeCalculator(61)); // => "D"
// console.log(gradeCalculator(43)); // => "F"