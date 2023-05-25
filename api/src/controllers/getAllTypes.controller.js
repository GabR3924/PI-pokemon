const axios = require('axios');
const { Types } = require('../db.js');

const getAllTypes = async () => {
  const apiResponse = await axios.get('https://pokeapi.co/api/v2/type');
  const apiData = apiResponse.data.results;
  const types = apiData.map(type => ({ name: type.name }));
  await Types.bulkCreate(types);

  const typesPokemon = await Types.findAll();
  // console.log("getall=", typesPokemon)
  return {types: typesPokemon}

}

module.exports= getAllTypes;