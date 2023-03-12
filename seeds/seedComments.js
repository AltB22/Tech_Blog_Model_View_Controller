const { Comment } = require('../models')

const commentData = [
    {
      comment: 'Lorem ipsum and other comment nonsense.',
      user_id: 1,
      blog_id: 1,
    },
    {
      comment: 'Lorem ipsum and other comment nonsense.',
      user_id: 1,
      blog_id: 2,
    },
  ];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;