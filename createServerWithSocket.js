const { log } = require('console')
const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const expressServer = http.createServer(app)
const io = new Server(expressServer)



io.on('connection', (socket) => {
  console.log('New user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
expressServer.listen(3000, () => console.log('Server run at 3000'))