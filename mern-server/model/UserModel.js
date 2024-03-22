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
        required:true
    }
});

const user = mongoose.model("User",UserModel);

module.exports= user;