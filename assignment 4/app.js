/**1. Declare an empty array using JS literal notation to store
student names in future. */
var stdName = [ ];
var array =["hanzala","danish","fariya","mumtaz"]
document.write(array.join("^")) //use some array method (join) for  print the elements of array with ^ as separator 

/**2. Declare an empty array using JS object notation to store
student names in future. */
var studentName = [ ];
/**Declare and initialize a strings array.
4. Declare and initialize a numbers array.
5. Declare and initialize a boolean array.
6. Declare and initialize a mixed array. */
var arr =["hanzala","ibad","rumaz"]
document.write("Array of Strings: "+arr+"<br>");
//numbers array  
numArr=[3,78,90];  
document.write("Number Array :"+numArr+ "<br>"); 
//boolean array   
boolArr= [true,false,true] ;        
document.write("Boolean Array : "+boolArr+"<br>")
// mixed array
mixArr= ["Hanzala",34,"Ibad",false,90];    
document.write("Mixed Array : " + mixArr);



/**7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications */

studentQualification = ["SSC","HSC","BSC","BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2> QUALIFICATIONS ARE :</h2>")
for( var i = 0; i< studentQualification.length ; i++){
    document.write(i+". "+studentQualification[i]+"<br>");

}
/**8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like: */
var studentNames =["hanzala","ibad","rumaz"];
var studentNumbers =[160,170,150,];
var percentages;
for(var i =0; i< studentNames.length ; i++) {
    console.log("the students name are :",studentNames[i]);
    percentages= (studentNumbers[i]/500)*100
    console.log(`the percentage of student ${studentNames[i]} is :${percentages}% and the scores they get are :${studentNumbers[i]} `);
    console.log("\n")

    // I prefer to console here

//     document.write(studentNames[i]+ "'s Score is : "+studentNumbers[i]);
//     percentages=(studentNumbers[i]/500)*100;
//     document.write("& His Percentage is : "+percentages+"% <br>");


}


// 9. Initialize an array with color names. Display the array
// elements in your browser.

// var colorArray= ["orange","red","green", "blue", "yellow"];
// document.write("<br>")
// for(var i =0; i<5; i++){
//     document.write(colorArray[i] +"<br>");
    
// }
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var colorAray =["orange","red","tea pink", "blue", "yellow"];
// var userPrompt = prompt("what color you want to add in the beginning of color collection !" );
// console.log(colorAray);
// console.log(`the user choose :${userPrompt} color`);
// console.log("after user input the updated  color collection will be displayed as");
// colorAray.unshift(userPrompt);
// console.log(colorAray);


// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
// updated array in your browser.

// var colorAray =["orange","red","tea pink", "blue", "yellow"];
// var userPrompt = prompt("what color you want to add in the last of color collection !" );
// console.log(colorAray);
// console.log(`the user choose :${userPrompt} color`);
// console.log("after user input the updated  color collection will be displayed as");
// colorAray.push(userPrompt);
// console.log(colorAray);


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

var colorAray =["orange","red","tea pink", "blue", "yellow"];
console.log("before updation",colorAray);
for(var i =0  ; i <2; i++) {
var userPrompt = prompt("what color you want to add in the last of color collection !" );
colorAray.unshift(userPrompt);
console.log(`the user choose :${userPrompt} color`);
}
console.log("after user input the updated  color collection will be displayed as");
console.log(colorAray);

// d. Delete the first color in the array. Display the updated
// array in your browser.


// e. Delete the last color in the array. Display the updated
// array in your browser.


// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

