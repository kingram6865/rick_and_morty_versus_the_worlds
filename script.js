const API='https://rickandmortyapi.com/api/'
const allCharacters = "https://rickandmortyapi.com/api/character/"
const universePeople = [] // All the available characters in the Rick and Morty universe
const universeWorlds = []
const chooseRickMorty = document.createElement('select')

async function populatePeople(info){ // Retrieve the data from the API
	let allPeople = []

	try {
		let characters = await axios.get(info)
			.then((res)=>{
				// console.log(res)
				//res.data.next
				// console.log(res.data.Search)
				for (let i=0; i < res.data.results.length; i++){
					allPeople.push(res.data.results[i])
					console.log(allPeople.length)
					//console.log(res.data.results[i])
				}

				if (res.data.info.next){
					allPeople.push(populatePeople(res.data.info.next))
				}

			})

			return characters		
	} catch (error) {
		console.log(`Error: ${error}`)
	}
	// } finally {
	// 	// console.log(`Finally: ${allPeople.length} charcters retrieved...`)
	// }

	// console.log(`Function End: ${allPeople.length} charcters retrieved...`)
	console.log(characters)
}

populatePeople(allCharacters)


function updateUniverseList(data){
	universePeople.push(data)
	console.log(universePeople.length)
}


async function apiCall(url, options){}