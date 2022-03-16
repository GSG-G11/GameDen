const connection = require('../config/connection');

module.exports = (userName, email, password) => {
  const sqlQuery = {
    text: 'INSERT INTO users (user_name,email,password) VALUES ($1,$2,$3) RETURNING *;',
    values: [userName, email, password],
  };
  return connection.query(sqlQuery);
};
