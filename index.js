const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query);

    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Endroute</title>
        </head>
        <body>
            <h1>Ruta final</h1>
            <h2>${req.horaActual}</h2>
            <button><a href ='/endroute'>Entrar</a></button>
            <h2>${req.require.mensaje ? req.query.mensaje : ''} </h2>

        </body>
        </html>
    `)
})


module.export = router;