console.log("Hello, World! by console");
// alert("Hello, World! by alert");

var targetElement = document.getElementById("target");
var textareaElement = document.getElementById("textarea");
targetElement.innerText = "Hello, World!";

function buttonClicked(){
	// targetElement.innerText = "Clicked";
	var text = textareaElement.value;
	// console.log(text);
	targetElement.innerText = text;
}