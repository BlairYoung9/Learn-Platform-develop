const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be 2 chars long"]
    },
    password:{
        type: [String]
    }
}, {timestamps: true})

const User = mongoose.model("User", UserSchema)
module.exports = User;