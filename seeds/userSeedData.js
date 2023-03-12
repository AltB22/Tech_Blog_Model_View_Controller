const { User } = require('../models')

const userData = [
    {
      user_name: 'Billy',
      password: 'password12345'
    },
    {
      user_name: 'Jimmy',
      password: 'password23456'
    },
  ];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;