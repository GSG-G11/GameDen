const connection = require('../config/connection');

// const checkUserQuery =

module.exports = (email) => {
  const sqlQuery = {
    text: 'SELECT COUNT(email) FROM users WHERE email = $1 ;',
    values: [email],
  };
  return connection.query(sqlQuery);
};
