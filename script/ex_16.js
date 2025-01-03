document.addEventListener("DOMContentLoaded", function () {

	let form = document.querySelector('form');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		const input = document.querySelector('input[type="file"]');
		const content = document.getElementsByClassName('content_display')[0];
		const file = input.files[0];

		const checkFile = new Promise((resolve, reject) => {
			if (file) {
				const fileType = file.name.split('.').pop();
				resolve(fileType);
			} else {
				reject("No file found.");
			}
		});

		checkFile.then((fileType) => {
			content.textContent = `File type: .${fileType}`;
			if (fileType === 'txt') {
				const reader = new FileReader();
				reader.onload = function (e) {
					content.textContent = e.target.result;
				};
				reader.onerror = function () {
					content.textContent = "Error reading file.";
				};
				reader.readAsText(file);
			}
		})
	});
});