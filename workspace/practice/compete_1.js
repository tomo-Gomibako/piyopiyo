//第1回テスト！

//問題1

function power(k, n){
    var result = 1;
    for(var i = 1; i <= n; i++){
        result = result * k;
    }
    return result;
}

//console.log(power(5,3));    // = 125


//問題2

function factorial(n){
    var result = 1;
    for(var i = 0; i <= n - 1; i++){
        result = result * (n - i)
    }
    return result;
}

//console.log(factorial(4));  // = 24


//問題3

function sine(theta){
    var result = 0;
    for(var k = 1; k <= 10; k++){
        result = result + (power(-1, k + 1) * power(theta, (2 * k) - 1)) / factorial((2 * k) - 1);
    }
    return result;
}

//console.log(sine(0.7854));    // = 0.7071067812 ( = sqrt(2)/2 )


//問題1をn乗根に拡張…

function powpower(k, n){
    var result = 1;
    var res = 1;
    var comp = 0;
    //var j = 1;
    if(n >= 1 || n == 0){
        for(var i = 1; i <= n; i++){
        result = result * k;
        }
        return result;
    }else if(n > 0 && n < 1){
        while(true){
            comp = comp + 0.001;
            res = 1;
            for(var i = 1; i <= 1 / n; i++){
            res = res * comp;
            }
            if(k <= res){
                break;
            }
            //j++;
            //console.log(comp);
            console.log(res);
        }
        result = comp;
        return result;
    }else if(n < 0){
        for(var i = 1; i <= -1 * n; i++){
            res = res * k;
        }
        result = 1 / res;
        return result;
    }
}

console.log(powpower(2, 0.5));
