 const mongoose =require('mongoose')
 const connectionString ="mongodb+srv://zerbisrat:hellop@cluster0.iqbknp4.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"

 const connectDB =(url)=>{
  return  mongoose.connect(connectionString)
 
 }

 module.exports=connectDB;
 
