const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
//const url = 'mongodb+srv://saketh:saketh@cluster0.07ooxee.mongodb.net/'
const url = 'mongodb+srv://saketh:saketh@cluster0.07ooxee.mongodb.net/'
const app = express()
mongoose.connect(url, )
const con = mongoose.connection
con.on('open', () =>
{
console.log('connected...')
})
app.use(cors()) //app.use is middleware function exectes when gets a request first 

const alienRouter = require('./routes/aliens')
app.use(express.json())
app.use('/aliens',alienRouter)
app.listen(9000, () =>
{
console.log('Server started')
})