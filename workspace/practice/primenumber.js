function prime(num){
    var i = 2;
    var ama = 0;
    //num = 17;     // 判定したい数字(>= 2)
    
    while(true){
        if(num <= 1){
            //console.log("Error");
            //break;
            throw new Error("number must be more than 1.");
        }
        if(num == 2){
            return true;
        }
        ama = num % i;
        if(ama == 0){
            //console.log(num+"は素数ではありません");
            //break;
            return false;
        }else if(num > i+1){
            i++;
        }else if(num <= i+1){
            //console.log(num+"は素数です");
            //break;
            return true;
        }
    }
}


var primearray = [];

for (var j = 2; j <= 100; j++) {
    if(prime(j)){
        //console.log(j);
        primearray.push(j);
    }
}

//console.log(primearray.join(","));
console.log(primearray.toString());