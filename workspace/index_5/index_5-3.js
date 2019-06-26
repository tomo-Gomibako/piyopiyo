
// 投票と得票率

var fs = require("fs");
var Handlebars = require("handlebars");
var express = require("express");
var app = express();
var stat = [];
var analyze = 0;
// var analyze2 = 0;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var source = fs.readFileSync("index_5-2.html").toString();
var template = Handlebars.compile(source);

app.get("/", function(req, res){
  var context = {
    result: source,
  };
  var html = template(context);
  res.send(html);
});

var sourceResult = fs.readFileSync("result.html").toString();
var templateResult = Handlebars.compile(sourceResult);

app.get("/result", function(req, res){
  if(req.query.choice){
    stat.push(Number(req.query.choice));
    var nnn = 0;
    stat.forEach(function(v, i){
      if(v == Number(req.query.choice)){
        nnn++;
      }
    });
    if(nnn != 0){
      analyze = 100 * nnn / stat.length;
    }
    var context = {
      choiceMessage: req.query.choice + "番目を選んだね",
      analyze: analyze,
    };
    res.send(templateResult(context));
  }
});
  
app.get("/all", function(req, res){
  var nn1 = 0;
  var nn2 = 0;
  var an1 = 0;
  var an2 = 0;
  stat.forEach(function(v, i){
    if(v == 1){
      nn1++;
    }
  });
  if(nn1 != 0){
    an1 = 100 * nn1 / stat.length;
  }
  stat.forEach(function(v, i){
    if(v == 2){
        nn2++;
    }
  });
  if(nn2 != 0){
    an2 = 100 * nn2 / stat.length;
  }
  var context = {
    an1: an1,
    an2: an2,
  }
  var sourceAll = fs.readFileSync("all.html").toString();
  var templateAll = Handlebars.compile(sourceAll);
  res.send(templateAll(context));
});

app.get("/clear", function(req, res){
  var hyousuu = stat.length;
  var sourceClear = fs.readFileSync("clear.html").toString();
  var templateClear = Handlebars.compile(sourceClear);
  var context = {
    hyousuu: hyousuu,
  }
  res.send(templateClear(context));
  stat = [];
  analyze = 0;
});

app.listen(process.env.PORT || 3000);

// 文字列を数字に変換する
/*
var a = "2";
a = Number(a);
a = a + 2;
console.log(a);
*/