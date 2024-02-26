const { error } = require('console')
const mongoose = require('mongoose')
const {MONGOURL} = process.env

mongoose.connect(MONGOURL+"realEstateListing", {
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