const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

//Shortcut to mongoose.connection//

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`connected to MongoDB ${db.name} at ${db.host}:${db.port} `)
});