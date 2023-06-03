// ARRAYS AND LOOP Assignment # 17-20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// Declare and initialize an empty multidimensional array
// var multidimensionalArray = [];

// Add empty arrays as elements to the main array
// multidimensionalArray[0] = [];
// multidimensionalArray[1] = [];
// multidimensionalArray[2] = [];

// Display the multidimensional array
// document.write(multidimensionalArray);


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var multiArray=[ 
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];

// for(var a=0;a<4;a++){
//     for(var b=0;b<4;b++){
//         document.write(multiArray[a][b] + " ")
//     }
//     document.write("<br>");
// }

document.write("<br>");

// 3. Write a program to print numeric counting from 1 to 10.
document.write("<br>");


for(var c=1;c<=10;c++){
    document.write(c+ "<br>" );
}

document.write("<br>");

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.              


// var tableNumber=prompt("Enter a number to show its multiplication table ");
// var tableLength=prompt("Enter length multipication table  ")
// var table="";
// document.write("Multiplication table of  " +tableNumber+ "<br>" +" length "+tableLength+"<br>")
// document.write("<br>");
// for(var a=1 ;a<=tableLength;a++){
//      var mul=tableNumber*a;
//      table+=tableNumber+ " x " + a + " = " + (mul) + "<br>";  
// }

// document.write(table);




// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");

  // document.write("<br>")
}

document.write("<br>")
for (var i = 0; i < fruits.length; i++) {
  document.write(" Element at index  " + i + " is " + fruits[i] + "<br>");

}


//   6. Generate the following series in your browser. See
//   example output.
//   a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//   b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//   c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//   d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//   e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k     

document.write("<br>");

document.write("Counting :" + "<br>");
document.write("<br>");

for (var i = 1; i <= 15; i++) {

  document.write(i + " , ");

}
document.write("<br>");

document.write("<br>");

document.write(" Reverse Counting :" + "<br>");
document.write("<br>");


for (var b = 10; b >= 1; b--) {
  document.write(b + " , ");
}
document.write("<br>");
document.write("<br>");

document.write("Even :" +"<br>");
document.write("<br>");

for(var d=0 ; d<=20; d+=2){
  document.write(d + " , ");
}
document.write("<br>");
document.write("<br>");
     
document.write("Odd :" +"<br>");
document.write("<br>");

// console.log

for(var t=1;t<=19;t+=2){
 document.write( t + " , ");
}
document.write("<br>");
document.write("<br>");

document.write("Series :" +"<br>");
document.write("<br>");

for(var f=2;f<=20;f+=2){
  document.write(f + "k , ");
}

document.write("<br>");


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var list = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search=prompt("Welcome to ABC bakery.What do you want to order sir/ma'am?");



// if (search=="cake") {
//   document.write("cake is available at index 0 in our bakery");
// }else if(search=="apple pie") {
//   document.write("apple pie is available at index 1 in our bakery");
// }else if(search=="cookie") {
// document.write("cookies is available at index 2 in our bakery");
// }else if(search=="chips") {
//   document.write("chips is available at index 3 in our bakery");
// }else if(find=="patties") {
//   document.write("patties is available at index 4 in our bakery");
// }else {
//   document.write("we are sorry "+search+" is not available in our bakery");
// }

document.write("<br>");


// 8. Write a program to identify the largest number in the
// given array.  A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
var largestNumber = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  }
}

document.write("Array items : " , A +"<br>")
document.write("The largest number is: " + largestNumber +"<br>");

document.write("<br>");


// 9. Write a program to identify the smallest number in the
// given array.A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
var smallestNumber = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }
}

document.write("Array items : " , A +"<br>")
document.write("The largest number is: " + smallestNumber +"<br>");

document.write("<br>");

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

document.write("<br>");

for(var i=1;i<=20;i++){
  var mul=5*i;
  document.write(mul +",");
}