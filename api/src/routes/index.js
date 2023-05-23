const { Router } = require('express');
const {getAll, getById, create, dbPokemons, getTypes, upload: uploadHandler} = require('../handlers/response.handler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


router.post('/upload', upload.single('file'), uploadHandler);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemon', getAll);
//pokemon?name=venusaur

router.get('/pokemon/:id', getById)

router.get('/pokemondb', dbPokemons)

router.post('/pokemon/new', create)

// router.post('/upload', upload.single('file'), upload);

router.get('/types', getTypes)


module.exports = router;
