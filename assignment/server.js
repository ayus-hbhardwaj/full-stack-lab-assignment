const express = require("express");
const mongoose = require("mongoose");
const app= express();

const taskRoutes= require("./routes/taskRoutes");
const userRoutes= require("./routes/userRoutes");

const{MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD} = require("./config/config");
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose.connect(
    // "mongodb://root:root@172.18.0.2:27017/?authSource=admin")
    MONGO_URL)
    .then(()=>{
        console.log("Successfully connected to MongoDB");
    })
    .catch((err)=>{
        console.log("Error while trying to connect MongoDB :",err);
    })

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>Hello World using Express and Docker...!!!</h1>");
});

app.use("/api/v1/tasks",taskRoutes);
app.use("/api/v1/users",userRoutes);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server Started at PORT : ${PORT}`);

});