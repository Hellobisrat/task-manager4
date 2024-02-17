
const express = require('express')
const tasks = require('./routes/tasks')
 const connectDB=require('./db/connect')
 require('dotenv').config()

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const app= express();


app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const port =3000
app.get('/hello',(req,res)=>{
  res.send('Task manager app')
})

const start = async()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
     console.log(`server start listening on port ${port}...`)
})
  } catch (error) {
    console.log(error)
  }
}
 start()




console.log('task manager')