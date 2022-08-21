const RegistrationService = require('../services/registration.service').RegistrationService

class RegistrationController {
    static new(req, res){
        res.render('registrations/new')
    }
    static async save(req, res){
        let response = await new RegistrationService().signUp(req.body)
        if(response){
            res.status(422)
            res.send({ message: 'Something go worng!' })
        }
        res.status(201)
        res.send({ message: 'User account has been created' })
    }
}

module.exports = {
    RegistrationController
}