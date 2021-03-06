const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateEditUserInput = require('../../validation/edit-user-details');

const User = require('../../models/User');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
    .then(user => {
        if(user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }
    })
});

// @route   GET api/users/login
// @desc    Login user /  Return JWT Token
// @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if((!user) || (user.active != 1)) {
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = { id: user.id, firstName: user.firstName, lastName: user.lastName }
                        jwt.sign(
                            payload, 
                            keys.secretOrKey, 
                            { expiresIn: 3600 }, 
                            (err, token) => {
                                res.json({
                                    success: true,
                                    user: user.id,
                                    token: 'Bearer ' + token
                                })
                            });
                    } else {
                        errors.password = 'Password incorrect'
                        return res.status(400).json(errors);
                    }
                })
                .catch(err => console.log(err))
        });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email
    });
});

// @route   PATCH api/users/:id
// @desc    Edit user details
// @access  Private
router.patch('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const allowedUpdates = ['email', 'firstName', 'lastName'];
    const updates = Object.keys(req.body);
    const isValidUpdate = updates.every(update => allowedUpdates.includes(update));
    
    if(!isValidUpdate) {
        return res.status(400).json({invalidupdates: 'Updates are invalid'});
    }

    User.findById(req.params.id)
        .then(user => {
            // If an allowedUpdate is not updated leave as is
            allowedUpdates.forEach(update => {
                if(req.body[update] === undefined) {
                    req.body[update] = user[update];
                }
            })

            const { errors, isValid } = validateEditUserInput(req.body);
        
            if(!isValid) {
                return res.status(400).json(errors);
            }
            
            updates.forEach(update => user[update] = req.body[update]);
            
            user.save()
                .then(event => res.json(user))
                .catch(err => console.log(err));
    })
    .catch(err => res.status(404).json({ usernotfound: 'No user found'}));
});

// @route   DELETE api/users/:id
// @desc    Delete (deactivate) user
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.active = false;
            
            user.save()
                .then(event => res.json(user))
                .catch(err => console.log(err));
    })
    .catch(err => res.status(404).json({ usernotfound: 'No user found'}));
});

module.exports = router;