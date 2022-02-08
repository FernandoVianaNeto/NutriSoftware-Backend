const knex = require('../../database/index.ts');

export {};

interface UserData {
  name: string,
  phone: string,
  password: any,
  email: string
}

class UserRepository {
  async findAll() {
    const rows = await knex('users');

    return rows;
  }

  async findUserByEmail(email: string) {
    const [row] = await knex('users').where('email', email);

    return row;
  }

  async store({
    name, phone, password, email,
  }: UserData) {
    const [row] = await knex('users').insert({
      name,
      phone,
      password,
      email,
    }).returning('*');

    return row;
  }

  async delete(id: string) {
    await knex('users').where('id', id).del();
  }
}

module.exports = new UserRepository();
