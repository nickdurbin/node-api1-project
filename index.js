require('dotenv').config();
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
    .then(data => {
      return res.status(200).json(data)
    })
    .catch(() => {
      return res.status(500).json({
        error: "The users information could not be retrieved."
      })
    })
})

server.get('/api/users/:id', (req, res) => {
  database.findById(req.params.id)
    .then(data => {
      return data 
      ? res.status(200).json(data)
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

// DELETE REQUESTS
server.delete('/api/users/:id', (req, res) => {
  database.findById(req.params.id)
    .then(data => {
      if (!data) {
        res.status(404).json({ message: "The user with the specified ID does not exist."
        })
      } else {
      database.remove(req.params.id)
        .then(i => {
          res.status(200).json(data)
        })
      }
    })
    .catch(() => {
      return res.status(500).json({
        error: "The user could not be removed."
      })
    })
})

// UPDATE REQUESTS
server.put('/api/users/:id', (req, res) => {
  if (!req.body.name || !req.body.bio) {
    return res.status(400).json({
      error: "Please provide name and bio for the user."
    })
  }
  database.findById(req.params.id)
    .then(user => {
      if (user) {
        return database.update(req.params.id, { name: req.body.name, bio: req.body.bio })
      }
      res.status(404).json({
        message: "The user with the specified ID does not exist."
    })
  })
    .then(() => database.findById(req.params.id))
    .then(data => res.status(201).json({ ...data, ...req.body }))
    .catch(err => {
      return res.status(500).json({
        error: "The user information could not be modified."
      })
    })
})

//CREATE REQUESTS
server.post('/api/users', (req, res) => {
  if (!req.body.name || !req.body.bio) {
    return res.status(400).json({
      error: "Please provide name and bio of the user."
    })
  }
  
  database.insert(req.body)
    .then(data => {
      return res.status(201).json({ ...data, ...req.body })
    })
    .catch(() => {
      return res.status(500).json({
        error: "There was an error while saving the user to the database."
      })
    })
})

const port = process.env.PORT || 8080
const host = "127.0.0.1" // another way to say "localhost"

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`)
})