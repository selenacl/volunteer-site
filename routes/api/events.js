const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Event = require('../../models/Event');
const User = require('../../models/User');

const validateEventInput = require('../../validation/event');

// @route   POST api/events
// @desc    Create event
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    
    const newEvent = new Event({
        name: req.body.name, 
        description: req.body.description,
        usersInvited: req.body.usersInvited,
        timesAvailable: req.body.timesAvailable,
        creator: req.user.id
    });

    newEvent.save().then(event => res.json(event));
});

// @route   GET api/events
// @desc    Get events
// @access  Public
router.get('/', (req, res) => {
    Event.find()
        .sort({date: -1})
        .then(events => res.json(events))
        .catch(err => res.status(404).json({noeventfound: 'No events found with that id'}));
});

// @route   GET api/events/:id
// @desc    Get event by id
// @access  Public
router.get('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(404).json({noeventfound: 'No event found with that id'}));
});

// @route   DELETE api/events/:id
// @desc    Delete event by id
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findOne({ user: req.user.id })
        .then(user => {
            Event.findById(req.params.id)
                .then(event => {
                    if(event.creator.toString() !== req.user.id) {
                        return res.status(401).json({notauthorized: 'User not authorized'});
                    }

                    event.remove().then(() => res.json({ success: true}))
                })
                .catch(err => res.status(404).json({ eventnotfound: 'No event found'}));
        })
});

module.exports = router;