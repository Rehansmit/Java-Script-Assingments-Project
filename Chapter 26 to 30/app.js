
//************************Question No-1 **************************//
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var userInput = +prompt("please enter any positve number")

// alert("User input number are" + " " + userInput)
// var roundedNumber = Math.round(userInput)
// alert("Round of the the number" + " " + roundedNumber)
// var floorNum = Math.floor(userInput)
// alert("floor of the the number" + " " + floorNum)
// var cielNum = Math.ceil(userInput)
// alert("Ceil of the the number" + " " + cielNum)


//************************Question No-2 **************************//
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userInput = +prompt("please enter any nagative number")

// alert("User input number are" + " " + userInput)
// var roundedNumber = Math.round(userInput)
// alert("Round of the the number" + " " + roundedNumber)
// var floorNum = Math.floor(userInput)
// alert("floor of the the number" + " " + floorNum)
// var cielNum = Math.ceil(userInput)
// alert("Ceil of the the number" + " " + cielNum)


//************************Question No-3 **************************//
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


//************************Question No-4 **************************//
// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var bigDecimal = Math.random()*6+1;
// var dieceNum = Math.floor(bigDecimal)
// alert(dieceNum)


//************************Question No-5 **************************//
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var rannum = Math.random()*2+1;
// var coinsNum = Math.floor(rannum)

// console.log(coinsNum)
// if (coinsNum <= 1){alert("Heads")}
// else{alert("Tails")}


//************************Question No-6 **************************//
// Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNum =  Math.floor(Math.random() * 100) + 1;
// console.log(randomNum)
// document.write(randomNum)


//************************Question No-7 **************************//
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms



// var userWeight = prompt("enter weight")

// var parseiiint = userWeight.toString()
// alert("User input weight"+" "+ parseiiint)


//************************Question No-8 **************************//
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


var user_input = +prompt("Pleasd enter your number")

var randomnum = Math.random()*10+1;
var secrate_number= Math.floor(randomnum)
if (user_input=== secrate_number){alert("Congrutulation! Your number matched with secerate number")}
else{alert("Opps try agian")}