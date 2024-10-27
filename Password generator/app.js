// var aBC  = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
// var abc  = "abcdefghijklmnopqrstuvwxyz"
// var a123 = "1234567890"
// var a$$ = "~!@#$%^&*()_/\\[]{}-"



// var newcharactor = [aBC.slice(0), abc.slice(0), a123.slice(0)]
// alert(newcharactor)

var charactors = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_/\\[]{}-"

var plength = 10

var randomPasword = ""

for(var i=0; i<plength; i++){
    var randomindex = Math.floor(Math.random()*charactors.length);

    randomPasword += charactors[randomindex]

}
alert(randomPasword)





