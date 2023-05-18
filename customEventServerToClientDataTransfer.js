
const express = require('express')
const app = express()
const http = require('http')
const expressServer = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(expressServer)



io.on('connection' , (socket)=>{
 console.log("User connected");

 setInterval(()=>{
  let date = new Date()
  let time = date.getTime()
  socket.emit('MyEvent', time)
 })
})




app.get('/', (req,res)=>{
 res.sendFile(__dirname + '/customEventServerToClientDataTransfer.html')
})

expressServer.listen(3000, ()=> {
 console.log('Servere listening at 3000');
})