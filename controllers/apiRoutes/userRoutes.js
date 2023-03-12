const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.get('/', async (req, res) => {//This route may not be needed but served as the test route in insomnia for the seed data to return...
    // find all users
    //also associated posts & comments?
    
    try {
      const userData = await User.findAll({
        attributes: {exclude: [ 'password' ]},
        include: [{ model: Comment }],
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//Sign up post route
router.post("/signup", async (req, res) => {
    try {
        const newUser = await User.create({
            user_name: req.body.user_name,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.user_name = newUser.user_name;
			req.session.loggedIn = true;

			res.status(200).json(newUser);
    });  
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

module.exports = router;