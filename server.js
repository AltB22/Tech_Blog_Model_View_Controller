const path = require("path");
const express = require("express");
const session = require("express-session");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers/");
// const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");

// Create a new sequelize store using the express-session package
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;//3306 is always used by mySQL - 3000, 3001, 9090, 8080, 8001 etc...are ones to specify here

const handlebars = expressHandlebars.create();

// Configure and link a session object with the sequelize store
const sess = {
	secret: "Secret Secret",
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

//  express-session and store as Express.js middleware
app.use(session(sess));

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening to the PORT" + PORT));
});
