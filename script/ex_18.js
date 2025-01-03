document.addEventListener('DOMContentLoaded', function() {
	const dropZone = document.querySelector('.drag_drop');

	dropZone.addEventListener('dragover', function(e) {
		e.preventDefault();
	});

	dropZone.addEventListener('drop', function(e) {
		e.preventDefault();  
		const files = e.dataTransfer.files;
		const file = files[0];
		if (file.type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onload = function(event) {
				const img = document.createElement('img');
				img.src = event.target.result;
				img.style.maxWidth = '100%';
				dropZone.innerHTML = '';
				dropZone.appendChild(img);
			};
			reader.readAsDataURL(file);
		} else {
			dropZone.innerHTML = 'Le fichier doit être une image';
		}
	});
});