const Game = require('../models/game');

module.exports ={
    new: newGame,
    create,
    index
};

function index(req, res){
    res.render(`games/index`, {
        games: Game.getAll()
    });
};
function newMovie(req, res){
    res.render('games/new', { errorMsg: ''});
};

async function create(req, res) {
// convert nowShowing's checkbox of nothing or ''on'' to boolean //
req.body.nowShowing = !!req.body.nowShowing;
//remove any white space at start and end of cast//
req.body.cast = req.body.cast.trim();
//split cast into an array if it's not an empty string//
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
        try {
            await Movie.create(req.body);
            res.redirect('/games');
     //ALways redirect after Cruding Data//
    //will refactor to redirect to movies index after implementation//
} catch (err){
res.render('games/new', {errorMsg: err.message});
    }
};
