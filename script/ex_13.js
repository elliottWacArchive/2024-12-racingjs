document.addEventListener("DOMContentLoaded", function () {
	let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
	let imgSrc = localStorage.getItem("ex12_img");
	let imgElement = document.createElement("img");
	imgElement.src = imgSrc;
	imgElement.addEventListener('mouseover', function () {
		let interval = setInterval(function () {
			let currentWidth = imgElement.clientWidth;
			imgElement.style.width = (currentWidth * 0.95) + 'px';
		}, 1000);

		imgElement.addEventListener('mouseout', function () {
			clearInterval(interval);
			imgElement.style.width = '';
		});
	});
	imgElement.addEventListener('click', function () {
		localStorage.removeItem("ex12_img");
	});
	whiteSpace.appendChild(imgElement);
});