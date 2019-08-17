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

// @route   POST api/events/invites/:id
// @desc    Add additional invitee(s) to event
// @access  Private
router.post('/invites/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    // if user is the creator they can add invitees
    User.findOne({ user: req.user.id })
        .then(user => {
            Event.findById(req.params.id)
                .then(event => {
                    if(event.creator.toString() !== req.user.id) {
                        return res.status(401).json({notauthorized: 'User not authorized'});
                    } 
                    
                    // Check for duplicate invitees
                    const newInvites = new Array();
                    req.body.usersInvited.forEach(userId => {
                        if(!event.usersInvited.includes(userId)) {
                            newInvites.push(userId);
                        }
                    });
                    event.usersInvited.push.apply(event.usersInvited, newInvites);
                    
                    event.save()
                        .then(event => res.json(event))
                        .catch(err => console.log(err));
                    
                })
                .catch(err => res.status(404).json({ eventnotfound: 'No event found'}));
        })
});

// @route   POST api/events/registrations/:id
// @desc    Add registration to event
// @access  Private
router.post('/registrations/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    // if user is on the list of invitees they can register
    User.findOne({ user: req.user.id })
        .then(user => {
            Event.findById(req.params.id)
                .then(event => {
                    if(!event.usersInvited.includes(req.user.id.toString())) {
                        return res.status(401).json({notauthorized: 'User not authorized'});
                    } 

                    // Check if user already registered
                    let alreadyRegistered = false;
                    event.timesAvailable.forEach(time => {
                        if(time.usersRegistered.includes(req.user.id)) {
                            alreadyRegistered = true;
                            return res.status(400).json({ alreadyregistered: 'User already registered for event'})
                        }
                    })

                    if(!alreadyRegistered)
                        event.timesAvailable[req.body.option].usersRegistered.push(req.user.id);
                    
                    event.save()
                        .then(event => res.json(event))
                        .catch(err => console.log(err));
                })
                .catch(err => res.status(404).json({ eventnotfound: 'No event found'}));
        })
});

// @route   PATCH api/events/registrations/:id
// @desc    Edit event registration
// @access  Private
router.patch('/registrations/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    // if user is registered they can edit their registration
    User.findOne({ user: req.user.id })
        .then(user => {
            Event.findById(req.params.id)
                .then(event => {
                    // Check if user already registered
                    let registered = false;
                    event.timesAvailable.forEach(time => {
                        if(time.usersRegistered.includes(req.user.id)) {
                            registered = true;
                            // remove registration
                            time.usersRegistered = time.usersRegistered.filter(x => x !== req.user.id);
                        }
                    })

                    if(!registered)
                        return res.status(401).json({ notregistered: 'User not registered for event'})
                        
                    // add registration
                    event.timesAvailable[req.body.option].usersRegistered.push(req.user.id);
                    
                    event.save()
                        .then(event => res.json(event))
                        .catch(err => console.log(err));
                })
                .catch(err => res.status(404).json({ eventnotfound: 'No event found'}));
        })
});

// @route   DELETE api/events/registration/:id
// @desc    Delete event registration
// @access  Private
router.delete('/registrations/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    // if user is registered they can delete their registration
    User.findOne({ user: req.user.id })
    .then(user => {
        Event.findById(req.params.id)
            .then(event => {
                // Check if user already registered
                let registered = false;
                event.timesAvailable.forEach(time => {
                    if(time.usersRegistered.includes(req.user.id)) {
                        registered = true;
                        // remove registration
                        time.usersRegistered = time.usersRegistered.filter(x => x !== req.user.id);
                    }
                })

                if(!registered)
                    return res.status(401).json({ notregistered: 'User not registered for event'})
                                    
                event.save()
                    .then(event => res.json(event))
                    .catch(err => console.log(err));
            })
            .catch(err => res.status(404).json({ eventnotfound: 'No event found'}));
    })
});

// @route   PATCH api/events/:id
// @desc    Edit event details
// @access  Private
router.patch('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    // if user is the creator they can edit their event details
    User.findOne({ user: req.user.id })
    .then(user => {
        Event.findById(req.params.id)
            .then(event => {
                if(event.creator.toString() !== req.user.id) {
                    return res.status(401).json({notauthorized: 'User not authorized'});
                } 

                const allowedUpdates = ['name', 'description', 'timesAvailable'];
                const updates = Object.keys(req.body);
                const isValidOperation = updates.every(update => allowedUpdates.includes(update));
                
                if(!isValidOperation) {
                    return res.status(400).json({invalidupdates: 'Updates are invalid'});
                }
                
                updates.forEach(update => event[update] = req.body[update]);
                
                event.save()
                    .then(event => res.json(event))
                    .catch(err => console.log(err));
                
            })
            .catch(err => res.status(404).json({ eventnotfound: 'No event found'}));
    })
});

module.exports = router;