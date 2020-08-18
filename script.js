const API='https://rickandmortyapi.com/api/';
const allCharacters = "https://rickandmortyapi.com/api/character/";
const allLocations = "https://rickandmortyapi.com/api/location/"
const universePeople = []; // All the available characters in the Rick and Morty universe
const universeLocations = [];
const chooseRickMorty = document.createElement('select');
const section = document.querySelector('section');



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

async function populateLocations(info){
	let allLocations = []

	try {
		while (info){
			let {data} = await axios.get(info)
			allLocations.push(...data.results)
			info = data.info.next
		}
	} catch (error) {
		console.log(`Error: ${error}`)
	} finally {
		//section.append(locations)
		return allLocations
	}
}

populateLocations(allLocations)
	.then(data => {
		console.log(`Total # of Locations in Multiverse: ${data.length}`)
		universeLocations.push(...data)
		const fightLocation = generateLocation(universeLocations)
		//console.log(JSON.stringify(fightLocation))
		const opponent = selectOpponent(fightLocation)
		console.log(JSON.stringify(opponent,null,2))
		// createAvatar(opponent)
	})


populatePeople(allCharacters)
	.then(data => {
		console.log(`Total # of Inhabitants in Multiverse: ${data.length}`)
		universePeople.push(...data)
		createElement('div')

	});

async function apiCall(url, options){}

function generateFixtures(destination1, destination2){
	/*
	
	- Create a select element to choose a character to view
	- Create left and right arrows for navigating between dossiers.

	*/

	const characterSelector = document.createElement('select')
	const displayBox = document.createElement('div')
	const leftButton = document.createElement('button')
	const rightButton = document.createElement('button')

	characterSelector.className = 'characters'
	displayBox.className = 'chacracter-info'
	leftButton.className = 'left'
	rightButton.className = 'right'

}


function generateLocation(locationPool){
	const seed = locationPool.length
	const fightLocation = Math.floor((Math.random() * seed))
	//console.log(locationPool[fightLocation])
	return locationPool[fightLocation]
}

function selectOpponent(location){
	const opponent = Math.floor(Math.random() * location.residents.length)
	//console.log(location.residents[opponent])
	return location.residents[opponent]
}

function createAvatar(ref){
	const charInfo = getCharacter(ref)
	const avatar = document.createElement('div')
	avatar.style.background = `url('${charInfo.image}')`
	section.append(avatar)
}

async function getCharacter(url){
	let characterData = {}
	
	try {
		let {data} = await axios.get(url)
		// console.log(JSON.stringify(characterData))
		characterData = data
	} catch (error) {
		console.log(`Error: ${error}`)
	} finally {
		return characterData
	}
}

// createAvatar("https://rickandmortyapi.com/api/location/8")