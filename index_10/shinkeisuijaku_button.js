var targetElement = document.getElementById("target");
var haichi = [[], [], []];
var currSel = 0;
var prevSel = 0;
var mekuriNum = 1;
var score = 0;
var disabledNum = 0;
var prevCard = "";
var prevCardNum = 0;
var prprCard = "";
var prprCardNum = "";



var randCol = Math.floor(Math.random() * 3);
var randRow = Math.floor(Math.random() * 6);
var shuffle = function(){return Math.random() - 0.5};

var sourceArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
console.log("source: " + String(sourceArray.length));

var shuffledArray = sourceArray.sort(shuffle);
console.log("shuffled: " + shuffledArray);

for(var j = 0; j <= 2; j++){
	haichi[j] = shuffledArray.slice(j * 6, (j + 1) * 6);
}
console.log("haichi: ");
console.log(haichi[0]);
console.log(haichi[1]);
console.log(haichi[2]);


// haichi = [[1, 1, 2, 2, 3, 3], [4, 4, 5, 5, 6, 6], [7, 7, 8, 8, 9, 9]];	// haichi for test


function selectedValue(col, row){
	return haichi[col - 1][row - 1];
}


function refresh(){
	// if(prprCardNum != -1 && prevCardNum != -1){
	// 	document.getElementById(prprCard).innerText = "##"
	// 	document.getElementById(prevCard).innerText = "##"	
	// }else{
	// 	document.getElementById(prprCard).innerText = "--"
	// 	document.getElementById(prevCard).innerText = "--"	
	// }

	for(var k = 0; k <= 2; k++){
		haichi[k].forEach(function(v, i){
			if(v != -1){
				var cid = String(k + 1) + "-" + String(i + 1);
				document.getElementById(cid).innerText = "##";		// card refresh
			}else{
				var cid = String(k + 1) + "-" + String(i + 1);
				document.getElementById(cid).innerText = "--";
			}
		});
	}
}


function card(col, row){
	var cardId = String(col) + "-" + String(row);
	currSel = selectedValue(col, row);
	console.log(prevSel + "→" + currSel);
	targetElement.innerText = "神経衰弱！";
	if(mekuriNum % 2 == 0){
		if(currSel > 0 && prevSel > 0 && cardId != prevCard){
			document.getElementById(cardId).innerText = selectedValue(col, row);
			prprCard = prevCard;
			prevCard = cardId;
			// document.getElementById(cardId).innerText = "##";
			if(currSel == prevSel){
				targetElement.innerText = "よくできました" + "  (" + mekuriNum / 2 + "手め)";
				score += 10;

				for(var k = 0; k <= 2; k++){
					haichi[k].forEach(function(v, i){
						if(currSel == v){
							var cid = String(k + 1) + "-" + String(i + 1);
							haichi[k][i] = -1;		// card disabled
							document.getElementById(cid).innerText = "--";
						}
					});
				}
			}else{
				targetElement.innerText = "残念" + "  (" + mekuriNum / 2 + "手め)";
				score -= 3;
			}
		}
	}else if(mekuriNum % 2 == 1){
		if(currSel >= 0 && prevSel >= 0){
			document.getElementById(cardId).innerText = selectedValue(col, row);
			// prevCard = selectedValue(col, row);
		}
	}

	prprCard = prevCard;
	prprCardNum = prevCardNum;
	prevCard = cardId;
	prevCardNum = selectedValue(col, row);
	prevSel = currSel;
	

	disabledNum = 0;		// ↓ game clear judgement ↓
	for(var k = 0; k <= 2; k++){
		haichi[k].forEach(function(v, i){
			if(v == -1){
				disabledNum++;
			}
		});
	}
	if(disabledNum == 18){
		targetElement.innerText = mekuriNum / 2 + "手でクリア  スコア: " + score + "点  リロードしてね";
	}
	console.log("current haichi: ");
	console.log(haichi[0]);
	console.log(haichi[1]);
	console.log(haichi[2]);

	if(prprCard != "" || prevCard != ""){
		setTimeout(refresh, 2000);
	}
	mekuriNum++;
}