const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

// router.get('/', async (req, res) => {//This route may not be needed but served as the test route in insomnia for the seed data to return...
//     // find all users
//     //also associated posts & comments?
    
//     try {
//       const userData = await User.findAll();
//       res.status(200).json(userData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  // router.get('/:id', async (req, res) => {//Is this needed?
  //   // find one user by their `id` value
  //   try {
  //     const userData = await User.findByPk(req.params.id, {
  //       include: [{ model: Blog }],
  //     });
  
  //     if (!userData) {
  //       res.status(404).json({ message: 'No user found with that id!' });
  //       return;
  //     }
  
  //     res.status(200).json(userData);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

router.get("/login", (req, res) => {
    if(req.session.loggedIn) {
      res.redirect('back');
      return;
    }
    res.render('login');
  });

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
      res.status(400).json({ message: 'Unable to login. Please enter a valid username '})
      return;
    }

    const valPassword = user.checkPassword(req.body.password);
          
    if (!valPassword){
      res.status(400).json({ message: 'Unable to login. Please enter a valid password'})
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