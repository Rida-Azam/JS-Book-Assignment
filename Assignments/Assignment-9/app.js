//ARRAY    Assignment # 13-15


// 1. Declare an empty array using JS literal notation to store student names in future.

// var studentName=[];
// studentName.push("Rida");
// document.write(studentName);

// 2. Declare an empty array using JS object notation to store student names in future.

// var stdName={
//     names:[]
// }

// 3. Declare and initialize a strings array.

// var stringArray=["Rida","Samia","Arhama"]


// 4. Declare and initialize a numbers array.

// var numArray=[1,2,3,4,5,6,7,8,9,10]

// 5. Declare and initialize a boolean array.

//var bollArray=[True,False]

// 6. Declare and initialize a mixed array.


//var mixArray=[1,2,3,"hello","hi",true,false]

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

document.write("<h1>Qualification :</h1>")
var education=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M."," Phil.", "PhD"]

document.write("1) "+education[0]+"<br>");  
document.write("2) "+education[1]+"<br>");  
document.write("3) "+education[2]+"<br>");  
document.write("4) "+education[3]+"<br>");  
document.write("5) "+education[4]+"<br>");  
document.write("6) "+education[5]+"<br>");  
document.write("7) "+education[6]+"<br>");  
document.write("8) "+education[7]+"<br>");  
document.write("9) "+education[8]+"<br>");  

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var studentName=["Michael","John","Tony"];
var score=[320,230,480];
var totalMarks=500;

var studentPercentages = [];
for (var i = 0; i < score.length; i++) {
  var percentage = (score[i] / totalMarks) * 100;
  studentPercentages.push(percentage.toFixed(2));
}

document.write( "Scroe of " +studentName[0] + " is " +score[0]+ " Percentage : "+studentPercentages[0]+"<br>");  
document.write( "Scroe of " +studentName[1] + " is " +score[1]+ " Percentage : "+studentPercentages[1]+"<br>");  
document.write( "Scroe of " +studentName[2] + " is " +score[2]+ " Percentage : "+studentPercentages[2]+"<br>");  

// 9. Initialize an array with color names. Display the array
// elements in your browser.

var colorNames=["Red","Green","Blue","Pink"]
document.write("Colors : ", colorNames + "<br>")

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var beginColor=prompt("What color you want to add in the beginning of array : ");
// colorNames.unshift(beginColor);
// document.write("Updated color at beginning: ", colorNames + "<br>");


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var endColor=prompt("What color you want to add in the end of array : ");
// colorNames.push(endColor);
// document.write("Updated color  at end : ", colorNames+ "<br>");


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.


// colorNames.unshift("Orange","Brown");
// document.write("Upadated two or more color : " +colorNames + "<br>");

// d. Delete the first color in the array. Display the updated array in your browser.

// colorNames.shift();
// document.write("Updated Deleted the first color in Array : " + colorNames + "<br>");

// e. Delete the last color in the array. Display the updated
// array in your browser.

// colorNames.pop();
// document.write("Updated Deleted the last color in Array : " + colorNames + "<br>");

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.


// var addIndex=prompt("Where you want to add color enter desired position : ");

// var addColor=prompt("What color you want to add : ");

// colorNames.splice(addIndex, 0, addColor);


// // Display the updated array
// document.write("Updated Array after adding color at a specific index : ", colorNames + "<br>" );



// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var deleteIndex=prompt("Where you want to delete color enter desired position : ")
// var deleteColor=prompt("What color you want to delete : ");


// colorNames.splice(deleteIndex, deleteColor);

// document.write("Updated Array after delete color at a specific index : ", colorNames + "<br>" );





// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort method.

var studentScore=[320,230,480,120];
document.write("Scores Of Students : ",studentScore +"<br>");
document.write("<br>")

studentScore.sort();
document.write("Ordered Scores Of Students : ",studentScore +"<br>");
document.write("<br>")






// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities=["Karachi", "Lahore" ,"Islamabad","Quetta","Peshawar"];
document.write("Cities Lists : <br>" ,cities+"<br>")

document.write("<br>")
var selectedCities=cities.slice(2,4);
document.write(" Selected Cities Lists : <br>" ,selectedCities +"<br>")



// 12. Write a program to create a single string from the
// below mentioned array:(Use array’s join method)


 var string = ["This","is","my","cat"]; 
document.write("Array : ", string);

document.write("<br>")
var res=string.join(" ")
document.write("String : ", res);
document.write("<br>");
document.write("<br>");


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
document.write("<br>");

var devices=["keyboard","mouse","printer","monitor"];
document.write("Devices : <br> " ,devices);

document.write("<br>");

document.write("Out : <br>" ,devices.shift());

document.write("<br>");

document.write("Out : <br>" ,devices.shift());
document.write("<br>");

document.write("Out : <br>" ,devices.shift());
document.write("<br>");

document.write("Out : <br>" ,devices.shift());
document.write("<br>");


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

document.write("<br>");

var lifo=["keyboard","mouse","printer","monitor"];
document.write("Devices : <br> " ,lifo);

document.write("<br>");

document.write("Out : <br>" ,lifo.pop());

document.write("<br>");

document.write("Out : <br>" ,lifo.pop());
document.write("<br>");

document.write("Out : <br>" ,lifo.pop());
document.write("<br>");

document.write("Out : <br>" ,lifo.pop());
document.write("<br>");



// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var phone=["Apple","Samsung", "Motorola","Nokia"," Sony "," Haier"]
document.write()

 for(let item of phone){
    var o=document.createElement("option");
    o.text=item;
    s.appendChild(o);
 }

 document.write(s);
