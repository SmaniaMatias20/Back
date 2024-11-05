const express = require("express");
const router = express.Router();
const usuariosControllers = require('../controllers/usuariosControllers');

// Ruta para iniciar sesion
router.post("/iniciarSesion", usuariosControllers.iniciarSesion);

// Ruta para crear un nuevo usuario
router.post("/crearUsuario", usuariosControllers.crearUsuario);

// Ruta para listar todos los usuarios
router.get("/obtenerUsuarios", usuariosControllers.obtenerUsuarios);

// Ruta para obtener un usuario por ID
router.get("/obtenerUsuario/:id", usuariosControllers.obtenerUsuarioPorId);

// Ruta para actualizar un usuario por ID
router.put("/actualizarUsuario/:id", usuariosControllers.actualizarUsuario);

// Ruta para eliminar un usuario por ID
router.delete("/eliminarUsuario/:id", usuariosControllers.eliminarUsuario);

module.exports = router;
