document.addEventListener('DOMContentLoaded', function() {
	let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
	let datePicker = document.createElement('input');
	let displayDate = document.createElement('p');
	datePicker.type = 'date';
	whiteSpace.appendChild(datePicker);
	whiteSpace.appendChild(displayDate);
	datePicker.addEventListener('change', () => {
		const selectedDate = new Date(datePicker.value);
		const day = selectedDate.toLocaleDateString('en-US', {weekday: 'long'});
		const date = selectedDate.getDate();
		const month = selectedDate.toLocaleDateString('en-US', {month: 'long'});
		const year = selectedDate.getFullYear();
		displayDate.textContent = `${day} ${date} ${month} ${year}`;
	});
});