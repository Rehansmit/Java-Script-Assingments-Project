
//************************Question No-1 **************************//

// Declare and initialize an empty multidimensional array.(Array of arrays)

// var arr = [ [      ], [    ], [  ]];



//************************Question No-2 **************************//
// Declare and initialize a multidimensional array representing the following matrix:

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
  
//   document.write(`${matrix[0]} <br>
//     ${matrix[1]} <br>
//     ${matrix[2]} <br> `)
  
  
//************************Question No-3 **************************//
// Write a program to print numeric counting from 1 to 10

// document.write(`<h1> 1 to 10 counting </h1>`)
// for(var i = 1; i <= 10; i++){
//     document.write(`${i} <br>`)
// }
  
  
// //************************Question No-4 **************************//
// Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user
  

// var table = prompt("Please enter table number")
// document.write(`<h1> Table of... ${table}... </h1>`)
// var table_lengt = prompt("Please enter table length")

// for(var i = 1; i<= table_lengt; i++){
//     document.write(`${table}  x  ${i}  = ${table*i} <br>`)
// }
  

// //************************Question No-5 **************************//
// Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// for(var i = 0; i< fruits.length; i++)
// {document.write(`${fruits[i]} <br>`)}
  

// //************************Question No-6 **************************//
// Generate the following series in your browser. See 
// example output.a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

//a
// for(var i = 1; i<=15; i++)
// {document.write(`${i},`)}

//b counting
// for(var i = 20; i >= 1; i--)
//     {document.write(`${i},`)}

//c Even Number
// for(var i = 1; i <= 20; i++)
// {if (i%2 === 0){document.write(`${i} <br>`)}}

// //d odd Number
// for(var i = 1; i <= 20; i++)
//     {if (i%2 !== 0){document.write(`${i} <br>`)}}
    
//e Series Number
//  for(var i = 1; i <= 20; i++)
// {if (i%2 === 0){document.write(`${i}k <br>`)}}


// //************************Question No-7 **************************//
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

// var bak_items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var serch_item = prompt('Wlcome to my backery Please enter backery items do you want to search')
// var avalable = "No"
// var index_value;

// for(var i = 0; i<= bak_items.length; i++)
// { if(bak_items[i] == serch_item){avalable = "Yes", index_value = i }}
// if(avalable == "Yes") {document.write(`Wao your search item.. ${serch_item} avalable at index No..${index_value}`)}
// else{document.write(`Sorry!... ${serch_item} is not avalable`)}


// //************************Question No-8 **************************//

// Write a program to identify the largest number in the 
// given array.


// var A = [24, 53, 78, 91, 12]

// var largest = A[0]

// for(i = 0; i < A.length; i++){
//     if(largest < A[i]){largest=A[i]}
// }
//  document.write(` items of the array is ${A} <br> Largest number of the arry is ${largest}`)


// //************************Question No-9 **************************//
// var A = [24, 53, 78, 91, 12]

// var smallest = A[0]

// for(i = 0; i < A.length; i++){
//     if(smallest > A[i]){smallest=A[i]}
// }
//  document.write(` items of the  array is  ${A} <br> smallest number of the array is ${smallest}`)


// //************************Question No-9 **************************//
// Write a program to print multiples of 5 ranging 1 to 100.


// for( var i = 1; i <= 100; i++)
// {if(i%5 == 0){document.write(i)}}

