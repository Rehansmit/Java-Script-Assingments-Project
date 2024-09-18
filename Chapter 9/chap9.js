// //..........Question- 1..........// //
// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” ?

//Answer-1

// var cityName = prompt ("Enter your City Name")

// if(cityName === "Karachi")
//     {alert ("Welcome to City of Light")}

// else if(cityName === "Lahore")
//     {alert ("Welcome to City of Foods")}
// else if (cityName === "Peshawar")
//     {alert ("Welcome to City of Foods")}    
// else if (cityName === "Queta")
//     {alert ("Welcome to City of Ziyarat")}
// else alert("Welcome to City of Pakistan")


// //..........Question- 2..........// //
 // Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 

//Answer-2

// var gender  = prompt ("Please enter your gender")
// if(gender === "male")
//    {alert ("Good Morning Sir")}
// else if(gender === "female")
//     {alert ("Good Morning Ma’am")}
// else alert("Please enter your correct gender") 


// //..........Question- 3..........// //
// Write a program to take input color of road traffic signal from the user & show the message according to this table: 

//Answer-3

// var signalColor = prompt ("Please enter tarffic signal color")
// var message;

// if(signalColor === "Red")
// {message = "Must Stop"}

// else if (signalColor === "Yellow")
//     {message = "Ready to Move"}
    
// else if (signalColor === "Green")
//     {message = "Move now"}

// else alert ("enter correct light color")

// document.write (`<table>
//     <tr>
//     <th>Signal Color </th>
//     <th>Massage </th> <br>
//     </tr>
//     <tr>
// <td> ${signalColor} </td>
// <td> ${message} </td>
// </tr>
// </table>
//         `)

// //..........Question- 4..........// //
// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 


//Answer-4

// var petrolLimit = +prompt ("Please input remaining fuel in car in litres ")

// if(petrolLimit <= 0.25)
// {alert("Please refill the fuel in your car")}  
// else alert ("Your Fuel limit is fine")


// //..........Question- 5..........// //
//Run this script, & check whether alert message would be displayed or not. Record the outputs. ?



//Answer-5

//a

// var a = 4

// if(++a===5){alert ("given condition for variable a is true")}


//b
// var b = 82

// if(b++===83)
//     {alert ("given condition for variable b is true")}// given condition are false.

//c

// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// }// false

// if (c === 13){ 
// alert("condition 2 is true"); //true
// } 

// if (++c < 14){ 
// alert("condition 3 is true"); 
// } // false
// if(c === 14){ 
// alert("condition 4 is true"); 
// } //true


//d
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } statement is true

// //e

// if (true){ 
// alert("True"); 
// } 

// if (false){ 
// alert("False"); 
// }

// //f

// if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// } // statement is true


// //..........Question- 6..........// //
//Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 


// Answer-6


var mrk_ob_sub1 =+prompt("Please enter your marks obtained in subject 1")
var mrk_ob_sub2 = +prompt("Please enter your marks obtained in subject 2")
var mrk_ob_sub3 = +prompt("Please enter your marks obtained in subject 3")

var tmarks_obtained = mrk_ob_sub1+mrk_ob_sub2+mrk_ob_sub3

var totalMarks = 300

var percentage = tmarks_obtained/totalMarks*100

var grade;

var remarks;

if(percentage <=59)
{grade = "Failed", remarks = "Soory" }  

else if (percentage <=69)
    {grade = "B", remarks = "You need to improve" } 

else if (percentage <=79)
    {grade = "A", remarks = "Good" } 

else if (percentage <= 95)
    {grade = "A-One", remarks = "Excellent" } 

else if (percentage >= 96)
    {grade = "Top", remarks = "Your are Topper" } 

document.write (` <h1> Student Mark Sheet <br><br> 
                       Total Marks =  ${totalMarks} <br><br>
                       Total Obtained Marks =  ${tmarks_obtained} <br><br>
                       Percentage =  ${percentage} % <br><br>
                       Grade =  ${grade} <br><br>
                       Remarks =  ${remarks} <br><br>
    `)
