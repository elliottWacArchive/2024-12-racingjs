document.addEventListener("DOMContentLoaded", function () {
	let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
	let select = whiteSpace.getElementsByTagName("select")[0];
	let plus = whiteSpace.getElementsByTagName("button")[0];
	let moins = whiteSpace.getElementsByTagName("button")[1];
	let fontPx = 16;

	select.addEventListener("change", function() {
		let col = select.value;

		document.body.style.backgroundColor = col;
	});

	plus.addEventListener("click", function () {
		fontPx++;
		document.body.style.fontSize = fontPx + "px";
	});

	moins.addEventListener("click", function() {
		fontPx--;
		document.body.style.fontSize = fontPx + "px";
	});
});
