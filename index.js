const express = require('express');
const app = express();
const { port, dbURI } = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const morgan = require('morgan');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });

const routes = require('./config/routes');

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
