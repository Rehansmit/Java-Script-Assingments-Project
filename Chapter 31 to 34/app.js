//************************Question No-1 **************************//
// Write a program that displays current date and time in 
// your browser.

// var currentDate = new Date()
// console.log(currentDate)



//************************Question No-2 **************************//

// Write a program that alerts the current month in words. 
// For example December. 

// var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// var currentmonth = new Date().getMonth()
// var monthc = month [currentmonth]
// console.log(monthc)

//************************Question No-3 **************************//
// Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show 
// Sun. 

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// var current_day = new Date().getDay()
// var today_day = dayNames[current_day]
// console.log(today_day)


//************************Question No-4 **************************//
// Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today



// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var current_day = new Date().getDay()
// var today_day = dayNames[current_day]

// if (today_day ==="Sat" || today_day==="Sun"){
//     alert(" Today is Funday")

// }
// else{alert("Today is working day")}


//************************Question No-5 **************************//
// Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”. 


// var today_Dt = new Date().getDate()
// console.log(today_Dt)

// if (today_Dt <= 15){
//     alert('First fifteen days of the month')
// }
// else{alert ('Last days of the month')}


//************************Question No-6 **************************//
// Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object. 


// var current_dt = new Date()
// console.log(current_dt)

// var millisec =new Date().getTime()
// console.log(millisec)

// var minutes_td = millisec /(1000*60*60)
// console.log(minutes_td)


//************************Question No-7 **************************//
// Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”. 


// var current_time = new Date().getHours()
// console.log(current_time)

// if(current_time<=11.59){
//     alert("its AM")
// }
// else{alert('its PM')}


//************************Question No-8 **************************//
// Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate. 


// var laterDate =  new Date("December 31, 2020 ");
// console.log(laterDate)


//************************Question No-9 **************************//
// Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015 



// var last_Ramdan_Date =  new Date("March 12, 2023 ").getTime()

// var today_date = new Date().getTime()


// var laps_diff = today_date-last_Ramdan_Date
// console.log(laps_diff)

// var laps_days = Math.floor(laps_diff/(1000*60*60*24))
// console.log(laps_days)


//************************Question No-10 **************************//
