
//************************Question No-1 **************************//
//Write a program that takes a character (number or string) in a variable & checks whether the given input is 
//anumber, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


// var userinput = prompt("Please enter Text or Number ")

// var result = userinput.charCodeAt()


// if(result <= 57)
//     {
// alert("Your input text are number ")
//  }
// else if (result <= 90){
// alert("Your input text are Upercase") }

// else if (result <= 122 ){
// alert("Your input text are lowercase") }

// else{alert("enter correct value")}


//**********************Question No-2 **************************//
//Write a JavaScript program that accept two integers and display the larger. also show if the two integers are equal.


// var num1 = +prompt("enter first integer or number")
// var num2 = +prompt("enter 2nd integer or number")

// if(num1 === num2){alert("Both numbers are equal")}
// else if(num1 > num2) {alert("First number are greater than 2nd Number")}
// else if(num1 < num2) {alert("2nd number are greater than 1st Number")}

// else{alert("Enter correct number")}


//***************************Question No-3 **************************//
//Write a program that takes input a number from user & state whether the number is positive, negative or zero.


// var unumber = +prompt("Please enter any number")

// if(unumber===0){alert("input number is Zero")}

// else if(unumber > 0){alert("input number is Positive")}
// else if(unumber < 0){alert("input number is Nagative")}
// else{("Enter correct number")}




//***************************Question No-4 **************************//
//Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var userletter = prompt("Please enter a letter")


// if(userletter === "a" || userletter ==="e" || userletter === 'i' || userletter === "o" || userletter === "u"){alert( "Your letter is Vowel" )}
// else {alert("false")}



//***************************Question No-5 **************************//
//Write a program that a. Store correct password in a JS variable.b. Asks user to enter his/her password
//c. Validate the two passwords: i. Check if user has entered password. If not, then 
//give message “ Please enter your password” ii. Check if both passwords are same. If they are 
//same, show message “Correct! The password you entered matches the original password”. Show 
//“Incorrect password” otherwise.



// var userPassword = "admin@mail.com"

// var inputPassword = prompt("Please enter your password")

// if(inputPassword == ""){
//     alert("Please enter your password")
// }

// else if (inputPassword != userPassword){alert("You enter wrong password")}
// else if (inputPassword === userPassword){alert("You entered correct password")}
// else{alert(" Please Enter Password")}



//***************************Question No-6 **************************//
//This if/else statement does not work. Try to fix it:


// var greeting;
// var hour = 13;

// if (hour < 18) {
// greeting = "Good day";}
// else{ greeting = "Good evening";}



//***************************Question No-7 **************************//
//Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the 
//following case using if, else & else if statements


var inputTime = prompt("Please enter time in 24 hours clock")

if (inputTime == "0000"){alert ("its 12pm. \nGood Morning")
}

else if (inputTime == 1300){alert(" its 1pm. \nGood afternoon ")}
else if (inputTime == 1400){alert(" its 2pm. \nGood afternoon")}
else if (inputTime == 1500){alert(" its 3pm. \nGood afternoon")}
else if (inputTime == 1600){alert(" its 4pm. \nGood afternoon")}
else if (inputTime == 1700){alert(" its 5pm. \nGood afternoon")}
else if (inputTime == 1800){alert(" its 6pm. \nGood evening")}
else if (inputTime == 1900){alert(" its 7pm. \nGood evening")}
else if (inputTime == 2000){alert(" its 8pm. \nGood evening")}
else if (inputTime == 2100){alert(" its 9pm.\nGood evening")}
else if (inputTime == 2200){alert(" its 10pm. \nGood night")}
else if (inputTime == 2300){alert(" its 11pm. \nGood night")}
else if (inputTime == 2400){alert(" its 12am. \nGood night")}
else {alert ("enter correct time")}








