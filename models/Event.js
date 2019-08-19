const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    usersInvited: {
        type: Array,
        default: []
    },
    usersRegistered: {
        type: Array,
        default: []
    },
    created: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    },
    timesAvailable: [
        {
            date: {
                type: Date,
                required: true
            },
            startTime: {
                type: String,
                required: true
            }, 
            endTime: {
                type: String,
                required: true
            },
            maxRegistrations: {
                type: Number,
                required: true
            }, 
            usersRegistered: {
                type: Array,
                default: []
            }, 
            option: {
                type: Number
            }
        }
    ]
});

module.exports = Event = mongoose.model('event', EventSchema);