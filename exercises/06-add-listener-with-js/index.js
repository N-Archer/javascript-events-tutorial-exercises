window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here

function newAlert() {
	alert("wuju");
}


document.querySelector("#theGreen").addEventListener("click", newAlert);