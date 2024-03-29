// function for checking to see if a user is logged in.
const userAuth = (req, res, next) => {
	if (!req.session.loggedIn) {
		res.redirect("/login");
	} else {
		next();
	}
};

module.exports = userAuth;