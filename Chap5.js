document.write ("<b>"+ "Chapter No- 5 Assingments Answers"+ "</b>" + "<br>"+ "<hr>")



// Question -1

var a = 20
var b = 5

var result = a + b
document.write ("Answer Q.1" + "<br>" +"<br>")
document.write ("Sum of variable a & b = " + " " + "" +result + "<br>"+"<br>"+"<hr>");



// Question -2

var Subtract = a - b
document.write ("Answer Q.2" + "<br>"+"<br>")
document.write ("Subract of variable a & b = " + " " + ""+ Subtract + "<br></br>");


var Multi = a * b

document.write ("Multiply of variable a & b = " + " " + " " + Multi + "<br></br>");


var Divid = a / b

document.write ("Division of variable a & b =  " + " " + " " + Divid + "<br></br>");


var Mod = a % b

document.write ("Modulus of variable a & b = " + "  " + " " + " " + Mod + "<br></br>"+ "<hr>");


// Question -3

// a
var num;

// b
num = "??"

// C

num = 5

// d
document.write ("Answer Q.3-d" + "<br>"+"<br>")
document.write ("Initail Value of variable num is" + "  " + num + "<br>" + "<br>")

// e (incerement) 

++num 

// f
document.write ("Answer Q.3-f" + "<br>")
document.write ("Value after increment is ="+"  " + num + "<br>" + "<br>")

// g

num=6+7

// h
document.write ("Answer Q.3-h" + "<br>")
document.write ("Value after addition 7 is = " +"  " +  num + "<br>" +"<br>")

// i

--num 

// j
document.write ("Answer Q.3-j" + "<br>")
document.write ("Value after decrement is = " +"  "+  num + "<br>" +"<br>")


// k

num / 3 

// l
document.write ("Answer Q.3-l" + "<br>")
document.write ("Value after dividing by 3 is = " +"  "+  num%3 + "<br>" +"<br>"+"<hr>")


// Question -4

var ticket = 600;
document.write ("Answer Q.4" + "<br>"+"<br>")
document.write ("Cost of 5 movie tickets are = " +"  "+  ticket*5 + "  "+"Rupees" + "<br>" +"<hr>")


// Question -5

document.write ("Answer Q.5" + "<br>" +  "<br>"+"<br>")
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


// Question -6

document.write ("Answer Q.6" + "<br>" + "<br>")

document.write ("<b>"+"The Temperature Converter" + "<br>" + "<br>")

var celsius = 25;
var farnheit = 70;

var ctof = (celsius * 9 / 5)+32  
var ftoc = (farnheit - 32) * 5/ 9  

document.write ("25 Celsius is ="+" "+ ctof+ " "+"NNoF " +"<br>" + "<br>")
document.write ("70 Farenheit is ="+" "+ ftoc+ " "+"NNoC " +"<br>"+"</b>" + "<hr>")


// Question -7

document.write ("Answer Q.7" + "<br>" + "<br>")
document.write ("<b>"+"Shopping Cart System" + "<br>" + "<br>")

var item1 = 650;
var item2 = 100;
var shipcharges = 100

var tcost = (item1*3)+(item2*7)+shipcharges

document.write ("Price of item1 is ............ ="+" "+ item1+ " "+"PKR " +"<br>")
document.write ("cost of 3 item1 is 3 @ 650.............. ="+" "+ item1*3+ " "+"PKR " +"<br>")

document.write ("Price of item2 is ............ ="+" "+ item2+ " "+"PKR " +"<br>")
document.write ("cost of 7 item2 is 7 @ 100.............. ="+" "+ item2*7+ " "+"PKR " +"<br>")
document.write ("Add Shipping Charges cost .............. ="+" "+ "@ 100 "+"PKR " +"<br>"+"<hr>")

document.write ("Total Cost of Your order is ........... ="+" "+ tcost+ " "+"PKR " +"<br>"+"</b>" + "<hr>")

// Question -8

document.write ("Answer Q.8" + "<br>" + "<br>")
document.write ("<b>"+"Mark Sheet" + "<br>" + "<br>")

var tmarks = 980;
var obmarks = 804;

var percentage = obmarks/tmarks*100
document.write ("Total Marks  "+" = "+ tmarks + " "+" " +"<br>"+"")
document.write ("Marks obtained  "+" = "+ obmarks + " "+" " +"<br>")
document.write ("Percentage  "+" = "+ percentage + " "+"% " +"<br>"+"</b>" + "<hr>")


// Question -9

document.write ("Answer Q.9" + "<br>" + "<br>")
document.write ("<b>"+"Curency in PKR" + "<br>" + "<br>")

var pakcurency = (10*104.0)+(25*28)

document.write ("10 US$ and 25 Saudi Riyal is   "+" = "+ pakcurency + " "+"Paki Rupees " +"<br>"+"</b>" + "<hr>")



// Question -10

document.write ("Answer Q.10" + "<br>" + "<br>")
document.write ("<b>"+" Arithmetic Calculation" + "<br>" + "<br>")

var num4 = 20

var totalarthmatic = (num4+5)*10/2

document.write ("Total of arthmetic calculation is = " + totalarthmatic + " "+" " +"<br>"+"</b>" + "<hr>")


// Question -11

document.write ("Answer Q.11" + "<br>" + "<br>")
document.write ("<b>"+" Age Calculator" + "<br>" + "<br>")

var cyear = 2024
var byear = 1981
document.write (" Current Year " + cyear + "<br>" + "<br>")
document.write (" Birth Year " + byear + "<br>" + "<br>")

var yourage = cyear-byear

document.write (" You are either" + yourage + " "+"or" + "NN" + "Years old" +"<br>"+"</b>" + "<hr>")


// Question -12

document.write ("Answer Q.12" + "<br>" + "<br>")
document.write ("<b>"+" Calculate properties of a circle" + "<br>" + "<br>")

var radious = 20

var circumference = 2*3.142*radious
var areaofcircle = 3.142*(radious*radious)

document.write ("circumference of the circle base on radious is = " + circumference + " "+" " +"<br>")
document.write ("Area of the circle base on radious is = " + areaofcircle + " "+" " +"<br>"+"</b>" + "<hr>")


// Question -13

document.write ("Answer Q.13" + "<br>" + "<br>")
document.write ("<b>"+" The Lifetime Supply Calculator" + "<br>" + "<br>")

var snack = "Choclate Chips"
var age = 15
var maxage = 65
var dailyuse = 3

var lifetimesupply = (maxage-age)*365*dailyuse

document.write (" Your favrote snack is" +" "+snack + "<br>" + "<br>")
document.write (" Your current age is" +" "+age + "<br>" + "<br>")
document.write (" Your consuption of snack is" +" "+dailyuse + "<br>" + "<br>")
document.write (" Your maximum age is" +" "+maxage + "<br>" + "<br>")

document.write ("You will need" +" " + lifetimesupply + " " +"to last you until the ripe old age of" + " " + maxage + " " + "<br>"+"</b>" + "<hr>")

