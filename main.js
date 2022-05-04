canvas = document.getElementById("myCanvas");
ctx= canvas.getContent("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML="you pressed an alphebet key"
			console.log("letter")
		}
		if((keyPressed >=48 && keyPressed<=57)){
			numkey();
			document.getElementById("d1a").innerHTML="you pressed a number key"
			console.log("number")
		}	
		else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
	
}

function aplhabetkey()
{
	img_image="Alpkey.png"
	add();
	uploadimg();
}
function numberkey()
{
	img_image="numkey.png"
	uploadimg();
	add();
}
function arrowkey()
{
	img_image="Arrkey.png"
	add();
	uploadimg();
}
function specialkey()
{
	img_image="spkey.png"
	add();
	uploadimg();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
	uploadimg();
}