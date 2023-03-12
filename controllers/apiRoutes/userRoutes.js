const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.get('/', async (req, res) => {
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
  


router.post("/signup", async (req, res) => {
    try {
        const userInput = await User.create({
            user_name: req.body.user_name,
            password: req.body.password,
        });
        req.session.save(() => {
			req.session.loggedIn = true;

			res.status(200).json(userInput);
    });  
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

module.exports = router;