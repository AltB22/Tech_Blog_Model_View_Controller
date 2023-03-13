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
router.get('/:id', async (req, res) => {//Maybe change this to findOne by title?
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

  // Create new blog post route
router.post("/blog", async (req, res) => {
    try {
        const newPost = await Blog.create({
            title: req.body.title,
            blog_post: req.body.blog_post,
        });
        req.session.save(() => {
            req.session.id = newPost.id;
            req.session.title = newPost.title;
            req.session.blog_post = newPost.blog_post;
			// req.session.loggedIn = true;

			res.status(200).json(newPost);
    });  
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

// Update blog post by ID
router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Blog.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(blogPost => {
      if(!blogPost) {
        res.status(404).json({message: 'No blog post found matching this id'});
        return;
      }
      res.json(blogPost);
    });
  });


// Delete post by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletePost = await Blog.destroy({
            where: {
              id: req.params.id,
            },
          });
      
          if (!deletePost) {
            res.status(404).json({ message: 'No category found with this id!' });
            return;
          }
      
          res.status(200).json(deletePost);
        } catch (err) {
          res.status(500).json(err);
        }
});



module.exports = router;