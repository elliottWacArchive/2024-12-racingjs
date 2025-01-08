document.addEventListener('DOMContentLoaded', function() {
	function $(selector) {
		let elements = document.querySelectorAll(selector);
		return Array.from(elements).map(element => element.outerHTML).join('\n\n');
	}
    // console.log($(".exercice"));
});

