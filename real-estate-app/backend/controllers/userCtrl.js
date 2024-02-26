const bcrypt = require('bcrypt');
const express = require('express');
const db = require('../models');

const createUser = (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    db.Users.create(req.body).then((createdUser) => {
        if(!createdUser) {
            res.status(400).json({message: "Cannot Create New User"})
        } else {
            res.status(200).json({
                message: "User Added Successfully"
            })
        }
    })
}

module.exports = createUser