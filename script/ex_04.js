document.addEventListener("DOMContentLoaded", function () {
	let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
	let charList = [];

	document.addEventListener("keypress", (e) => {
		charList.push(e.key);
		if (charList.length > 42) {
			charList.shift();
		}
		whiteSpace.innerHTML = charList.join("");
	});
});
