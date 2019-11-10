const express = require('express')
const cors = require('cors')
const database = require('./data/db')
const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
  res.send('Hello from Express')
})

server.listen(5000, () => {
  console.log('Server running on http://localhost:5000')
})