const axios = require('axios');
const { Pokemon } = require('../db.js')

const getPokemonById = async (id) => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const isValidUuid = uuidRegex.test(id);
  
    if (isValidUuid) {
      const pokemon = await Pokemon.findByPk(id);
      if (pokemon) {
    
        return { data: pokemon };
      } else {
     
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const apiData = response.data;
        if (apiData) {
          
          return { data: apiData };
        } else {
         
          throw new Error("No se encontró el pokemon");
        }
      }
    } else {
     
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const apiData = response.data;
      if (apiData) {
        
        return { data: apiData };
      } else {
        
        throw new Error("No se encontró el pokemon");
      }
    }
  };

module.exports = getPokemonById; 
