/*If we want to include an image for on the old screen size: - a new slide could be created for javascript e.g. something.js */

<img id> "slide" width "640" height "480"/>

Javascript:

*/put urls in the apostrophies/*
var picURLs = [];
picURLs.push("");
picURLs.push(""); 

var current = 0;
function imagRotate() {
	current = current + 1;
	if (current == picURLS.length) {
		current = 0;
	}
	var url = picURLs[current];
	$("#slide").attr("src", url);
}

setInterval(imgRotate, 4000);

Must add this onto the html webpage in order to connect them to work:
<script src="javascript"></script>
<script src="jQuery"></script>