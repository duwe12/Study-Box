'use strict';
const bcrypt = require("bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      this.belongsTo(models.Turma, { foreignKey: "turma_id" });
      this.hasMany(models.Aula, { foreignKey: "materia_id" });
      this.hasMany(models.Prova, { foreignKey: "materia_id" });
    }

  };
  Materia.init({
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
    icone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia;
};
