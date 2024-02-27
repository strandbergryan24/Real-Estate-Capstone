const { error } = require('console')
const mongoose = require('mongoose')
const {MONGOURI} = process.env

mongoose.connect(MONGOURI+"realEstateListing", {
    useUnifiedTopology: true,
    useNewurlParse: true
})

mongoose.connection
.on('open',()=>{console.log('Connected')})
.on('close',()=>{console.log('disconected')})
.on('error',(error)=>{console.log(error)})

module.exports={
    Listings: require('./Listings'),
    Users: require('./Users')
}