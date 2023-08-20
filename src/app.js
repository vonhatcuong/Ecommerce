// import express from 'express'
const express  = require("express")
const morgan = require("morgan")
const {default: helmet} = require("helmet")
const compression = require("compression")

const app = express()

//  init middle         
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())


// init db
require('./dbs/init.mongodb')
//  init routes

// init handel error

app.get('/', (req,res,next)=>{

    const strCompress = 'Hello, world'
    return res.status(200).json({messange: "oke", metadata: strCompress.repeat(1000000)})
})
module.exports = app