const { Pokemon } = require('../db.js')

const getDbPokemons = async () => {
    const pokemons = await Pokemon.findAll();

    return { data: pokemons };
}

const createPokemon = async (name, image, vida, ataque, defensa, velocidad, altura, peso) => {
        const newPokemon = await Pokemon.create({
            name, image, vida, ataque, defensa, velocidad, altura, peso
        })
        return { data: newPokemon }
}

module.exports = {
    getDbPokemons,
    createPokemon,

};