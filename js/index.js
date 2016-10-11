var tempF;
var tempC;

document.getElementById("convert").onclick = function(){
	tempC = parseInt(document.getElementById("celsius").value);
	//b = parseInt(document.getElementById("b").value);
	console.log(tempC);
	tempF = (tempC * 1.8) + 32;
	console.log(tempF);
	document.getElementById("farenheit").innerHTML = " = Farenheit";
	
	if (tempF < 32){
		document.getElementById("farenheit").innerHTML = tempF + " = Farenheit";
		document.body.style.background = "blue";
	} else if (tempF > 32 && tempF < 50){
		document.getElementById("farenheit").innerHTML = tempF + " = Farenheit";
		document.body.style.background = "green";
	} else if (tempF > 50 && tempF < 70){
		document.getElementById("farenheit").innerHTML = tempF + " = Farenheit";
		document.body.style.background = "yellow";
	} else if (tempF > 70){
		document.getElementById("farenheit").innerHTML = tempF + " = Farenheit";
		document.body.style.background = "red";
	}
}


//T(°F) = T(°C) × 1.8 + 32