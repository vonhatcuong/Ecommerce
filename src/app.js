// import express from 'express'
const express  = require("express")
require("dotenv").config()
const morgan = require("morgan")
const {default: helmet} = require("helmet")
const compression = require("compression")

const app = express()


console.log("Process:",process.env)
//  init middle         
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())


// init db
require('./dbs/init.mongodb')
const{checkOverload} = require('./helpers/check.connect')
checkOverload()
//  init routes

// init handel error

app.get('/', (req,res,next)=>{

    const strCompress = 'Hello, world'
    return res.status(200).json({messange: "oke", metadata: strCompress.repeat(1000000)})
})
module.exports = app