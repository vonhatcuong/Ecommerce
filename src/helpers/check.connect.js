'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require("process")
const _SECONDS = 50000

const countConnect = ()=>{
    // count connect
  const numberConnection = mongoose.connect.length
  console.log('Number of Connection', numberConnection)
}

// check ooverload
const checkOverload = () =>{
    setInterval(()=>{
        const numberConnection = mongoose.connect.length
        const numberCores = os.cpus.length
        const memoryUsage = process.memoryUsage().rss

        const maxConnections = numberCores *4
        console.log("Active connections:",numberConnection)
        console.log("Memory usage",memoryUsage /1024/1024,"MB")

        if(numberConnection>maxConnections){
            console.log(`Connection  overload detected`)
        }
    },_SECONDS) // Monitor every 5s
}
module.exports= {countConnect,checkOverload}