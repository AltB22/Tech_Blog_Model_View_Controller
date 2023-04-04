//front end routes typically get routes
const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
// const sequelize = require('sequelize');
const userAuth = require("../utils/userAuth");

// Find all blog posts for the user who is logged in need authenication
router.get('/', userAuth, async (req, res) => {
    // find all posts
    // include its associated user name and comments
    try {
      const blogPosts = await Blog.findAll({
        include: [{ model: User, Comment }],
        
        // // exclude:  
      });
      res.render('dashboard', { blogPosts });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//find blog post by ID
router.get('/edit/:id', async (req, res) => {//Maybe change this to findOne by blog title?
    try {
     //insert front end here and pass in specified post for editing
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // route for the new post

  //needs 


module.exports = router;