const pgp = require('pg-promise')();
// insert your own db info below
const opts = {
  database: 'afthaTeam',
  user: 'aftha05',
  password: 'afthaprogram'
};

const db = pgp(opts);


module.exports = {
  pgp,
  db,
};