const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config') 

const app = express();

dbConnection();


// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
})

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});

// qBkifvJVN4eA1wBe
// mean_user