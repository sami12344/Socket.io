const express = require('express')
const app = express()
const http = require('http')
const expressServer = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(expressServer)

let buyNsp = io.of("/buy")
let sellNsp = io.of("/sell")

buyNsp.on('connection', (socket)=>{
 console.log("New User Connected in Buy Namespace");
 socket.emit('MyEvent', 'hello buy')
})

sellNsp.on('connection', (socket)=>{
 console.log("New user connected in Sell Namespace");
 socket.emit('MyEvent', 'hello sell' )
})


app.get('/', (req,res)=>[
 res.sendFile(__dirname+ '/namespace.html')
])

expressServer.listen(3000,()=>{
 console.log('Server is listening at 3000 port');
})