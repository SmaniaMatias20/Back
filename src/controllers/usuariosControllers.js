const Usuario = require('../models/usuariosModels'); // Asegúrate de que esta ruta coincida con la ubicación de tu modelo

// Crear un nuevo usuario
async function crearUsuario(req, res) {
    try {
        // Imprimir el cuerpo de la solicitud para depuración
        console.log(req.body);

        // Asegurarse de que todos los campos requeridos estén presentes
        const { usuario, rol, password } = req.body;

        if (!usuario || !rol || !password) {
            return res.status(400).json({ mensaje: 'Faltan datos requeridos' });
        }

        // Crear el usuario en la base de datos
        const nuevoUsuario = await Usuario.create({
            usuario,
            rol,
            password
        });

        // Devolver respuesta exitosa
        res.status(201).json({ mensaje: 'Usuario creado exitosamente', nuevoUsuario });
    } catch (error) {
        // Devolver error si ocurre
        res.status(400).json({ mensaje: 'Error al crear el usuario', error: error.message });
    }
}

// Obtener todos los usuarios
async function obtenerUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los usuarios', error: error.message });
    }
}

// Obtener un usuario por ID
async function obtenerUsuarioPorId(req, res) {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el usuario', error: error.message });
    }
}

// Actualizar un usuario
async function actualizarUsuario(req, res) {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        await usuario.update(req.body);
        res.status(200).json({ mensaje: 'Usuario actualizado exitosamente', usuario });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el usuario', error: error.message });
    }
}

// Eliminar un usuario
async function eliminarUsuario(req, res) {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        await usuario.destroy();
        res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: error.message });
    }
}

// Exporta las funciones en el formato solicitado
module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
};

