(function() {
	'use strict';
	const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
	const cities = [];
	fetch(endpoint)
	.then(blob =>blob.json())
	.then(data => cities.push(...data))
	console.log(cities)

	function findMatches(wordToMatch,cities) {
		return cities.filter(place => {
			const regex = new RegExp(wordToMatch, 'gi')
			return place.city.match(regex) || place.state.match(regex)

		})
	}

	function displayMatches() {		
		const sorted = findMatches(this.value , cities);
		const html = sorted.map(place =>{
			const regex = new RegExp(this.value , 'ig')
			const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
			const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
			
			return ` 
			<li>
			<span>${cityName} , ${stateName}</span>
			<span>${place.population}</span>
			</li> `
		}).join(' ');
		sort.innerHTML= html
	}

	const search = document.querySelector("input");
	const sort = document.querySelector(".sorted");
	search.addEventListener('change', displayMatches);	
	search.addEventListener('keyup', displayMatches);
	
	
	


}())