const UserModal = require("../models/users");

const signup = async (req, res)=>{
    console.log(req.body);
    const newUser = await UserModal.create({
       ...req.body
    });
    res.json({
        success: true,
        message : "created sucessfully",
        newUser,
      });
}

const userController = {
    signup,
}
module.exports =  userController;

