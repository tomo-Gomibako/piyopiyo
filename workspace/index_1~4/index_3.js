// 2乗する関数
/*
function pow(x){
    return x * x;
}
console.log(pow(2));
console.log(pow(4));
console.log(pow(0));
console.log(pow(-4));
*/

// 配列の3番目に大きい値を返す関数
/*
function getMax(array){
    var first = 0;
    var num = 0;
    if(array.length < 0){
        return false;
    }
    first = array[0];
    for(var i = 0; i <= array.length; i++){
        if(array[i + 1] > array[i]){
            first = array[i + 1];
            num = i + 1;
        }
    }
    // temp = array.slice(0, num - 1);
    // temp.push(array.slice(num + 1, array.length));
    // for(j = 0; j <= array.length; j++){
    //     second = array[0];
        
    // }
    // for(k = 0; k <= array.length; k++){
    //     first = array[0];
    // }
    return [first, num];    //0:最大値, 1:その順位
}

function getThird(array){
    var first = 0;
    var second = 0;
    var third = 0;
    var tempR1 = [];
    var tempR2 = [];
    var tempR3 = [];
    var num = 0;
    if(array.length <= 1){
        return false;
    }
    first = getMax(array)[0];
    if(getMax(array)[1] == 0){
        tempR1 = array.slice(1, array.length);
    }else{
        tempR1 = array.slice(0, getMax(array)[1]);
        tempR1.push(array.slice(getMax(array)[1] + 1, array.length));
    }
    //console.log(tempR1.toString());
    
    second = getMax(tempR1)[0];
    if(getMax(tempR1)[1] == 0){
        tempR2 = tempR1.slice(1, tempR1.length);
    }else{
        tempR2 = tempR1.slice(0, getMax(tempR1)[1]);
        tempR2.push(tempR1.slice(getMax(tempR1)[1] + 1, tempR1.length));
    }
    //console.log(tempR2.toString());
    
    third = getMax(tempR2)[0];
    if(getMax(tempR2)[1] == 0){
        tempR3 = tempR2.slice(1, tempR2.length);
    }else{
        tempR3 = tempR2.slice(0, getMax(tempR2)[1]);
        tempR3.push(tempR2.slice(getMax(tempR2)[1] + 1, tempR2.length));
    }
    //console.log(tempR3.toString());
    
    return third;
}

var ary = [4,6,3,1,9,0,-3];
var result = getMax(ary)[0];
console.log(result);
console.log(getThird(ary));
*/

// 2乗を合計する関数
/*
function sum(array){
    var res = 0;
    for(var i = 0; i < array.length; i++){
        res = res + array[i];
    }
    return res;
}

function sumByPow(array){
    var ary2Pow = array.slice(0, array.length - 1);
    for(var i = 0; i < array.length; i++){
        ary2Pow[i] = Math.pow(array[i], 2);
    }
    //console.log(ary2Pow);
    return sum(ary2Pow);
}

var xs = [5,2,4,7,1,8];
//console.log(sum(xs)); //=> 27
var result = sumByPow(xs);

console.log(result); //=> 159
*/

// 連想配列
/*
function hello(){
    console.log("はろー");
}
var nino = {
 name: "新野",
 schoolYear: 1,
 height: 180,
 say: hello
};
console.log(nino.name);
console.log(nino.schoolYear);
console.log(nino.height);
nino.say();

// console.log(nino["name"]);
// console.log(nino["schoolYear"]);
// console.log(nino["height"]);
*/

//無名関数
/*
var hello = function() {
  console.log("はろー");
}

var nino = {say: hello};
nino.say();
*/
/*
var nino = {say: function(){console.log("はろー");}};
nino.say();
console.log(nino);
*/

// いろいろなメソッド
/*
console.log(Math.pow(2, 4));
console.log(Math.sqrt(9));
console.log(Math.abs(-4));
console.log(Math.random());
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));

var arr = ["さとー", "サトォ", "ｻﾄｫｻｧﾝ"];

arr.forEach(function(v, i) {
  console.log(i);
  console.log(v);
});
*/

// forEachを使ってみよう
/*
// function forEach(arr, func){
//     for(var i = 0; i < arr.length; i++){
//         func(arr[i], i);
//     }
// }

// var arr = ["さとー", "サトォ", "サトォサァン"];

// var print = function(v, i){
//   console.log(i);
//   console.log(v);
// };

// forEach(arr, print);
// forEach(arr, function(v, i) {
//     console.log(i);
//     console.log(v);
// });

// var print1 = function(v) { console.log("!!!" + v); }
// var print2 = function(v) { console.log("###" + v); }

var say = function(f1, f2) {
    f1("hey");
    f2("hohoho");
};

say(function(v) {
    console.log(v);
}, function(v) {
    console.log(v);
});

// function hey(func) {
//   func("Hello");
//   func("World");
// }
// var print = function(word) {
//   console.log("!!!" + word + "!!!");
// }

// hey(print);
*/

// 分散
/*
function dispersion(array){
    var result = 0;
    var res = 0;
    var ave = 0;
    var sum = 0;
    var sigma2 = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    ave = sum / array.length;
    for(var j = 0; j < array.length; j++){
        res = res + Math.pow(array[j] - ave, 2);
    }
    sigma2 = res / array.length;
    return sigma2;
}

var numbers = [9, 8, 1, 2, 3, 7, 9, 6, 3, 2];
console.log(dispersion(numbers));
*/

//console.log(Date.now());    //1970年1月1日からの秒数？