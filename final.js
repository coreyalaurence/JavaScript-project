// Corey Laurence 03/30/2016

var username = window.prompt("Please enter your name.");
var score = 0;

if (username != null) {
	document.getElementById("welcome").innerHTML = "Welcome to the JavaScript Game " + username + "!";
}

document.write = document.getElementById("endGame").innerHTML = "Thank you for playing my JavaScript Game " + username + "!";
document.getElementsByTagName("h2")[0].innerHTML = "Please enjoy your experience.";
document.getElementById("score").innerHTML = "Score: "  + score;
document.querySelector("#submitbtn5").style.backgroundColor = "#008000";

// Code for question 1
function question1 () {
	if (document.getElementById("q1a3").checked) {
		window.alert("Good Job " + username + "!");
		score = score + 10;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	else {
		window.alert("Incorrect answer, Try again " + username + ".");
		score = score - 1;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
}

document.getElementById("q1a1").addEventListener("click", question1, false);
document.getElementById("q1a2").addEventListener("click", question1, false);
document.getElementById("q1a3").addEventListener("click", question1, false);
document.getElementById("q1a4").addEventListener("click", question1, false);

// Code for question 2
function question2 () {
	if (document.getElementById("q2a2").checked) {
		document.getElementById("a2").innerHTML = "Correct, Good Job! " + username;
		score = score + 10;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	else {
		document.getElementById("a2").innerHTML = "Sorry, Try again " + username;
		score = score - 1;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
}

document.getElementById("q2a1").addEventListener("click", question2, false);
document.getElementById("q2a2").addEventListener("click", question2, false);
document.getElementById("q2a3").addEventListener("click", question2, false);
document.getElementById("q2a4").addEventListener("click", question2, false);

//Code for question 3
function question3() {
	var text1 = username;
	var primeColor = document.getElementById("q3a1").value;
	switch (primeColor) {
		case "Yellow":
			if (username !== null) {
				text1 += " Yellow is a primary color!";
			}
			document.getElementById("a3").style.backgroundColor = "#ffff00";
			document.getElementById("a3").style.color = "#000000";
			score += 10;
			document.getElementById("score").innerHTML = "Score: " + score;
			break;
		case "yellow":
			if (username !== null) {
				text1 += " Yellow is a primary color!";
			}
			document.getElementById("a3").style.backgroundColor = "#ffff00";
			document.getElementById("a3").style.color = "#000000";
			score += 10;
			document.getElementById("score").innerHTML = "Score: " + score;
			break;
		case "Red":
			if (username !== null) {
			text1 += " Red is a primary color!";
			}
			document.getElementById("a3").style.backgroundColor = "#ff0000";
			document.getElementById("a3").style.color = "#000000";
			score += 10;
			document.getElementById("score").innerHTML = "Score: " + score;
			break;
		case "red":
			if (username !== null) {
			text1 += " Red is a primary color!";
			}
			document.getElementById("a3").style.backgroundColor = "#ff0000";
			document.getElementById("a3").style.color = "#000000";
			score += 10;
			document.getElementById("score").innerHTML = "Score: " + score;
			break;
		case "Blue":
			if (username !== null) {
			text1 += " Blue is a primary color!";
			}
			document.getElementById("a3").style.backgroundColor = "#0066ff";
			document.getElementById("a3").style.color = "#000000";
			score += 10;
			document.getElementById("score").innerHTML = "Score: " + score;
			break;
		case "blue":
			if (username !== null) {
			text1 += " Blue is a primary color!";
			}
			document.getElementById("a3").style.backgroundColor = "#0066ff";
			document.getElementById("a3").style.color = "#000000";
			score += 10;
			document.getElementById("score").innerHTML = "Score: " + score;
			break;
		default:
			if (username !== null) {
			text1 += " the color you entered is not a primary color.";
			}
			document.getElementById("a3").style.backgroundColor = "#375E97";
			document.getElementById("a3").style.color = "#FFFFFF";
			score -= 1;
			document.getElementById("score").innerHTML = "Score: " + score;
			break;
	}
	document.getElementById("a3").innerHTML = text1;
}

document.getElementById("submitbtn3").addEventListener("click", question3, false);

//Code for question 4
function question4() {
	var reserved = ["abstract", "boolean", "break", "byte", "case", "catch",
	"char", "class", "const", "continue", "debugger", "default", "delete",
	"do", "double","else", "enum","export", "extends", "false", "final",
	"finally", "float", "for", "function", "goto", "if", "implements",
	"import", "in", "instanceof", "int", "interface", "let", "long",
	"native", "new", "null", "package", "private", "protected", "public",
	"return", "short", "static", "super", "switch", "synchronized", "this",
	"throw", "throws", "transient", "true", "try", "typeof", "var", "void",
	"volatile", "while", "with", "yield"];
	var answer = document.getElementById("q4a1").value;

	for (var i = 0; i < reserved.length; i++){
		if (reserved[i] === answer) {
		document.getElementById("a4").innerHTML = "The word entered " + username + " is a JavaScript reserved word.";
		score += 10;
		document.getElementById("score").innerHTML = "Score: " + score;
		return true;
		}
		else {
		document.getElementById("a4").innerHTML = "The word entered " + username + " is not a JavaScript reserved word.";
		}
	}

}

document.getElementById("submitbtn4").addEventListener("click", question4, false);

//Code for question 5
function question5() {
var operators = ["+", "-", "*", "/","%", "++", "--", "-"];
var operators2 = ["addition", "subtraction", "multipication",
 "division", "modulus", "increment", "decrement", "negation"];
var i = 0;
var answer = document.getElementById("q5a1").value;

while (operators[i]) {
	if (operators[i] == answer) {
		document.getElementById("a5").innerHTML = "You have entered a JavaScript arithmetic operator " + username + ".";
		score += 10;
		document.getElementById("score").innerHTML = "Score: " + score;
		return true;
	} else if (operators2[i] === answer) {
		document.getElementById("a5").innerHTML = "You have entered a JavaScript arithmetic operator " + username + ".";
		score += 10;
		document.getElementById("score").innerHTML = "Score: " + score;
		return true;
	}
	else {
		document.getElementById("a5").innerHTML = "I do not recognize that as a JavaScript arithmetic operator " + username;
	}
	i++;
}
}

document.getElementById("submitbtn5").addEventListener("click", question5, false);

//Code for question 6
function addition (){
	var num1 = Number(document.getElementById("q6n1").value);
	var num2 = Number(document.getElementById("q6n2").value);
	var txt1 = username + " the answer is: ";
	var result = num1 + num2;
	txt1 += result;
	console.log(result);
	document.getElementById("a6").innerHTML = txt1;
}

document.getElementById("addbtn").addEventListener("click", addition, false);

//Code for question 7
function subtraction () {
	var num1 = Number(document.getElementById("q7n1").value);
	var num2 = Number(document.getElementById("q7n2").value);
	var result = num1 - num2;
	console.log(result);
	document.getElementById("a7").innerHTML = username + " the answer is: " + result;
}

document.getElementById("subtractbtn").addEventListener("click", subtraction, false);

//Code for question 8
function multiplication () {
	var num1 = Number(document.getElementById("q8n1").value);
	var num2 = Number(document.getElementById("q8n2").value);
	var result = num1 * num2;
	console.log(result);
	document.getElementById("a8").innerHTML = username + " the answer is: " + result;
}

document.getElementById("multiplybtn").addEventListener("click", multiplication, false);

//Code for question 9
function divide () {
	var num1 = Number(document.getElementById("q9n1").value);
	var num2 = Number(document.getElementById("q9n2").value);
	var result = num1 / num2;
	console.log(result);
	document.getElementById("a9").innerHTML = username + " the answer is: " + result;
}

document.getElementById("dividebtn").addEventListener("click", divide, false);

//Code for question 10
function modulus () {
	var num1 = Number(document.getElementById("q10n1").value);
	var num2 = Number(document.getElementById("q10n2").value);
	var result = num1 % num2;
	console.log(result);
	document.getElementById("a10").innerHTML = username + " the answer is: " + result;
}

document.getElementById("remainderbtn").addEventListener("click", modulus, false);

//Code for question 11
function question11() {
	var x = 100;
	var result = Number(document.getElementById("q11a1").value);
	x *= 20;
	if (x === result) {
		document.getElementById("a11").innerHTML = "That is correct " + username + "!";
		score += 10;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	else {
		document.getElementById("a11").innerHTML = "That is not correct " + username;
		score -= 1;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	
}

document.getElementById("submitbtn11").addEventListener("click", question11, false);

//Code for question 12
function question12() {
	var x = 20;
	var result = Number(document.getElementById("q12a1").value);
	x /= 2;
	if (x === result) {
		document.getElementById("a12").innerHTML = "That is correct " + username + "!";
		score += 10;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	else {
		document.getElementById("a12").innerHTML = "That is not correct " + username;
		score -= 1;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	
}

document.getElementById("submitbtn12").addEventListener("click", question12, false);

//Code for question 13
function question13() {
	var x = 2;
	var result = Number(document.getElementById("q13a1").value);
	x %= 3;
	if (x == result) {
		document.getElementById("a13").innerHTML = "That is correct " + username + "!";
		score += 10;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	else {
		document.getElementById("a13").innerHTML = "That is not correct " + username;
		score -= 1;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	
}

document.getElementById("submitbtn13").addEventListener("click", question13, false);