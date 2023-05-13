const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type:DataTypes.STRING,
      allowNull: true
    },
    vida: {
      type:DataTypes.STRING,
      allowNull: true
    },
    ataque: {
      type:DataTypes.STRING,
      allowNull: false
    },
    defensa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    velocidad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  { timestamps: false});
};
