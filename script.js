const API='https://rickandmortyapi.com/api/';
const allCharacters = "https://rickandmortyapi.com/api/character/";
const allLocations = "https://rickandmortyapi.com/api/location/"
const universePeople = []; // All the available characters in the Rick and Morty universe
const universeLocations = [];
const chooseRickMorty = document.createElement('select');
const denizens = document.createElement('ul');
const locations = document.createElement('ul');
const section = document.querySelector('section');

const morty = "https://rickandmortyapi.com/api/character/"

async function getCharacterData(input){
	const character = {}
	try {
		let {data} = await axios.get(input)
	}
}

async function populatePeople(info){ // Retrieve the data from the API
	let allPeople = []
	try {
		while (info){
			let {data} = await axios.get(info);
			// for (let content of data.results){ 
			// 	const item = document.createElement('li');
			// 	const image = document.createElement('img');
			// 	image.src = content.image;
			// 	item.append(image);
			// 	item.append(`${content.name}`);
			// 	denizens.append(item);
			// }
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
		section.append(locations)
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
		createAvatar(opponent.image)
	})


// populatePeople(allCharacters)
// 	.then(data => {
// 		console.log(`Total # of Inhabitants in Multiverse: ${data.length}`)
// 		universePeople.push(...data)
// 	});

async function apiCall(url, options){}

function generateFixtures(){
	/*
	
	- Create a radio selector for 'Rick' or 'Morty'
	- Create a slider or spinner to choose number of opponents up to 5
	- Create a button that says "Begin Slinging Mud!"
	- Set main play box to show indicators of location
	- Create locations for hero and opponent avatars 

	*/

	const heroSelector = createElement('radio')
	const opponentSelector = createElement('spinner')

	// This button submits the user input and triggers the random selection
	// of location and opponents based on location
	const locationSelector = createElement('button')

}


function generateLocation(locationPool){
	const seed = locationPool.length
	const fightLocation = Math.floor((Math.random() * seed))
	//console.log(locationPool[fightLocation])
	return locationPool[fightLocation]
}

function selectOpponent(location){
	const opponent = Math.floor(Math.random() * location.residents.length)
	console.log(location.residents[opponent])
	return location.residents[opponent]
}

function throwMud(){

}

function registerHit(){

}

function countHits(){
	
}

function createAvatar(ref){
	const charInfo = getCharacter(ref)
	const avatar = document.createElement('div')
	avatar.style.background = url(charInfo.image)
	section.append(avatar)
}

async function getCharacter(id){
	let characterData = {}
	
	try {
		let {data} = await axios.get(id)
		// console.log(JSON.stringify(characterData))
		characterData = data
	} catch (error) {
		console.log(`Error: ${error}`)
	} finally {
		return characterData
	}
}

// createAvatar("https://rickandmortyapi.com/api/location/8")