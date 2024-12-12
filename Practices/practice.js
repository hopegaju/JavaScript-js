// Sum of two numbers
function myFunction(a, b) {
    return a + b;
    }
console.log(myFunction(1,2));
// comparison operators, strick equality
function myFunction(a , b) {
    return a === b;
    }
console.log(myFunction(1, "1"));
// Get type of value
function
myFunction(a){
return typeof a;
}
// get nth character of string 
function myFunction(a, n) {
    return a[n - 1];
 }
//  remove first 3n characters of a 
function myFunction(a) {
    return a.slice(3);
 }
//  get last n characters of a string 
function myFunction(str) {
    return str.slice(-3);
 }
//  first n characters of a string 
function myFunction(a) {
    return a.slice(0, 3);
 }
//  position of one string in another
function myFunction(a) {
    return a.indexOf('is');
 }
//  extract first historylf of string   
function myFunction(a) {
    return a.slice(0, a.length / 2);
 }
//  remove last n characters 
function myFunction(a) {
    return a.slice(0, -3);
 }
//  retun percentage of a number 
function myFunction(a, b) {
    return b / 100 * a
  }
//   basic JS operators 
function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }
//  Check whether a string contains another string and concatenate
function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a // 
  }
//   Check if a number is even
function myFunction(a) {
    return a % 2 === 0;  // If the number is even, return true, otherwise false
}
// How many times does a character occur
function myFunction(a, b) {
    return b.split(a).length - 1 //Split 'b' by 'a' and subtract 1 to count occurrences
  }
//   Check if a number is a whole number
function myFunction(a) {
    return a - Math.floor(a) === 0
}
// Multiplication, division, and comparison operators
function myFunction(a, b) {
    return a < b ? a / b : a * b
  }
//   Round a number to 2 decimal places
function myFunction(a) {
    return Number(a.toFixed(2));
  }
//   Split a number into its digits

function myFunction( a ) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
  }