var targetElement = document.getElementById("target");
var inputNum = "";
var opratorArray = ["AC","=","+","-","*","/","ER"];
var workingMemory = 0;
var result = 0;
var prevOp = "";
var userIn = [];


function input(num){
	inputNum += num;
	targetElement.innerText = inputNum;
}

function culculate(array){
	var formula = [];
	var last = array.length - 1;
	var max = 0;
	array.forEach(function(v, i){
		if(Number(v) != "NaN"){
			formula.push(v);
			break;
		}
	});
	userIn.forEach(function(v, i){
		for(var k = last - 1; k >= 0; k--){
			if(userIn[k] == v){
				formula.push(userIn[k]);
				break;
			}
		}
	});
}

function opera(op){
	userIn.push(inputNum);
	result = Number(inputNum);
	workingMemory = Number(inputNum);
	inputNum = "";
	var opSt = opratorArray[op];
	userIn.push(opSt);

	switch(opSt){
		case "AC":
			inputNum = "";
			prevOp = "";
			workingMemory = 0;
			result = 0;
			userIn = [];
			targetElement.innerText = result;
			break;

		case "=":
			
			break;
		

		case "+":
			
			break;
		

		case "-":
			
			break;
		

		case "*":
			
			break;
		

		case "-":
			
			break;
		
		default:
			//ERROR
	}
	prevOp = opSt;
}