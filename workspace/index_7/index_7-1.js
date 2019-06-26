var fs = require("fs");
var Handlebars = require("handlebars");
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

function makeTemplate(fileName){
    var source = fs.readFileSync(fileName).toString();
    var template = Handlebars.compile(source);
    return template;
}


var source = fs.readFileSync("root.html").toString();
var template = Handlebars.compile(source);

app.get("/", function(req, res){
    var context = {
        result: source,
    };
    var html = template(context);
    res.send(html);
});


var sourceQ1 = fs.readFileSync("q1.html").toString();
var templateQ1 = Handlebars.compile(sourceQ1);

app.get("/q1", function(req, res){
    var context = {
        result: sourceQ1,
    };
    var html = templateQ1(context);
    res.send(html);
});


var sourceQ1sub = fs.readFileSync("q1sub.html").toString();
var templateQ1sub = Handlebars.compile(sourceQ1sub);

app.get("/q1/sub", function(req, res){
    var context = {
        result: sourceQ1sub,
    };
    var html = templateQ1sub(context);
    res.send(html);
});


var sourceQ2 = fs.readFileSync("q2.html").toString();
var templateQ2 = Handlebars.compile(sourceQ2);

app.get("/q2", function(req, res){
    var context = {
        result: sourceQ2,
    };
    var html = templateQ2(context);
    res.send(html);
});

app.get("/q2/:srg", function(req, res){
    var html = "<p>Hi," + req.params.srg + "!</p>";
    res.send(html);
});

app.get("/q3", function(req, res){
    var template = makeTemplate("q3.html");
    var html = template({
        /*送受信するもの？*/
    });
    res.send(html);
});

app.get("/q3/date", function(req, res){
    var template = makeTemplate("q3.html");
    var date = new Date().toString();
    var html = template({
        date: date,
    });
    res.send(html);
});

app.get("/q4", function(req, res){
    var template = makeTemplate("q4.html");
    var date = new Date().toString();
    var html = template({
        date: date,
    });
    res.send(html);
});

var accessQ5 = 0;
app.get("/q5", function(req, res){
    accessQ5++;
    var template = makeTemplate("q5.html");
    var html = template({
        accessQ5: accessQ5,
    });
    res.send(html);
});

app.get("/q6", function(req, res){
    var template = makeTemplate("q6.html");
    var kotae = Number(req.query.tasareru) + Number(req.query.tasu);
    var html = template({
        kotae: kotae,
    });
    // console.log(req.query.tasareru);
    res.send(html);
});


function date(){
    var hoho = new Date().getHours() + 9;   //.getHoursは0~23
    if(hoho > 23){
        var hour = hoho - 24;
    }else{
        var hour = hoho;
    }
    // console.log(hour);
    var minu = new Date().getMinutes();
    if(minu < 10){
        var mnts = "0" + minu.toString();
    }else{
        var mnts = minu.toString();
    }
    // console.log(minu);
    var date = hour.toString() + ":" + mnts;
    return date;
}
var historyArray = [];
var history = "";
app.get("/q7", function(req, res){
    var template = makeTemplate("q7.html");
    if(req.query.send){
        historyArray.push(req.query.message + "-----" + date());
        // historyArray.push("<br>");
    }else if(req.query.clear){
        historyArray = [];
    }else if(req.query.replace){
        var num = Number(req.query.number);
        var replace = req.query.replaceText;
        historyArray[num - 1] = replace + "-----" + date();
    }
    history = "";
    historyArray.forEach(function(v, i){
        history += (i + 1).toString() + " : " + v + "<br>";
    });

    var html = template({
        history: history,
    });
    res.send(html + history);
});


function janken(num){
    if(num == 1){return " ぐー "}
    if(num == 2){return "ちょき"}
    if(num == 3){return " ぱー "}
}
app.get("/q8", function(req, res){
    var template = makeTemplate("q8.html");
    var select = 0;
    var win = "お前の負けだ！";
    var lose = "お前の勝ちだ！";
    var result = "";
    var difficulty = 5;
    
    if(req.query.guu || req.query.cho || req.query.paa){
        if(req.query.guu){
            select = 1;
        }else if(req.query.cho){
            select = 2;
        }else if(req.query.paa){
            select = 3;
        }
        var player = "あなたの選択: " + janken(select);
        
        if(req.query.mode == 1){
            var probability = Math.floor(Math.random() * difficulty) + 1;
            if(probability == 1){
                var cpu = Math.floor(Math.random() * 3) + 1;
            }
            if(select == 3){cpu = 1;}
            else if(select == 1){cpu = 2;}
            else if(select == 2){cpu = 3;}
        }
        if(req.query.mode == 2){
            var cpu = Math.floor(Math.random() * 3) + 1;
        }
        if(req.query.mode == 3){
            var probability = Math.floor(Math.random() * difficulty) + 1;
            if(probability == 1){
                var cpu = Math.floor(Math.random() * 3) + 1;
            }
            if(select == 3){cpu = 2;}
            else if(select == 1){cpu = 3;}
            else if(select == 2){cpu = 1;}
        }
        var computer = "コンピュータ: " + janken(cpu);
        
        if(select == cpu){
            result = "あいこだ！";
        }else if(select == 1 && cpu == 2){
            result = lose;
        }else if(select == 2 && cpu == 3){
            result = lose;
        }else if(select == 3 && cpu == 1){
            result = lose;
        }else{
            result = win;
        }
    }
    var html = template({
        player: player,
        computer: computer,
        result: result,
    });
    res.send(html);
});

app.listen(process.env.PORT || 3000);