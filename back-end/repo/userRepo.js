const instance = require('../db/knexfile');
class UserRepo {
    knex = null
    constructor() {
        this.knex = instance;
    }

  // Create a new user record
  async createUser(user) {
    return await this.knex('user').insert(user);
  }

  // Read a user record by ID
  async getUserById(id) {
    return await this.knex('user').where({ id }).first();
  }

  // Update a user record by ID
  async updateUser(id, updates) {
    return await this.knex('user').where({ id }).update(updates);
  }

  // Delete a user record by ID
  async deleteUser(id) {
    return await this.knex('user').where({ id }).del();
  }

  async getUserByEmail(email) {
    return await this.knex('user').where({ email}).first()
  }
}
module.exports = UserRepo;
