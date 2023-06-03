//FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS

//Assignment # 38-44
document.write("<br>");
//   1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
    var result = Math.pow(a, b);
    return result;
  }
  
  // Example usage:
  var base = 2;
  var exponent = 3;
  var result = power(base, exponent);
  console.log(result); // Output: 8
document.write("<br>");

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function checkLeapYear(year){
//     if(year%4==0 && year%100!==0){
//         return true;
//     }
//     else if(year%400==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let year = parseInt(prompt("Enter the year:"));
// if(checkLeapYear(year)==true){
//     document.write(year," is a leap year");
// }
// else{
//     document.write(year," is not a leap year")
// }
document.write("<br>");


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function findArea( a,  b,  c) 
{ 

    if (a < 0 || b < 0 || c < 0 || 
       (a + b <= c) || a + c <= b || b + c <= a) 
    { 
        document.write( "Not a valid triangle"); 
        return;
    } 
    var s = (a + b + c) / 2; 
    return Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
} 


var a = 3.0; 
var b = 4.0; 
var c = 5.0; 

document.write( "Area Of Traingle is  " + findArea(a, b, c));

document.write("<br>");


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

document.write("<br>");


  function calculateAverage(subj1, subj2, subj3) {
    var average = (subj1+subj2+subj3/ 3);
    return average;
  }
  

  function calculatePercentage(subj1, subj2, subj3) {
    var x = subj1 + subj2 + subj3;
    var percentage = ((x / 300) * 100);
    return percentage;
  }

  function mainFunction(subj1, subj2, subj3) {
    var average = calculateAverage(subj1, subj2, subj3).toFixed(2);
    var percentage = calculatePercentage(subj1, subj2, subj3).toFixed(2);
  
    document.write("Average: " + average);
    document.write("<br>");
    document.write("Percentage: " + percentage + "%");
  }

  var subject1Marks = 90;
  var subject2Marks = 90;
  var subject3Marks = 80;
  mainFunction(subject1Marks, subject2Marks, subject3Marks);


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

document.write("<br>");
function indexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }
  
  var input = "What going on?";
  var searchCharacter = "o";
  
  var result = indexOf(input, searchCharacter);
  document.write("Index of " + searchCharacter + " : " + result);
  
  document.write("<br>");

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowel(string) {

    var  vowel = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
    var result = "";
      
    for(let i = 0; i < string.length; i++) 
    {
          
        if (!vowel.includes(string[i]))
        {
            result += string[i];
        }
    }
    return result;
}
  
var string = " Bano Qabil" + "Rida Azam";
document.write(deleteVowel(string));
  

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

document.write("<br>");

function countSuccessiveVowels(string) {

    var string = "Pleases read this application and give me gratuity";
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < string.length - 1; i++) {
      const currentChar = string[i].toLowerCase();
      const nextChar = string[i + 1].toLowerCase();
  
      switch (currentChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          if (vowels.includes(nextChar)) {
            count++;
            i++; 
          }
          break;
      }
    }

    return count;
  }
  
  var occurrences = countSuccessiveVowels(string);
  document.write("The occurence of same vowel is :"+occurrences);
  

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

document.write("<br>");

// Function to convert distance from kilometers to meters
function convertToMeters(distanceInKm) {
    return distanceInKm * 1000;
  }
  
  // Function to convert distance from kilometers to feet
  function convertToFeet(distanceInKm) {
    return distanceInKm * 3280.84;
  }
  
  // Function to convert distance from kilometers to inches
  function convertToInches(distanceInKm) {
    return distanceInKm * 39370.1;
  }
  
  // Function to convert distance from kilometers to centimeters
  function convertToCentimeters(distanceInKm) {
    return distanceInKm * 100000;
  }
  
  // Function to print the converted distances
  function printFunctions(distanceInKm) {
    var distanceInMeters = convertToMeters(distanceInKm);
    var distanceInFeet = convertToFeet(distanceInKm);
    var distanceInInches = convertToInches(distanceInKm);
    var distanceInCentimeters = convertToCentimeters(distanceInKm);
  
    document.write("Distance: "+distanceInKm+" km<br>");
    document.write("Distance in Meters: "+distanceInMeters+ " m<br>");
    document.write("Distance in Feet: "+distanceInFeet+" ft<br>");
    document.write("Distance in Inches: "+distanceInInches+" in<br>");
    document.write("Distance in Centimeters: "+distanceInCentimeters+" cm<br>");
  }
  document.write("<br>");
 var distanceInKm = 100;
 printFunctions(distanceInKm);
  

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


document.write("<br>");

function calculateOvertime(hoursWork) {
    var workingHour = 40;
    var overtimeRate = 12.00;
    var overtimePay = 0;
  
    if (hoursWork> workingHour) {
      const overtimeHours = hoursWork - workingHour;
      overtimePay = overtimeHours * overtimeRate;
    }
  
    return overtimePay;
  }
  
  // Usage example
  const hoursWork = 60;
  const overtimePay = calculateOvertime(hoursWork);
  document.write("Overtime Pay: "+overtimePay.toFixed(2)+" Rs");
  

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

document.write("<br>");


	// function to count and
	function countCurrency(amount)
	{
		var notes =[100, 50, 10];
		var noteCounter = Array(2).fill(0);
		
		// count notes using Greedy approach
		for (var i = 0; i < 3; i++) {
			if (amount >= notes[i]) {
				noteCounter[i] = Math.floor(amount / notes[i]);
				amount = amount % notes[i];
			}
		}
		
		// Print notes
        
	document.write("you will have " );
		for (let i = 0; i < 3; i++) {
			if (noteCounter[i] != 0) {
document.write(notes[i] + " of "+ noteCounter[i] + " notes ");
			}
		}
	}
//call function	
	var amount =parseInt(prompt("Enter amount to withdraw!!"));
	countCurrency(amount);
	





  