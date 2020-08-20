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

characterDropDown.id = "character-list"
characterDropDownLabel.for = characterDropDown.id
// console.log(characterDropDownLabel)//.for = characterDropDown.name
const firstOption = document.createElement('option')
firstOption.value = "x"
firstOption.textContent = "Select a Name"
characterDropDown.append(firstOption)
randomizer.textContent = "Show a Random Character"
controls.append(characterDropDown)
controls.append(randomizer)


async function populatePeople(url){ // Retrieve the data from the API
	try {
		let i = 0
		while (url){
			let {data} = await axios.get(url)
			for (let content of data.results){
					let item = document.createElement('option')
					item.value = i
					item.innerText = content.name
					characterDropDown.append(item)
					i++
			}
			universePeople.push(...data.results)
			url = data.info.next
		}
	} catch (error) {
		console.log(`Error: ${error}`)
	} 
}

async function doIt() {
	await populatePeople(allCharacters)
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
	// console.log(response) 
}

function getPerson(id){
	// console.log(universePeople[id].id, universePeople[id].name, universePeople[id].episode.length)
	return universePeople[id]
}

function displayInfo(character){
	let p = []
	let t = []
	let s = []
	let image = document.createElement('img')
	let dossier = document.createElement('div')
	let link = document.createElement('a')
	let appearanceList = document.createElement('select')
	let index = character.location.url.split("/").length-1
	let locationNo = parseInt(character.location.url.split("/")[index])
	let flag = ['Rick Sanchez', 'Morty Smith']
	let dossierContents = document.createElement('table')

	image.src = character.image
	dossier.className = "dossier"

	link.href = character.location.url
	link.textContent = character.location.name
	link.target = "_blank"

// console.log(link)

	for (let i = 1; i < 7; i++){
		let c1 = document.createElement('td')
		let c2 = document.createElement('td')
		let s1 = document.createElement('span')
		s1.className = "data-label"
		let s2 = document.createElement('span')
		s2.className = "data-info"
		p[i] = document.createElement('p')
		s[i] = document.createElement('span')
		// t[i] = document.createElement('tr')

		// switch(i){
		// 	case 1:
		// 		c1.textContent = "Dossier ID:"
		// 		c2.textContent = character.id
		// 		c1.className = 'subject-identifier'
		// 		t[i].append(c1)
		// 		t[i].append(c2)
		// 		dossierContents.append(t[i])
		// 		// console.log(t[i])
		// 		break;
		// 	case 2:
		// 		c1.textContent = "Name: "
		// 		c2.innerHTML = character.name
		// 		c1.className = "subject-name"
		// 		if (flag.includes(character.name) && locationNo === 20){
		// 			c2.classList.add('warning')
		// 		}
		// 		t[i].append(c1)
		// 		t[i].append(c2)
		// 		dossierContents.append(t[i])
		// 		// console.log(t[i])
		// 		break;
		// 	case 3:
		// 		c1.textContent = "Status: "
		// 		c2.textContent = character.status
		// 		c1.className = "subject-status"
		// 		t[i].append(c1)
		// 		t[i].append(c2)
		// 		dossierContents.append(t[i])
		// 		// console.log(t[i])
		// 		break;
		// 	case 4:
		// 		c1.textContent = "Location: "
		// 		c1.className = "subject-lkl"
		// 		console.log(`Case 4 [144]: ${link}`)
		// 		c2.append(link)
		// 		// c2.innerHTML = link
		// 		t[i].append(c1)
		// 		t[i].append(c2)
		// 		dossierContents.append(t[i])
		// 		console.log(`Case 4 [153]: ${t[i].cells}`)
		// 		break;
		// 	case 5:
		// 		c1.textContent = "Species: "
		// 		c2.textContent = character.species
		// 		c1.className = "subject-species"
		// 		t[i].append(c1)
		// 		t[i].append(c2)
		// 		dossierContents.append(t[i])
		// 		// console.log(t[i])
		// 		break;
		// 	case 6:
		// 		// let c3 = document.createElement('td')
		// 		c1.textContent = "Appearance(s)"
		// 		c1.className = "subject-appearance"
		// 		// c2.textContent = character.episode.length
		// 		if (character.episode.length > 1){
		// 			for (let j = 0; j < character.episode.length; j++){
		// 				let option = document.createElement('option')
		// 				// The option value should really be the value of the episode number
		// 				// so that a listener on this list will trigger an API call for that
		// 				// episode data. For now that will be a "Post MVP" option.
				
		// 				option.value = j
		// 				option.textContent = character.episode[j]
		// 				appearanceList.append(option)
		// 				c2.append(appearanceList)
		// 			}
		// 		} else {
		// 			c2.append(character.episode[0])
		// 		}
		// 			t[i].append(c1)
		// 			t[i].append(c2)
		// 			// t[i].append(c3)
		// 			// console.log(t[i])
		// 			dossierContents.append(t[i])
		// 			break;
		// }

		/*
			p[i].textContent could also be filled here using Object.keys(character)
			but it will take a little more work to determine how to assign everything 
			in a particular order. For MVP, DRY will be hard to maintain.
		 */
	}
			// console.log(dossierContents)
			// console.log(t)

	// console.log(destination)

	p[1].textContent = `Dossier ID: ${character.id}`
	p[1].className = 'subject-identifier'
	// s[1].textContent = "Dossier ID: "
	// s[1].className = 'subject-identifier'
	// p[1].append(s[1])
	// p[1].append(character.id)

	p[2].textContent = `Name: ${character.name}`
	p[2].className = "subject-name"	
	if (flag.includes(character.name) && locationNo === 20){
		p[2].classList.add('warning')
	}
	
	p[3].textContent = `Status: ${character.status}`
	p[3].className = "subject-status"
	p[4].innerText = `Location: `
	p[4].append(link)
	p[5].textContent = `Species: ${character.species}`
	p[5].className = "subject-species"
	p[6].textContent = `Appearance(s): (${character.episode.length}) `
	dossier.append(p[1])
	dossier.append(p[2])
	dossier.append(p[3])
	dossier.append(p[4])
	dossier.append(p[5])
	// dossier.append(p[6])
	
	if (character.episode.length > 1){
		for (let j = 0; j < character.episode.length; j++){
			let option = document.createElement('option')
			// The option value should really be the value of the episode number
			// so that a listener on this list will trigger an API call for that
			// episode data. For now that will be a "Post MVP" option.
	
			option.value = j
			option.textContent = character.episode[j]
			appearanceList.append(option)
			p[6].append(appearanceList)
			// dossier.append(appearanceList)
		}
	} else {
		// dossier.append(character.episode[0])	
		p[6].append(character.episode[0])	
	}
	dossier.append(p[6])
	// dossier.append(dossierContents)
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

