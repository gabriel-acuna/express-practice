const User = require('../models').User

class RegistrationService {

    async signUp(user) {
        try {
            let userModel = User.build({
                id: user.id,
                email: user.email,
                password: user.password
            })
            await userModel.save()
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}

module.exports = {
    RegistrationService
}