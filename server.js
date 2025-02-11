const express = require('express')
const cors = require('cors')
const user = require('./routes/user')
require('dotenv').config()
require('./db/db.js')


const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())


const port = process.env.PORT || 2000;

app.use('/user', user);

app.listen(port, ()=>{
    console.log(`Server up at port ${port}`)
})