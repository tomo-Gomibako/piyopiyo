var rand = 0;
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var capAlph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var smaAlph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var symbols = ["-","_","@","$"];
var result = "";

var express = require("express");
var app = express();

var messages = "<font size = 4>ランダム文字列生成</font>" + "<br>";

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    var inputText = "";
    if(req.query.inputText){
        inputText = req.query.inputText;
    }

    var display = messages;
    var html = "<p>" + display + '</p><form method="get" action="/" target="_self"><input type="text" name="text" /><input type="submit" value="生成" /></form>';
    res.send(html);
});

app.listen(process.env.PORT || 3000);