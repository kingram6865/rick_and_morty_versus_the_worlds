const API='https://rickandmortyapi.com/api/';
const allCharacters = "https://rickandmortyapi.com/api/character/";
const allLocations = "https://rickandmortyapi.com/api/location/"
const universePeople = []; // All the available characters in the Rick and Morty universe
const universeLocations = [];
const denizens = document.createElement('ul');
const section = document.querySelector('section');
const randomizer = document.createElement('button')
const controls = document.querySelector('.controls')
const dataView = document.querySelector('.info-area')

randomizer.textContent = "Push Button to List Some Characters"



// console.log(controls)

async function populatePeople(url){ // Retrieve the data from the API
	try {
		while (url){
			let {data} = await axios.get(url);
			// for (let content of data.results){ 
			// 	const item = document.createElement('li');
			// 	const image = document.createElement('img');
			// 	image.src = content.image;
			// 	item.append(image);
			// 	item.append(`${content.name}`);
			// 	denizens.append(item);
			// }
			universePeople.push(...data.results);
			url = data.info.next;
		}

	} catch (error) {
		console.log(`Error: ${error}`);
	}
	// } finally {
	// 	//section.append(denizens);
	// 	return allPeople;
	// }
}

populatePeople(allCharacters)
	// .then(data => {
	// 	const characters = universePeople.length
	// 	console.log(`Total # of Inhabitants in Multiverse: ${characters}`)
	// 	// universePeople.push(...data)
	// 	console.log(generateRandomCharacters(characters))
	// });

function generateFixtures(data){
	const button = document.createElement('button')
	button.className = randomizer
	const image = document.createElement('image')
}

function generateRandomCharacters(){
	// range is an integer representing the length of the universePeople array
	let choices = []
	for (let i=0; i < 20; i++){
		let random = Math.floor(Math.random() * universePeople.length)
		choices.push(random)
	}

	return choices
}

function displayCharacters(charList, charDomain){
	/*
		Takes an array of numbers representing "id" values 
		for character objects.

		charDomain is the list of all characters
	 */
	
	for (let contents of charList){
		console.log(contents)
	}


}

randomizer.addEventListener('click', ()=>{
	alert("randomizer Ready!")
})

controls.append(randomizer)

console.log(generateRandomCharacters())