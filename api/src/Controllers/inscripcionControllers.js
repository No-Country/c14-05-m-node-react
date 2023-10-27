const { Inscripcion, User, Eventos } = require("../db");

const createInscripcion = async (req, res) => {
  const { estaInscripto, isActive, userid, eventoid } = req.body;
  try {
    // Buscar el usuario por su ID
    const userFound = await User.findByPk(userid);

    // Verificar si el usuario y el evento existen
    if (userFound) {
      const eventoFound = await Eventos.findByPk(eventoid);
      if (eventoFound) {
        // Crear la inscripción
        const nuevaInscripcion = await Inscripcion.create({
          estaInscripto,
          isActive,
          userid: userFound.id,
          eventoid,
        });

        // Setear las relaciones
        await nuevaInscripcion.setUser(userFound);
        await nuevaInscripcion.setEventos(eventoFound);

        // Enviar la respuesta
        res.status(201).json(nuevaInscripcion);
      } else {
        res.status(404).json({ error: "El evento no fue encontrado" });
      }
    } else {
      res.status(404).json({ error: "El usuario no fue encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createInscripcion,
};
