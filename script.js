var css = document.querySelector("h3");
var but = document.getElementById("random");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function exercise(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

 	 var x2 = Math.floor(Math.random() * 256);
    var y2 = Math.floor(Math.random() * 256);
    var z2 = Math.floor(Math.random() * 256);
    var bgColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";
 console.log(bgColor2);
  
    document.body.style.background = "linear-gradient(to right, " + bgColor + ", " + bgColor2 + ")";
    css.textContent = body.style.background + ";";
    }

// random_bg_color();
 
but.addEventListener("click", random_bg_color);


exercise();