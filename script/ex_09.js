document.addEventListener('DOMContentLoaded', function () {
	let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
	let displayPos = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[1];
	let box = whiteSpace.getElementsByTagName("canvas")[0];
	let isDragging = false;
	let offsetX, offsetY;

	box.addEventListener('mousedown', (e) => {
		isDragging = true;
		offsetX = e.clientX - box.offsetLeft;
		offsetY = e.clientY - box.offsetTop;
	});

	document.addEventListener('mousemove', (e) => {
		if (isDragging) {
			box.style.position = "absolute";
			box.style.left = `${e.clientX - offsetX}px`;
			box.style.top = `${e.clientY - offsetY}px`;
			displayPos.innerText = `New coordinates => {x:${e.clientX}, y:${e.clientY}}`
		}
	});

	document.addEventListener('mouseup', () => {
		isDragging = false;
	});
});