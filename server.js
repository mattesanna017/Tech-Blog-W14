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


// Import the custom helper methods
const helpers = require('./utils/helpers');
// Incorporate the custom helper methods
const hbs = exphbs.create({ helpers });


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
