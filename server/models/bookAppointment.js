const mongoose = require("mongoose");

const bookAppointment = new mongoose.Schema({
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
    selectyourproblem: {
        type: String,
        required: true,
        trim: true
    },
})
module.exports = mongoose.model('Book Appointment', bookAppointment);