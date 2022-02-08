const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/UserRepository.ts');
const authConfig = require('../../config/authConfig.ts');

export {};
class AuthController {
  async login(request: any, response: any) {
    const { email, password } = request.body;

    const user = await UserRepository.findUserByEmail(email);

    if (!user) {
      return response.sendStatus(401).json({ error: 'User not found' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return response.sendStatus(401).json({ error: 'Invalid password' });
    }

    const { id } = user;

    return response.json({
      user,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: 84600,
      }),
    });
  }
}

module.exports = new AuthController();
