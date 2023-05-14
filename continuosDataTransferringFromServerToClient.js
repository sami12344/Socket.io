const express = require('express')
const app = express()
const http = require('http')
const expressServer = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(expressServer)

io.on(
  'connection',
  (socket) => {
    console.log('user connected')
    setInterval(() => {
      let date = new Date()
      let time = date.getTime()
      socket.send(time) 
    })
  },
  10
)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/continuosDataTransferringFromServerToClient.html')
})

expressServer.listen(3000, () => {
  console.log('Server listening at 3000')
})
