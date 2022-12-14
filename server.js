const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

// Middlewares
app.use(express.json())
app.use(cors())
dotenv.config()

// Database
require('./model/database')

// Sending API request to the controllers
app.use('/',require('./routes/userRoute'))
app.use('/dashboard',require('./routes/employeeRoute'))

// PORT Connectivity
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server started at ${PORT}`))