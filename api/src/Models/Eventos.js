const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('evento', {
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
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
    id_tipo_evento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_evento', 
        key: 'id',
      },
    },
    id_ubicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ubicaciones',
        key: 'id',
      },
    },
    tipo_evento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, 
    tableName: 'eventos', 
  });
};
