//* IMPORT EVERYTHING NEEDED TO CREATE SERVER
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

//* IMPORT HELPERS, CONNECTION, AND CONTROLLER
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

//* INITIALIZE APP AND ESTABLISH PORT
const app = express();
const PORT = process.env.PORT || 3001;

//* CREATE SESSION OBJECT
const sessionObj = {
  secret: process.env.DB_SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  //* CREATE SEQUELIZE STORE FOR SESSION
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//* INSTANTIATE SESSION MIDDLEWARE
app.use(session(sessionObj));

//* BRING IN HELPERS
const hbs = exphbs.create({ helpers });

//* START UP HANDLEBARS ENGINE AND INSTANTIATE VIEWS
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//* INSTANTIATE TYPICAL EXPRESS MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//* MIDDLEWARE FOR THE ROUTES
app.use(routes);

//* OPEN PORT AND OPEN SEQUELIZE COMMUNICATION
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
