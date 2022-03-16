const connection = require('../config/connection');

module.exports = (userId, gameId) => {
  const sqlQuery = {
    text: 'INSERT INTO game_user (user_id, game_id) VALUES ($1,$2) RETURNING *;',
    values: [userId, gameId],
  };
  return connection.query(sqlQuery);
};

