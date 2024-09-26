const Task = require("../models/taskModel");

exports.getTaskList =  async (req,res,next) => {
    try{
        const taskList = await Task.find();
        res.status(200).json({
            status: "success",
            count: taskList.length,
            data:{
                taskList
            }
        })
    } catch(error){
        res.status(400).json({
            status: "failed",
            message: "Failed to get task list"
        })

    }
}

exports.createTask = async (req,res,next) => {
    try{
        const tasks = await Task.create(req.body);
        res.status(200).json({
            status: "success",
            data:{
                tasks
            }
        })
    } catch(error){
        res.status(400).json({
            status: "failed",
            message: "Failed to creste task"
        })

    }
}


exports.getOneTask =  async (req,res,next) => {
    try{
        const taskList = await Task.findById(req.param.id);
        res.status(200).json({
            status: "success",
            count: taskList.length,
            data:{
                taskList
            }
        })
    } catch(error){
        res.status(400).json({
            status: "failed",
            message: "Failed to get one task"
        })

    }
}