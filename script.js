const API='https://rickandmortyapi.com/api/'
const allCharacters = "https://rickandmortyapi.com/api/character/"
const allLocations = "https://rickandmortyapi.com/api/location/"
const universePeople = [] // All the available characters in the Rick and Morty universe
const universeLocations = [] // All the locations
const section = document.querySelector('section')
const controls = document.querySelector('.controls')
const characterDropDown = document.createElement('select')
const destination = document.querySelector('.info-area')
const characterDropDownLabel = document.createElement('label')
const randomizer = document.createElement('button')


async function populatePeople(url){ // Retrieve the data from the API
	try {
		let i = 0
		while (url){
			let {data} = await axios.get(url)
			// console.log(data.info.next)
			// console.log(data.results)				
			for (let content of data.results){
				// console.log(content)					
					let item = document.createElement('option')
					item.value = i
					item.innerText = content.name
					characterDropDown.append(item)
					// section.append(obj.name)
				// 	// let image =document.createElement('img')
				// 	// image.src = obj.image
				// 	// section.append(image)
				// })
				// console.log(data)
				i++
			}
			universePeople.push(...data.results)
			url = data.info.next
		}
		controls.append(characterDropDown)
	} catch (error) {
		console.log(`Error: ${error}`)
	} 
}

async function doIt() {
	await populatePeople(allCharacters)
	characterDropDown.id = "character-list"
	characterDropDownLabel.for = characterDropDown.id
	console.log(characterDropDownLabel)//.for = characterDropDown.name
	const firstOption = document.createElement('option')
	firstOption.value = "x"
	firstOption.textContent = "Select a Name"
	characterDropDown.append(firstOption)
	randomizer.textContent = "Show a Random Character"
	controls.append(randomizer)
	// console.log(universePeople)
	// console.log(`Number of people in Rick and Morty Multiverse: ${universePeople.length}`)
	// let rndom = await Math.floor(Math.random() * 52)
	// console.log(`Random Number to select a person: ${rndom}`)
	// console.log(`Person retrieved from random number: ${JSON.stringify(universePeople[rndom])}`)
}

doIt()

characterDropDown.addEventListener('change', ()=>{
	// destination.remove(destination.lastChild)
	// console.log(characterDropDown.options)
	destination.innerHTML = ""
	characterDropDown.options[0].disabled = true // Option 0 is a placeholder. Causes error if selected
	// console.log(`[Listener Report] Dropdown Selector Value: ${characterDropDown.value}`)
	let data = getPerson(characterDropDown.value)
	displayInfo(data)
})

randomizer.addEventListener('click', ()=>{
	destination.innerHTML = ""
	displayInfo(selectRandomCharacter())
})

function selectRandomCharacter(){
	return getPerson(Math.floor(Math.random() * universePeople.length))
}

async function getCharacterDetail(id){
	let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
	console.log(response) 
}

function getPerson(id){
	// console.log(universePeople[id].id, universePeople[id].name, universePeople[id].episode.length)
	return universePeople[id]
}

function displayInfo(character){
	let p = []
	let image = document.createElement('img')
	let dossier = document.createElement('div')
	let link = document.createElement('a')
	let appearanceList = document.createElement('select')
	let index = character.location.url.split("/").length-1
	let locationNo = parseInt(character.location.url.split("/")[index])
	let flag = ['Rick Sanchez', 'Morty Smith']

	for (let i = 1; i < 7; i++){
		p[i] = document.createElement('p')
		/*
			p[i].textContent could also be filled here using Object.keys(character)
			but it will take a little more work to determine how to assign everything 
			in a particular order. For MVP, DRY will be hard to maintain.
		 */
	}
	console.log(destination)
	image.src = character.image
	dossier.className = "dossier"

	link.href = character.location.url
	link.textContent = character.location.name
	link.target = "_blank"

	p[1].textContent = `Dossier ID: ${character.id}`
	p[1].className = 'subject-identifier'
	p[2].textContent = `Name: ${character.name}`
	p[2].className = "subject-name"	
	if (flag.includes(character.name) && locationNo === 20){
		p[2].classList.add('warning')
	}
	
	p[3].textContent = `Status: ${character.status}`
	p[3].className = "subject-status"
	p[4].textContent = `Location: `
	p[5].textContent = `Species: ${character.species}`
	p[5].className = "subject-species"
	p[6].textContent = `Appearance(s): ${character.episode.length}`
	dossier.append(p[1])
	dossier.append(p[2])
	dossier.append(p[3])
	dossier.append(p[4])
	dossier.append(link)
	dossier.append(p[5])
	dossier.append(p[6])
	
	if (character.episode.length > 1){
		for (let j = 0; j < character.episode.length; j++){
			let option = document.createElement('option')
			// The option value should really be the value of the episode number
			// so that a listener on this list will trigger an API call for that
			// episode data. For now that will be a "Post MVP" option.
	
			option.value = j
			option.textContent = character.episode[j]
			appearanceList.append(option)
			dossier.append(appearanceList)
		}
	} else {
		dossier.append(character.episode[0])	
	}

	destination.append(image)
	destination.append(dossier)
}

// async function populateLocations(info){
// 	let allLocations = []

// 	try {
// 		while (info){
// 			let {data} = await axios.get(info)
// 			universeLocations.push(...data.results)
// 			info = data.info.next
// 		}
// 	} catch (error) {
// 		console.log(`Error: ${error}`)
// 	} 
// }

/*
	Only need this to retrieve people by location

 */
// populateLocations(allLocations)
	// .then(d =>{
	// 	console.log(universeLocations.length)
	// })

// 2020 08 17 1400
// Within the script these console.logs don't execute
// but within the browser they show results.
// I'm guessing that is because the async functions are
// complete in the browser, but not here.
// So that leaves the question, "How do I make use of the API results?"

// 2020 08 18 2213
// These two will each produce 0, because the operation that
// fills the array has not completed by the time this instruction
// executes.
// console.log(universePeople.length)  
// console.log(universeLocations.length)

