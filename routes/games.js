const express = require('express');
const router = express.Router();

// You'll be creating this controller module next
const gamesCtrl = require('../controllers/games');
	
// GET /games/new
router.get('/new', gamesCtrl.new);
	


//All Routes default to /games //



// POST route for /movies
router.post('/', gamesCtrl.create);

//Get route for /movies INDEX
router.get('/', gamesCtrl.index);


module.exports = router;
