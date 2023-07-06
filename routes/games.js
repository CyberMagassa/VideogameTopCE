const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games');

// Get route for new games
router.get('/new', gamesCtrl.new);

// Get route for editing a game
router.get('/:id/edit', gamesCtrl.edit);

// Get route for a specific game
router.get('/:id', gamesCtrl.show);

// Get route for games index
router.get('/', gamesCtrl.index);

// POST route for creating a new game
router.post('/', gamesCtrl.create);

// PUT route for updating a game
router.put('/:id', gamesCtrl.update);

// DELETE route for deleting a game
router.delete('/:id', gamesCtrl.delete);


module.exports = router;
