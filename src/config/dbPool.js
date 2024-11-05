// src/config/dbPool.js
const sql = require('mssql');

let pool;

const initPool = async () => {
    try {
        pool = await sql.connect({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            server: process.env.DB_HOST,
            database: process.env.DB_NAME,
            options: {
                enableArithAbort: true,
            },
        });
        console.log('Pool de conexiones inicializado');
    } catch (err) {
        console.error('Error al inicializar el pool de conexiones:', err);
    }
};

const closePool = async () => {
    if (pool) {
        try {
            await pool.close();
            console.log('Pool de conexiones cerrado');
        } catch (err) {
            console.error('Error al cerrar el pool de conexiones:', err);
        }
    }
};

module.exports = { initPool, closePool };
