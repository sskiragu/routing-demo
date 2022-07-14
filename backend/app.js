import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import database from './config/database.js'
import UserRoutes from './routes/UserRoutes.js'
const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

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

app.use('/api', UserRoutes);

database.sync()

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})