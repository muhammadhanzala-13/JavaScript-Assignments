
//              chapter 4........

// Declare 3 variables in one statement.
var x = 10, y = "hanzala",z =[22,33,44.5]
console.log(typeof z)
// 2. Declare 5 legal & 5 illegal variable names.
// Legal variable names
let firstName = 'John';
let my_var = 123;
let num1 = 456;
let $var = 'hello';
let _var = true;

// Illegal variable names

// let 1variable = 'not allowed'; // starts with a digit
// let var! = 'not allowed'; // contains special characters other than underscores or dollar signs
// let for = 'not allowed'; // reserved keyword

//              chapter 5.........

/* 3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value

MATH EXPRESSIONS | JAVASCRIPT


after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”. 

*/
console.log("output is in browser with internal script");
/*Q6)Write a script to display multiplication table of any
number in your browser. E.g*/

function displayMultiplicationTable() {
    var num = +prompt("enter number for multiplication");
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
// calling function:
displayMultiplicationTable();


//      chapter 6.........
/* 6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.

ALERTS | JAVASCRIPT

Page 3 of 3
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)*/
alert("question 6 also in browers");