const router = require("express").Router();
const { User, Blog } = require("../../models");


router.get('/', async (req, res) => {
    // find all posts
    // include its associated user name and comments
    try {
      const blogPosts = await Blog.findAll({
        include: [{ model: User }],
      });
      res.status(200).json(blogPosts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//find blog post by primary key
router.get('/:id', async (req, res) => {//Is this needed?
    // find one user by their `id` value
    try {
      const blogPost = await Blog.findByPk(req.params.id, {
        include: [{ model: User }],
      });
  
      if (!blogPost) {
        res.status(404).json({ message: 'No blog found with that id!' });
        return;
      }
  
      res.status(200).json(blogPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;