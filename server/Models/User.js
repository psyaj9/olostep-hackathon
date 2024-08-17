const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImagePath: {
            type: String,
            default: ""
        },
        urlList:{
            type: Array,
            default: [],
        },

    },
    {timestamps: true}
)

const User = mongoose.model("User", userSchema)
module.exports = User