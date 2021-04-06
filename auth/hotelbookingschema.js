var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    hotelName: String,
    name: String,
    phone: String,
    status: String,
    date:String
})

mongoose.model('hotelbookings',UserSchema)
module.exports = mongoose.model('hotelbookings')