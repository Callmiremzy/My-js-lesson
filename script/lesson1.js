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

let btn = document.getElementById("changeColorBtn");
let colorText = document.getElementById("colorCode");

btn.addEventListener("click", () => {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
});

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
btn.addEventListener("click", () => {
    
})