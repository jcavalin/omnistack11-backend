const knex = require('knex');
const configuration = require('../../knexfile');

<<<<<<< HEAD
const env = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(env);
=======
const connection = knex(configuration.development);
>>>>>>> 8f8fdd3882a45cf059ffc8f1ba2d6f7250989c3f

module.exports = connection;