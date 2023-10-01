import * as instance from '../db/knexfile';

export class MapRepo {
    knex = null
    constructor() {
        this.knex = instance;
    }

  // Create a new map record
  async createMap(map) {
    return await this.knex('map').insert(map);
  }

  // Read a map record by ID
  async getMapById(id) {
    return await this.knex('mpa').where({ id }).first();
  }

  // Update a map record by ID
  async updateMap(id, updates) {
    return await this.knex('map').where({ id }).update(updates);
  }

  // Delete a map record by ID
  async deleteMap(id) {
    return await this.knex('map').where({ id }).del();
  }
}
