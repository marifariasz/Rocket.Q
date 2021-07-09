const express = require('express')
const route = require('./route')
const path = require('path')

/* iniciando o express e guardando no server*/
const server = express()

server.set('view engine', 'ejs');

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))
server.use(route)
// ouvindo a porta 3000 (localhost)
//.listen precisa de dois argumentos, o primeiro é a porta e o segundo é a rota
server.listen(3000, () => console.log('RODANDO'))


