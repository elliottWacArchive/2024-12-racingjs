document.addEventListener("DOMContentLoaded", function () {
	let input = document.getElementsByTagName('input')[0];
	let button = document.getElementsByTagName('button')[0];
	let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];

	button.addEventListener('click', function () {
		let code = input.value;
		console.log(code);
		const apiUrl = `https://apicarto.ign.fr/api/codes-postaux/communes/${code}`;
		fetch (apiUrl)
		.then (response => {
			if (!response.ok) {
				whiteSpace.innerHTML = `Commune : ${code} non trouvé!`
			}
			return response.json();
		})
		.then (data => {
			if (data.length === 0) {
				whiteSpace.innerHTML = `Commune : ${code} non trouvé!`
			} else {
				data.forEach(item => {
					const communeName = item.nomCommune;
					const libelle = item.libelleAchivement;
	
					whiteSpace.innerHTML = `Commune : ${communeName}<br>Libellé : ${libelle}`;
				});
			}
		});
	});
});