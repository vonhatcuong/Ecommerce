'use strict'
const dev ={
    app: {
        port: process.env.DEV_APP_PORT || 3055
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        // port: process.env.DEV_DB_PORT || 27107,
        name: process.env.DEV_APP_NAME|| 'shopDEV'
    }
}

const pro = {
    app:{
        port: process.env.PRO_APP_PORT || 3001
    },
    db:{
        host: process.env.PRO_DB_HOST || 'localhost',
        // port: process.env.PRO_DB_PORT || 27107,
        name: process.env.PRO_DB_NAME || 'shopPRO'
    }
}
const config={dev,pro}
const env = process.env.NODE_EVN || 'dev'

console.log(config[env],env)
module.exports=config[env]