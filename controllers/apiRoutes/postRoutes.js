const router = require("express").Router();
const { User, Blog } = require("../../models");


router.get('/', async (req, res) => {
    // find all posts
    // be sure to include its associated comments
    try {
      const categoryData = await Category.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


router.post("/blog", async (req, res) => {
    try {
        const blogPost = await Blog.create({
            title: req.body.user_name,
            blog_post: req.body.password,
        });
        req.session.save(() => {
			req.session.loggedIn = true;

			res.status(200).json(blogPost);
    });  
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

module.exports = router;