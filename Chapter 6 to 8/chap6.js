
//Question 1

var num1 = 10
++num1
// num1= 11

num1++
// num1= 12

--num1
//num1=11

num1--
// num1= 10
alert("The result of defined variable num1 is =" + " "+ num1)




//Question 2

var a = 2
var b = 1

var result = --a - --b + ++b + b--;
//             1 -   0 +   1 + 1    
//--a=1
//--a- -- + ++b= 2
//++b + b--= 2       
//a - --b + ++b + b-- = 3

// a =1
// b =0

//result = 3

alert( "Final result of the equation is = "  + "  " + result)


// //Question-3

var name = prompt ("Please enter your full name")

alert ("Welcome Mr." + name + " "+ "in Javascript world" )

// //Question-4 & 5

document.write ("Answer Q.$ & 5" + "<br>" +  "<br>"+"<br>")
var tvalue = +prompt ("Enter the value which table do you required?");

document.write ("<b>"+"Tables of "  + tvalue+ "<br></br>")

document.write (tvalue + "  "+" X "+ "1" + "  "+"=" +"  "+ tvalue*1 + "<br>" +"<br>")
document.write (tvalue + "  "+" X "+ "2" + "  "+"=" +"  "+ tvalue*2 + "<br>" +"<br>")
document.write (tvalue + "  "+" X "+ "3" + "  "+"=" +"  "+ tvalue*3 + "<br>" +"<br>")
document.write (tvalue + "  "+" X "+ "4" + "  "+"=" +"  "+ tvalue*4 + "<br>" +"<br>")
document.write (tvalue + "  "+" X "+ "5" + "  "+"=" +"  "+ tvalue*5 + "<br>" +"<br>")
document.write (tvalue + "  "+" X "+ "6" + "  "+"=" +"  "+ tvalue*6 + "<br>" +"<br>")
document.write (tvalue + "  "+" X "+ "7" + "  "+"=" +"  "+ tvalue*7 + "<br>" +"<br>")
document.write (tvalue + "  "+" X "+ "8" + "  "+"=" +"  "+ tvalue*8 + "<br>" +"<br>")
document.write (tvalue + "  "+" X "+ "9" + "  "+"=" +"  "+ tvalue*9 + "<br>" +"<br>")
document.write (tvalue + "  "+" X "+ "10" + "  "+"=" +"  "+ tvalue*10 + "<br>" +"</b>"+"<hr>")


// //Question- 6

document.write ("Answer Q.6" + "<br>" +  "<br>"+"<br>")

var sub1 = "Math"
var sub2 = "English"
var sub3 = "Urdu"

var tmarkSub = 100

var obmrksub1 = +prompt ("Enter your obtained marks in Math")
var obmrksub2 = +prompt ("Enter your obtanied marks in English")
var obmrksub3 = +prompt ("Enter your obtained marks in Urdu")

var totalmarks = tmarkSub*3
var totalobmark = obmrksub1+obmrksub2+obmrksub3

document.write ("<b>" + "Students Mark Sheet"+ "</b>" + "<br>" +"<br>")

document.write ("<b>" + "Subjects"   + " ......... " + " Total Marks"  + "........ "  +  "Obtaines Marks"   + " ......... "  + "Percentage%" + "</b>" + "<br>" +"<br>"+"<hr>")
document.write (sub1   + "....................  " + tmarkSub  + "........................... "  +  obmrksub1 + "................................  "  + obmrksub1/tmarkSub*100+"%"  + "<br>" +"<br>")
document.write (sub2   + ".................  " + tmarkSub  + "........................... "  +  obmrksub2 + "................................  "  + obmrksub2/tmarkSub*100+"%"  + "<br>" +"<br>")
document.write (sub3   + "....................  " + tmarkSub  + "........................... "  +  obmrksub3 + "................................  "  + obmrksub3/tmarkSub*100+"%"  + "<br>" +"<br>"+"<hr>")
document.write ("<b>"+"Total"   + "....................  " + totalmarks  + "........................... "  + totalobmark + "................................  "  + totalobmark/totalmarks*100+"%"  + "<br>" +"<br>"+"<hr>")