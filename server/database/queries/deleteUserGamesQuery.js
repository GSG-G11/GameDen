const connection = require('../config/connection');

const deleteUserGamesQuery = (gameId) => {
  const sql = {
    text: 'DELETE FROM game_user WHERE game_id = $1;',
    values: [gameId],
  };
  return connection.query(sql);
};

module.exports = deleteUserGamesQuery;