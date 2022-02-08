const UserRepository = require('../repositories/UserRepository.ts');

export {};

class UserController {
  async index(request: any, response: any) {
    const users = await UserRepository.findAll();

    response.json(users);
  }

  async create(request: any, response: any) {
    const {
      name, email, phone, password,
    } = request.body;

    const userExists = await UserRepository.findUserByEmail(email);

    if (userExists) {
      return response.sendStatus(400).json({ error: 'This email has already been registered' });
    }

    const userCreated = await UserRepository.store({
      name, email, phone, password,
    });

    return response.json(userCreated);
  }

  async delete(request: any, response: any) {
    const { id } = request.params;

    await UserRepository.delete(id);

    response.sendStatus(200);
  }
}

module.exports = new UserController();
