const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema9({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listings"
    }]
})

const Users = mongoose.model('Users', UserSchema)

module.exports = Users;
