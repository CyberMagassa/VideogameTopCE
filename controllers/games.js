const Game = require('../models/game');

module.exports = {
  new: newGame,
  create,
  index,
  show,
  edit,
  update,
};

async function update(req, res) {
  try {
    const outNow = req.body.outNow === 'on'; // Convert value to boolean
    req.body.outNow = outNow;
    await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/games');
  } catch (err) {
    res.redirect(`/games/${req.params.id}/edit?errorMsg=${encodeURIComponent(err.message)}`);
  }
}


async function edit(req, res) {
  try {
    const game = await Game.findById(req.params.id);
    res.render('games/edit', { game: game }); // Pass 'game' as an object property
  } catch (err) {
    res.render('games', { errorMsg: err.message });
  }
}

async function show(req, res) {
  try {
    const game = await Game.findById(req.params.id);
    res.render('games/show', { game });
  } catch (err) {
    res.render('games', { errorMsg: err.message });
  }
}

async function index(req, res) {
  try {
    const games = await Game.find({});
    res.render('games/index', { games: games });
  } catch (err) {
    res.render('games/index', { errorMsg: err.message });
  }
}


function newGame(req, res) {
  res.render('games/new', { errorMsg: '' });
}

async function create(req, res) {
  req.body.outNow = !!req.body.outNow; // Convert outNow checkbox value to boolean
  try {
    await Game.create(req.body);
    res.redirect('/games');
  } catch (err) {
    res.render('games/new', { errorMsg: err.message });
  }
}
