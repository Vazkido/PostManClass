import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required: true,
        unique: true,
        type: String,
    },
    password
})