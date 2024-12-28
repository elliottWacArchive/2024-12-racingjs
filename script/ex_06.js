document.addEventListener("DOMContentLoaded", function (){
	let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
	const apiUrl = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?select=nom_commune%2C%20nom_etablissement%2C%20mail&limit=25';
	fetch(apiUrl)
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	}).then(datas => {
		console.log(datas);
		for (let i = 0; i < 25; i++) {
			whiteSpace.innerHTML += datas.results[i].nom_commune + " " + datas.results[i].nom_etablissement + " " + datas.results[i].mail + "<br>";
		}
	});
});