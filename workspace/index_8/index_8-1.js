//多次元配列
/*
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for(var i = 0; i < matrix.length; i++){
  for(var j = 0; j < matrix[i].length; j++){
    console.log(matrix[i][j]);
  }
}

matrix.forEach(function(i, v){
  matrix[v].forEach(function(i, v){
    console.log(i);
  });
});
*/

//数学系のMethodたち
/*
console.log(Math.floor(1.2)); // 切り捨て(floor: 床)
console.log(Math.ceil(1.2));  // 切り上げ(ceil: 天井)
console.log(Math.round(1.2)); // 四捨五入

console.log(Math.abs(-1));    // 絶対値
*/

//九九の二次元配列を作って平均を求めよ
/*
var kuku = [];
var temp = [];
var dan = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
var nnn = 0;
var average = 0;

for(var j = 1; j <= 9; j++){
  temp = [];
  dan.forEach(function(v, i){
    temp.push(v * j);
  });
  kuku.push(temp);
}

kuku.forEach(function(v, i){
  kuku[i].forEach(function(v, i){
    sum += v;
    nnn++;
  });
});
average = sum / nnn;

console.log(average);
*/

//行列の掛け算

function mtxMulti(mtx1, mtx2){
  var tempArr = [];
  var result = [];
  mtx1.forEach(function(v, i){
    for(var j = 0; j < mtx1[i].length; j++){
      tempArr.push(mtx1[i][j] * mtx2[j][i]);
    }
    result.push(tempArr);
    tempArr = [];
  });
  return result;
}

var mtx1 = [
  [1, 2, 3],
  [4, 5, 6]
];
var mtx2 = [
  [7, 8],
  [9, 10],
  [11, 12]
];

console.log(mtxMulti(mtx1, mtx2));