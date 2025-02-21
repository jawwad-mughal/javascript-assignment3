// USER INPUT & CONDITIONAL STATEMENT (start)
// Q1
// var cityName = prompt("Please enter your city name");
// if(cityName.toLowerCase()=="karachi"){
//     console.log("Welcome to city of lights")
// }else{
//     console.log("Welcome to",(cityName));
// }

// Q2
// var gender = prompt("Enter your gender");
// if(gender.toLowerCase()=="male"){
//     console.log("Good Morning Sir.");
// }else if(gender.toLowerCase()=="female"){
//     console.log("Good Morning aunties.");
// }else{
//     console.log('Invalid input. Please enter male or female.');
// }

// Q3
// var input = prompt('Enter traffic signal color').toLowerCase();
// if(input == 'red'){
//     alert(`${input}: Must Stop`);
// } else if(input == 'yellow'){
//     alert(`${input}: Ready to move`);
// } else if(input == 'green'){
//     alert(`${input}: Move now`);
// }else alert('is not traffic color. traffic color is Red, Yellow, Green.');

// Q4
// var fuel = +prompt('Fuel remaining message');
// var message;
// if(fuel<=5){
//     message ='refill the fuel in your car';
// }else if(fuel>=6){
//     message ='fulfill the fuel in your car';
// }
// console.log((message));

// Q5
// a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// c)
// var c = 12;
// var message;
// if (c++ === 11){
//     message = "condition 1 is true";
// }
// else if (c === 12){
//     message = "condition 2 is true";
//     }
// else if (++c < 14){
//     message = "condition 3 is true";
//     }
// else if(c === 14){
//     message = "condition 4 is true";
// }
// alert(message);

// d)
// var materialCost = 2000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e)
//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// f)
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Q6
// var marks = +prompt('Enter marks');
// var message;
// if(marks >= 80 && marks <= 100){
//     message = "A-one grade"
// }else if(marks >= 70 && marks <= 79){
//     message = "A-grade"
// }else if(marks >= 60 && marks <= 69){
//     message = "B-grade"
// }else if(marks >= 0 && marks <= 59){
//     message = "Fail"
// }
// console.log(message)

// Q7 guess game:
// var userNumber = +prompt("Guess the secret number (between 1 and 10):");
// var secretNumber = 6;
// if(userNumber >= 1 && userNumber <= 10){
// if (userNumber === secretNumber){alert('Bingo! Correct answer.');}
// else  {alert('Close enough to the correct answer.')};
// }else  {alert('or the number 1 or 10 is a limit.')};

// Q8
// var userNumber = parseInt(prompt("Enter a number to check if it's divisible by 3:"));  
  
// if (userNumber % 3 === 0) {  
//     alert(`${userNumber} is divisible by 3.`);  
// } else {  
//     alert(`${userNumber} is not divisible by 3.`);  
// }

// Q9
// var userInput = parseInt(prompt("Enter a number to check if it's even or odd:"));  
// if (userInput % 2 == 0) {  
//     alert(`${userInput} is an even number.`);  
// } else {  
//     alert(`${userInput} is an odd number.`);  
// }

// Q10
// var temperature = prompt('Enter your temperature');
// var message;
// if(temperature >= 40 && temperature <= 50){
//     message ="It is too hot outside.";
// } else if(temperature >= 30 && temperature <= 39){
//     message ="The Weather today is Normal."
// } else if(temperature >= 20 && temperature <= 29){
//     message ="Today’s Weather is cool."
// } else if(temperature >= 10 && temperature <= 19){
//     message ="OMG! Today’s weather is so Cool."
// } 
// console.log(message);

// Q11
// var firstNumber = +prompt('First number');
// var SecondNumber = +prompt('Second number');
// var operator = prompt('Enter calculator operator (+, -, *, /, %)');
// var answer ;
// if(operator === '+'){
//     answer = firstNumber + SecondNumber ;
// }else if(operator === '-'){
//     answer = firstNumber - SecondNumber ;
// }else if(operator === '*'){
//     answer = firstNumber * SecondNumber ;
// }else if(operator === '/'){
//     answer = firstNumber / SecondNumber ;
// }else if(operator === '%'){
//     answer = firstNumber % SecondNumber ;
// }
// console.log(answer);

// USER INPUT & CONDITIONAL STATEMENT (end)

// IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS (start)
// Q1
// var firstInteger = +prompt('Enter first value only number');
// var secondInteger = +prompt('Enter second value only number');
// var message ;
// if(firstInteger || secondInteger){
//     if(firstInteger > secondInteger){
//         message = `The larger integer is ${firstInteger}.`;
//     }else if (secondInteger > firstInteger){
//         message = `The larger integer is ${secondInteger}.`;
//     }else if (secondInteger == firstInteger){
//         message = `The equal integer is ${firstInteger} == ${secondInteger}.`;
//     }
// }
// console.log(message);

// Q2
// var number = +prompt('Enter number ');
// var message ;
// if(number > 0){
//     message = `The number is positive. ${number}`
// }else if(number < 0){
//     message = `The number is negative. ${number}`
// }else {message = "The number is zero."}
// console.log(message);

// Q3
// var input = prompt('Enter 1 letter'.toLowerCase());
// var vowel = ['a', 'e', 'i', 'o', 'u'];
// var message;
// if(input.length == 1){
//     if(vowel.includes(input)){
//         message = `${input} is vowel word.`;
//     }else{
//         message = `${input} is not vowel word `; 
//     }
// }else{
//     console.log(`Please enter 1 word Not 2 words ${input}`);
// }
// console.log(message);

// Q4
const correctPassword = "mypassword123"; 
const userInput = prompt("Please enter your password:");  
if (userInput === null || userInput.trim() === "") {   
      console.log("Please enter your password");  
} else if (userInput === correctPassword) {  
    console.log("Correct! The password you entered matches the original password.");  
} else {  
    console.log("Incorrect password"); 
}  



 