const API='https://rickandmortyapi.com/api/character/2'
const universePeople = [] // All the available characters in the Rick and Morty universe
const universeWorlds = []


async function populatePeople(){ // Retrieve the data from the API
	const allCharacters = "https://rickandmortyapi.com/api/character/"
	try {
		let characters = await axios.get(allCharacters)
			.then((res)=>{
				console.log(res.data)
				// console.log(res.data.Search)
			})		
	} catch (error) {
		console.log(`Error: ${error`)
	}




}