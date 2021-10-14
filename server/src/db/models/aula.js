'use strict';
const bcrypt = require("bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aula extends Model {
    static associate(models) {
      this.belongsTo(models.Materia, { foreignKey: "materia_id" });
    }

  };
  Aula.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    descricao: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Aula',
  });
  return Aula;
};
