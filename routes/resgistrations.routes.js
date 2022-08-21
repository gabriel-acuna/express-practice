const RegistrationController = require('../controllers/registration.controller').RegistrationController

const express = require('express')

let router = express.Router()

router.route('/sign-up')
    .get( RegistrationController.new)
    .post(RegistrationController.save)

module.exports = router