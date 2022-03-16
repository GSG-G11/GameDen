const connection = require('../config/connection');

const getAllGamesUserQuery = (userId) => {
  const sql = {
    text: 'SELECT DISTINCT g.id  as game_id , g.game_name, g.image, g.description, g.game_url FROM games g JOIN game_user gu on g.id = gu.game_id JOIN users u on u.id = gu.user_id WHERE u.id=$1;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getAllGamesUserQuery;
