const mongoose = require("mongoose");


const UserModel = new mongoose.Schema({
    username:{
        type:String,
        requiresd:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});

const user = mongoose.model("users",UserModel);

module.exports= user;