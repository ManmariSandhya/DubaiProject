const mongoose = require("mongoose");

const bookItem = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phonenumber: {
        type: String,
        required: true,
        trim: true
    },
    selectyouritem: {
        type: String,
        required: true,
        trim: true
    },
})
module.exports = mongoose.model('Book Item', bookItem);