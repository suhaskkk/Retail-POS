const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASS = process.env.MONGODB_PASSWORD
const URL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.qizxf3d.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})