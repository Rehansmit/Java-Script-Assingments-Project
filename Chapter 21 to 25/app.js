
//************************Question No-1 **************************//
// Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.


// var firstNmae = prompt('please enter your furst name')
// var lastNmae = prompt('please enter your last name')

// var fullNmae = firstNmae + lastNmae

// alert('Welcome Mr.' + fullNmae)


//************************Question No-2 **************************//

// Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// // input in your browser


// var mobileModel = prompt('please enter your favorate mobile name & model ')
// var length = mobileModel.length
// document.write(`Your Favorate mobile name and model is' ${mobileModel} <br> Length of string ${length}`)


//************************Question No-3 **************************//
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


// var cityNmae = 'Pakistani'

// var indexNum = cityNmae.indexOf('n')
// document.write(`String Value ${cityNmae} <br> index number of 'n' is ${indexNum}`)     



//************************Question No-4 **************************//
// Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.



// var word = "Hello World"
// var indexNum = word.lastIndexOf('l')
// document.write(`String Name ${word} <br> last index number of 'l' is ${indexNum}`)     



//************************Question No-5 **************************//
// Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.


// var cityNmae = 'Pakistani'

// var index3rd = cityNmae.charAt(3)
// alert("Letter of 3rd index is" + index3rd)




//************************Question No-6 **************************//
// 6. Repeat Q1 using string concat() method.




//************************Question No-7 **************************//
// Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var cityFirst = prompt("Enter the first city name")
// alert("you enter " + cityFirst)

// var updatecity = prompt("enter city name which you need to repalce")

// var repalceCity= cityFirst.replaceAll(cityFirst, updatecity)
// alert("You replaced"     +cityFirst+   'with  '   +   updatecity +    "now update city is"     +   repalceCity)




//************************Question No-8 **************************//
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;


// var message = "Ali and Sami are best friends. They play cricket and football together"
// var updateTex = message.replaceAll("and" , "&")
// alert(updateTex)


//************************Question No-9 **************************//
// Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.


// var stringNum = "472"
// var changeNum = stringNum.replaceAll("472", 472 )
// document.write(`Valu = ${stringNum} <br> Data type = String <br> value ${changeNum} <br> Data type is number`)



// //************************Question No-10 **************************//
// Write a program that takes user input. Convert and 
// show the input in capital letters


// var inputword = prompt('enter any word in small letter ')
// var updateWord = inputword.toUpperCase()
// alert("Upper Case of your input word is " + updateWord)


// //************************Question No-11 **************************//
// Write a program that takes user input. Convert and 
// show the input in title case.


// var inputword = prompt('enter any word ')
// var titleletter = inputword.charAt(0).toLocaleUpperCase()
// var remainingWord = inputword.slice(1)
// var updateTital = titleletter+remainingWord 
// alert(updateTital)


// //************************Question No-12 **************************//
// Write a program that converts the variable num to 
// string. var num = 35.36 ;
// Remove the dot to display “3536” display in your browser


// var num = 35.36 ;
// var strng = num.toString().replace("." , "")
// alert("result of string" + strng)



// //************************Question No-13 **************************//
// Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .


// var userNmae = prompt('Enter your user name here')
// var value = false;

// for(i = 0; i < userNmae.length; i++)
// if (userNmae[i]==="." || userNmae[i]==="@" ||userNmae[i]==="," || userNmae[i] === "!"){value = true}
// if (value){alert("enter a valid user name" )}
// else{alert("user name is ok")}


// 2nd logic......

// var userNmae = prompt('Enter your user name here')
// var value = false;

// for(i = 0; i < userNmae.length; i++)
// if (userNmae[i].charCodeAt=== 33||userNmae[i].charCodeAt=== 44||userNmae[i].charCodeAt=== 46||userNmae[i].charCodeAt=== 64){value = true}

// if (value){alert("enter a valid user name" )}

// else{alert("user name is ok")}




// //************************Question No-14 **************************//
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether theuse given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability

// var bakeryItems = ["cake", "apple pie" , "cookie" , "chips" , "patties"]


// var inputItem = prompt("Welcome ABC bakery please enter item which you want")
// var serchItem = inputItem.toLowerCase()
// var indexNumber;
// var itemsStatus = false

// for(i = 0; i< bakeryItems.length; i++)
// {if (serchItem===bakeryItems[i]){itemsStatus= true, indexNumber = i} }

// if(itemsStatus){alert(serchItem +  " "+ "is avalable at index No." + indexNumber)}
// else{alert("We are Sorry"+ " " +serchItem + " " +"is not avalable at store")}


// //************************Question No-15 **************************//

