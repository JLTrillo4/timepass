const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours}:${minutes}`;

    req.horaActual = `La hora actual es: ${formattedTime}`;
    next()
    
    console.log('formattetime:', formattedTime);
}

module.exports = horaMiddleware;