const pgp = require('pg-promise')();

const opts = {
  database: 'teammembers',
  user: 'aftha05',
  password: 'afthaprogram'
};
const opts2 = {
  database: '',
  user:  '',
  password: '',
}
const db = pgp(opts);
// const db = pgp(process.env.DATABASE_URL + "?ssl=true");

module.exports = {
  pgp,
  db,
};