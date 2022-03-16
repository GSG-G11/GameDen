const express = require('express');
const { getAllGames, addGameToUser ,getAllGamesUser,showAllGamesUser} = require('../../controllers');
const { authenticateToken } = require('../../middleware');

const game = express.Router();

game.get('/api/games', authenticateToken, getAllGames);
game.get('/api/user/game/:gameId', authenticateToken, addGameToUser);
game.get('/api/user/games', authenticateToken, getAllGamesUser);
game.get('/user/games/show', authenticateToken, showAllGamesUser);


module.exports = game;
