const axios = require('axios');
const { Pokemon } = require('../db.js')

const getAllPokemons = async (name, offset) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`);
  const pokemons = response.data.results;

  const apiPokemons = await Promise.all(
    pokemons.map(async (pokemon) => {
      const pokemonResponse = await axios.get(pokemon.url);
      const pokemonData = pokemonResponse.data;
      return {
        id: pokemonData.id,
        image: pokemonData.sprites.other['official-artwork'].front_default,
        name: pokemonData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types.map(typeObj => typeObj.type.name)
        //debo iterar aqui pq el pokemon puede tener mas de de un typo, en cambio imagen no 
      };
    })
  );

  const dbPokemons = await Pokemon.findAll();

  const allPokemons = [...apiPokemons, ...dbPokemons];

//   allPokemons.sort((a, b) => a.name.localeCompare(b.name));
  if (name) {
    const pokemonFilter = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    if (pokemonFilter.length > 0) {
      return { pokemons: pokemonFilter };
    }
  } else {
    return { pokemons: allPokemons };
  }
};

module.exports = getAllPokemons;