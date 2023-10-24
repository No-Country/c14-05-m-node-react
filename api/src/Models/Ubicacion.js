const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Ubicacion = sequelize.define("Ubicacion", {
    id_ubicacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado_provincia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo_postal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Ubicacion;
};
