// IF…ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS

// Assignment # 12-13


// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// Taking input from the user


var character = prompt("Enter a character:");

if(!isNaN(character)){
    alert("The charater "+character+ " is number");
}else if(character >= "A" && character <= "Z"){
    alert("The charater "+character+ " is Uppercase");
}else if(character >= "a" && character <= "z"){
    alert("The charater "+character+ " is Lowercase");
}else {
    alert("The charater "+character+ " is Undefine");
}
document.write("<br>")


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = parseInt(prompt("Enter a number 1:"));
var num2 = parseInt(prompt("Enter a number 2:"));

if(num1>num2){
    alert("The  number 1 is greater than 2");
}else if(num2>num1){
    alert("The number 2 is greater than 1");
}else if(cnum1=num2){
    alert("Both numbers are Equal");
}else {
    alert("the number is lesser");
}
document.write("<br>")

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


var num = parseFloat(prompt("Enter a number :"));


if (num > 0) {
    alert("The number " + num + " is positive");
} else if (num < 0) {
    alert("The number " + num + " is negative");
} else {
    alert("The number is zero");
}

document.write("<br>")

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var char = (prompt("Enter any character (string of length 1) : "))



char=char.toLowerCase();
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert("True");
} else {
    alert("False");
}

document.write("<br>")

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they aresame, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect password” otherwise.
document.write("<br>")


var password="Karachi123";
var userPassword=prompt("Enter your password please :")

if( userPassword === "" ){
    alert("Please enter your password");
}else if(userPassword === password){
   alert("Correct! The password you entered matches the original password");

}else{
    alert("Incorrect password");
}
document.write("<br>")


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

document.write("<br>")

var greeting;
var hour=13;

if(hour<18){
    greeting="Good day";
}else{
    greeting="Good evening";
}

alert(greeting);
document.write("<br>")


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


var time = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):");

if (time >= 0000 && time< 1200) {
  alert("Good morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon");
} else if (time >= 1700 && time< 2100) {
  alert("Good evening");
} else if (time >= 2100 && time < 2359) {
  alert("Good night"); 
} else {
  alert("Invalid time format");
}




















