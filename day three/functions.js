function checkNumber(num) {
    if (isNaN(num)) {
      return "Invalid input";
    }
    if (num % 2 === 0) {
      return "Even";
    }
    return "Odd";
  }
  console.log(checkNumber("a")); 
  
  // Area of a rectangle 
  function calculateAreaOfRectangle(l, w) {
    return l * w
  }
  console.log(calculateAreaOfRectangle(3 , 6))
  
  // average of four numbers
  function averageOfFourNumbres(a, b, c, d) {
    return (a + b + c + d) / 4;
  }
  console.log(averageOfFourNumbres(5, 3, 7, 2));
  
  // minutes to hours 
  
  function convertMinutesToHours(minutes) {
    return minutes / 60;
  }
  console.log(convertMinutesToHours(60));