const { error } = require('console');
const mongoose = require('mongoose');
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