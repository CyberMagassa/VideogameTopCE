const express = require('express');
const router = express.Router();

// You'll be creating this controller module next
const gamesCtrl = require('../controllers/games');
	
//Get Route for new games //
router.get('/new', gamesCtrl.new);
	

//All Routes default to games //


// POST route for games
router.post('/', gamesCtrl.create);

//Get route for games INDEX
router.get('/', gamesCtrl.index);

// Get Games route/:id

router.get('/:id', gamesCtrl.show);

// PUT /games/:id
router.put('/:id/edit', gamesCtrl.edit);




module.exports = router;
