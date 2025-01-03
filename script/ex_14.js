document.addEventListener("DOMContentLoaded", function () {
	let btn = document.getElementsByTagName("button")[0];
	const apiUrl = "https://jsonplaceholder.typicode.com/posts";
	let blob;
	fetch(apiUrl)
	.then(response => {
		return response.json();
	})
	.then(data => {
		blob = new Blob([JSON.stringify(data, null, 1)], { type: 'text/plain' });
	});
	btn.addEventListener("click", function () {
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = url;
		a.download = 'data.txt';
		document.body.appendChild(a);
		a.click();
		URL.revokeObjectURL(url);
		document.body.removeChild(a);
	});
});