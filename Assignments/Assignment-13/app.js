//Date Methods  //Assignment # 31-34

document.write("<br>");

// 1. Write a program that displays current date and time in your browser.

// var date = new Date();
// document.write(date);

document.write("<br>");


// 2. Write a program that alerts the current month in words.
// For example December.

var currentDate=new Date();
var monthIndex = currentDate.getMonth();

document.write("<br>");

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = monthNames[monthIndex];

document.write("Current month : " + currentMonth); 
document.write("<br>");

var my_month=new Date();


var month_name=new Array(12);
month_name[0]="January"
month_name[1]="February"
month_name[2]="March"
month_name[3]="April"
month_name[4]="May"
month_name[5]="June"
month_name[6]="July"
month_name[7]="August"
month_name[8]="September"
month_name[9]="October"
month_name[10]="November"
month_name[11]="December"

document.write ("Current month : " + month_name[my_month.getMonth()]); 


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


document.write("<br>")
// Create a new Date object
var currentDate = new Date();

// Get the current day index
var dayIndex = currentDate.getDay();

// Array of day names
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// current day name
var currentDay = dayNames[dayIndex];

// Alert the current day
alert("Today is " + currentDay);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var currentDate=new Date();
var Index = currentDate.getDay();

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if(Index==0 || Index==6){
    alert("It's Fun day!!")
}else{
    alert("It's Working day!!")

}

document.write("<br>")

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

document.write("<br>");

var currentDate=new Date();
var date = currentDate.getDay();


if(date<16){
    document.write(" Last days of the month ")
}else {
    document.write("First fifteen days of the month")
}

document.write("<br>");

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var todayDate = new Date();
var minutesSince=todayDate.getTime()/(1000*60);
var Todaymilli = todayDate.getTime();
var minutesSince1970=minutesSince;
 
document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + minutesSince1970)

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

document.write("<br>");

var d=new Date();
if (d.getHours() < 12) {
    alert("Its AM")
}else{
    alert("Its PM")

}


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
document.write("<br>");
var lasterDate = new Date("December 31, 2020");
document.write("Later Date:"+lasterDate) 

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

document.write("<br>");
var date_1=new Date("June 18,2015");
var date_2=new Date();
var diff=date_2.getTime() - date_1.getTime();
var TotalDays = Math.ceil(diff / (1000 * 3600 * 24));

alert(TotalDays+" days have passed since 1st Ramadan ,2015")
document.write("<br>");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var beginningDate=new Date("June 18,2015");
var referenceDate=new Date("June 18,1990");
var diff=beginningDate.getTime() - referenceDate.getTime();
var secondElapsed = Math.ceil(diff /1000 );
document.write("Seconds that elapsed between the reference date and the beginning date :"+secondElapsed)
document.write("<br>");
document.write("<br>");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
document.write("<br>");

var datee=new Date();

document.write("Current Date: "+datee);
document.write("<br>"+datee.getHours()+" hours ago, it was "+datee);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
document.write("<br>");

var Datee=new Date();
Datee.setDate(Datee.getDate() - 100);


alert("Current Date: " + Datee +"\n 100 years back,it was "+ datee);

document.write("<br>");
document.write("<br>")

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var age=parseInt(prompt("What is your age?"))
var currentAge=new Date().getFullYear();
var birthYear=currentAge-age;
document.write("<br>"+"Your age is :" +age);
document.write("<br>"+"Your birth Year is :"+birthYear);
document.write("<br>")

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

document.write("<br>");
var name=(prompt("Enter Customer Name :"));
var month=(prompt("Enter Month Name :"));
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

// Calculate net amount payable
var netAmountPayable = numberOfUnits * chargesPerUnit;

// Calculate gross amount payable
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write("<h1>K-Electric Bill</h1><br>");
document.write("Customer Name :" + name+"<br>");
document.write("Month :"+ month+"<br>");
document.write("Number Of unit :" + numberOfUnits+"<br>");
document.write("Charges per unit :"+ chargesPerUnit+"<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("Net Amount Payable(within Due Date):"+ netAmountPayable+"<br>");
document.write("Late payment surcharge:"+ latePaymentSurcharge+"<br>");
document.write("Gross Amount Payable(after Due Date):"+ grossAmountPayable+"<br>");






