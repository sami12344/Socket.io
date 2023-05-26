const express = require('express')
const app = express()
const http = require('http')
const expressServer = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(expressServer)

io.on('connection', (socket)=> {
 console.log('New User connected');
 socket.on('message',(msg)=>{
  console.log(msg);
 })
})

app.get('/', (req,res)=>{
 res.sendFile(__dirname+'/clientToServerDataTransfer.html')

})
expressServer.listen(3000, ()=>{
 console.log('server listening at 3000');
})