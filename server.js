const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;//3306 is always used by mySQL - 3000, 3001, 9090, 8080, 8001 etc...are ones to specify here

const hbs = exphbs.create({ helpers });//Sets up handlebars.js engine with helpers


// Configures and links a session object with the sequelize store
const sess = {
	secret: 'Super secret secret',
	cookie: {
	  maxAge: 300000,
	  httpOnly: true,
	  secure: false,
	  sameSite: 'strict',
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
	  db: sequelize
	})
  };

app.use(session(sess));

app.engine("handlebars", hbs.engine);//Tells express.js which template engine to use, in this case "handlebars"
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening to the PORT" + PORT));
});
