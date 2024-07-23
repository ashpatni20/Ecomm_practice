const mongoose = require("mongoose");

const address = {
    addressLine1 : {
        type : String,

    },
    city : {
        type:String,
    },
    state : {
        type: String,
    },
    country : {
        type: String,
    },
    pincode : {
        type : String,
    },
    _id : false,

};

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    phoneNo : {
        type : String,
        require : true,
        unique : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true,
    },
    address :{
        type: address,
        require : true,
    }
})

const UserSchema = mongoose.model("users", userSchema);
module.exports = UserSchema;