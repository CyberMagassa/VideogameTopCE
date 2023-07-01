const Game = require('../models/game');

module.exports = {
    new: newGame,
    create,
    index
};




async function index(req, res){
    const game = await Game.find({})
    res.render(`games/index`, {
        games: game
    });
};


function newGame(req, res){
    res.render('games/new', { errorMsg: ''});
};



async function create(req, res) {
// convert outNow checkbox of nothing or ''on'' to boolean //
req.body.outNow = !!req.body.outNow;
//remove any white space at start and end of cast//
req.body.cast = req.body.cast.trim();
//split cast into an array if it's not an empty string//
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
        try {
            await Game.create(req.body);
            res.redirect('/games');
     //ALways redirect after Cruding Data//
    //will refactor to redirect to games index after implementation//
} catch (err){
res.render('/new', {errorMsg: err.message});
    }
};
