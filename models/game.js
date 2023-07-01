const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema= new Schema({
title: String,
releaseYear: Number,
ESRB: String,
devTeam: String,
consoleExclusive: Boolean,
console: String,
outNow: Boolean
});

module.exports = mongoose.model('Game', gameSchema);

