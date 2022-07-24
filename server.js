// Dependencies
const path = require('path');
const express = require('express');

// Import express-session
const session = require('express-session');

// Import express-handlebars
const exphbs = require('express-handlebars');

//Set up Routes
const routes = require('./controllers');

// Import the custom helper methods
const helpers = require('./utils/helpers');

// Set up sequalize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Connection Details 
const mysql = require('mysql');
const connection = mysql.createConnection( {
  host: 'eu-cdbr-west-03.cleardb.net',
  user: 'bece72ddb9df0f',
  password: 'cb136536',
  database : 'heroku_e61068493f801ce'
})

// Incorporate the custom helper methods
const hbs = exphbs.create({ helpers });

// Set up sessions and cookies
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
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`))
});
 












