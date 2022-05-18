//Usando objeto expres
const express = require('express')
//app de Express
const app= express()
//Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000
//path inicial, respodera a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

//Con esto inicializamos la app
app.listen(port, () => {
    console.log(`Example app listen on port ${port}`);
})

//Respondiendo texto
//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})