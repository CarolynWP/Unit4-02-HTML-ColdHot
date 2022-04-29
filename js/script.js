//use strict
"use strict"

function hotCold() {
	// variable
	let temperature = document.getElementById("temperature").value;

	//if statement for if the temperature is under 15
if (temperature <= 15) {
		document.getElementById("answer").innerHTML = "It is cold outside! You should wear a jacket."

}
	// else statement 
else {
	document.getElementById("answer").innerHTML = "It is warm outside! You do not need to wear a jacket."
}

}