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
      descripcion: {
        type: DataTypes.TEXT,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      hora: {
        type: DataTypes.TIME,
      },
      costo: {
        type: DataTypes.DECIMAL(10, 2),
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
