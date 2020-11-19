const mongoose = require("mongoose");
const Jobs = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true
    },
    postedDate: {
        type: Date,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    responsibilities: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    remote: {
        type: Boolean,
        required: true
    },
    streetAddress: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applications'
    }],
}, { versionKey: false })

module.exports = mongoose.model('Jobs', Jobs)
