const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()

app.use(cors())

const users = [
    {"id": 1, "name": "John", "age": 20},
    {"id": 2, "name": "Mary", "age": 18},
    {"id": 3, "name": "Peter", "age": 29},

]


app.get('/', (req, res) => {
    res.send("Public content")
})

app.get('/users', (req, res) => {
    res.json(users)
})

const port = process.env.PORT
app.listen(port)