// 

// 投票

var fs = require("fs");
var Handlebars = require("handlebars");
var express = require("express");
var app = express();

var messages = "";

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var source = fs.readFileSync("index_5-2.html").toString();
console.log(source);
var template = Handlebars.compile(source);

app.get("/", function(req, res){
    var text = "";
    
    
    var result = messages.join("");
    var context = {result: result,};
    var html = template(context);
    res.send(html);
});

app.listen(process.env.PORT || 3000);