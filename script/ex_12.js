// Access to fetch at 'https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png' from origin 'http://127.0.0.1:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

document.addEventListener("DOMContentLoaded", function () {
	let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
	localStorage.setItem("ex12_img", "https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png");
	let imgSrc = localStorage.getItem("ex12_img");
	let imgElement = document.createElement("img");
	imgElement.src = imgSrc;
	whiteSpace.appendChild(imgElement);
});