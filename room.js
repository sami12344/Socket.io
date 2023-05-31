const express = require('express')
const app = express()
const http = require('http')
const expressServer = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(expressServer)

io.on('connection',(socket)=>{
 console.log('New user connected');

 socket.join('kitchen-room')
 io.sockets.in('kitchen-room').emit('cooking', 'Fried Rice Cooking')
 io.sockets.in('kitchen-room').emit('boiling', 'Boiling Water')


 socket.join('bed-room')
 io.sockets.in('bed-room').emit('sleep', "I am sleeping")
 io.sockets.in('bed-room').emit('rest','I am resting')



















})





app.get('/', (req,res)=>{
res.sendFile(__dirname+'/room.html')


})


expressServer.listen(3000, ()=>{
 console.log('Server is listening at 3000')
})