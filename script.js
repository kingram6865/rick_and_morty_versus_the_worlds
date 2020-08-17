const API='https://rickandmortyapi.com/api/'
const allCharacters = "https://rickandmortyapi.com/api/character/"
const universePeople = [] // All the available characters in the Rick and Morty universe
const universeWorlds = []


async function populatePeople(info){ // Retrieve the data from the API
	try {
		let characters = await axios.get(info)
			.then((res)=>{
				console.log(res)
				//res.data.next
				console.log(res.data.Search)
				if (res.data.info.next){
					populatePeople(res.data.info.next)
				}
				
				for (let i=0; i < res.data.results.length; i++){
					universePeople.push(res.data.results[i])
					//console.log(res.data.results[i])
				}

				console.log(`${universePeople.length} charcters retrieved...`)
			})		
	} catch (error) {
		console.log(`Error: ${error}`)
	}

}

populatePeople(allCharacters)

async function apiCall(url, options){}