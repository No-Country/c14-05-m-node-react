const{ createInscripcion} = require("../Controllers/inscripcionControllers")

const createInscripcionHandler = async (req, res) => {
    try {
      const { estaInscripto,
         isActive,
          userid, 
          eventoid } = req.body;
      const nuevaInscripcion = await createInscripcion(
        estaInscripto,
        isActive,
        userid,
        eventoid
      );
      if (!nuevaInscripcion)
        return res
          .status(409)
          .json({ msg: `No se pudo completar la inscripción` });
      res.status(201).json(nuevaInscripcion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    createInscripcionHandler,
  };
  
