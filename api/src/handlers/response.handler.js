const getAllPokemons = require('../controllers/getAllPokemons.controller.js')
const getPokemonById = require('../controllers/getById.controller.js')
const {createPokemon, getDbPokemons} = require('../controllers/crud.controller.js')

const getAll = async (req, res, next) => {
    const { name, offset} = req.query;
    try {
      const pokemons = await getAllPokemons(name, offset);
      res.json(pokemons);
    } catch (error) {
      next(error);
    }
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const pokemon = await getPokemonById(id);
      res.json(pokemon);
    } catch (error) {
      next(error);
    }
  };

const dbPokemons = async (req, res, next) => {
  try {
    const dbPokemons = await getDbPokemons()

    res.json(dbPokemons);

  } catch (error) {
    next(error)
  }
}

const create = async(req, res, next) => {
  const { name, image, vida, ataque, defensa, velocidad, altura, peso } = req.body;

  try {
    const createPok = await createPokemon(name, image, vida, ataque, defensa, velocidad, altura, peso)

    res.json(createPok);  
  } catch (error) {
    next(error)
  }
  
}

module.exports = {
    getAll,
    getById,
    dbPokemons,
    create
};