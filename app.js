const express = require('express')
const app = express()
const horaMiddleware = require ('./middlewares/horaMiddleware');
const validarHora = require ('./middlewares/validarHora');
const indexRouter = require ('./routes/index')
const endrouteRouter = require ('./routes/endroute')

//RUTAS

app.use {horaMiddleware};
app.use {'/', indexRouter};
app.use {'/endroute', validarHora};
app.use {'/', endrouteRouter};

//LISTEN

app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto http://localhost:3000');
})
