
//************************Question No-1 **************************//
// Declare an empty array using JS literal notation to store student names in future. .


// var studentName =[]



//**********************Question No-2 **************************//
//Declare an empty array using JS object notation to store student names in future. 

// var student_Name = new array


//***************************Question No-3 **************************//
//Declare and initialize a strings array. 

// var cities = ['Karachi' , 'Lahore', 'Islamabad'];


//***************************Question No-4 **************************//
//Declare and initialize a numbers array. 

// var roll_numbers = [012, 022, 023, 024];


//***************************Question No-5 **************************//
// Declare and initialize a boolean array. 

// var result = ['true' , 'false' ];


//***************************Question No-6 **************************//
//Declare and initialize a mixed array. 

// var mixed_arr = ['Pakistan', 'India' , '012' , 'true' , 'false' ]


//***************************Question No-7 **************************//
//Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
//   BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like

// var pak_degrees = [ 'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD']

// document.write(`1- ${pak_degrees[0]} <br>
//     2- ${pak_degrees[1]} <br>
//     3- ${pak_degrees[2]} <br>
//     3- ${pak_degrees[3]} <br>
//     4- ${pak_degrees[4]} <br>
//     5- ${pak_degrees[5]} <br>
//     6- ${pak_degrees[6]} <br>
//     7- ${pak_degrees[7]} <br>
//     `)


//***************************Question No-8 **************************//


// Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students:  



// var stmame1= [prompt('Please enter 1st Student Name')];
// var stname2= [prompt('Please enter 2nd Student Name')];
// var stname3= [prompt('Please enter 3rd Student Name')];


// var stnumber1= [prompt('Please enter 1st Student obtained number')];
// var stnumber2= [prompt('Please enter 2nd Student obtained numbere')];
// var stnumber3= [prompt('Please enter 3rd Student obtained number')];


// var student_Name = [stmame1, stname2,stname3];
// var student_numbers =[stnumber1, stnumber2, stnumber3]
// var totalnumbers = 500

// var percentages = [stnumber1/totalnumbers*100, stnumber2/totalnumbers*100, stnumber3/totalnumbers*100 ]

// document.write(`Score of  ${student_Name[0]} = ${student_numbers[0]}  and Percentage = ${percentages[0]} % <br><br>
//     Score of  ${student_Name[1]} = ${student_numbers[1]}  and Percentage = ${percentages[1]} % <br><br>
//     Score of  ${student_Name[2]} = ${student_numbers[2]}  and Percentage = ${percentages[2]} % <br><br>
    
//     `)



//***************************Question No-9 **************************//


    // Initialize an array with color names. Display the array 
    // elements in your browser. 

    // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
    // Display the updated array in your browser. 

    // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the 
    // updated array in your browser. 

    // c. Add two more color to the beginning of the array. 
    // Display the updated array in your browser. 
    // d. Delete the first color in the array. Display the updated 
    // array in your browser. 
    // e. Delete the last color in the array. Display the updated 
    // array in your browser. 
    // f. Ask the user at which index he/she wants to add a color 
    // & color name. Then add the color to desired 
    // position/index. . Display the updated array in your 
    // browser. 
    // g. Ask the user at which index he/she wants to delete 
    // color(s) & how many colors he/she wants to delete. Then 


    // var colors = ['red' , 'pink' , 'green' , 'yellow']

    //a
// var inputcolor = prompt("Please enter the color wants to add to the beginning of array")
// colors.unshift(inputcolor);
// document.write (colors)

//b

// var inputcolor = prompt("Please enter the color wants to add to the end of array")
// colors.push(inputcolor);
// document.write (colors)

//c
// var inputcolor1 = prompt("Please enter the color wants to add to the beginning of array")
// var inputcolor2 = prompt("Please enter the color wants to add to the beginning of array")
// colors.unshift(inputcolor1 , inputcolor2);
// document.write (colors)

//d
// colors.shift()
// document.write (colors)

//e
// colors.pop()
// document.write (colors)

//f

// var indnumber = prompt("Please enter index number where you want to add color")
// var inputcolor = prompt("Enret color name you want to add on desire index")

// colors.splice(indnumber, 0,  inputcolor)
// document.write (colors)

//g

// var indnumber = prompt("Please enter index number where you want to delete color")
// var inputnumber = prompt("Enret number you want to delete colors")

// colors.splice(indnumber, inputnumber,  )
// document.write (colors)




//***************************Question No-10 **************************//

// Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method. 


// var student_num = [230, 300, 450, 120]
// student_num.sort()
// document.write(student_num)


//***************************Question No-11 **************************//

// Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array. 


// var cities = ['Karachi', 'Lahore' , 'Islamabad' , 'Peshawar', 'faisalabad' , 'queat'];
// var selectedCities = cities.slice(2, 5)
// document.write(selectedCities)


//***************************Question No-12 **************************//

// Write a program to create a single string from the 
// below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 


// var arr = ['This'  , 'is' , 'my' , 'cat'];
// var st = arr.join( )
// document.write(st)




//***************************Question No-13 **************************//
// Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out) 


// var devices = ['Keyboard', 'mouse', 'printer', 'monitor']

// var fifo = devices.shift()
// document.write(`First Out = ${fifo} <br>`)
// fifo = devices.shift()
// document.write(`2nd Out = ${fifo}<br>`)
// fifo = devices.shift()
// document.write(`3rd Out = ${fifo}<br>`)
// fifo = devices.shift()
// document.write(`4th Out = ${fifo}<br>`)




//***************************Question No-14 **************************//

// var someValues=["Fan", "Room", "Window" , "Door"]
// var lifo = someValues.pop()
// document.write(`Last in first out ${lifo} <br>`)
// lifo = someValues.pop()
// document.write(`Last in first out ${lifo} <br>`)
// lifo = someValues.pop()
// document.write(`Last in first out ${lifo} <br>`)
// lifo = someValues.pop()
// document.write(`Last in first out ${lifo} <br>`)




//***************************Question No-15 **************************//

// Write a program to store phone manufacturers (Apple, 
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method: 


   var mobile_manufacture = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier'];
 document.write(`<h1> Select your mobile complany</h1> <br>
    
        <select select style= "width:200px; border:2px solid ;color:purple; padding:5px 2px;border-radius:8px">
        <option>${mobile_manufacture[0]}
        <option>${mobile_manufacture[1]}
        <option>${mobile_manufacture[2]}
        <option>${mobile_manufacture[3]}
       <option>${mobile_manufacture[4]}
       <option>${mobile_manufacture[5]}
        </select>
     `)



