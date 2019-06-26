/*
var a = 2*2*2*2*2*2*2*2*2*2;
if(a >= 1000){
    console.log("あなたの体重は"+a/1000+"トンです")
}else{
    console.log("あなたの体重は"+a+"キロです");}
//console.log(a);
*/


//FizzBuzz

/*
for (var i = 1; i <= 100; i++) {
   if(i % 3 == 0){
       if(i % 5 == 0){
          console.log("fizzbuzz");
       }else{
           console.log("fizz");
       }
   }else if(i % 5 == 0){
       console.log("buzz");
   }else{
       console.log(i);
   }
}
*/


//15*15の九九

/*
var result = " ";
for (var dan = 1; dan <= 15; dan++){
    result = " ";
    for (var j = 1; j <= 15; j++){
        result = result + dan * j + " ";
    }
    console.log(result);
}
*/

/*
var kuku = [];
for(var dan = 1; dan <= 15; dan++){
    for (var j = 1; j <= 15; j++){
        kuku.push(dan * j);
    }
}
for(var n = 0; n < 225; n += 15){
    console.log(kuku.slice(n,n + 15));
}
*/


//7!

/*
var result = 1;
for (var i = 1; i <= 7; i++){
    result = result * i;
}
console.log(result);
*/


//1~100の素数

var num = 13;
var ama = 0;

for(var i = 2; i <= num; i++){
    ama = num % i;
    if(ama == 0){
        console.log(num+"は素数ではありません");
    }
}