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
const randomizerLabel = document.createElement('label')
const firstOption = document.createElement('option')
let episodeInfo = {}

characterDropDown.id = "character-list"
characterDropDownLabel.for = characterDropDown.id
firstOption.value = "x"
firstOption.textContent = "Select a Name"
characterDropDown.append(firstOption)
randomizer.textContent = "Randomize!"
randomizerLabel.className = 'option'
randomizerLabel.textContent  = "OR Get a Random Character"
controls.append(characterDropDown)
controls.append(randomizerLabel)
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
}

doIt()

characterDropDown.addEventListener('change', ()=>{
	destination.innerHTML = ""
	characterDropDown.options[0].disabled = true // Option 0 is a placeholder. Causes error if selected
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

async function getEpisodeInfo(url){
	let response = await axios.get(url)
	episodeInfo = response.data
	return episodeInfo
}

function getPerson(id){
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

	for (let i = 1; i < 7; i++){
		let c1 = document.createElement('td')
		let c2 = document.createElement('td')
		let s1 = document.createElement('span')
		s1.className = "data-label"
		let s2 = document.createElement('span')
		s2.className = "data-info"
		p[i] = document.createElement('p')
		s[i] = document.createElement('span')

		/*
			p[i].textContent could also be filled here using Object.keys(character)
			but it will take a little more work to determine how to assign everything 
			in a particular order. For MVP, DRY will be hard to maintain.
		 */
	}


	p[1].textContent = `Dossier ID: ${character.id}`
	p[1].className = 'subject-identifier'
	p[1].classList.add("basic")

	p[2].textContent = `Name: ${character.name}`
	p[2].className = "subject-name"	
	p[2].classList.add("basic")

	if (flag.includes(character.name) && locationNo === 20){
		p[2].classList.toggle("basic")
		p[2].classList.toggle('warning')
	}
	
	p[3].textContent = `Status: ${character.status}`
	p[3].className = "subject-status"
	p[3].classList.add("basic")
	
	p[4].innerText = `Location: `
	p[4].append(link)
	p[4].classList.add("basic")

	p[5].textContent = `Species: ${character.species}`
	p[5].className = "subject-species"
	p[5].classList.add("basic")

	p[6].textContent = `Appearance(s): (${character.episode.length}) `
	p[6].classList.add("basic")

	dossier.append(p[1])
	dossier.append(p[2])
	dossier.append(p[3])
	dossier.append(p[4])
	dossier.append(p[5])
	
	if (character.episode.length > 1){
		for (let j = 0; j < character.episode.length; j++){
			let option = document.createElement('option')
			option.value = j
			option.textContent = character.episode[j]
			appearanceList.append(option)
			p[6].append(appearanceList)
		}
	} else {
		p[6].append(character.episode[0])	
	}
	dossier.append(p[6])
	destination.append(image)
	destination.append(dossier)
}