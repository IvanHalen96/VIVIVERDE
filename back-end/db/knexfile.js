import Knex from 'knex';
import * as config from './database.js';
const instance = Knex(config);
module.exports = instance;
