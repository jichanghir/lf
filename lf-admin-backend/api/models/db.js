const mongoose = require('mongoose');
const config = require('../config.json');

// Use native promises
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`, {useMongoClient: true})
.catch((e) => console.log(e));
const db = mongoose.connection;

// Check connection
db.on('connected', () => {
    console.log(`Mongoose connection open  on mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
});

// Check for Db errors
db.on('error', (err) => console.log(err));

// Check for disconected
db.on('disconnected', () => {
    console.log('mongoose connection disconnected')
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('mongoose connection closed throw app terminatatnio');
        process.exit(0);
    });
});
