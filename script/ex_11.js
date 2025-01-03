document.addEventListener("DOMContentLoaded", function () {
	let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
	let validation = whiteSpace.getElementsByTagName("a")[0];

	function eraseCookie(name) {
		document.cookie = name + '=; Max-Age=-99999999;';
	}

	if (document.cookie.includes("acceptsCookies=true")) {
		whiteSpace.innerHTML = '<div><button id="deleteCookie">Delete cookie</button></div>';
	} else {
		validation.addEventListener('click', function () {
			document.cookie = `acceptsCookies = true ; expires = 86400000`;
			whiteSpace.innerHTML = '<button id="deleteCookie">Delete cookie</button>';
		});
	}

	document.addEventListener('click', function (e) {
		if (e.target && e.target.id === 'deleteCookie') {
			eraseCookie("acceptsCookies");
			whiteSpace.innerHTML = 'This website use cookies, click OK to accept it. <a href="#">OK</a>';
		}
	});
});