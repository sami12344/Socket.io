const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')
const expressServer = http.createServer(app)

const io = new Server(expressServer)

io.on('connection', (socket)=>{
 console.log('user connected');
 setTimeout(() => {
  socket.send('Data transferd from Server to Client')
 }, 10000);
})




app.get('/', (req,res)=>{
 res.sendFile(__dirname + '/index.html')
})
expressServer.listen(3000, ()=> console.log('Server is running at 3000'))