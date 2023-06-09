const { Router } = require('express');
const {getAll, getById, create, dbPokemons, getTypes, upload: uploadHandler, postPokemonTypes, deleteP, update} = require('../handlers/response.handler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemon', getAll);
//pokemon?name=venusaur

router.get('/pokemon/:id', getById)

router.get('/pokemondb', dbPokemons)

router.post('/pokemon/addtype', postPokemonTypes)

router.post('/pokemon/new', upload.single('image') ,create)

router.delete('/pokemon/:id', deleteP);

router.put('/pokemon/:id', update);

router.post('/upload', upload.single('file'), uploadHandler);

router.get('/types', getTypes)


module.exports = router;
