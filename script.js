const API='https://rickandmortyapi.com/api/';
const allCharacters = "https://rickandmortyapi.com/api/character/";
const universePeople = []; // All the available characters in the Rick and Morty universe
const universeWorlds = [];
const chooseRickMorty = document.createElement('select');
const denizens = document.createElement('ul');
const section = document.querySelector('section');

const morty = "https://rickandmortyapi.com/api/character/"







async function populatePeople(info){ // Retrieve the data from the API
	let allPeople = []
	try {
		while (info){
			let {data} = await axios.get(info);
			for (let content of data.results){ 
				const item = document.createElement('li');
				const image = document.createElement('img');
				image.src = content.image;
				item.append(image);
				item.append(`${content.name}`);
				denizens.append(item);
			}
			allPeople.push(...data.results);
			info = data.info.next;
		}
	} catch (error) {
		console.log(`Error: ${error}`);
	} finally {
		section.append(denizens);
		return allPeople;
	}
}

populatePeople(allCharacters)
	.then(data => {
		console.log(`Final data length: ${data.length}`)
		universePeople.push(...data)
	});

async function apiCall(url, options){}