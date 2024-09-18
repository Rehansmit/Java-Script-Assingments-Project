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


// var mrk_ob_sub1 =+prompt("Please enter your marks obtained in subject 1")
// var mrk_ob_sub2 = +prompt("Please enter your marks obtained in subject 2")
// var mrk_ob_sub3 = +prompt("Please enter your marks obtained in subject 3")

// var tmarks_obtained = mrk_ob_sub1+mrk_ob_sub2+mrk_ob_sub3

// var totalMarks = 300

// var percentage = tmarks_obtained/totalMarks*100

// var grade;

// var remarks;

// if(percentage <=59)
// {grade = "Failed", remarks = "Soory" }  

// else if (percentage <=69)
//     {grade = "B", remarks = "You need to improve" } 

// else if (percentage <=79)
//     {grade = "A", remarks = "Good" } 

// else if (percentage <= 95)
//     {grade = "A-One", remarks = "Excellent" } 

// else if (percentage >= 96)
//     {grade = "Top", remarks = "Your are Topper" } 

// document.write (` <h1> Student Mark Sheet <br><br> 
//                        Total Marks =  ${totalMarks} <br><br>
//                        Total Obtained Marks =  ${tmarks_obtained} <br><br>
//                        Percentage =  ${percentage} % <br><br>
//                        Grade =  ${grade} <br><br>
//                        Remarks =  ${remarks} <br><br>
//     `)



// //..........Question- 7..........// //

// Guess game: 
//Store a secret number (ranging from 1 to 10) in a variable. prompt user to guess the secret number. 
//a. If user guesses the same number, show “Bingo! Correct answer”. 
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 


//Answer Start
// var num1 = 7

// var num2 = + prompt ("Guess and enter the hidden secret number")

// if(num2 === num1){
//     alert("Bingo! Correct answer")
// }

// else if (num2==num1+1){
//     alert("Close enough to the correct answer")
// }

// else if (num2==num1-1){
//     alert("Close enough to the correct answer")
// }

// else alert("Opp's! try again")




// //..........Question- 8..........// //

//Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 


//Answer started

// var inputNumber = + prompt("Enter the number and check its divisible by 3 or not")

// var result = inputNumber%3

// if(result === 0){
//     alert("Given number is divisible by 3")
//     }

//     else alert ("Opps! given number is not divisible by 3")



// //..........Question- 9..........// //

//Write a program that checks whether the given input is an even number or an odd number.



//Answer started

// var inputNumber1 = + prompt ("Enter the number and check its even or odd number")

// // var result1 = inputNumber1/2

// if(inputNumber1%2 == 0){
// alert("Given number is Even number")
//  }

// else alert ("Given number is odd number")


// //..........Question- 10..........// //
//Write a program that takes temperature as input and shows a message based on following criteria 
// T > 40 then “It is too hot outside.” 
//b. T > 30 then “The Weather today is Normal.” 
//c. T > 20 then “Today’s Weather is cool.” 
//d. T > 10 then “OMG! Today’s weather is so Cool.” 

//Answer started:

// var input_temp =  prompt ("Enter today temprature of the city")

// if(input_temp > 40)
//     {alert ("It is too hot outside" )}

//     else if(input_temp > 30)
//         {alert ("The Weather today is Normal" )
//             } 

//             else if(input_temp > 20)
//                 {alert ("Today’s Weather is cool" )
//                     } 
//                     else if(input_temp > 10)
//                         {alert ("OMG! Today’s weather is so Cool" )
//                             } 
// else alert("stay home its snowfalling")              


// //..........Question- 11..........// //
//Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
//a. First number 
//b. Second number 
//c. Operation (+, -, *, /, %) 
//Compute & show the calculated result to user.


//Answer Started:

var firstDigit = + prompt ("Enter first value in digits")
var secndDigit = + prompt ("Enter seceond value in digits")

var Operation = prompt ("enter operation which result you required")


var result;
var Remarks;


if(Operation ==="+")
{result= firstDigit+secndDigit , Remarks= "Result of Addition"}

else if (Operation === "-")
    {result= firstDigit-secndDigit , Remarks= "Result of Subtraction"}

else if (Operation === "*")
    {result= firstDigit*secndDigit , Remarks= "Result of Multipication"}

else if (Operation === "/")
    {result= firstDigit/secndDigit , Remarks= "Result of Division"}

else if (Operation === "%")
    {result= firstDigit % secndDigit , Remarks= "Result of Modulus"}

else alert("enter correct number and operation")

alert (Remarks + " " + result)