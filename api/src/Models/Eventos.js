const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Eventos = sequelize.define(
    "Eventos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
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
      ubicacion: {
        type: DataTypes.TEXT,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      hora: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      costo: {
        type: DataTypes.DECIMAL(10, 2),
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      etiquetas: {
        type: DataTypes.ENUM,
        values: [
          "Teatro",
          "Música",
          "Comida",
          "Moda",
          "Centros Culturales",
          "Otros",
        ],
        allowNull: false,
        defaultValue: "Otros",
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: true }
  );
};
