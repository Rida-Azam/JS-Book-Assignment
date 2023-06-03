//MATH METHODS        Assignment # 26-30 

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write("<br>")
var positiveNum=parseInt(prompt("Enter positive number : "))

document.write("number : " +positiveNum+ "<br>")
document.write("round off value : " +Math.round(positiveNum)+ "<br>")
document.write("floor value : " +Math.floor(positiveNum)+ "<br>")
document.write("ceil value  : " +Math.ceil(positiveNum)+ "<br>")

document.write("<br>")

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var negativeNum=parseFloat(prompt("Enter negative number : "))

document.write("number : " +negativeNum+ "<br>")
document.write("round off value : " +Math.round(negativeNum)+ "<br>")
document.write("floor value : " +Math.floor(negativeNum)+ "<br>")
document.write("ceil value  : " +Math.ceil(negativeNum)+ "<br>")

// document.write("<br>")

// 3. Write a program that displays the absolute value of a
// number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5
document.write("<br>")


var number = parseInt(prompt("Enter a number:"));
var absoluteValue = Math.abs(number);
document.write("The absoulte value of " +number+" is "+absoluteValue+ "<br>")




// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


document.write("<br>")

var dice= Math.floor(Math.random() * 6) + 1;

document.write("random dice value : "+dice);

document.write("<br>")


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


var n = Number(prompt("How many times do you want to flip the coin?"));
var coinValue=Math.random();
if(coinValue<0.5){
  coinValue="Heads";
}else{
  coinValue="Tails";

}


document.write(n +"<br>");
document.write("The value of the coin is: " + coinValue +"<br>");
document.write("<br>")



// 6. Write a program that shows a random number between 1
// and 100 in your browser.


document.write("<br>")
var numb=Math.floor(Math.random() * 100)+ 1;
document.write("random number between 1 to 100 :" +numb+ "<br>");

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


var userInput = prompt("Enter your weight:");
var weight;

if (userInput.includes("kgs") || userInput.includes("kilograms")) {
  weight = parseFloat(userInput);
} else {
  weight = parseInt(userInput);
}

document.write("The weight of the user is: " + weight + " kilograms");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


var secretNum=parseInt(prompt("Enter a number between 1 and 10 "))
document.write("<br>")
var numb=Math.floor(Math.random() * 10)+ 1;

if(secretNum==numb){
    alert("Congratulations! You Guessed the Secret Number");
} else{
        document.write("Not matched, try again :");
}
    
    