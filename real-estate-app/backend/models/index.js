const { error } = require('console');
const mongoose = require('mongoose');
require('dotenv').config();
const { MONGOURI } = process.env;

mongoose.connect(MONGOURI)

mongoose.connection
    .on('open', () => {
        console.log('Connected to MongoDB');
    })
    .on('close', () => {
        console.log('Disconnected from MongoDB');
    })
    .on('error', (error) => {
        console.error('MongoDB connection error:', error);
    });

module.exports= {
    Listings: require('./Listings'),
    Users: require('./Users')
}