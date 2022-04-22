const express = require('express');
const connectDB = require('./db/connect');
const notFound = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const tasks = require('./routes/tasks')

// middeware
app.use(express.static('./public'))
app.use(express.json())
 

//routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`app is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

