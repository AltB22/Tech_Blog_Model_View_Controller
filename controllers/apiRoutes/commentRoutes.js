//api routes should be for creation of data typ post, put, delete
const router = require("express").Router();
const userAuth = require("../../utils/userAuth");

const { User, Blog, Comment } = require("../../models");


  // Create new blog post route
router.post("/newcomment", userAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment: req.body.comment,
            // user_id: req.body.user_id,
        });
        req.session.save(() => {
            req.session.id = newComment.id;
            req.session.comment = newComment.comment;
            req.session.user_id = newComment.user_id;
			req.session.blog_id = newComment.blog_id;

			res.status(200).json(newComment);
    });  
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

// Update comment by ID
router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Comment.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(updatedComment => {
      if(!updatedComment) {
        res.status(404).json({message: 'No comment found matching this id'});
        return;
      }
      res.json(updatedComment);
    });
  });


// Delete comment by ID
router.delete("/:id", async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
              id: req.params.id,
            },
          });
      
          if (!deleteComment) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
          }
      
          res.status(200).json(deleteComment);
        } catch (err) {
          res.status(500).json(err);
        }
});



module.exports = router;