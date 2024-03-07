// // function add(a,b){
// //     var a;
// //     var b;
// //     return  a+b;
// // }
// // var x =+prompt("enter num1")
// // var  y= +prompt ("enter num2");
// // console.log(add(x,y));

// //                          {chapter 9-11}
// /* 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights” */

// // Prompting the user to enter a city name
// var cityName = prompt("Please enter a city name:");

// // Checking if the entered city is Karachi
// if (cityName === "karachi") {
//     // If the city is Karachi, displaying the welcome message
//     alert("Welcome to the city of lights");
// } else {
//     // If the entered city is not Karachi, displaying a generic message
//     alert("you are in lahore");
// }
// /** 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal. */


// var a = prompt("enter your 1 number for comparision")
// var b = prompt("enter your 2 number for comparision")
// if (a >b){
//     console.log("the first number is greater than the second one");
// }
// else if(a < b) {
//     console.log("the  second number is greater than the first one");
// }
// else{
//     console.log("both number are equal")
// }
// /*3. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am. */
// // Prompting the user to enter their gender
// var gender = prompt("Please enter your gender (male/female):");

// // Converting the gender input to lowercase for case-insensitive comparison
// gender = gender.toLowerCase();

// // Checking the gender and displaying the appropriate message
// if (gender === "male") {
//     // If the user is male, displaying "Good Morning Sir"
//     alert("Good Morning Sir.");
// } else if (gender === "female") {
//     // If the user is female, displaying "Good Morning Ma'am"
//     alert("Good Morning Ma'am.");
// } else {
//     // If the input gender is neither male nor female, displaying a generic message
//     alert("Good Morning!");
// }
// /**Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now */

// var signalColor = prompt("Please enter the color of the traffic signal (red/yellow/green):");

// // Converting the input to lowercase for case-insensitive comparison
// signalColor = signalColor.toLowerCase();

// // Displaying the message based on the color of the traffic signal
// if (signalColor === "red") {
//     // If the signal color is red, displaying "Must Stop"
//     alert("Must Stop");
// } else if (signalColor === "yellow") {
//     // If the signal color is yellow, displaying "Ready to move"
//     alert("Ready to move");
// } else if (signalColor === "green") {
//     // If the signal color is green, displaying "Move now"
//     alert("Move now");
// } else {
//     // If the input color is not one of the specified colors, displaying a generic message
//     alert("Invalid input! Please enter a valid traffic signal color.");
// }
// /**Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// } */
// //              Answer A
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }
// //              Answer B
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }



// //              Answer D
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// //              Answer E
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
/**7.               Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”. */

// Define the secret number
// var secretNumber = 7; // You can change this number as desired

// // Prompt the user to guess the secret number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if the user's guess matches the secret number or is close enough
// if (userGuess === secretNumber) {
//     // If the guess is correct
//     alert("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     // If the guess is close enough to the correct answer
//     alert("Close enough to the correct answer.");
// } else {
//     // If the guess is incorrect
//     alert("Sorry, incorrect guess. The secret number was " + secretNumber + ".");
// }
// /**11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user. */

// // USING A METHOD CALL [parseFloat ()] that convert int into float daTa type

// var firstNumber = parseFloat(prompt("Enter the first number:"));

// var secondNumber = parseFloat(prompt("Enter the second number:"));

// var operation = prompt("Enter the operation (+, -, *, /, %):");


// var result;

// // Checking the operation and performing the corresponding calculation
// if (operation === '+') {
//     result = firstNumber + secondNumber;
// } else if (operation === '-') {
//     result = firstNumber - secondNumber;
// } else if (operation === '*') {
//     result = firstNumber * secondNumber;
// } else if (operation === '/') {
//     if (secondNumber === 0) {
//         alert("Error: Division by zero is not allowed.");
//     } else {
//         result = firstNumber / secondNumber;
//     }
// } else if (operation === '%') {
//     result = firstNumber % secondNumber;
// } else {
//     // If the operation is not recognized
//     alert("Invalid operation! Please enter one of the specified operations.");
// }

// // Displaying the result to the user
// if (result !== undefined) {
//     alert("Result: " + result);
// }
//                  the end 

//                  chapter 12-13
/**Write a program that takes a character (i.e. string oflength 1) and returns true if it is a vowel, false otherwise */
// Function to check if a character is a vowel
function isVowel(char) {
    // Convert the character to lowercase to handle both cases
    char = char.toLowerCase();

    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true; // Character is a vowel
    } else {
        return false; // Character is not a vowel
    }
}

// Test the function with user input
var inputChar = prompt("Enter a character:");

// Check if the input character is a single character
if (inputChar.length === 1) {
    var result = isVowel(inputChar);

    if (result === true) {
        alert("The character '" + inputChar + "' is a vowel.");
    } else {
        alert("The character '" + inputChar + "' is not a vowel.");
    }
} else {
    alert("Invalid input! Please enter a single character.");
}
/**6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
} */


//     solving it

// var greeting;
// var hour = 13;
// if(hour<18){
//     greeting="have a good day dear!";

// }
// else{
//     greeting ="unfortunately the day is pass, but happy evening dear!";
// }
// alert(greeting);

                        // yes it is working


//  now I try to little modefy it
// var greeting;
// var hour = parseInt(prompt("enter time in {24 hour formate}:"));
// if(hour<18){
//     greeting="have a good day dear!";

// }
// else{
//     greeting ="unfortunately the day is pass, but happy evening dear!";
// }
// alert(greeting);


/**7. Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements */
var userTime =parseInt(prompt("enter the time in [0000 - 2400] formate"));
if (userTime > 1 && userTime < 1200){
    alert("assalmualikum! \t good morning")
}
else if(userTime >= 1200 && userTime < 1700){
    alert(" hello dear! Good afternoon");
}
else if(userTime >= 1700 && userTime <2100){
    alert("hello dear! it a Good evening")
}
else if(userTime >= 2100 && userTime <=2359){
    alert("hello dear! it Good night")
}
else{
    alert("your are intersaliester person")
}
//                              THE END