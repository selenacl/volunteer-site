const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    //data.timesAvailable.date = !isEmpty(data.timesAvailable.date) ? data.timesAvailable.date : '';
    //data.timesAvailable.startTime = !isEmpty(data.timesAvailable.startTime) ? data.timesAvailable.startTime : '';
    //data.timesAvailable.endTime = !isEmpty(data.timesAvailable.endTime) ? data.timesAvailable.endTime : '';
    //data.timesAvailable.maxRegistrations = !isEmpty(data.timesAvailable.maxRegistrations) ? data.timesAvailable.maxRegistrations : '';

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if(!Validator.isLength(data.name, { min: 1, max: 100 })) {
        errors.name = 'Name must be between 1 and 100 characters';
    }

    if(!Validator.isLength(data.description, { min: 1, max: 1000 })) {
        errors.description = 'Description must be between 1 and 1000 characters';
    }

    if(Validator.isEmpty(data.description)) {
        errors.description = 'Description field is required';
    }

    // if(Validator.isEmpty(data.timesAvailable.date)) {
    //     errors.timeslotDate = 'Time slot date field is required';
    // }

    // if(Validator.isEmpty(data.timesAvailable.startTime)) {
    //     errors.timeslotStartTime = 'Time slot start time field is required';
    // }

    // if(Validator.isEmpty(data.timesAvailable.endTime)) {
    //     errors.timeslotEndTime = 'Time slot end time field is required';
    // }

    // if(Validator.isEmpty(data.timesAvailable.maxRegistrations)) {
    //     errors.timeslotMaxRegistrations = 'Time slot max registrations field is required';
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};