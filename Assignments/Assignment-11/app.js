// String Methods Assignment # 21-25

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var userInput1=prompt("Enter first name : ");
var userInput2=prompt("Enter last name : ");
var fullName=userInput1+" "+userInput2;
alert("Good Morning ! "+fullName);

document.write("<br>");


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

document.write("<br>");

// var userInput=prompt("Enter your favorite mobile phone model : ");
// document.write("My favorite phone is : " +userInput+"<br>");

// document.write("Length of string : "+userInput.length+"<br>")

document.write("<br>");


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var str="Pakistani";

document.write(" String : " +str+"<br>")
document.write(" Index of 'n' is : " +str.search("n")+"<br>")
document.write("<br>");

// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

document.write("<br>");

var stri="Hello World";
document.write(" String : " +stri+"<br>")
document.write(" Last Index of 'l' is : " +stri.lastIndexOf("l")+"<br>")

document.write("<br>");

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
document.write("<br>");

var str="Pakistani";
var index = 3;

document.write(" String : " +str+"<br>")
document.write(" Character at index 3 : " +str.charAt(index)+"<br>")
document.write("<br>");

// 6. Repeat Q1 using string concat() method.

// var fname="Rida";
// var lname="Azam";
// var fullName=fname.concat(" ",lname);
// alert("Good Morning ! " +fullName);

document.write("<br>");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city="Hyderabad";
document.write("City : "+city +"<br>");
document.write("After replacement  : "+city.replace("Hyderabad","Islamabad") +"<br>");

document.write("<br>");

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
document.write("<br>");

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g,"&"))

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
document.write("<br>");

// var stringnum="472";
// document.write("Value : "+ stringnum +"<br>")
// document.write("Type : "+ typeof stringnum+"<br>")

// var num=Number(stringnum);
// document.write("Value : "+ num +"<br>")
// document.write("Type : "+ typeof num+"<br>")

// document.write("<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


// document.write("<br>");
// var inp=prompt("Enter any input tha convert in uppercase");
// document.write("User input : " +inp +"<br>");
// document.write("Upper case : " +inp.toUpperCase());

document.write("<br>");

// 11. Write a program that takes user input. Convert and
// show the input in title case.

document.write("<br>");
// var inp=prompt("Enter any input tha convert in Title case");
// document.write("User input : " +inp +"<br>");
// document.write("Title case : " +inp[0].toUpperCase() + inp.slice(1).toLowerCase());

// 12. Write a program that converts the variable num to
// string.
var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

// document.write("<br>");
// document.write("Number : " +num+"<br>");
// var numSrting=num.toString();
// document.write("Result : " +numSrting.replace(".","")+"<br>");

// document.write("<br>");


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

document.write("<br>");

// var valid=prompt("Please enter valid username ")


// var userName=prompt("Enter your Input: ");
// var containsAlphabets = false;
// var specialChar=false;
// for (var i = 0; i < userName.length; i++) {
//   var charCode = userName.charCodeAt(i);
  
//   if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//     containsAlphabets = true;
//   }

//   if(charCode==33 || charCode==44 || charCode==46 || charCode==64){
//     specialChar=true;
//     break;
//   }
//   }

// // Check if username meets the requirements
// if (containsAlphabets && specialChar ) {
//   alert("Please enter a valid username!");
// } else {
//   alert(" valid username!");
// }

document.write("<br>");

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching,
// prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

document.write("<br>");

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:").toLowerCase();
 
// Prompt the user for input and convert it to lowercase

// var found = false;
// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert("The item '" + userInput + "' is found in the list.");

// } else {
//   alert("The item '" + userInput + "' is not found in the list.");
// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter a password:");

// var containsAlphabets = false;
// var containsNumbers = false;
// var startsWithAlphabet = false;
// var isLengthValid = password.length >= 6;

// // Check if password contains alphabets and numbers

// for (var i = 0; i < password.length; i++) {
//   var charCode = password.charCodeAt(i);
  
//   if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//     containsAlphabets = true;
//   }
  
//   if (charCode >= 48 && charCode <= 57) {
//     containsNumbers = true;
//   }
// }

// // Check if password starts with an alphabet
// var firstCharCode = password.charCodeAt(0);
// if ((firstCharCode >= 65 && firstCharCode <= 90) || (firstCharCode >= 97 && firstCharCode <= 122)) {
//   startsWithAlphabet = true;
// }

// // Check if password meets the requirements
// if (containsAlphabets && containsNumbers && startsWithAlphabet && isLengthValid) {
//   alert("Password is valid!");
// } else {
//   alert("Please enter a valid password!");
// }



document.write( "<br>");

// 16. Write a program to convert the following string to an
// array using string split method.

// var university = "University of Karachi";
// // Display the elements of array in your browser.

// // var university = "University of Karachi";
// var array = university.split("");
// document.write(" <br><br>" + array.join("<br>"));
// document.write( "<br>");

// // document.write( university.split())


// document.write( "<br>");



// // 17. Write a program to display the last character of a user input.
document.write("<br>");

// var userIn="Pakistan";

// document.write(" User Input : " +userIn+"<br>")
// document.write(" Last character of input : " +userIn.slice(-1)+"<br>")


// // 18. You have a string “The quick brown fox jumps over the
// // lazy dog”. Write a program to count number of
// // occurrences of word “the” in given string.
document.write("<br>");

// var stringcount="the quick brown fox jumps over the lazy dog";

// var count = (stringcount.match(/the/g)).length;
// document.write("Text : "+stringcount+"<br>");
// document.write("There are " +count+ " occurence(s) of word 'the' ")
