const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");



//Sign up post route
router.post("/signup", async (req, res) => {
    try {
        const newUser = await User.create({
            user_name: req.body.user_name,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.id = newUser.id;
            req.session.user_name = newUser.user_name;
			req.session.loggedIn = true;

			res.status(200).json(newUser);
    });  
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

//Login post route - ****** needs resolving

router.post("/login", async (req, res) => {

    try {
      const user = await User.findOne({
        where:{
          user_name: req.body.user_name,
        }
      });
        
    if (!user){
      res.status(400).json({ message: 'Unable to login. Please enter a valid username' })
      return;
    }

    const valPassword = user.checkPassword(req.body.password);
          
    if (!valPassword){
      res.status(400).json({ message: 'Unable to login. Please enter a valid password' })
      return;
    }

        req.session.save(() => {
            req.session.id = user.id;
            req.session.user_name = user.user_name;
			      req.session.loggedIn = true;

			res.status(200).json( 'Login Successul. Welcome.');
    });  
} catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Unable to login. Please enter a valid username and password'});
}
});



module.exports = router;