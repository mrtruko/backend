const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

const app = express();

dbConnection();
app.use(cors());

// Rutas
// app.get('/', (req, res) => {
//     res.json({
//         ok: true,
//         msg: 'Hola mundo'
//     })
// })

app.use('/api/usuarios', require('./src/usuarios/usuarios.routes'));

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});

// qBkifvJVN4eA1wBe
// mean_user