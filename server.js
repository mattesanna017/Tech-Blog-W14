// Dependencies
const path = require('path');
const express = require('express');

// Import express-handlebars
const exphbs = require('express-handlebars');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;


//Set up Routes
const routes = require('./controllers');


// Set up sequalize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import the custom helper methods
const helpers = require('./utils/helpers');
// Incorporate the custom helper methods
const hbs = exphbs.create({ helpers });


// Import express-session
const session = require('express-session');
// Set up sessions
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));


// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

  

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
