const express = require('express')
const app = express()
const http = require('http')
const expressServer = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(expressServer)

io.on('connection', (socket)=>{

 console.log("New User connected");
 io.sockets.emit('MyBroadCast',"Hi Everyone!" )
})




app.get('/', (req,res)=>{
 res.sendFile(__dirname+'/broadcasting.html')

})

expressServer.listen(3000, ()=>{
 console.log('Server running at 3000');
})