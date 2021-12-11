const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./db/db.js')


const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())


const port = process.env.PORT || 2000

app.listen(port, ()=>{
    console.log(`Server up at port ${port}`)
})