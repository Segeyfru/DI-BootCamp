function refresh(e){
    e.preventDefault();
    getCharacter()

}

const getCharacter = async () => {
    let randomCharacter = Math.floor(Math.random() * 83)
    const url = `https://www.swapi.tech/api/people/${randomCharacter}`
    let div = document.getElementById('container')
    let divWait = document.getElementById('containerWait')

    divWait.style.display ='flex'
    div.style.display ='none'
    try{
        const resp = await fetch(url);
        const obj =await resp.json();
        const character = await obj.result.properties
        const respPlanet = await fetch(character.homeworld)
        const objPlanet =await respPlanet.json()
        const planetName = objPlanet.result.properties.name
        
        div.innerHTML = `
        <h2 id="name">${character.name}</h2>
        <p>Height: ${character.height}</p>
        <p>Gender: ${character.gender}</p>
        <p>Birth Year: ${character.birth_year}</p>
        <p>Home World: ${planetName}</p>`
        div.style.display = 'flex'
        divWait.style.display = 'none'


    }catch(err){
        console.log('ERROR --> ',err);
        div.innerHTML = 'Oh NO! That person isnt available.'
    }


}
getCharacter()