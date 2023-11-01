const { DataTypes } = require("sequelize");

 module.exports = (sequelize) => {
   const Inscripcion = sequelize.define("Inscripcion", {
     id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
     },
     estaInscripto: {
       type: DataTypes.BOOLEAN,
       defaultValue: false,
     },
     isActive: {
       type: DataTypes.BOOLEAN,
       defaultValue: true,
     },
   },
   { timestamps: true }
   );
  
 };


