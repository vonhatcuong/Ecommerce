// import app from './src/app.js'
const app = require("./src/app")
const PORT =  process.env.PORT || 3035

const server =app.listen(PORT, ()=>{
        console.log(`Server listen on ${PORT}`)

})

process.on('SIGINT', ()=>{
    server.close(()=>console.log(`Exit server Express`))
})