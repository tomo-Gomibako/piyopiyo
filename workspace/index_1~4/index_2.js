// 一気にコメントアウト
//     →選択して「⌘+/」


// 復習1
/*
var x = 0;
if(x >= 0){
    console.log(x + "は非負の数");
}else{
    console.log(x + "は負の数");
}
*/

// 復習2
/*
var num = 8;
var ii2 = 1;
var sum = 1;
var str = "1";
for (var i = 1; i < num; i++){
    ii2 = i + 1;
    str = str + " + " + ii2;
    sum = sum + ii2;
}
console.log(str + " = " + sum);
*/

// 復習3
/*
var utl = 22;
var str = "[1]";
var ppp = 2;
var pvs = 1;
for (var j = 2; j < utl + 1; j++){
    if(j == pvs + ppp){
        str = str + " " + "[" + j + "]";
        pvs = pvs + ppp;
        ppp++;
    }else{
        str = str + " " + j;
    }
}
console.log(str);
*/

//break
/*
var i = 0;
while(true){
  console.log(i + "だよ！");
  if(i == 10){
    break;
  }
  i += 1;
}
console.log("おわったよ！");
*/

//補題(Fibonacci Number)
/*
var i = 1;
var pvs1 = 1;
var pvs2 = 1;
var result = 1;
var str = "1, 1";
var utl = 30;
while(true){
    result = pvs1 + pvs2;
    str = str + ", " + result;
    if(i == utl - 2){
        break;
    }
    i++;
    pvs2 = pvs1;
    pvs1 = result;
}
console.log(str);
*/

//補題(0と1で4つの並べ替え)
/*
var digit = 4;
var utl = 1;
var ppp = 1;
var str = "";
//for(var factrial = 1; factrial <= utl; factrial++){}
utl = Math.pow(2, 4);
for(var i = 1; i <= utl; i++){
    str = "";
    ppp = utl - i;
    for(var j = 1; j <= digit; j++){
        if(ppp % 2 == 0){
            str = str + " " + 0;
            ppp = ppp / 2;
        }else if (ppp % 2 == 1){
            str = str + " " + 1;
            ppp = (ppp - 1) / 2;
        }
    }
    console.log(str);
}
*/

//補題・模範解答
/*
var c = 2;
var scale = 4;

for (var i = 0; i <= Math.pow(scale, c) - 1; i++) {
  var number = '';
  for (var j = 1; j <= scale * c; j *= c) {
    number += (i - i % j) / j % c;
  }
  console.log(number);
}
*/

//関数
/*
function greet(name){
    if(typeof name == "string"){
        console.log("こんにちは" + name + "くん！");
        console.log("今日は曇りやね。");
        console.log("なんちゃかかんちゃか(長い文字列)");
    }else{
        throw new Error("ちゃんと名前を呼んであげてください！");
    }
}
greet(123);
*/

//問1
/*
function sayHi(){
    console.log("Hi!");
}
sayHi();
*/

//問2
/*
function canMakeTriangle(a, b, c){
    var isPositives = a > 0 && b > 0 && c > 0;
    var canMake = a + b > c && b + c > a && c + a > b;
    if (isPositives && canMake){
        console.log("三角形が作れる");
    }else{
        console.log("三角形は作れない");
    }
}
canMakeTriangle(3, 4, 5);
*/

//問3
/*
function multiplesOf(num){
    var mularray = [];
    var add = 1;
    for(var i = 1; i <= 20; i++){
        add = num * i;
        mularray.push(add);
    }
    return mularray;
}
console.log(multiplesOf(3));
*/

//問4
/*
function greetAll(array){
    var name = "";
    for (var i = 0; i <= array.length - 1; i++) {
        name = array[i];
        console.log("こんにちは" + name + "くん!");
        console.log("今日は曇りやね。");
        console.log("なんちゃかかんちゃか(長い文字列)");
    }
}
var people = ["田中", "田口", "田村", "田辺", "田川"];
greetAll(people);
*/

//問5
/*
function hasOdd(num){
    var result = false;
    for(var i = 0; i <= num.length - 1; i++){
        if(num[i] % 2 == 1){
            result = true;
        }
    }
    return result;
}
var numbers = [2,4,6,8];
console.log(hasOdd(numbers));
*/

//問6
/*
function makeTriangle(height){
    var dollar = "";
    for(var i = 1; i <= height; i++){
        dollar = "";
        for(var j = 1; j <= i; j++){
            dollar += "$";
        }
        console.log(dollar);
    }
}
makeTriangle(5);
*/

//問7
/*
function multiplesOf2(num){
    var mularray = [];
    var add = 1;
    for(var i = 1; i <= 9; i++){
        add = num * i;
        mularray.unshift(add);
    }
    return mularray;
}
console.log(multiplesOf2(7));
*/

//問8(冗長)

// var a = 10;
// var b = 8;
// var _ref = b;
// b = a;
// a = _ref;
// function swap(array, i, j){
//     var ppp = 1;
//     var qqq = 1;
//     if(i <= j){         // ppp <= qqq
//         ppp = i;
//         qqq = j;
//     }else{
//         ppp = j;
//         qqq = i;
//     }
//     var _deb = array.toString();
//     var ref_ary = array;
//     var ref1 = array[ppp];
//     var ref2 = array[qqq];
//     var ary = array.slice(0, ppp - 1);
//     _deb = ary.toString();
    
//     array.push(ref2);
//     _deb = array.toString();
    
//     for(var me = 1; me <= qqq - ppp - 1; me++){
//         array.push(ref_ary[ppp + me]);
//     }
//     _deb = array.toString();
//     array.push(ref1);
//     _deb = array.toString();
//     for(var re = 0; re <= ref_ary.length - qqq; re++){
//         array.push(ref_ary[qqq + re]);
//     }
//     _deb = array.toString();
//     return array;
// }

// var test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// console.log(swap(test, 1, 2));

//問8

function swap(array, i, j){
    var ref_i = array[i];
    var ref_j = array[j];
    array[i] = ref_j;
    array[j] = ref_i;
}

function randomSwap(ary){
    var randomInteger1 = Math.floor(Math.random() * ary.length);
    var randomInteger2 = Math.floor(Math.random() * ary.length);
    var result = swap(ary, randomInteger1, randomInteger2);
    return result;
}

function randomizeArray(array){
    for(var i = 1; i <= 3 * Math.pow(array.length, 2); i++){
        var result = randomSwap(array);
    }
    return result;
}

function isAscendingOrder(array){
    var result = true;
    for(var i = 0; i < array.length; i++){
        if(array[i + 1] < array[i]){
            result = false;
            break;
        }
    }
    return result;
}
var test = [3,9,10,0,2,10];
while(true){
    var ans = randomizeArray(test);
    if(isAscendingOrder(test)){
        break;
    }
    console.log(test);
}
console.log("↑これが答え");



//補題(絶対値を返す関数)

// function abs(num){
//     if(num >= 0){
//         return num;
//     }
//     return num * -1;
// }

// console.log(abs(-7) == 7);