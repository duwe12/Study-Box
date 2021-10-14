'use strict';
const bcrypt = require("bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prova extends Model {
    static associate(models) {
        this.belongsToMany(models.User, { through: "notas", foreignKey: "prova_id" });
        this.belongsTo(models.Materia, { foreignKey: "materia_id" });
    }

  };
  Prova.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Prova',
  });
  return Prova;
};
