const { Router } = require('express');
const {getAll, getById, create, dbPokemons} = require('../handlers/response.handler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemon', getAll);
//pokemon?name=venusaur

router.get('/pokemon/:id', getById)

router.get('/pokemondb', dbPokemons)

router.post('/pokemon/new', create)


module.exports = router;
