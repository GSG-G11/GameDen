const express = require('express');
const { getAllGames } = require('../../controllers');
const { authenticateToken } = require('../../middleware');

const game = express.Router();

game.get('/api/games', authenticateToken, getAllGames);

module.exports = game;
