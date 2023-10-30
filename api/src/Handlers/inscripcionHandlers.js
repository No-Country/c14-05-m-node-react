const { 
  createInscripcion,
  findInscripcionById,
  updateInscripcion,
  deleteInscripcion 
} = require("../Controllers/inscripcionControllers");

const createInscripcionHandler = async (req, res) => {
  try {
    const { estaInscripto, isActive, userid, eventoid } = req.body;
    const nuevaInscripcion = await createInscripcion(
      estaInscripto,
      isActive,
      userid,
      eventoid
    );
    if (!nuevaInscripcion) {
      return res.status(409).json({ msg: `No se pudo completar la inscripción` });
    }
    res.status(201).json(nuevaInscripcion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findInscripcionHandler = async (req, res) => {
  try {
    const { inscripcionId } = req.params;
    const inscripcion = await findInscripcionById(inscripcionId);
    res.status(200).json(inscripcion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateInscripcionHandler = async (req, res) => {
  try {
    const { inscripcionId } = req.params;
    const { estaInscripto, isActive } = req.body;
    const updatedInscripcion = await updateInscripcion(inscripcionId, estaInscripto, isActive);
    if (!updatedInscripcion) {
      return res.status(404).json({ msg: `La inscripción no fue encontrada` });
    }
    res.status(200).json(updatedInscripcion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteInscripcionHandler = async (req, res) => {
  try {
    const { inscripcionId } = req.params;
    const deletedInscripcion = await deleteInscripcion(inscripcionId);
    res.status(200).json({ deletedCount: deletedInscripcion });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createInscripcionHandler,
  findInscripcionHandler,
  updateInscripcionHandler,
  deleteInscripcionHandler,
};

