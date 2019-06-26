var targetElement = document.getElementById("target");
var inputNum = "";
var opratorArray = ["AC","=","+","-","*","/","ER"];
var workingMemory = 0;
var result = 0;
var prevIn = 0;
var prevOp = "";
var userIn = [];


function input(num){
	inputNum += num;
	userIn.push(num);
	targetElement.innerText = inputNum;
}

function opera(op){
	workingMemory = Number(inputNum);
	// result = Number(inputNum);
	inputNum = "";
	var opSt = opratorArray[op];
	userIn.push(opSt);

	if(opSt == "AC"){
		inputNum = "";
		prevIn = 0;
		prevOp = "";
		workingMemory = 0;
		result = 0;
		userIn = [];
		targetElement.innerText = result;
	}else if(opSt == "="){
		if(prevOperator == "+"){
			result += workingMemory;
			targetElement.innerText = result;
		}else if(prevOperator == "-"){
			result -= workingMemory;
			targetElement.innerText = result;
		}else if(prevOperator == "*"){
			result *= workingMemory;
			targetElement.innerText = result;
		}else if(prevOperator == "/"){
			result /= workingMemory;
			targetElement.innerText = result;
		}
		targetElement.innerText = result;
	}else if(opSt == "+"){
		if(prevOp == "" || prevOp == "AC"){
			result = workingMemory;
			// workingMemory = 1;
		}else{
			result += workingMemory;
			targetElement.innerText = result;
		}
	}else if(opSt == "-"){
		if(prevOp == "" || prevOp == "AC"){
			result = workingMemory;
			// workingMemory = 1;
		}else{
			result -= workingMemory;
			targetElement.innerText = result;
		}
	}else if(opSt == "*"){
		if(prevOp == "" || prevOp == "AC"){
			result = workingMemory;
			workingMemory = 1;
		}else{
			result *= workingMemory;
			targetElement.innerText = result;
		}
	}else if(opSt == "/"){
		if(prevOp == "" || prevOp == "AC"){
			result = workingMemory;
			workingMemory = 1;
		}else{
			result /= workingMemory;
			targetElement.innerText = result;
		}
	}else if(opSt == "ER"){
		targetElement.innerText = "ERROR";
		inputNum = "";
		workingMemory = 0;
		result = 0;
	}
	prevIn = 
	prevOp = opSt;
}