//FUNCTION  Assignment # 35-38
// 1. Write a function that displays current date & time in your
// browser.


document.write("<br>")
function displayCurrentDate() {
    var date = new Date();
    document.write(date)
}

displayCurrentDate();
document.write("<br>")


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greetUser(params) {
    var firstNmae = prompt("Enter First Name:");
    var lastName = prompt("Enter Last Name:");
    var fullName = firstNmae + " " + lastName;
    alert("Good Morning ! " + fullName);
}

greetUser();
document.write("<br>")


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
document.write("<br>")

function Add() {

    var num1 = parseFloat(prompt("Enter number 1:"));
    var num2 = parseFloat(prompt("Enter number 2:"));
    var sum = num1 + num2;
    return sum;
}
// var result=Add();
document.write("The sum of number is " + result)

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
document.write("<br>")

function calculator(num1, num2, operator) {
    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
       default:
            result="Invalid Operator";
            break;
    }

    return result;
}

var num1 = 50;
var num2 = 2;
var operator = "/";

var result = calculator(num1, num2, operator);

// Display result in  browser
document.write("The result is: " + result);



// 5. Write a function that squares its argument.
document.write("<br>")


function square(num) {
    return num*num;   
}
var num=5;
var result=square(num);
document.write("The square of " + num + " is: " + result);

document.write("<br>")


// 6. Write a function that computes factorial of a number.
document.write("<br>")
function factorial(num) {
    // Base case: if the number is 0 or 1, return 1
    if (num === 0 || num === 1) {
      return 1;
    }
  
    return num * factorial(num - 1);
  }
  
  var num = 10;
  var result = factorial(num);
  
  // Display the result in the browser
  document.write("The factorial of " + num + " is: " + result);
  document.write("<br>")


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function counting() {

    var startNumber=parseInt(prompt("Enter Starting Number :"));
    var endNumber=parseInt(prompt("Enter Ending Number :"));

    for(var i=startNumber;i<=endNumber;i++){
        document.write(i+"<br>");
    }  
}

// counting();

document.write("<br>")

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
      return num * num;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    return hypotenuse;
  }
  
  var base= 9;
  var perpendicular = 8;
  
  // Calculate hypotenuse oftriangle
  var result = calculateHypotenuse(base, perpendicular);
  
  // Display the result
  document.write("Hypotenuse: ", result);
  
  document.write("<br>")

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

document.write("<br>")

function areaOfTriangle(width,height) {
var area=width*height;
return area;    
}

var widthVal=8;
var heightVal=10;

var result=areaOfTriangle(widthVal,heightVal)
document.write("Area : "+result)



// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

document.write("<br>")

// program to check if the string is palindrome or not

function checkPalindrome(string) {
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
// get input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

document.write(value);

document.write("<br>")

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeWords(str) {
    // Split the string into an array of words
    var words = str.split(' ');
    
    // Loop through each word and capitalize the first letter
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    // Join the words back into a string
    var capitalizedStr = words.join(' ');
    
    return capitalizedStr;
  }
  
  var sentence = 'the quick brown fox';
  console.log(capitalizeWords(sentence)); 
  document.write("<br>")
  

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

document.write("<br>")

function findLongestWord(str) {
    // Split the string into an array of words
    var words = str.split(' ');
    
    var longestWord = '';
    var maxLength = 0;
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      
      if (word.length > maxLength) {
        longestWord = word;
        maxLength = word.length;
      }
    }
    
    return longestWord;
  }
  
  var sentence = 'Web Development Tutorial';
  console.log(findLongestWord(sentence)); 
  


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

document.write("<br>")

function countLetterOccurrences(str, letter) {
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
      }
    }
    
    return count;
  }
  
  var string1 = 'JSResourceS.com';
  var letter = 'o';
  
  console.log(countLetterOccurrences(string1, letter)); 
  


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

document.write("<br>")
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
  }
    function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
  }
  var radius = 5;
  calcCircumference(radius);
  calcArea(radius); 
  