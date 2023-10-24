const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      provincia: {
        type: DataTypes.ENUM,
        values: [
          "Buenos Aires",
          "Córdoba",
          "Santa Fe",
          "Mendoza",
          "Tucumán",
          "Entre Ríos",
          "Salta",
          "Misiones",
          "Chaco",
          "Corrientes",
          "Santiago del Estero",
          "San Juan",
          "Jujuy",
          "Río Negro",
          "Neuquén",
          "Formosa",
          "Chubut",
          "San Luis",
          "Catamarca",
          "La Rioja",
          "La Pampa",
          "Santa Cruz",
          "Tierra del Fuego",
        ],
        allowNull: false,
        defaultValue: "Buenos Aires",
      },
      gener: {
        type: DataTypes.ENUM,
        values: ["Hombre", "Mujer", "Otro"],
        allowNull: false,
        defaultValue: "Otro",
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: true }
  );
};
