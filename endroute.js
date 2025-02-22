const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

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
            <h2>Bienvenido a la ruta final</h2>
        </body>
        </html>
    `)
})


module.export = router;