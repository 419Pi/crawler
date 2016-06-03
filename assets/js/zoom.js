function zoom() {
	var oldCanvas = document.getElementById("testCanvas");
    var zoomWindow = window.open("zoom.html");
	//alert(oldCanvas.width);
}

function growCanvas() {
	var oldCanvas = document.getElementById("testCanvas");
	//alert(oldCanvas.height);
	oldCanvas.width = oldCanvas.width*2
	oldCanvas.height = oldCanvas.height*1.5;
	//alert(oldCanvas.height);
}

function shrinkCanvas() {
	var oldCanvas = document.getElementById("testCanvas");
	//alert(oldCanvas.width);
	oldCanvas.width = oldCanvas.width/2;
	oldCanvas.height = oldCanvas.height/1.5;
	//alert(oldCanvas.width);
}