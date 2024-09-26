const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true, "Username is required"]
    },
    email :{
        type : String,
        required :[true,"Email is required"]
    },
    password : {
        type : String,
        required : [true,"Password is required"]
    }
});

userSchema.pre('save', async function (next){
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(error){
        next(error);
    }
})


const User = mongoose.model("User", userSchema);
module.exports = User;