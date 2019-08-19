const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEditEventDetailsInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.description = !isEmpty(data.description) ? data.description : '';

    if(!Validator.isLength(data.name, { min: 1, max: 100 })) {
        errors.name = 'Name must be between 1 and 100 characters';
    }

    if(!Validator.isLength(data.description, { min: 1, max: 1000 })) {
        errors.description = 'Description must be between 1 and 1000 characters';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};