/* Form */
function validarForm()
{
	if (((document.getElementById("email").value) == "") || ((document.getElementById("assunto").value) == "") || ((document.getElementById("msg").value) == ""))
	{
		alert("Preencha todos os campos");
	}
	else if (!((document.getElementById("email").value) == "") && !((document.getElementById("assunto").value) == "") && !((document.getElementById("msg").value) == ""))
	{
		alert("Mensagem Enviada");
		document.getElementById("email").value = ""
		document.getElementById("assunto").value = ""
		document.getElementById("msg").value = ""
	}
}
/******************************************************* */

/* Slide */
var image = ['_images/a.jpg','_images/b.jpg','_images/c.jpg','_images/d.jpg','_images/e.jpg']; // contain images in an array
var i = image.length; 
var dots = document.getElementsByClassName("dots"); // contain dots in an array

function reinicializarDots(){
	for (var i=0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active","");
	};
}

// function for next slide
function nextImage() {
	if (i < image.length) {
		i = i+1;
	} else {
		i = 1;
	}
	document.getElementById("box").innerHTML = "<img id=\"img\" src="+image[i-1]+">";
	reinicializarDots();
	dots[i-1].className += " active";
}

// function for prew slide
function prewImage() {
	if (i < image.length+1 && i>1) {
		i = i-1;
	} else {
		i = image.length;
	}
	document.getElementById("box").innerHTML = "<img id=\"img\" src="+image[i-1]+">";
	reinicializarDots();
	dots[i-1].className += " active";
}

// script for auto image slider
setInterval(nextImage, 1500);
/******************************************************* */