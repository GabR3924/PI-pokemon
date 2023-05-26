const { Pokemon, Types } = require("../db.js");
const AWS = require("aws-sdk");
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION, BUCKET_NAME } = process.env;
const fs = require("fs");
const util = require("util");

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION,
});

const readFile = util.promisify(fs.readFile);

const uploadFile = async (file) => {
  const fileContent = await readFile(file.path);
  const params = {
    Bucket: BUCKET_NAME,
    Key: file.originalname,
    Body: fileContent,
  };
  try {
    const data = await new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    console.log("Archivo subido con éxito:", data.Location);
    return { imageUrl: data.Location };
  } catch (err) {
    console.log("Error al subir el archivo:", err);
    throw err;
  }
};


const getDbPokemons = async () => {
  const pokemons = await Pokemon.findAll();
  // console.log('idPOkemon=', pokemons)
  return { data: pokemons };
};

const createPokemon = async (
  name,
  image,
  vida,
  ataque,
  defensa,
  velocidad,
  altura,
  peso
) => {
  const newPokemon = await Pokemon.create({
    name,
    image,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  });
  return { data: newPokemon };
};

const deletePokemon = async (id) => {
  
     await Pokemon.destroy({
      where: { id }
    });
    return { message: 'Pokemon deleted successfully' };
  
};

const updatePokemon = async (id, updates) => {
 
    const [updatedRowsCount, updatedRows] = await Pokemon.update(updates, {
      where: { id },
      returning: true
    });
    if (updatedRowsCount === 0) {
      return { message: 'No Pokemon found with the given id' };
    }
    return { data: updatedRows[0] };
};


module.exports = {
  getDbPokemons,
  createPokemon,
  uploadFile,
  deletePokemon,
  updatePokemon
};
