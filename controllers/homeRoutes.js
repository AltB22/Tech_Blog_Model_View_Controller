//front end routes typically get routes
const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require('../utils/userAuth');
// const sequelize = require('sequelize');

// Find all blog posts
router.get('/', async (req, res) => {
    // find all posts
    // include its associated user name and comments
    try {
      const blogPosts = await Blog.findAll({
        include: [{ model: User, Comment }],
        
        // // exclude:  
      });
      // res.status(200).json(blogPosts);
    res.render('homepage', { blogPosts, loggedIn: req.session.loggedIn
   });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//find blog post by ID
router.get('/:id', async (req, res) => {//Maybe change this to findOne by blog title?
    try {
      const blogPost = await Blog.findByPk(req.params.id, {
        include: [{ model: User }],
      });
  
      if (!blogPost) {
        res.status(404).json({ message: 'No blog post found with that id!' });
        return;
      }
  
      // res.status(200).json(blogPost);
      res.render('single-post', { blogPost, loggedIn: req.session.loggedIn });
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

 //Login GET route
router.get("/", (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  res.render('login');
});

//Sign up GET route 
router.get("/user/signup", (req, res) => {
    if(req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });

module.exports = router;