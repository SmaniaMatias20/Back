const express = require("express");
const router = express.Router();
const propiedadesControllers = require('../controllers/propiedadesControllers');

// Ruta para crear una nueva propiedad
router.post("/crearPropiedad", propiedadesControllers.crearPropiedad);

// Ruta para listar todas las propiedades
router.get("/obtenerPropiedades", propiedadesControllers.obtenerPropiedades);

// Ruta para obtener una propiedad por ID
router.get("/obtenerPropiedad/:id", propiedadesControllers.obtenerPropiedadPorId);

// Ruta para actualizar una propiedad por ID
router.put("/actualizarPropiedad/:id", propiedadesControllers.actualizarPropiedad);

// Ruta para eliminar una propiedad por ID
router.delete("/eliminarPropiedad/:id", propiedadesControllers.eliminarPropiedad);

module.exports = router;
