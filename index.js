const express = require('express')
const cors = require('cors')
const database = require('./data/db')
const server = express()

server.use(express.json())
server.use(cors())

// GET REQUESTS
server.get('/', (req, res) => {
  res.send('Hello from Express')
})

server.get('/api/users', (req, res) => {
  database.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(() => {
      return res.status(500).json({
        error: "The users information could not be retrieved."
      })
    })
})

server.get('/api/users/:id', (req, res) => {
  database.findById(req.params.id)
    .then(user => {
      return user 
      ? res.status(200).json(user)
      : res.status(404).json({
        message: "The user with the specified ID does not exist."
      })
    })
    .catch(() => {
      return res.status(500).json({
        error: "The user information could not be retrieved."
      })
    })
})

// DELTE REQUESTS
server.delete('/api/users/:id', (req, res) => {
  database.remove(req.params.id)
    .then(user => {
      return user !== 0
        ? res.status(200).json({ message: "Success!" })
        : res.status(404).json({
          message: "The user with the specified ID does not exist."
        })
      })
    .catch(() => {
      return res.status(500).json({
        error: "The user could not be removed."
      })
    })
})

// UPDATE REQUESTS
server.put('/api/users/:id', (req, res) => {
  database.findById(req.params.id)
    .then(user => {
      return user
      ? res.status(200).json(user)
      : res.status(404).json({
        message: "The user with the specified ID does not exist."
      })
    })
    .catch(() => {
      return res.status(500).json({
        error: "You had one job to do and failed."
      })
    })
})

//CREATE REQUESTS
server.get('/api/users', (req, res) => {
  database.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(() => {
      return res.status(500).json({
        error: "You had one job to do and failed."
      })
    })
})

server.listen(5000, () => {
  console.log('Server running on http://localhost:5000')
})