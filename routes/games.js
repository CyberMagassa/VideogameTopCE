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


module.exports = router;
