const Task = require('../models/Task.js')

const getAllTasks =(req,res)=>{
  res.send('all items')
}

const createTask = async(req,res)=>{
  const task = await Task.create(req.body)
  res.status(201).json({task})
}
const getTask = (req,res)=>{
  res.send('get a single task')
}

const updateTask = (req,res)=>{
  res.send('update task')
}

const deleteTask = (req,res)=>{
  res.send('delete task')
}





module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask

}