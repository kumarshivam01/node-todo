const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000


// Database Connection
mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log(err)
    console.log('Error connecting to MongoDB')
})

// middleware
app.use(bodyParser.json())

// task routes
app.use('/api/v1', require('./routes/taskRoutes'));


// server
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})