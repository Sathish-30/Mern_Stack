const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    email:{
        type: String,
        unique:true,
        default: null,
    },
    password:{
        type: String,
        default: null,
    },
    // For further purpose like authentication
    token:{
        type:String,
        default:null,
    }
})

module.exports =  mongoose.model("user" , usersSchema);