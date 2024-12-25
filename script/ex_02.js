document.addEventListener("DOMContentLoaded", function () {
	let i = 0;
	whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];

	whiteSpace.innerHTML = i;
	whiteSpace.addEventListener("click", function () {
		i++;
		whiteSpace.innerHTML = i;
	});
});
