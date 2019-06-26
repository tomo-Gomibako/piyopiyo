var tanno = ["た", "ん", "の", "た", "け", "し"];
var homo = [];
var homoString = "";

while(true){
    homo = [];
    homoString = "";
    for(var i = 1; i <= 6; i++){
        homo.push(tanno[Math.floor(Math.random() * 6)]);
    }
    homo.forEach(function(v, u){
        homoString += v;
    });
    console.log(homoString);
    if(homoString == "たんのたけし"){
        break;
    }
}