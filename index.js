

for(let i = 1; i <= 150; i++){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    fetch(url)
        .then(Response => Response.json())
        .then(pokemon => {
            console.log(pokemon)
        })
}
