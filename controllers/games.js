const Game = require('../models/game');

module.exports = {
    new: newGame,
    create,
    index,
    show,
    edit,
    update
};

async function update(req, res) {
  try {
    await Game.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.redirect(`/games`);
  }  catch (err) {
    res.render(`/games/${req.params.id}/edit`, { errorMsg: err.message });
  }
}

async function edit(req, res) {
    try {
      const flight = await Game.findById(req.params.id);
      res.render('games/edit', { game });
    } catch (err) {
      res.render('games', { errorMsg: err.message });
    }
  }
  

async function show(req, res) {
    try {
      const game = await Game.findById(req.params.id);
      res.render('games/show', { game });
    } catch(err) {
      res.render('games', { errorMsg: err.message });
    }
  }


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
        try {
            await Game.create(req.body);
            res.redirect('/games');
     //ALways redirect after Cruding Data//
    //will refactor to redirect to games index after implementation//
} catch (err){
res.render('/new', {errorMsg: err.message});
    }
};

