'use strict'

class AuthController {

  * login(request, response) {
    const User = use('App/Model/User')

    var username = request.input('username')
    var password = request.input('password')

    const activeUsers = yield User.findBy('username', username)
    
    response.json(activeUsers)
  }

}

module.exports = AuthController
