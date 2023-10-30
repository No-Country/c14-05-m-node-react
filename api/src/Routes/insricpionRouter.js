// inscripcionRoutes.js
const express = require('express');
const router = express.Router();
const { 
  createInscripcionHandler,
  findInscripcionHandler,
  updateInscripcionHandler,
  deleteInscripcionHandler,
  findAllInscripcionesHandler
} = require('../Handlers/inscripcionHandlers');

router.post('/', createInscripcionHandler);
router.get('/:inscripcionId', findInscripcionHandler);
router.put('/:inscripcionId', updateInscripcionHandler);
router.delete('/:inscripcionId', deleteInscripcionHandler);
router.get('/', findAllInscripcionesHandler);
module.exports = router;
