const express = require('express')
const tasks = require('./routes/tasks')
const app= express();
const port =3000


app.use(express.json())
app.use('/api/v1/tasks',tasks)

app.get('/hello',(req,res)=>{
  res.send('Task manager app')
})




app.listen(port,()=>{
  console.log(`server start listening on port ${port}...`)
})
console.log('task manager')