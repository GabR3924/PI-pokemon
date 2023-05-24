const getAllPokemons = require('../controllers/getAllPokemons.controller.js')
const getPokemonById = require('../controllers/getById.controller.js')
const {createPokemon, getDbPokemons, uploadFile} = require('../controllers/crud.controller.js')
const getAllTypes = require('../controllers/getAllTypes.controller.js')

const getAll = async (req, res, next) => {
    const { name, offset, limit } = req.query;
    console.log(name, offset,limit)
    try {
      const pokemons = await getAllPokemons(name, offset, limit);
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
  const { name, vida, ataque, defensa, velocidad, altura, peso } = req.body;
  const image = req.file.path
  console.log('backIMG=', image)

  try {
    const createPok = await createPokemon(name, image, vida, ataque, defensa, velocidad, altura, peso)

    res.json(createPok);  
  } catch (error) {
    next(error)
  }
  
}

const upload = async (req, res, next) => {
  const file =req.file
  // console.log("img", file)
 try {
  if (!file || !file.path) {
    console.log('No se recibió ningún archivo o el archivo no contiene datos');
    res.status(400).send('No se recibió ningún archivo o el archivo no contiene datos');
    return;
  }
   const response = await uploadFile(file);
  //  console.log('back',response.imageUrl)
  res.json(response.imageUrl);
 } catch (error) {
 next(error);
 }
}

const getTypes = async(req, res, next) => {
  try {
    const types = await getAllTypes()

    res.json(types);

  } catch (error) {
    next(error)
  }
}

module.exports = {
    getAll,
    getById,
    dbPokemons,
    create,
    getTypes,
    upload
};