var an = 1;
var bn = 1/Math.sqrt(2);
var tn = 1/4;
var pn = 1;
var a,b,t,p = 0;

var digit = 1024;

var result = 0;

for(var i = 1; i <= Math.LOG2E * Math.log(digit); i++){
    a = (an + bn)/2;
    b = Math.sqrt(an * bn);
    t = tn - pn * Math.pow(an - a, 2);
    p = 2 * pn;
    
    an = a;
    bn = b;
    tn = t;
    pn = p;
    
    result = Math.pow(an + bn, 2) / (4 * tn)
}
console.log(result);