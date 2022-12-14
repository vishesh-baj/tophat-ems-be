const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

// Database
require('./model/database')

// Middlewares
app.use(express.json())
app.use(cors())
dotenv.config()

// Sending API request to the controllers
app.use('/',require('./routes/userRoute'))

// PORT Connectivity
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server started at ${PORT}`))