
    async function fetchPokemonData(pokemonName) {
      const response = await fetch(`htpps://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonData = await response.json();
      return pokemonData;
    }

    document.addEventListener('DOMcontentLoaded', async () =>{
      const pikachuData = await fetchPokemonData('pikachu');
      const pokemonInfoElement = document.getElementById('pokemon-info');
      
      pokemonInfoElement.innerHTML = `
      <h2>${pikachuData.name}</h2>
      <img src="${pikachuData.sprites.front_default}">
      <h3>abilities:</h3>

      <ul>
          ${pikachuData.abilities.map(ability=>`<li>&{ability.ability.name}</li>`).join('')}
      </ul>
      <h3>Base Experience:</h3>
      <p>${pikachuData.base_experience}</p>
    `;
    } )

    //Displaying Pikachu data
