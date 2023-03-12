const { Blog } = require('../models')

const blogData = [
    {
      id: 1,
      title: 'My first blog post',
      blog_post: 'Lorem ipsum and other nonsense.',
      user_id: 1,
    },
    {
      id: 2,
      title: 'My second blog post',
      blog_post: 'Lorem ipsum and other nonsense.',
      user_id: 1,
    },
  
  ];

const userSeeds = () => Blog.bulkCreate(blogData);

module.exports = userSeeds;