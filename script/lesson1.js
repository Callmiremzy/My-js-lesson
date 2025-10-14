// let fullName = "Emma code"; 
// let age = 24;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;


// let students = 22;
// students += 10;
// students *= 7;
// students -= 20;
// students %=7;

// console.log(students)

// let result = 1 + 2 

// console.log(result);

// let username;
// username = window.prompt("What's your username?");

// console.log(username);


// How to get accept user input
// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }
 
// type conversion = change the data type of a value to another data type

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// calculate the circumference of a circle
// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt(`Enter the radius of a circle`);
// radius = Number(radius);

// circumference = 2 * PI * radius;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH1").textContent = `The circumference is ${circumference}cm`;
// }

// counter program 
// const decreaseBtn = document.getElementById("decreaseBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }

// math = built in object that has properties and methods for mathematical constants and functions

// Math.PI
// console.log(Math.PI);

// let x = 81;
// let y = 2;
// let z;

// z = Math.round(x)
// console.log(z);

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);

// console.log(z);


// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     label2.textContent = randomNum2;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label3.textContent = randomNum3;
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){
//     age = myText.value;
//     age = Number(age);
//     if(age >= 100){
//         resultElement.textContent = `You are too old to enter this site`;
//     }
//     else if (age == 0){
//         resultElement.textContent = `Please enter your age`;
//     }
//     else if(age >= 18){
//         resultElement.textContent = `You are eligible to enter this site`;
//     }
//     else if(age < 0){
//         resultElement.textContent = `You haven't been born yet`;
//     }
//     else{
//         resultElement.textContent = `You are not eligible to enter this site`;
//     }
// }

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         subResult.textContent = `You are subscribed!`;
//     }else{
//         subResult.textContent = `You are not subscribed!`;
//     }
//     if(visaBtn.checked){
//         paymentResult.textContent = `You are paying with Visa`;
//     }
//     else if(mastercardBtn.checked){
//         paymentResult.textContent = `You are paying with Mastercard`;
//     }
//     else if(paypalBtn.checked){
//         paymentResult.textContent = `You are paying with paypal`;
//     }
//     else{
//         paymentResult.textContent = `You haven't selected a payment method`;
//     }
// }

//    ternary operator = shortcut for if{} and else{} statements helps to assign a value to a variable based on a condition condition ? codeiftrue : codeiffalse


// let time = 5;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "you are a student" : "You are not a student";
// console.log(message);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total discount is $${purchaseAmount - purchaseAmount * (discount / 100)}`);

// let testScore = 39;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     case testScore >= 40:
//         letterGrade = "E"
//         break;
//     default:
//         letterGrade = "F";
// }
// console.log(letterGrade);

// let btn = document.getElementById("changeColorBtn");
// let colorText = document.getElementById("colorCode");

// btn.addEventListener("click", () => {
//     let randomColor = getRandomColor();
//     document.body.style.backgroundColor = randomColor;
//     colorText.textContent = randomColor;
// });

// function getRandomColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// btn.addEventListener("click", () => {

// })
// let num = 50;

// if (num % 5 === 0) {
//     summary = "Even"
// }else {
//     summary = "Odd"
// }


// document.getElementById("method").innerHTML = summary;

// function checkEvenOrOdd(Number) {
//     if (Number % 2 === 0) {
//         return "Even"
//     }else {
//         return "Odd"
//     }
// }
// console.log(checkEvenOrOdd(9))

// document.getElementById("method").innerHTML = checkEvenOrOdd(50);

// function ageForVote(age) {
//     if (age >= 100) {
//         return "Too old to vote";
//     }else if (age <= 12) {
//         return "You don't have right to be here";
//     }else if (age >= 18) {
//         return "Verify to Vote"
//     } 
//     else {
//         return "You are a minor not Allow"
//     }
// }
// console.log(ageForVote(20));

// document.getElementById("method").innerHTML = ageForVote(30)

// let a = 30;
// let b = 20;

// if (a >= b) {
//     Agree = "Largest"
// }else {
//     Agree = "Smallest"
// }
// document.getElementById('method').innerHTML = Agree;

// function divisibleNum(num) {
//     if(num % 5 === 0) {
//         return "This Number is divisible";
//     }else{
//         return "Not divisible by 5";
//     }
// }
// document.getElementById("method").innerHTML = divisibleNum(26)

// function checkedLeapYear(year) {
//     if (year % 400 === 0) {
//         return "Leap year";
//     }else if (year % 100 === 0) {
//         return "Not a leap year"
//     }else if (year % 4 === 0) {
//         return "Leap year"
//     }else {
//         return "Not a leap year"
//     }
// }
// document.getElementById("method").innerHTML = checkedLeapYear(1900);

// let a = 10;
// let b = 80;
// let c = 20;
// let result;

// if (a >= b && a >= c) {
//     result = "a is the largest"
// }else if(b >= a && b >= c ) {
//     result = "b is the largest"
// }else {
//     result = "c is the largest"
// }
// document.getElementById("method").innerHTML = result;


// let a = 50;
// let b = 15;
// let c = 30;

// let largest = Math.max(a, b, c);
// document.getElementById("method").innerHTML = largest +" " + "is the largest number"

// function bothDivisibleNum(num) {
//     if (num % 3 === 0 && num % 7 === 0) {
//         return "Pass"
//     }else {
//         return "Fail"
//     }
// }
// document.getElementById("method").innerHTML = bothDivisibleNum(84)

// function studentGradeScore(score) {
//     if (score < 0 || score > 100) {
//         return score + "Invaild score! 0 and 100"
//     }

//     if (score >= 90) {
//         return score + " A"
//     }else if (score >= 80) {
//         return score + " B"
//     }else if (score >= 70) {
//         return score + " C"
//     }else if (score >= 60) {
//         return score + " D"
//     }else {
//         return score + " F"
//     }
// }
// document.getElementById("method").innerHTML = studentGradeScore(70)

// function checkVowelSound(char) {
//     char = char.toLowerCase();
//     const vowels = "aeiou";

//     if (char.length !== 1 || !char.match(/[a-z]/)) {
//         return "please enter a single alphabet letter.";

//         }

//     if (vowels.includes(char)) {
//         return char + " is a vowel";

//     }else {
//         return char + " is a consonant";
//     }
// }

// document.getElementById("method").innerHTML = checkVowelSound("");

// function checkNumberSign(num) {
//     if (num > 0) {
//         return num + " Positive"
//     }else if (num < 0) {
//         return num + " Negative"
//     }else {
//         return num + " Zero"
//     }
// }
// document.getElementById("method").innerHTML = checkNumberSign(-190)

let a = 80;
let b = 50;
let c = 120;
let result;

if ((a > b && a < c) || (a > c && a < b)) {
    result = "a is the middle";
}else if ((b > a && b < c) || (b > c && b < a )) {
    result = "b is the middle"
}else {
    result = "c is the middle"
}
document.getElementById("method").innerHTML = result