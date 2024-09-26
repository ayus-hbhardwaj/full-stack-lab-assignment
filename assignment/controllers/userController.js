const User = require("../models/userModel");

exports.getUserList = async (req,res,next)=>{
    try{
        const userList = await User.find();
        res.status(200).json({
            status: "success",
            count : userList.length,
            data:{
                userList
            }
        })
    } catch(error){
        res.status(400).json({
            status: "failure",
            message : "Failed to get user list"
        })
    }
}

exports.createUser = async (req,res,next)=>{
    try{
        const users = await User.create(req.body);
        res.status(200).json({
            status: "success",
            data:{
                users
            }
        })
    } catch(error){
        res.status(400).json({
            status: "failed",
            message: "Failed to create user"
        })
    }
}

exports.getOneUser = async (req,res,next)=>{
    try{
        const userList = await User.findById(req.params.id);
        res.status(200).json({
            status: "success",
            count : userList.length,
            data:{
                userList
            }
        })
    } catch(error){
        res.status(400).json({
            status: "failure",
            message : "Failed to get one user"
        })
    }
}