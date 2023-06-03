//MATH EXPRESSIONS

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.


var num1=3;
var num2=5;
var sum=num1+num2;

document.write("Sum of " +num1+ " and " +num2+ " is "+sum+"<br>");

document.write("<br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

//For Subtraction


var num1=5;
var num2=4;
var sub=num1-num2;

document.write("Subraction of " +num1+ " and " +num2+ " is "+sub+"<br>")

document.write("<br>");

//For Multiplication

var num1=3;
var num2=5;
var mul=num1*num2;

document.write("Multiplication of " +num1+ " and " +num2+ " is "+mul+"<br>")
document.write("<br>");

//For Division

var num1=3;
var num2=6;
var div=num1/num2;

document.write("Division of " +num1+ " and " +num2+ " is "+div+"<br>")
document.write("<br>");

//For Modulus

var num1=7;
var num2=5;
var mod=num1%num2;

document.write("Modulus of " +num1+ " and " +num2+ " is "+mod+"<br>")
document.write("<br>");

// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

document.write("<br>");

var maths;
document.write("Value after variable declaration is : " +maths+ "<br>");
maths=5;
document.write("Initial Value : " +maths+ "<br>")
maths++;
document.write(" Value after increment is : " +maths+ "<br>")
maths+=7;
document.write(" Value after addition is : " +maths+ "<br>")
maths--;
document.write(" Value after decrement is : " +maths+ "<br>")
var rem=maths%3;
document.write("The remainder is : " +rem+ "<br>")


// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate 
// the cost of buying 5 tickets to a movie. Example output:
document.write("<br>");


var  ticketPrice=600;
var ticket=ticketPrice*5;
document.write("Total Cost to buy 5 tickets to a movie is " +ticket +"PKR")


// Write a script to display multiplication table of any number in your browser. E.g
document.write("<br>");

var num=3; // Define the number for the table
var table="";

 document.write(" <h2>Table of 2</h2> ");
for(let i=1;i<=10;i++){
    var result = num * i;
    table += num + " x " + i + " = " + result + "<br>";
}
document.write(table);


document.write("<br>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter
// based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

document.write("<h1>Converter Celsius to Fehrenheit/Fehrenheit to Celsisus</h1>")
var celTemp=25;
var fahrenheitTemperature = (celTemp * 9/5) + 32;
document.write(celTemp + "°C is " + fahrenheitTemperature + "°F<br>");

var farTemp=70;
var celsiusTemp=((farTemp-32)*5/9);
document.write(farTemp + "°F is " + celsiusTemp  + "°C<br>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
document.write("<br>");


var price1=650;
var price2=100;
var quantity1=3;
var quantity2=7;
var shippingCharges=100;
var totalCost=((price1*quantity1)+(price2*quantity2)+shippingCharges);
document.write(" <h1>Shopping Cart</h1> ");
document.write("Price of item 1 is " +price1+ "<br>")
document.write("Quantity of item 1 is "+quantity1+"<br>")
document.write("Price of item 2 is "+price2+"<br>")
document.write("Quantity of item 2 is "+quantity2+"<br>")
document.write("Shippping Charges "+shippingCharges+"<br>")
document.write("Total cost of your order is "+totalCost+"<br>")

document.write("<br>");


// 8. Store total marks & marks obtained by a student in 2 variables.
// Compute the percentage & show the result in your browser


var totalMarks=980;
var marks=804;
var result=(marks/totalMarks)*100;

document.write("Total Marks : "+totalMarks+"<br>")
document.write("Marks Obtained : "+marks+"<br>")
document.write("Percentage : "+result+"%<br>")
document.write("<br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the
// total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollor=10;
var riyal=25;

var exchangeRateUs=104.80;
var exchangeRateRiyal=28;

var total=((exchangeRateRiyal*riyal)+(exchangeRateUs*usDollor));

document.write("Total Currency in PKR is :"+total)
document.write("<br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num=5;
var arithmetic=(((num+5)*10)/2);
alert("Calculation : "+arithmetic)

document.write("<br>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values

document.write("<h1>Age Calculator</h1>")
var currentYear=2016;
var birthYear=1992;
var age=currentYear-birthYear;

document.write("Current Year : "+currentYear+ "<br>")
document.write("Birth Year : "+birthYear +"<br>")
document.write("Your Age is : "+age +"<br>") 

document.write("<br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1>The Geometrizer</h1>")
var radius=20;
var circumference= 2 * Math.PI * radius;;
var area=Math.PI * Math.pow(radius, 2);


document.write(" Radius of circle : "+radius+ "<br>")
document.write("The circumference is : "+circumference +"<br>")
document.write("The Area is : "+area +"<br>") 

document.write("<br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<br>");
              
document.write("<h1>The Lifetime Supply Calculator</h1>")
var snack="Chocolate Chips";
var age= 15;
var maximumAge=65;
var perDay=3;

var yearsRemaining = maximumAge - age;
var totalSnacks = perDay * yearsRemaining;


document.write("Favourite Snack : " +snack+ "<br>")
document.write("Current Age : "+age +"<br>")
document.write("Estimated Maximum Age : "+maximumAge +"<br>") 
document.write("Amount of snack per day : " + perDay +"<br>") 
document.write("You will need " + totalSnacks +" chocolate chips to last you until the ripe old age of "+maximumAge +"<br>") 

         


