document.addEventListener("DOMContentLoaded", function () {
	fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
	.then(response => {
		return response.json();
	})
	.then(data => {
		const btcPrice = data.bpi.EUR.rate;
		let dot = document.getElementsByClassName('dot')[0];
		if (localStorage.getItem('btcPrice') === null) {
			localStorage.setItem('btcPrice', btcPrice);
		} else if (btcPrice > localStorage.getItem('btcPrice')) {
			dot.style.backgroundColor = 'green';
			localStorage.setItem('btcPrice', btcPrice);
		} else if (btcPrice < localStorage.getItem('btcPrice')) {
			dot.style.backgroundColor = 'red';
			localStorage.setItem('btcPrice', btcPrice);
		} else {
			dot.style.backgroundColor = 'orange';
		}
		console.log(btcPrice);
	});
});