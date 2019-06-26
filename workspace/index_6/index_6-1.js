var fs = require("fs");
var Handlebars = require("handlebars");
var express = require("express");
var app = express();
var stat = [];
// var analyze = "";
var ana_1 = 0;
var ana_2 = 0;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var source = fs.readFileSync("index_6-2.html").toString();
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
    var context = {
        // result: sourceResult,
    };
    if(req.query.choice){
        stat.push(Number(req.query.choice));
        var sta_1 = 0;
        var sta_2 = 0;
        stat.forEach(function(v, i){
            if(v == 1){
                sta_1++;
            }else if(v == 2){
                sta_2++;
            }
        });
        ana_1 = 100 * sta_1 / stat.length;
        ana_2 = 100 * sta_2 / stat.length;
        res.send(req.query.choice + "番目を選んだね<br><br>---1番目: " + ana_1 + "%<br>---2番目: " + ana_2 + "%" + templateResult(context));
    }
});

var sourceAll = fs.readFileSync("all.html").toString();
var templateAll = Handlebars.compile(sourceAll);

app.get("/all", function(req, res){
    var context = {
    }
    var sta_1 = 0;
    var sta_2 = 0;
    stat.forEach(function(v, i){
        if(v == 1){
            sta_1++;
        }else if(v == 2){
            sta_2++;
        }
    });
    if(stat.length != 0){
        ana_1 = 100 * sta_1 / stat.length;
        ana_2 = 100 * sta_2 / stat.length;
        res.send("1番目: " + ana_1 + "%<br>2番目: " + ana_2 + "%<br><br>-----総票数: " + stat.length + "票<br>" + templateAll(context));
    }else{
        res.send("投票されていません" + templateAll(context));
    }
});

var sourceClear = fs.readFileSync("clear.html").toString();
var templateClear = Handlebars.compile(sourceClear);

app.get("/clear", function(req, res){
    var context = {
    }
    var hyousuu = stat.length;
    stat = [];
    ana_1 = 0;
    ana_2 = 0;
    res.send(hyousuu + "票の履歴を削除しました" + templateClear(context));
});

// var sourceSurprize = fs.readFileSync("surprize.html").toString();
// var templateSurprize = Handlebars.compile(sourceSurprize);

// app.get("/surprize", function(req, res){
//     var context = {
//     }
//     res.send(templateSurprize(context));
// });

app.listen(process.env.PORT || 3000);