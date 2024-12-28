document.addEventListener("DOMContentLoaded", function() {
    const canvases = document.querySelectorAll("canvas");
	const colorCounts = {};

	canvases.forEach(canvas => {
		const backgroundColor = window.getComputedStyle(canvas).backgroundColor;
		if (colorCounts[backgroundColor]) {
			colorCounts[backgroundColor]++;
		} else {
			colorCounts[backgroundColor] = 1;
		}
	});

	canvases.forEach(canvas => {

		if (colorCounts["rgb(255, 165, 0)"] > 0) {
			canvas.style.backgroundColor = "orange";
			colorCounts["rgb(255, 165, 0)"]--;
		} else if (colorCounts["rgb(128, 0, 128)"] > 0) {
			canvas.style.backgroundColor = "purple";
			colorCounts["rgb(128, 0, 128)"]--;
		} else if (colorCounts["rgb(0, 0, 0)"] > 0) {
			canvas.style.backgroundColor = "black";
			colorCounts["rgb(0, 0, 0)"]--;
		} else if (colorCounts["rgb(128, 128, 0)"] > 0) {
			canvas.style.backgroundColor = "olive";
			colorCounts["rgb(128, 128, 0)"]--;
		}
	});
});