const Knex = require('knex')
const config = require('./database.js');
const instance = Knex(config);
module.exports = instance;
