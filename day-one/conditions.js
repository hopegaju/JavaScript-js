//Conditions

// if statement 
let age=16;
if(age>=18){
    console.log("You're allowed to drink");
}else{
    console.log("You're allowed not to drink");
}
// ex2
let bankAccount =600000;

if(bankAccount>=1000000){
    console.log("You're eligible for a loan");
}else if(bankAccount>=500000){
    console.log("You're eligible for a loan but with a lower interest rate");
}else{
    console.log("You're not eligible for a loan");
}

// ex3
let language = "Kenya";
if(language == "English"){
    console.log("Good morning");
}else if(language == "French"){
    console.log("Bonjour");
}else if(language == "Tanzania"){
    console.log("Habari");
}else if(language == "Rwanda "){
    console.log("muraho");
}

//Switch statement
let grade="B";

switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Satisfactory");
        break;
    default:
        console.log("Invalid grade");
}

//Loop for 

let grades=["A","B","C","D","E"];

for(let i=0; i<grades.length; i++){
    console.log(grades[i]);
}

//Loop while 

let i=0;
while(i<grades.length){
    console.log(grades[i]);
    i++;
}

//Loop do-while

let j=0;
do{
    console.log(grades[j]);
    j++;
}while(j<grades.length);
