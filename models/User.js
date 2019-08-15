const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    }, 
    lastUpdated: {
        type: Date,
        default: Date.now,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }, 
    createdEvents: {
        type: Array,
        default: []
    },
    registeredEvents: {
        type: Array, 
        default: []
    }

});

module.exports = User = mongoose.model('users', UserSchema);