const express = require('express')
const cors = require('cors')
const env = require('dotenv').config();
const mongoose = require('mongoose')
const BookModel=require('./book.model')
const bookRouter= require('./routes/books')

const app=express()
app.use(cors())
app.use(express.json())
const uri=process.env.ATLAS_URI;
const PORT=process.env.PORT || 5000

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongo database connection established successfully");
})
app.use('/books',bookRouter)
app.listen(PORT,()=>{
    console.log(`Server running on Port: ${PORT}`)
})


