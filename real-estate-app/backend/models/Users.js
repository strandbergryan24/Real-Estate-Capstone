const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    listings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listings"
    }]
})

const Users = mongoose.model('Users', UserSchema)

module.exports = Users;
