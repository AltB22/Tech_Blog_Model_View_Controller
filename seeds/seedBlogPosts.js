const { Post } = require('../models')

const blogData = [
    {
      title: 'My first blog post',
      blog_post: 'Lorem ipsum and other nonsense.',
      user_id: 1,
    },
    {
      title: 'My second blog post',
      blog_post: 'Lorem ipsum and other nonsense.',
      user_id: 1,
    },
  
  ];

const userSeeds = () => Post.bulkCreate(blogData);

module.exports = userSeeds;