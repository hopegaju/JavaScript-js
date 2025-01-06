let A = 20
do{
  console.log(A);
  if(A % 2 == 0){
    console.log("Even Number");
  }else{
    console.log("Odd Number");
  }
  A--; // decrement
}while (A);
console.log(A);

// loop to print the even numbers from 2 to 10.

let num = 2;
while (num <= 10) {
  console.log(num);
  num += 2; // Increment by 2 to get the next even number
}
// loop that counts down from a given number to 1 and prints "Blast off!" when the countdown is complete.

let countdown = 10; 
while (countdown > 0) {
  console.log(countdown);
  countdown--; // Decrease the number by 1
}

console.log("Blast off!");
