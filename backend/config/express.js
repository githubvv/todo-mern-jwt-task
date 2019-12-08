const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    routes = require('../routes/routes');

module.exports.init = () => {
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();
    app.use(cors());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    routes(app);
    return app
};

