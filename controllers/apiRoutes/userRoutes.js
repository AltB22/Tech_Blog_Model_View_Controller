const router = require("express").Router();
const { User } = require("../../models");

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