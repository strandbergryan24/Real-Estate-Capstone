const express = require('express')
const bcrypt = require("bcrypt");
const Users = require('../models/Users');

const login = (req, res) => {
    Users.findOne({ username: req.body.username }).then((foundUser) => {
        if(!foundUser) {
            res.status(400).json({ message: 'cannot find username' });
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                if (
                    req.session.currentUser &&
                    req.session.currentUser._id === foundUser._id
                ) {
                    res.status(200).json({
                        message: "Login Successful",
                        user: { id: foundUser._id, username: foundUser.username },
                    });                    
                } else {
                    req.session.regenerate((err) => {
                        if (err) {
                            res.status(500).json({ message: 'error regenerating login' });
                        } else {
                            req.session.currentUser = {
                                id: foundUser._id,
                                username: foundUser.username,
                              };
                              res.status(200).json({
                                message: 'login Successful',
                                user: { id: foundUser._id, username: foundUser.username },
                              });
                        }
                    });
                }
            } else {
                res.status(400).json({ message: 'passwords do not match' });
            }
        }
    });
};

const logout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).json({ message: "Error destroying the login" });
      } else {
        res.clearCookie('connect.sid');
        res.status(200).json({ message: "login ended successfully" });
      }
    });
  };
  
  module.exports = { login, logout };
  