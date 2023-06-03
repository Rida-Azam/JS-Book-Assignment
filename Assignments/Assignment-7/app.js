// Assignment # 9-10

//USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var cityName=prompt("Enter Your City Name : " );
if(cityName==="Karachi"){
    document.write("Welcome to city of light");
}else{
    document.write("Welcome to " + cityName);
}

document.write("<br>")

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender=prompt("Enter Your gender : " );
document.write("<br>")


if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
  } else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
  } else {
    alert("Good Morning!");
  }

  document.write("<br>")

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
document.write("<br>")


var color = prompt("Enter the color of traffic signal: ");

if (color.toLowerCase() === "red") {
    alert("Must Stop");
} else if (color.toLowerCase() === "yellow") {
    alert("Ready to Move");
} else if (color.toLowerCase() === "green") {
    alert("Move Now");
} else {
    alert("Invalid Color");
}


document.write("<br>")

// 4. Write a program to take input remaining fuel in car (in litres) from user. 
//If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

document.write("<br>")

var fuel = parseFloat(prompt("Enter the remaining fuel in car (in litres ) :" ));

if(fuel<0.25){
    alert("Please refill the fuel in your car")
}else{
    alert("Sufficient Fuel Level")
}

// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
document.write("<br>")




// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

document.write("<br>")

// var c = 12;
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


document.write("<br>")




//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

document.write("<br>")




// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// document.write("<br>")


//  if("car" < "cat"){
// alert("car is smaller than cat");
// }

document.write("<br>")


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

document.write("<br>")




function calculatePercentage(marksObtained, totalMarks) {
    var percentage = (marksObtained / totalMarks) * 100;
    return percentage;
}

function calculateGrade(percentage) {
    if (percentage >= 80) {
        document.write("Remarks: Excellent<br>");
        return "A-one";
        
    } else if (percentage >= 70) {
        document.write("Remarks: Good<br>");
        return "A";

    } else if (percentage >= 60) {
        document.write("Remarks: You need to improv<br>");
        return "B";

    } else (percentage <= 60) 
        document.write("Remarks: Sorry<br>");
        return "Fail";

    }

    document.write("<br>")

// // Taking input from the user
var subject1Marks = parseInt(prompt("Enter marks obtained in Subject 1: "));
var subject2Marks = parseInt(prompt("Enter marks obtained in Subject 2: "));
var subject3Marks = parseInt(prompt("Enter marks obtained in Subject 3: "));
var totalMarks = parseInt(prompt("Enter total marks: "));

// Calculating the percentage
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = calculatePercentage(totalObtainedMarks, totalMarks);

// Determining the grade
var grade = calculateGrade(percentage);

// Displaying the results
document.write("<h1>MarkSheet</h1><br>")
document.write("Total Marks: " + totalMarks+ "<br>");
document.write(" Obtain Marks: " + totalObtainedMarks + "<br>");

document.write("<br>")

document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade);
document.write("<br>")

document.write("<br>")

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


document.write("<br>")

var secretNumber=7;
var guessNum=+parseInt(prompt("Please Guess the Secret Number (from 1 to 10) : "))

if(guessNum===secretNumber){
    document.write("Bingo! Correct answer");
}else if(guessNum===secretNumber+1){
    document.write("Close enough to the correct answer");
}else {
     document.write("Not matched, try again ");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

document.write("<br>")

var givenNumber=parseInt(prompt("Enter a number :"));

if(givenNumber%3==0){
    alert(+givenNumber+" is divisible by 3");
}else{
    alert(+givenNumber+" is not divisible by 3");
}
document.write("<br>")

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var check=parseInt(prompt("Enter any number"));

if(check%2==0){
    alert(+check+" is even number");
}else{
    alert(+check+" is odd number");
}

document.write("<br>")


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp=parseInt(prompt("Enter the temperature"));

if(temp>40){
    alert(" It is too hot outside.");
}else if(temp>30){
    alert("The Weather today is Normal");
}else if(temp>20){
    alert("Today’s Weather is cool.");
}else if(temp>10){
    alert("OMG! Today’s weather is so Cool.");
}else{
    alert("temperature is snowy!!") 
}

document.write("<br>")




// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

document.write("<br>")


// Prompt the user to enter the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Calculate and show the result based on the operation
var result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  document.write("Invalid operation.");
  // Terminate the program if the operation is invalid

}
document.write("<br>")

document.write("Result: " + result);
