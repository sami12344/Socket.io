const express = require('express')
const app = express()
const http = require('http')
const expressServer = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(expressServer)

io.on('connection', (socket) => {
  socket.join('kitchen-room')
  let sizeOfKitchen = io.sockets.adapter.rooms.get('kitchen-room').size

  console.log('New User is connected')

  io.sockets
    .in('kitchen-room')
    .emit('cooking', 'Fried rice is cooking for =' + sizeOfKitchen)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/roomSize.html')
})

expressServer.listen(3000, () => {
  console.log('Server is listening at 3000')
})
