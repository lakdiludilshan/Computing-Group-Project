const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");

const createUser = async (request, response) => {
  const { username, email, password } = request.body;
  try {
    

      const salt = await bcrypt.genSalt(10);
      const hashedPassword =await bcrypt.hash(password, salt);
      if (hashedPassword) {
        const hashedUser = await UserModel.create({
          username,
          password:hashedPassword,
          email,
        });
        if (hashedUser) {
          return response.status(201).json({
            message: "User created",
            user: hashedUser,
          });
        } else {
          return response.status(500).json({
            mesage: "User is not created",
          });
        }
      } else {
        return response.status(500).json({
          message: "password not hashed",
        });
      }
    
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {createUser};
