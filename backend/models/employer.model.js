const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    joinType:{
        type: String,
        required: true,
        enum: ['company', 'recruiter', 'agency']
    }
});

const Employer = mongoose.model('employers', employerSchema);

module.exports = Employer;