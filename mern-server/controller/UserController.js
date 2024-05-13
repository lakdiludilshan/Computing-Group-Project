const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const signUp= async(request,response)=>{
    const {username,email,password} = request.body;
    try {
       const existUser = await UserModel.findOne({email:email});
       if(existUser){
        return response.status(500).json({
            message:"user already exist",
        })
       }else{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        if(hashPassword){
            const newUser = await UserModel.create({
                username,
                email,
                password:hashPassword
            })
            if(newUser){
                return response.status(201).json({
                    message:"user is created",
                    user:newUser
                })
            }else{
                return response.status(400).json({
                    message:"user is not created"
                })
            }
        }else{
            return response.status(500).json({
                message:"passowrd not hashed"
            })
        }
       }
    } catch (error) {
        return response.status(500).json({error:error.message});
    }
}


const signIn = async(request,response)=>{
    const {email,password} = request.body;
    try {
        const findUser = await UserModel.findOne({email});
        if(findUser){
            const verifyUser = await bcrypt.compare(password,findUser.password);
            if(verifyUser){
                const token = await jwt.sign({id:findUser._id,email:findUser.email,password:findUser.password},process.env.SECRET_KEY,{
                    expiresIn:"24h"
                })

                if(token){
                    return response.status(200).json({
                        message:"User is valid and create a token",
                        jwt:token
                    })
                }
            }
        }else{
            return response.status(404).json({
                message:"user not found"
            })
        }
    } catch (error) {
        return response.status(500).json({
            error:error.message
        })
    }
}

const getAllUsers = async(request,response)=>{
    try {
        const findAll = await UserModel.find({}).select("--password");
        if(findAll){
            console.log(findAll)
            return response.status(200).json({
                message:"all users found in db",
                users:findAll
            })
        }else{
            return response.status(404).json({
                message:"no users in db"
            })
        }
    } catch (error) {
        return response.status(404).json({
            message:"error occur",
            error:error.message
        })
    }
}

const updateUser  = async(request,response)=>{
    const {id} = request.params;

    try {
        const updateUser = await UserModel.findByIdAndUpdate(id,request.body);
        if(updateUser){
            return response.status(200).json({
                message:"Users updated successafully",
                user:updateUser
            })
        }else{
            return response.status(500).json({
                message:"user not update"
            })
        }
    } catch (error) {
        console.log(error.message)
        return response.status(404).json({
            message:"error occur",
            error:error.message
        })
    }
}

module.exports = {signUp,signIn,getAllUsers,updateUser};
