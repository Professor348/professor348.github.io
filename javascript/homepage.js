id = setInterval(frame, 1000);
element = document.getElementById("pagename");
toggle = false;

function frame() {
	if (toggle == false){
		element.innerHTML = "DanTheGamer";
		toggle = true;
	}else{
		element.innerHTML = "DanTheCoder";
		toggle = false;
	}
}
