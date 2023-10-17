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
      // id_User: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      //   references: {
      //     model: "User",
      //     key: "id",
      //   },
      // },
      //   id_tipo_evento: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //     references: {
      //       model: "tipos_evento",
      //       key: "id",
      //     },
      //   },
      //   id_ubicacion: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //     references: {
      //       model: "ubicaciones",
      //       key: "id",
      //     },
      //   },
      //   tipo_evento: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      //   },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
