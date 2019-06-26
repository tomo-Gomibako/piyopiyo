// forEachの復習
/*
var array = [14,2,56,7,-23,12,4,5-34];
var result = 0;
var sum = function(v){
    result += v;
}
array.forEach(sum);
console.log(result);
*/

// 発展
/*
var array = [14,2,56,7,-23,12,4,5-34];

// var total = array.reduce(function(v, i){
//     return v + i;
// }, 1)
// console.log(total);

function total(v, i){
    return v + i;
}
var result = array.reduce(total);
console.log(result);
*/

// 模範解答
/*
var arr = [14,2,56,7,-23,12,4,5-34];

var sum = function(previusValue, nextValue) {
    return previusValue + nextValue;
};

var result = arr.reduce(sum, 0);
console.log(result);
*/

// サーバー上で動かしてみよう
/*
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/:name', function (req, res) {
  res.send('Hello ' + req.params.name);
});

app.listen(process.env.PORT || 3000);
*/

//URLの最後の数字の階乗
/*
var express = require("express");
var app = express();

app.get('/:num', function(req, res){
    var result = 1;
    var num = req.params.num;
    for(var i = 0; i <= num - 1; i++){
        result *= num - i;
        // console.log(num - 1);
    }
    res.send(req.params.num + " の階乗は " + result);
});

app.listen(process.env.PORT || 3000);
*/

// 例
/*
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var text = '';
  if (req.query.text) {
    text = req.query.text;
  }
  var result = "あなたの入力は" + text + "です";
  var html = '<p>' + result + '</p><form method="get" action="/" target="_self"><input type="text" name="text" /><input type="submit" value="送信" /></form>';
  res.send(html);
});

app.listen(process.env.PORT || 3000);
*/

// ToDoリスト
/*
var express = require("express");
var app = express();

var messages = "<font size = 4>ToDoリスト</font>" + "<br>";

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  var text = "";
  if(req.query.text){
    text = req.query.text
    if(text == "clear"){
      text = "";
      messages = "<font size = 4>ToDoリスト</font>" + "<br>";
    }else{
      text += "<br>";
    }
  }
  messages += text;
  var result = messages;
  var html = "<p>" + result + '</p><form method="get" action="/" target="_self"><input type="text" name="text" /><input type="submit" value="追加" /></form>';
  res.send(html);
});

app.listen(process.env.PORT || 3000);
*/

// ToDoリスト_配列ver.

var fs = require("fs");
var Handlebars = require("handlebars");
var express = require("express");
var app = express();

var messages = ["<font size = 4>ToDoリスト</font><br>"];

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var source = fs.readFileSync("index_4-2.html").toString();
console.log(source);
var template = Handlebars.compile(source);

app.get("/", function(req, res){
  var text = "";
  if(req.query.text){
    text = req.query.text;

    if(text == "clear"){
      text = "";
      messages = ["<font size = 4>ToDoリスト</font><br>"];
    }else if(messages.forEach(function(v, i){return v;}) == text){
      // "<font color='#ff0000'>";
    }else{
      text += "-------" + new Date().toLocaleString();
      text += "<br>";
    }
  }
  var name = "名無しさん";
  if(req.query.name){
    name = req.query.name;
    text += "by: " + name + "<br>";
  }
  messages.push(text);
  var result = messages.join("");
  // var result = messages;
  // messages.forEach(function(n, m){res.send(n + "<br>")});
  var context = {result: result,};
  var html = template(context);
  res.send(html);
});

app.listen(process.env.PORT || 3000);